const request = require('supertest');
var app = require('./server').app;

it('should return Hello World!', (done) => {
    request(app)
        .get('/')
        // .expect('Hello World!')
        .expect(404)
        .expect( {
            error:'Page not found'
        })
        .end(done);
});