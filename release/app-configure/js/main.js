require.config({urlArgs:"1565836530226",waitSeconds:0,paths:{jquery:"../../node_modules/jquery/dist/jquery.min",bootstrap:"../../node_modules/bootstrap/dist/js/bootstrap.min","bootstrap-dialog":"../../node_modules/bootstrap3-dialog/dist/js/bootstrap-dialog.min",angular:"../../node_modules/angular/angular.min","angular-route":"../../node_modules/angular-route/angular-route.min","ui-router":"../../node_modules/angular-ui-router/release/angular-ui-router",moment:"../../node_modules/moment/min/moment.min",locales:"../../node_modules/moment/min/locales.min","angular-resource":"../../node_modules/angular-resource/angular-resource.min","angular-animate":"../../node_modules/angular-animate/angular-animate.min","angular-style":"../../toolkit/angular-custom/angular-style","angular-growl":"../../node_modules/angular-growl-v2/build/angular-growl.min",domReady:"../../node_modules/requirejs-domready/domReady",slimscroll:"../../node_modules/jquery-slimscroll/jquery.slimscroll.min",keyboardJS:"../../node_modules/keyboardjs/dist/keyboard","datatables.net":"../../node_modules/datatables.net/js/jquery.dataTables","datatables.net-bs":"../../node_modules/datatables.net-bs/js/dataTables.bootstrap","datatables.net-select":"../../node_modules/datatables.net-select/js/dataTables.select.min",lodash:"../../node_modules/lodash/index",backbone:"../../node_modules/backbone/backbone","jquery-ui":"../../node_modules/components-jqueryui/jquery-ui",underscore:"../../node_modules/underscore/underscore",echarts:"../../node_modules/echarts/dist/echarts.min",bmap:"../../node_modules/echarts/dist/extension/bmap.min",macarons:"../../node_modules/echarts/theme/macarons","ng-dialog":"../../node_modules/ng-dialog/js/ngDialog.min",select2:"../../node_modules/select2/dist/js/select2.min","rappid-joint":"../../toolkit/rappid/dist/rappid","bootstrap-multiselect":"../../node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect",Array:"../../toolkit/commonLib/js/lib/Array","index-app":"../../toolkit/admin-lte/app",tools:"../../toolkit/tools",baiduMap:"https://api.map.baidu.com/getscript?v=2.0&ak=eMekSXxqG1j2wLM57RFN61l8T6eB1EDx&services=",commonMethod:"../../toolkit/component/commonMethod"},shim:{angular:{exports:"angular",deps:["jquery"]},bootstrap:{deps:["jquery"]},"angular-route":{deps:["angular"]},"angular-resource":{deps:["angular"]},"angular-animate":{deps:["angular"]},"angular-growl":{deps:["angular"]},tools:{deps:["jquery","moment"]},"bootstrap-dialog":{deps:["jquery","bootstrap"]},"jquery-ui":{deps:["jquery"]},"index-app":{deps:["slimscroll","bootstrap"]},slimscroll:{deps:["jquery"]},select2:{deps:["jquery","bootstrap"]},backbone:{deps:["underscore"]},"datatables.net":{deps:["jquery"]},"datatables.net-bs":{deps:["jquery","datatables.net"]},"datatables.net-select":{deps:["jquery","datatables.net"]},"bootstrap-multiselect":{deps:["jquery","bootstrap"]},"angular-style":{deps:["angular"]},"ng-dialog":{deps:["angular"]},lodash:{exports:"_"}},deps:["index-app","tools"]}),require(["app","routes","../js/loader.js","controllers/controllers","../js/services/services.js","directives/directives","filters/filters"],function(d,u,i){"use strict";psrequire(["../ps-core/build/output.js|css","../ps-baogang/build/controller.config.js","../ps-baogang/build/service.js"],function(){[].slice.call(arguments).forEach(function(e){e(d)}),d.config(["$routeProvider","$locationProvider","$controllerProvider","$compileProvider","$filterProvider","$provide","$httpProvider","growlProvider",function(r,e,o,a,s,t,l,n){d.registerController=o.register,d.registerDirective=a.directive,d.registerFilter=s.register,d.registerFactory=t.factory,d.registerService=t.service,null!=u.routes&&angular.forEach(u.routes,function(e,o){r.when(o,{templateUrl:e.templateUrl,controller:e.controller,resolve:i(e.dependencies)})}),null!=u.defaultRoutePath&&r.otherwise({redirectTo:u.defaultRoutePath}),n.globalTimeToLive({success:3e3,error:5e3,warning:5e3,info:5e3}),l.defaults.withCredentials=!0,l.defaults.useXDomain=!0,delete l.defaults.headers.common["X-Requested-With"]}]),require(["domReady!"],function(e){angular.bootstrap(e,["app"])})})});
//# sourceMappingURL=../../map/app-configure/js/main.js.map
