define(["../services/services.js"],function(n){"use strict";n.factory("Info",["$http",function(n){var c={get:function(t,e){c[t]?e(c[t]):n.get(t).success(function(n){c[t]=n,e(n)}).error(function(n){e(null)})}};return c}])});
//# sourceMappingURL=../../map/js/services/localdb-service.js.map
