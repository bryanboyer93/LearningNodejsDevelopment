// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey it worked');
//         reject('Unable to fulfill promise');
//     }, 3000);
// });

// somePromise.then((message) => {
//     console.log('success: ', message);
// }, (errorMessage => {
//     console.log('Error: ', errorMessage)
// }));

var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number')
                resolve(a + b);
            else
                reject('Arguments must be numbers');
        }, 1000)
    });
};

asyncAdd(5, 7).then(
    // resolve
    (result) => {
        console.log('Result: ', result);
        return asyncAdd(result, 33);
    },
    // reject 
    (errorMessage) => {
        console.log(errorMessage);
    }).then((result) => {
        console.log('Should be 45:', result);
        return asyncAdd(result, 5);
    }, (errorMessage) => {
        console.log(errorMessage);
    }).then((result) => {
        console.log('should be 50: ', result);
    }, (errorMessage) => {
        console.log(errorMessage);
    });

// //
// oldAsyncAdd(5, 7).then(() => {
// }, () => {

// });