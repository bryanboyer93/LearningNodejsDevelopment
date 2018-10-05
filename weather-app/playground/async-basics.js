// sync
console.log('Starting app');

// setTimeout (funtion,millisecondsToWait);
// we are not telling it to wait two seconds
// we are registering a callback that will get fired in two seconds
// node can do other things while these two seconds are happening
setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(()=> {
    console.log('Second setTimeout ');
},0)

console.log('Finishing up');

