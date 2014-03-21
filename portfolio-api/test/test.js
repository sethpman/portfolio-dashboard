var assert = require('assert');
var supertest = require('supertest');
var api = supertest('http://localhost:3000');

describe('GET /', function() {
  it('respond with json', function(done) {
    api
      .get('/')
      .expect('Content-Type', /json/)
      .expect(function(res) {
        if (res.body.msg !== 'Hello World') throw new Error('Fail');
      })
      .expect(200, done);
  });
});