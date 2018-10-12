var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey it worked');
        reject('Unable to fulfill promise');
    }, 3000);
});

somePromise.then((message) => {
    console.log('success: ', message);
}, (errorMessage => {
    console.log('Error: ', errorMessage)
}));