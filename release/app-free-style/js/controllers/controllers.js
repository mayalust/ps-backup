define(["angular"],function(r){"use strict";var t=r.module("controllers",[]);return t.config(["$controllerProvider",function(r){t.registerController=r.register}]),t.initController=function(r,e){var n=[],l=null;l=jQuery.isArray(e)?(n=e.slice(0,e.length-1),e[e.length-1]):e,t.registerController?(t.registerController(r,l),0<n.length&&(l.$inject=n)):t.controller(r,l)},t});
//# sourceMappingURL=../../../map/app-free-style/js/controllers/controllers.js.map
