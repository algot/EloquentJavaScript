function primitiveMultiple(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplificatorUnitFailure("Klunk");
    }
}

class MultiplificatorUnitFailure extends Error {}

function reliableMultiply(a, b) {
    for (;;) {
        try {
            return primitiveMultiple(a, b);
        } catch (e) {
            if (!(e instanceof MultiplificatorUnitFailure))
                throw e;
        }
    }
}

console.log(reliableMultiply(8, 8));