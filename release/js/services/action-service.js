define(["../services/services.js","../../solution/action/config.js"],function(n,u){"use strict";n.factory("actionService",["serviceProxy",function(n){return{addmenu:function(n,o){var i=u[n],t="";function e(n){return"function"==typeof n?n(o):n}for(var r in i.options){var c=e(i.options[r].url),s=e(i.options[r].label);t+="<li><a role='button' href='../app-oc/index.html#/"+c+"'>"+s+"</a></li>"}return t}}}])});
//# sourceMappingURL=../../map/js/services/action-service.js.map