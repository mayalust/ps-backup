(function(global, factory){
  if(typeof define == "function" && typeof require == "function"){
    define(['../services/services.js'], factory)
  } else {
    if(global == window){
      global.wSocket = factory();
    }
  }
})(this, function(services){
  'use strict';
  function context($timeout, growl,serviceProxy){
    var ws, connections = {}, connected, wsURL = (function(protocol, host){
      protocol = protocol || "ws:"
      if(host){
        return protocol + "//" + host + "/websocket/message"
      } else {
        return "wss://192.168.1.121/websocket/message"
      }
    })(serviceProxy.protocol, serviceProxy.host);
    function extend(a,b){
      for(var i in b){
        a[i] = b[i];
      }
    }
    function toJSON(str){
      var objLike = new RegExp("^\\{.*\\}$", "g");
      if(objLike.test(str)){
        return JSON.parse(str);
      } else {
        return null;
      }
    }
    function init(url){
      wsURL = url || wsURL;
      ws = new WebSocket(wsURL);
      connected = new Promise(function(resolve, reject){
        ws.onopen = function(evnt){
          connected = undefined;
          resolve("success");
        }
      });
      ws.onmessage = function(evnt) {
        var d = toJSON(evnt.data);
        var uuid = d.uuid;
        var ci = d.nodeId;
        var kpi = d.kpiCode;
        var data = d.data;
        for(var i in connections[uuid]){
          var cb = connections[uuid][i];
          cb(data);
        }
      };
      ws.onclose = function(event) {
         
      };
      ws.onerror = function(evnt) {
         
      };
    }
    function wSocket(url){
      return new wSocket.init(url);
    }
    function register(uuid, params){
      var webSocketVo = {
        uuid : uuid,
        operation : "register",
        type : "kpi",
        param : params
      }
      ws.send(JSON.stringify(webSocketVo))
    }
    function unregister(uuid){
      var webSocketVo = {
        uuid : uuid,
        operation : "unRegister"
      }
      ws.send(JSON.stringify(webSocketVo))
    }
    function getId(e){
      if(typeof e == "object"){
        return e.id;
      } else {
        return e;
      }
    }
    function connect(uuid, ci, kpi, callback){
      var conn = connections[uuid] = connections[uuid] || [];
      conn.push(callback);
      var params = {
        ciid: ci.map(getId).toString(),
        kpi: kpi.map(getId).toString()
      };
      if(typeof connected == "object"){
        connected.then(function(){
          register(uuid, params);
        })
      } else {
        register(uuid, params);
      }
    }
    function disconnect(uuid){
      for(var i in connections[uuid]){
        delete connections[uuid][i];
      }
      delete connections[uuid];
      if(typeof connected == "object"){
        connected.then(function(){
          unregister(uuid);
        })
      } else {
        unregister(uuid);
      }
    }
    wSocket.init = init;
    extend(init.prototype, {
      connect : connect,
      disconnect : disconnect
    });
    return wSocket;
  }
  if(services){
    services.service('SwSocketBaogang', ['$timeout', 'growl','serviceProxy', context])
  } else {
    return context(setTimeout, null, {
      protocol : "ws:",
      host : "localhost:8082"
    })
  };
})