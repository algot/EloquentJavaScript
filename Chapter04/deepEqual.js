function deepEqual(a, b) {
  const areBothParametersObjects = (typeof a == "object" && typeof b == "object");
  const areOneOfParametersNotNull = (a != null || b != null);

  if (areBothParametersObjects && areOneOfParametersNotNull) {
    const firstParameterKeys = Object.keys(a);
    const secondParameterKeys = Object.keys(b);

    for (var i = 0, j = 0; i < firstParameterKeys.length, j < secondParameterKeys.length; ++i, ++j) {
      var result = deepEqual(a[Object.keys(a)[i]], b[Object.keys(b)[j]]);
      if (result == false) break;
    }
    return result;
  } else {
    return (a === b);
  }
}

var obj = {
  here: {
    is: "an"
  },
  object: 2
};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {
  here: 1,
  object: 2
}));

console.log(deepEqual(obj, {
  here: {
    is: "an"
  },
  object: 2
}));