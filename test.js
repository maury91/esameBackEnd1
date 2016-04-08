var supertest = require('supertest');
var lint = require('mocha-eslint');
require('babel-register');

var app = require('./server').app;

var agent = supertest.agent(app);

// Array of paths to lint
// Note: a seperate Mocha test will be run for each path and each file which
// matches a glob pattern
const paths = [
	'server'
];

// Specify style of output
const options = {};
options.formatter = 'compact';

// Only display warnings if a test is failing
options.alwaysWarn = false; // Defaults to true, always show warnings

// Increase the timeout of the test if linting takes to long
options.timeout = 5000; // Defaults to the global mocha timeout option

// Run the tests
lint(paths, options);

describe('Testing login',() => {

    it('Should return 401 if I try to login using an account that don\'t exists', ( done ) => {
        agent
            .post('/login')
            .send({
                user    : 'maury91',
                password: 'random'
            })
            .expect(401,done);
    });

    it('Should return 401 if I try to login using a wrong password', ( done ) => {
        agent
            .post('/login')
            .send({
                user    : 'admin',
                password: 'random'
            })
            .expect(401,done);
    });

    it('Should return 200 if I try to login using the correct password', ( done ) => {
        agent
            .post('/login')
            .send({
                user    : 'admin',
                password: 'admin'
            })
            .expect(200,done);
    });

    it('Should return 201 if I register a new account', ( done ) => {
        agent
            .post('/user')
            .send({
                user        : 'maury91',
                password    : 'random',
                email        : 'maury91@gmail.com',
                firstname    : 'Maurizio',
                lastname    : 'Carboni'
            })
            .expect(201,done);
    });

    it('Should return 200 if I try to login with the new user', ( done ) => {
        agent
            .post('/login')
            .send({
                user    : 'maury91',
                password: 'random'
            })
            .expect(200,done);
    });

});
