var express = require("./_express");
var app = express();
app.post("/api/node/getAllUnits", function(service,response){
  var request = service.post('unitService/getAllUnits', null, cookie);
  request.then(function (d) {
    response(d);
  }).catch(function (e) {
    response(e);
  })
});