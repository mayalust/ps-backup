define(["app"],function(e){e(function(l){l.config(["$routeProvider","$locationProvider","$controllerProvider","$compileProvider","$filterProvider","$provide","$httpProvider","growlProvider",function(e,r,i,o,t,n,c,d){l.registerController=i.register,l.registerDirective=o.directive,l.registerFilter=t.register,l.registerFactory=n.factory,l.registerService=n.service,d.globalTimeToLive({success:3e3,error:5e3,warning:5e3,info:5e3}),c.defaults.withCredentials=!0}]),require(["domReady!"],function(e){angular.bootstrap(e,[l.name])})})});
//# sourceMappingURL=../../map/app-unit/js/config.js.map
