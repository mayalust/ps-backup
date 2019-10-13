var serv = require("./service");
var express = require("express");
var global = require("./_global");
var cookieObj = require("./_cookie")
var app = express();
function extend(a, b){
  for(var i in b){
    a[i] = b[i];
  }
}
function _express(){
  return new _express.init()
};
function toString(obj){
  if(typeof obj == "object"){
    return JSON.stringify(obj)
  } else if(typeof obj == "string"){
    return obj;
  } else if(typeof obj == "number"){
    return obj + "";
  } else {
    return "";
  }
}
_express.init = function(){};
function request(method, path, callback, error){
  if(typeof path != "string"){
    throw new Error("path不为字符串")
  }
  if(typeof callback != "function"){
    throw new Error("callback回调函数没有设置")
  }
  var req = app[method];
  app[method](path, function(req,response){
    var service = serv();
    var requestData = "";
    function resp(d){
      response.header("Access-Control-Allow-Origin", "*");
      response.header("Access-Control-Allow-Credentials", true);
      response.end(toString(d));
    }
    function requestFn(_method, url, params, callback, error){
      if(typeof params == "function"){
        error = callback;
        callback = params;
        params = null;
      }

      var r = service.request(_method, url, params);
      r.then(function(d){
        if(typeof callback == "function"){
          callback(d);
        }
      }).catch(function(e){
        if(typeof callback == "function"){
          callback(e);
        }
      });
    }
    req.on("data", function(d){
      requestData += d;
    });
    req.on("end",function(){
      callback(req, requestFn, resp);
    });
    req.on("error", function(e){
      if(typeof error == "function"){
        error(e, resp);
      }
    })
  })
}
function get(path, callback, error){
  request("get", path, callback, error)
}
function post(path, callback, error){
  request("post", path, callback, error)
}
extend(_express.init.prototype, {
  get : get,
  post : post,
  request : request
})
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(port);
});
module.exports = _express;