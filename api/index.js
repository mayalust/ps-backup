const apicall = require("./apis.js");
const FakeApi = require("./FakeApi.js");
const FakeWs = require("./FakeWs.js");

function fakeajax(app) {
  let ins = new FakeApi(app);
  let ws = new FakeWs();
  apicall(ins);
}
module.exports = fakeajax;