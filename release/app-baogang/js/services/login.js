angular.module("myApp.services").factory("userList",["$http","$q","API",function(t,n,u){return{getList:function(e){var r=n.defer();return t({method:"GET",url:u.user}).then(function(e){r.resolve(e)},function(e){r.resolve(e)}),r.promise}}}]);
//# sourceMappingURL=../../../map/app-baogang/js/services/login.js.map
