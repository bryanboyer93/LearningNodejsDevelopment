const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

it('should return Hello World!', (done) => {
    request(app)
        .get('/')
        // .expect('Hello World!')
        .expect(404)
        // .expect( {
        //     error:'Page not found'
        // })
        .expect((res) => {
            expect(res.body).toInclude( {
                error: 'Page not found'
            })
        })
        .end(done);
});

// test for /users
// assert 200
// assert that x user exist



describe('SERVER', () => {
    describe('#/users', () => {

    
    it('Should test that { name:\'bryan\', age:21} exists', (done) => {
        request(app)
            .get('/users')
            .expect(200)
            .expect( (res) => {
                expect(res.body[0]).toInclude( {
                    name:'bryan',
                    age:25
                });
            })
            .end(done);
    });
});
});