// test/server.js

var expect  = require("chai").expect;
var request = require("request");

describe("Testing GET localhost author (All authors)", function() {
    var url = "http://localhost:3000/author/";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it("returns author Array", function(done) {
      request(url, function(error, response, body) {
      expect(JSON.parse(response.body).authors).be.a('Array');
      done();
    });
  });
});

describe("Testing GET localhost author 2", function() {
    var url = "http://localhost:3000/author/2";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it("returns author id to be the same as the request", function(done) {
      request(url, function(error, response, body) {
        expect(JSON.parse(response.body).author.id).to.equal(2);
        done();
      });
    });
});

describe("Testing GET localhost author 3", function() {
    var url = "http://localhost:3000/author/3";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });  
    it("returns author id to be the same as the request", function(done) {
      request(url, function(error, response, body) {
        expect(JSON.parse(response.body).author.id).to.equal(3);
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
    it("returns author id to be the same as the request", function(done) {
      request(url, function(error, response, body) {
        expect(JSON.parse(response.body).author.id).to.equal(1);
        done();
      });
    });
    it("returns author body with Array of articles", function(done) {
      request(url, function(error, response, body) {
      expect(JSON.parse(response.body).author.Articles).be.a('Array');
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
    it("returns article slug to be the same as the request", function(done) {
      request(url, function(error, response, body) {
        expect(JSON.parse(response.body).article.slug).to.equal('moring-vinyasa-flow-routine');
        done();
      });
    });  
  });

describe("Testing GET localhost article slug introduction-to-ashtanga", function() {
    var url = "http://localhost:3000/article/introduction-to-ashtanga";
    it("returns status 200", function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(response.body).article.slug).to.equal('introduction-to-ashtanga');
        done();
      });
    });
    it("returns article slug to be the same as the request", function(done) {
      request(url, function(error, response, body) {
        expect(JSON.parse(response.body).article.slug).to.equal('introduction-to-ashtanga');
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
    it("returns article slug to be the same as the request", function(done) {
      request(url, function(error, response, body) {
        expect(JSON.parse(response.body).article.slug).to.equal('secrets-of-a-yoga-teacher');
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
    it("returns article slug to be the same as the request", function(done) {
      request(url, function(error, response, body) {
        expect(JSON.parse(response.body).article.slug).to.equal('yoga-therapy');
        done();
      });
    });  
  });
