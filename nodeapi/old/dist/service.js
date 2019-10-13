var global = require("./_global");
var cookie = require("./_cookie");
var files = require("../../../files.js");
var http = require("http");
var qs = require('querystring');
var factory = require('../../../js/services/services');
var loc = address(factory.host);
var _HOST = loc('hostname');
var _PORT = loc('port');
function address(host){
  var arr = host.split(":");
  var hostname = arr[0];
  var port = arr[1] || "80"
  return function(str){
    if(str == 'hostname'){
      return hostname;
    } else if(str == 'port'){
      return port;
    }
  }
}
function isObjectLike(str){
  var regExp = new RegExp("^\\{.*\\}$");
  return regExp.test(str);
}
function extend(a, b){
  for(var i in b){
    a[i] = b[i];
  }
}
function requestData(){
  return new requestData.init();
}
requestData.init = function(){}
function request(mehtod, path, params){
  return new Promise(function(resolve, reject){
    var METHODS = {
      post : "POST",
      get : "GET"
    }
    var options = {
      hostname: _HOST,
      port: _PORT,
      path: path,
      method: METHODS[mehtod],
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };
    var req = http.request(options, function(res){
      var data = "";
      res.on('data', function(d) {
        data += d.toString();
      });
      res.on('end', function(d) {
        if(isObjectLike(data)){
          var json = JSON.parse(data);
          if(json.code == 0){
            resolve(json);
          } else {
            reject(json)
          }
        } else {
          reject({
            code : 999,
            data : data
          });
        }
      });
    });
    req.on('error', function(e){
      reject(e);
    });
    if(typeof params == "object"){
      req.write(JSON.stringify(params));
    } else if(typeof params == "string"){
      req.write(params);
    } else if(typeof params == "number"){
      req.write(params + "");
    };
    req.end();
  })
}
function get(path, params){
  return request("get", path, params);
}
function post(path, params){
  return request("post", path, params);
}
extend(requestData.init.prototype, {
  "post" : post,
  "get" : get,
  "request" : request
});
module.exports = requestData;