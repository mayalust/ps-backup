define(["../services/services.js"],function(n){"use strict";n.factory("nodeService",["serviceProxy","$http",function(n,r){var u="/api/node/",c=window.location.hostname,f=8081;function e(n,t,e,i){var o="http://"+c+":"+f+u+n;"function"==typeof t&&(e=t,t=null),t=JSON.stringify(t),r.post(o,t).then(function(n){200==n.status&&e(n.data)})}function t(){return new t.init}return function(n,t){for(var e in t)n[e]=t[e]}((t.init=function(){}).prototype,{login:function(n,t){e("login",n,t)},getAllUnits:function(n){e("getAllUnits",n)},queryDomainTree:function(n){e("queryDomainTree",n)},getCurrentUser:function(n){e("getCurrentUser",n)}}),t}])});
//# sourceMappingURL=../../map/js/services/node-service.js.map