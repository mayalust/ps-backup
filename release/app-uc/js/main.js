require.config({urlArgs:"1565836530226",waitSeconds:0,paths:{jquery:"../../node_modules/jquery/dist/jquery.min","ui-router":"../../node_modules/angular-ui-router/release/angular-ui-router",bootstrap:"../../node_modules/bootstrap/dist/js/bootstrap.min","bootstrap-dialog":"../../node_modules/bootstrap3-dialog/dist/js/bootstrap-dialog.min",angular:"../../node_modules/angular/angular.min",iCheck:"../../node_modules/iCheck/icheck.min","angular-route":"../../node_modules/angular-route/angular-route.min","angular-resource":"../../node_modules/angular-resource/angular-resource.min","angular-animate":"../../node_modules/angular-animate/angular-animate.min","datatables.net":"../../node_modules/datatables.net/js/jquery.dataTables","datatables.net-bs":"../../node_modules/datatables.net-bs/js/dataTables.bootstrap","datatables.net-select":"../../node_modules/datatables.net-select/js/dataTables.select.min","angular-growl":"../../node_modules/angular-growl-v2/build/angular-growl.min",slimscroll:"../../node_modules/jquery-slimscroll/jquery.slimscroll.min",domReady:"../../node_modules/requirejs-domready/domReady",slick:"../../node_modules/slick-carousel/slick/slick.min","index-app":"../../toolkit/admin-lte/app",configs:"../../toolkit/configs",moment:"../../node_modules/moment/min/moment.min",locales:"../../node_modules/moment/min/locales.min",tools:"../../toolkit/tools"},shim:{angular:{exports:"angular",deps:["jquery"]},bootstrap:{deps:["jquery"]},"angular-route":{deps:["angular"]},"angular-resource":{deps:["angular"]},"angular-animate":{deps:["angular"]},"angular-growl":{deps:["angular"]},slimscroll:{deps:["jquery"]},configs:{deps:["jquery"]},tools:{deps:["jquery"]},"datatables.net":{deps:["jquery"]},"datatables.net-bs":{deps:["jquery","datatables.net"]},"datatables.net-select":{deps:["jquery","datatables.net"]},"bootstrap-dialog":{deps:["jquery","bootstrap"]},iCheck:{deps:["jquery"]},slick:{deps:["jquery","angular"]},"index-app":{deps:["slimscroll","bootstrap"]}},deps:["index-app","tools","configs"]}),require(["app","routes","../js/loader.js","controllers/controllers","../js/services/services.js","directives/directives","filters/filters"],function(i,d,u){"use strict";psrequire(["../ps-core/build/output.js|css","../ps-baogang/build/controller.config.js","../ps-baogang/build/service.js"],function(){[].slice.call(arguments).forEach(function(e){e(i)}),i.config(["$routeProvider","$locationProvider","$controllerProvider","$compileProvider","$filterProvider","$provide","$httpProvider","growlProvider",function(o,e,r,a,s,t,l,n){i.registerController=r.register,i.registerDirective=a.directive,i.registerFilter=s.register,i.registerFactory=t.factory,i.registerService=t.service,null!=d.routes&&angular.forEach(d.routes,function(e,r){o.when(r,{templateUrl:e.templateUrl,controller:e.controller,resolve:u(e.dependencies)})}),null!=d.defaultRoutePath&&o.otherwise({redirectTo:d.defaultRoutePath}),n.globalTimeToLive({success:3e3,error:5e3,warning:5e3,info:5e3}),l.defaults.withCredentials=!0,l.defaults.useXDomain=!0,delete l.defaults.headers.common["X-Requested-With"]}]),require(["domReady!"],function(e){angular.bootstrap(e,["app"])})})});
//# sourceMappingURL=../../map/app-uc/js/main.js.map
