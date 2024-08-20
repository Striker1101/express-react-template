const request = require("supertest");
const app = require("../app"); // Path to your Express app

describe("GET /", function () {
  it("responds with Hello World", function (done) {
    request(app).get("/").expect("Content-Type", /text/).expect(200, done);
  });
});
