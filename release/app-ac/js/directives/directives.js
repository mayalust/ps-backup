define(["angular"],function(e){"use strict";var n=e.module("directives",[]);return n.config(["$compileProvider",function(e){n.registerDirective=e.directive}]),n.initDirective=function(e,i){var r=[],t=null;t=jQuery.isArray(i)?(r=i.slice(0,i.length-1),i[i.length-1]):i,n.registerDirective(e,t),0<r.length&&(t.$inject=r)},n});
//# sourceMappingURL=../../../map/app-ac/js/directives/directives.js.map
