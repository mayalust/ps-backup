define(['../services/services.js'], function(services) {
	'use strict';
	services.factory('nodeService', ['serviceProxy', '$http',
		function(serviceProxy, $http) {
      /** 用于调用经过NODEJS合并作为中间层的请求 */
      var base = "/api/node/";
      var host = window.location.hostname;
      var port = 8081;
      function extend(a, b){
        for(var i in b){
          a[i] = b[i];
        }
      }
      function post(method, param, callback, failure){
        var url = "http://" + host + ":" + port + base + method;
        if(typeof param == "function"){
          callback = param;
          param = null;
        }
        param = JSON.stringify(param);
        var req = $http.post(url, param);
        req.then(function(e){
          if(e.status == 200){
            callback(e.data);
          }
        });
      }
			function service(){
        return new service.init();
      }
      service.init = function(){};
      function login(params, callback){
        post("login", params, callback);
      }
      function getCurrentUser(callback){
        post("getCurrentUser", callback);
      }
      function getAllUnits(callback){
        post("getAllUnits", callback);
      }
      function queryDomainTree(callback){
        post("queryDomainTree", callback);
      }
      extend(service.init.prototype, {
        login : login,
        getAllUnits : getAllUnits,
        queryDomainTree : queryDomainTree,
        getCurrentUser : getCurrentUser
      })
			return service;
		}
	]);
});