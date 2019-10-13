define(["angular","commonlib"],function(e,t){var n=e.module("myapp");n.run(["$rootScope","$location","$route",function(t,e,n){t.$on("$locationChangeSuccess",function(e){t.$broadcast("locChanges")})}]),n.factory("userInfo",function(){var e={},t="";return e.setUserInfo=function(e){t=e},e.getUserInfo=function(){return t},e}),n.factory("viewsList",["getviews","$q","$route",function(e,n,t){var r,o={};return o.setviews=function(){return r},o.getviews=function(){{if(r)return{type:"Array",data:r};var t=n.defer();return e.then(function(e){r=e.data,t.resolve({type:"Promise",data:e.data})},function(e){t.reject(e)}),t.promise}},o}]),n.factory("getParams",["$route",function(e){return function(){return e.current.params}}]),n.factory("viewLoader",["getviews","$q","$route","viewsList",function(e,t,n,r){var o={};return o.getViews=function(t){e.then(function(e){t(e.data)},function(e){})},o}]),n.factory("units",["kpiDataService","$q",function(e,t){var n={},r=new t.defer;return n.getUnits=function(){return r.promise},e.getAllUnits(function(e){r.resolve(e)}),n}]),n.factory("getviews",["viewFlexService","$q",function(e,t){var n=new t.defer;return factory=n.promise,e.getAllMyViews(function(e){n.resolve(e)}),factory}]),n.factory("getSimpleDistricts",["resourceUIService","$q",function(e,t){var n=new t.defer;return factory=n.promise,e.getSimpleDistricts(function(e){n.resolve(e)}),factory}]),n.factory("deleteViews",["kpiDataService","$q",function(n,r){return function(e){var t=new r.defer;return n.deleteViews(e,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}]),n.factory("updateResource",["resourceUIService","$q",function(n,r){return function(e){var t=new r.defer;return n.updateResource(e,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}]),n.factory("getSensorChannelsByDeviceId",["resourceUIService","$q",function(n,r){return function(e){var t=new r.defer;return n.getSensorChannelsByDeviceId(e,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}]),n.factory("saveAttrs",["resourceUIService","$q",function(r,o){return function(e,t){var n=new o.defer;return r.saveAttrs(e,t,function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}]),n.factory("getResourceById",["resourceUIService","$q",function(n,r){return function(e){var t=new r.defer;return n.getResourceById(e,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}]),n.factory("saveSensorChannels",["resourceUIService","$q",function(n,r){return function(e){var t=new r.defer;return n.saveSensorChannels(e,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}]),n.factory("getModels",["graphservice","$q",function(e,t){var n=new t.defer;return factory=n.promise,e.getModels(function(e){n.resolve(e)}),factory}]),n.factory("getAllGateways",["resourceUIService","$q",function(e,t){var n=new t.defer;return factory=n.promise,e.getAllGateways(function(e){n.resolve(e)}),factory}]),n.factory("getAttrsByModelId",["resourceUIService","$q",function(n,r){return function(e){var t=new r.defer;return n.getAttrsByModelId(e,function(e){t.resolve(e)}),t.promise}}]),n.factory("getKpisByModelId",["resourceUIService","$q",function(n,r){return function(e){var t=new r.defer;return n.getKpisByModelId(e,function(e){t.resolve(e)}),t.promise}}]),n.factory("getSensorChannelsByDeviceId",["resourceUIService","$q","getAllGateways",function(n,r,e){return function(e){var t=new r.defer;return n.getSensorChannelsByDeviceId(e,function(e){t.resolve(e)}),t.promise}}]),n.factory("getEmptySensorChannels",["resourceUIService","$q","getAllGateways",function(e,n,t){return function(){var t=new n.defer;return e.getEmptySensorChannels(function(e){t.resolve(e)}),t.promise}}]),n.factory("getAllGateways",["resourceUIService","$q",function(e,t){var n=new t.defer;return factory=n.promise,e.getAllGateways(function(e){n.resolve(e)},function(e){n.reject(e)}),factory}]),n.factory("addNewGateway",["resourceUIService","$q",function(e,t){var n=new t.defer;return factory=n.promise,e.getAllGateways(function(e){n.resolve(e)},function(e){n.reject(e)}),factory}]),n.factory("registerDevice",["resourceUIService","$q",function(r,o){return function(e,t){var n=new o.defer;return r.registerDevice(e,t,function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}]),n.factory("unregisterDevice",["resourceUIService","$q",function(r,o){return function(e,t){var n=new o.defer;return r.unregisterDevice(e,t,function(e){n.resolve(e)},function(e){n.reject(e)}),n.promise}}]),n.factory("activateDevice",["resourceUIService","$q",function(n,r){return function(e){var t=new r.defer;return n.activateDevice(e,function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}}]),n.factory("addNewEquipment",["getAllGateways","registerDevice","activateDevice","$q","userInfo",function(e,u,a,t,f){return function(o,i){var c=new t.defer;return e.then(function(e){var t=e.data.filter(function(e){return"virtual"==e.type&&"active"==e.managedStatus})[0];if(t){var n=t.id,r={domainId:"",domainPath:f.getUserInfo().domainPath,externalDevId:parseInt(1e15*Math.random()),gatewayid:n,id:0,isEdit:2,label:o.label,managedStatus:"deactive",modelId:o.model.id+"",onlineStatus:"offline",operationStatus:0,values:i};u(n,r).then(function(e){a(e.data).then(function(e){c.resolve(e)},function(e){c.reject(e)})},function(e){c.reject(e)})}},function(e){c.reject(e)}),c.promise}}]),n.factory("ttt",["$timeout","$q",function(t,n){var e={test:function(){var e=n.defer();return t(function(){e.resolve("asdasd")},2e3),e.promise}};return e}]),n.factory("loginManagement",["$rootScope","userLoginUIService","$q","$location","$window","$route","userInfo","$timeout",function(n,r,o,t,i,e,c,u){var a={};t.$$host,t.$$port,t.path().split("/")[1];function f(e){e.data&&t.path("/toposhow")}function s(e){t.path("/")}return a.login=function(e){var t=e.name,n=e.password;r.login(t,n,f,function(e){})},a.logout=function(){r.logout(s)},a.back=function(){i.open("../../app-oc/index.html#/designView","_self")},a.newProf=function(){"/topology"==t.path()?i.open("index.html#/new/topology","_self"):i.open("index.html#/topology","_self")},a.openProf=function(e){i.open("index.html#/topology/"+e,"_self")},a.loginChecking_login=function(){var e=o.defer();r.user.isAuthenticated?t():n.$on("loginStatusChanged",function(e){r.user.isAuthenticated?t():i.location.href="../app-ac/index.html#/myView"});function t(){i.location.href="../app-ac/index.html#/myView"}return n.loading="没有登录",e.promise},a.loginChecking_others=function(){var e=o.defer();r.user.isAuthenticated?t():n.$on("loginStatusChanged",function(e){r.user.isAuthenticated?t():i.location.href="../app-ac/index.html#/myView"});function t(){e.resolve({status:"logined",data:r.user}),c.setUserInfo(r.user)}return n.loading="载入设计器",e.promise},a.test=function(){var e=o.defer();return u(function(){e.resolve("asdasd")},2e3),e.promise},a}])});
//# sourceMappingURL=../../../map/app-topo/js/services/service.js.map
