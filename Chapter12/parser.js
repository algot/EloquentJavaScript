function parseExpression(program) {
    program = skipSpace(program);
    let match, expr;
    const stringRegExp = /^"([^"]*)"/;
    const numberRegExp = /^\d+\b/;
    const wordRegExp = /^[^\s(),#"]+/;

    if (match = stringRegExp.exec(program)) {
        expr = {
            type: "value",
            value: match[1]
        };
    } else if (match = numberRegExp.exec(program)) {
        expr = {
            type: "value",
            value: Number(match[0])
        };
    } else if (match = wordRegExp.exec(program)) {
        expr = {
            type: "word",
            name: match[0]
        };
    } else {
        throw new SyntaxError("Unexpected syntax: " + program);
    }

    return parseApply(expr, program.slice(match[0].length));
}

function skipSpace(string) {
    let first = string.search(/\S/);
    if (first == -1) return "";
    return string.slice(first);
}

function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(") {
        return {
            expr: expr,
            rest: program
        };
    }

    program = skipSpace(program.slice(1));
    expr = {
        type: "apply",
        operator: expr,
        args: []
    };
    while (program[0] != ")") {
        let arg = parseExpression(program);
        expr.args.push(arg.expr);
        program = skipSpace(arg.rest);
        if (program[0] == ",") {
            program = skipSpace(program.slice(1));
        } else if (program[0] != ")") {
            throw new SyntaxError("Expected ',' or ')'");
        }
    }
    return parseApply(expr, program.slice(1));
}

function parse(program) {
    let {
        expr,
        rest
    } = parseExpression(program);
    if (skipSpace(rest).length > 0) {
        throw new SyntaxError("Unexpected text after program");
    }
    return expr;
}

const specialForms = Object.create(null);

function evaluate(expr, scope) {
    if (expr.type == "value") {
        return expr.value;
    } else if (expr.type == "word") {
        if (expr.name in scope) {
            return scope[expr.name];
        } else {
            throw new ReferenceError(
                `Undefined binding: ${expr.name}`);
        }
    } else if (expr.type == "apply") {
        let {
            operator,
            args
        } = expr;
        if (operator.type == "word" &&
            operator.name in specialForms) {
            return specialForms[operator.name](expr.args, scope);
        } else {
            let op = evaluate(operator, scope);
            if (typeof op == "function") {
                return op(...args.map(arg => evaluate(arg, scope)));
            } else {
                throw new TypeError("Applying a non-function.");
            }
        }
    }
}

specialForms.if = (args, scope) => {
    if (args.length != 3) {
        throw new SyntaxError("Wrong number of args to if");
    } else if (evaluate(args[0], scope) !== false) {
        return evaluate(args[1], scope);
    } else {
        return evaluate(args[2], scope);
    }
};

specialForms.while = (args, scope) => {
    if (args.length != 2) {
        throw new SyntaxError("Wrong number of args to while");
    }
    while (evaluate(args[0], scope) !== false) {
        evaluate(args[1], scope);
    }

    // Since undefined doesn't exist in Egg, we return false,
    // for lack of meaningful result.
    return false;
};


specialForms.do = (args, scope) => {
    let value = false;
    for (let arg of args) {
        value = evaluate(arg, scope);
    }
    return value;
};

specialForms.define = (args, scope) => {
    if (args.length != 2 || args[0].type != "word") {
        throw new SyntaxError("incorect use of define");
    }
    let value = evaluate(args[1], scope);
    scope[args[0].name] = value;
    return value;
};

specialForms.fun = (args, scope) => {
    if (!args.length) {
        throw new SyntaxError("Functions need a body");
    }
    let body = args[args.length - 1];
    let params = args.slice(0, args.length - 1).map(expr => {
        if (expr.type != "word") {
            throw new SyntaxError("Parameter names must be words");
        }
        return expr.name;
    });
    return function () {
        if (arguments.length != params.length) {
            throw new TypeError("Wrong number of arguments");
        }
        let localScope = Object.create(scope);
        for (let i = 0; i < arguments.length; i++) {
            localScope[params[i]] = arguments[i];
        }
        return evaluate(body, localScope);
    };
};

specialForms.set = (args, env) => {
    if (args.length != 2 || args[0].type != "word") {
        throw new SyntaxError("Bad use of set");
    }
    let varName = args[0].name;
    let value = evaluate(args[1], env);

    for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
        if (Object.prototype.hasOwnProperty.call(scope, varName)) {
            scope[varName] = value;
            return value;
        }
    }
    throw new ReferenceError(`Setting undefined variable ${varName}`);
};

console.log(parse("+(a, 10)"));

const topScope = Object.create(null);

topScope.true = true;
topScope.false = false;


let prog = parse(`if(true, false, true)`);
console.log(evaluate(prog, topScope));

for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
    topScope[op] = Function("a, b", `return a ${op} b;`);
}

topScope.print = value => {
    console.log(value);
    return value;
};

topScope.array = (...values) => values;
topScope.length = array => array.length;
topScope.element = (array, i) => array[i];

function run(program) {
    return evaluate(parse(program), Object.create(topScope));
}

run(`
do(define(total, 0),
    define(count, 1),
    while(<(count, 11),
        do(define(total, +(total, count)),
            define(count, +(count, 1)))),
    print(total))
    `);

run(`
do(define(plusOne, fun(a, +(a, 1))),
    print(plusOne(10)))
`);

run(`
do(define(pow, fun(base, exp,
        if(==(exp, 0),
            1,
            *(base, pow(base, -(exp, 1)))))),
    print(pow(2, 10)))
`);

run(`
do(define(sum, fun(array,
        do(define(i, 0),
            define(sum, 0),
            while(<(i, length(array)),
                do(define(sum, +(sum, element(array, i))),
                    define(i, +(i, 1)))),
                sum))),
            print(sum(array(1, 2, 3))))
`);

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);

run(`set(quux, true)`);