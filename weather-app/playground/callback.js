// The setTimeout function definition looks like this:
// var getUser = (callback, delay) => {

// };
// It has a callback and a delay. You take the callback, and after a certain amount of time passes, you call it. In our case, though, we'll switch the order with an id first and the callback second.

//callback is what we will call later once we receive data, in this case the id
    
var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vikram'
    };
    setTimeout( () => {
        callback(user);
    }, 3000);
    
};

getUser(31, (userObject) => { 
    console.log(userObject);
});