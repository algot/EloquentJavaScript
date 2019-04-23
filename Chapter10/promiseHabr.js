const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 <= 90) {
        console.log('resolving the promise ...');
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
})

const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (error) => console.log(error);

myPromise.then(onResolved, onRejected);

myPromise.then((resolvedValue) => {
    console.log(resolvedValue);
}, (error) => {
    console.log(error);
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

delay(5000).then(() => console.log('Resolved after 5 seconds'));

delay(2000)
    .then(() => {
        console.log('Resolved after 2 seconds')
        return delay(1500);
    }).then(() => {
        console.log('Resolved after 1.5 seconds')
        return delay(3000);
    }).then(() => {
        console.log('Resolved after 3 seconds')
        throw new Error();
    }).catch(() => {
        console.log('Caught an error.');
    }).then(() => {
        console.log('Done.');
    });