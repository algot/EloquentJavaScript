let SCRIPTS = require('./scripts.js');

console.log(characterScript(121));
console.log(сountBy([1, 2, 3, 4, 5], n => n > 2));
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
                return code >= from && code < to;
            })) {
            return script;
        }
    }
    return null;
}

function сountBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({
                name,
                count: 1
            });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function textScripts(text) {
    let scripts = сountBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No script found";

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total) } % ${name}`;
    }).join(", ");
}