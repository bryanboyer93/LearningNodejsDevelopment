const expect = require('expect');

const utils = require('./utils');

it('Should add two numbers', () => {
    var result = utils.add(33,11);

    // Different assertions can be chained
    expect(result).toBe(44).toBeA('number');
    // if (result != 44) {
    //     throw new Error(`Expected 44 but got ${result}`);
    // }
});

it('Should square a number', () => {
    var result = utils.square(5);
    expect(result).toBe(25).toBeA('number');
});

it('Should set firstName and lastName', () => {
    var user = {
        age:25,
        location:'Indianapolis'
    };
    var result = utils.setName(user,'Bryan Boyer');
    // expect(user).toEqual(result);

    expect(result).toInclude({
        firstname:'Bryan',
        lastname:'Boyer'
    });
}); 

// it('Should expect some values', () => {
//     // expect({name:'Bryan'}).toBe({name:'Bryan'});
//     // toBe uses === and in this case it will try to check if it is the same object, which it is not.
//     // same content, different object.

//     // expect({name:'Bryan'}).toEqual({name:'Bryan'});
//     // expect ([1,2,3]).toInclude(5);
//     // expect([1,2,3]).toExclude(5);
//     // expect ({
//     //     name:'bryan',
//     //     age:25,
//     //     location:'indianapolis'
//     // }).toInclude({
//     //     age:25
//     // });
// });
it('Should Async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('Should Async square a number', (done) => {
    utils.asyncSquare(5,(square) => {
        expect(square).toBe(25).toBeA('number');
        done();
    });
});