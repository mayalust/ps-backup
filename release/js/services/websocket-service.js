define(["../services/services.js"],function(e){"use strict";e.service("SwSocket",["$timeout","growl","serviceProxy",function(t,e,o){var r=this,u=[],a=[],s=null;function c(){var e="wss://192.168.1.121/websocket/message",n="ws:";o.protocol&&(n=o.protocol),o.host&&(e=n+"//"+o.host+"/websocket/message");var i={};try{i=new WebSocket(e)}catch(e){}return i.onopen=function(e){!function(){for(;0<a.length;){var e=a.shift();1==e.isReg?r.register(e.uuid,e.operation,e.callbackFuns):0==e.isReg?r.unRegister(e.uuid):1==s.readyState&&r.send(e.uuid,e.operation,e.type,e.param)}}()},i.onmessage=function(e){d(e)},i.onclose=function(e){console.info("websocket已经关闭"),t(function(){c()},1e4)},i.onerror=function(e){console.info(s.state)},i}function d(e){var n=JSON.parse(e.data);angular.forEach(u,function(e){e.uuid===n.uuid&&e.callback(n)})}function f(e){if(1==s.readyState)s.send(JSON.stringify(e))}return s=c(),r.register=function(e,n,i){r.unregister(e);var t={operation:"register",uuid:"register"};if(t.param={uuid:e,operation:n},0==s.readyState)return t.isReg=1,t.operation=n,t.uuid=e,t.callbackFuns=i,a.push(t),"sending is delay.";u.push({uuid:e,operation:n,callback:i})},r.unregister=function(i){var e={operation:"unRegister"};if(e.uuid=i,0==s.readyState)return a.push(e),"unregister is delay.";var t=0;angular.forEach(u,function(e,n){e.uuid===i&&(t+=1,delete u[n],t-=1)}),0===t&&f(e)},r.simuSend=function(e){var n=e.interval,t=e.nodeId,o=e.kpiId,r=e.value,a=e.instance,i=(n=e.interval,function(){var e,n;for(var i in u)e=u[i],void 0,n=e.uuid,d({data:JSON.stringify({uuid:n,data:{nodeId:t,kpiCode:o,value:r,instance:a}})})});if(n){!function e(){setTimeout(function(){i(),e()},n)}()}else i()},r.send=function(e,n,i,t){var o={};return o.operation=n,o.uuid=e,o.type=i,o.param=t,0==s.readyState?(console.warn("websocket is in openning state."),a.push(o),"sending is delay."):1==s.readyState?f(o):void console.error("websocket is in closing state.")},r}])});
//# sourceMappingURL=../../map/js/services/websocket-service.js.map
