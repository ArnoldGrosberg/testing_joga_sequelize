// test/server.js

var expect  = require("chai").expect;
var request = require("request");

describe("Testing GET localhost author 2", function() {


    var url = "http://localhost:3000/";

    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });



  });


describe("Testing GET localhost author 3", function() {
    var url = "http://localhost:3000/author/2";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });  
  });

describe("Testing GET localhost author 1", function() {
    var url = "http://localhost:3000/author/1";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });  
  });

describe("Testing GET localhost article slug moring-vinyasa-flow-routine", function() {
    var url = "http://localhost:3000/article/moring-vinyasa-flow-routine";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });  
  });

describe("Testing GET localhost article slug introduction-to-ashtanga", function() {
    var url = "http://localhost:3000/article/introduction-to-ashtanga";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });  
  });

describe("Testing GET localhost article slug secrets-of-a-yoga-teacher", function() {
    var url = "http://localhost:3000/article/secrets-of-a-yoga-teacher";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });  
  });

describe("Testing GET localhost article slug yoga-therapy", function() {
    var url = "http://localhost:3000/article/yoga-therapy";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });  
  });
