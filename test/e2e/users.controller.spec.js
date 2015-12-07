'use strict';

var app = require('../../app.js'); // sai dois níveis
var request = require('supertest'); // responsible to hit web requests / test HTTP requests
var chai = require('chai');
chai.use(require('chai-things'));
var expect = chai.expect;
// var chai = require('chai').should;

console.log(app);

describe('Users controller', function() {
	describe('.list - GET /users', function() {
		it('should return a jason array', function(done) {
			request(app)
				.get('/users')
				.end(function(err, res) { // quando a API te responde, o end executa esse callback
					// res.statusCode.should.be.an('array');
					console.log(res.statusCode, res.body);
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.be.an('array');
					expect(res.body)
						.all.have.property('name');
						//.to.be.a('string');
					done();
				});
		});

	});

	describe('.create - GET /users', function() {
		it('should return a status code', function(done) {
			request(app)
				.get('/users')
				.end(function(err, res) {
					console.log(res.statusCode, res.body);
					expect(res.statusCode).to.be.equal(201);
					done();
				});
		});
	});
});