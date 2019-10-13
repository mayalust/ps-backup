define(['../services/services.js', '../../solution/action/config.js'], function(services, config) {
  'use strict';
  services.factory('actionService', ['serviceProxy',
    function(serviceProxy) {
      var service = {
        addmenu : addmenu
      };
      function addmenu(name, item){
        var conf = config[name];
        var str = "";
        function getValue(val){
          if(typeof val == "function"){
            return val(item);
          } else {
            return val
          }
        }
        for(var i in conf.options){
          var url = getValue(conf.options[i].url);
          var label = getValue(conf.options[i].label);
          str += "<li><a role='button' href='../app-oc/index.html#/" + url + "'>" + label + "</a></li>";
        }
        return str;
      }
      return service;
    }
  ]);
});