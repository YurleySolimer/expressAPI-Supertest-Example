const request = require('supertest')
const app = require('../src/app')

//Testing users endpoints

describe('GET /users', () => {
    it('respond with json containing a list of all users', done => {
        request(app)
            .get('/users')
            .set('Accpet', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

describe('GET /users/:id', () => {
    it('respond with json containing a single user', done => {
        request(app)
            .get('/users/00001')
            .set('Accpet', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })

    it('respond with json "User not found" when user does no exist' , done => {
        request(app)
            .get('/users/00002')
            .set('Accpet', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404)
            .expect('"User not found"')
            .end((err) => {
                if(err) return done(err)
                done()
            })
    })
})