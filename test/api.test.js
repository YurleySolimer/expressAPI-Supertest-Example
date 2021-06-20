const request = require('supertest')
const app = require('../src/app')

//Testing users endpoints

it('respond with json containing a list of all users', done => {
    request(app)
        .get('/users')
        .set('Accpet', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done)
})