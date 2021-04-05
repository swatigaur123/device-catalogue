const request = require('supertest')
const app = require('../../server')
const req = request(app);

describe('Server APIs test', function() {
    it('get iphone API test', function(done) {
        req
        .get('/iphones')
        .expect('Content-Type', /json/)
        .expect(200, done)
    }),
    it('get watch API test', function(done) {
        req
        .get('/watches')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
});