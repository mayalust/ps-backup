define(["directives/directives"],function(n){"use strict";n.directive("component",["$q","$timeout",function(n,i){var o={scope:{ngModel:"="},restrict:"C",link:function(n,e,o){i(function(){var n=$(e).find(".dropBtn"),o=$(e).find(".glyphicon");n.on("click",function(n){$(e).hasClass("drop")?($(e).removeClass("drop"),o.removeClass("glyphicon-chevron-up"),o.addClass("glyphicon-chevron-down")):($(e).addClass("drop"),o.removeClass("glyphicon-chevron-down"),o.addClass("glyphicon-chevron-up"))})})}};return o}])});
//# sourceMappingURL=../../map/js/directives/free-style-dom.js.map