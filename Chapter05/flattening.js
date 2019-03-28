var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flattening(arrays));

function flattening(arrays) {
    return arrays.reduce(function(flat, current) {
        return flat.concat(current);
    }, [])
}