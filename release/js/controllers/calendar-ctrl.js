define(["controllers/controllers"],function(n){"use strict";n.controller("CalendarCtrl",["$scope","Info",function(o,n){console.info("切换到日程管理");n.get("../localdb/info.json",function(n){o.$broadcast("CalendarStatusInit")})}])});
//# sourceMappingURL=../../map/js/controllers/calendar-ctrl.js.map
