const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('APP', () => {
    it('Should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Bryan',25);
        // expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Bryan',25);
    });

    var db = { saveUser: expect.createSpy()};
    app.__set__('db', db);

    it('Should call saveUser with user objet', () => {
        var email = 'bryan@gmail.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});