define(["angular"],function(o){var e=o.module("myapp");e.config(["$routeProvider",function(o){o.when("/",{templateUrl:"partial/login.html",controller:"loginController",resolve:{successLogin:function(o){return o.loginChecking_login()}}}).when("/topology/:mode/:flag/:solutionId/:id?",{templateUrl:"partial/topology.html",controller:"mainController",resolve:{successLogin:function(o){return o.loginChecking_others()}}}).when("/toposhow",{templateUrl:"partial/toposhow.html",controller:"toposhowController",resolve:{successLogin:function(o){return o.loginChecking_others()}}})}]),e.config(["$httpProvider",function(o){o.defaults.withCredentials=!0,o.defaults.useXDomain=!0,delete o.defaults.headers.common["X-Requested-With"]}])});
//# sourceMappingURL=../../map/app-topo/js/config.js.map
