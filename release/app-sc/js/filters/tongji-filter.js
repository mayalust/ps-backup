define(["filters/filters"],function(e){"use strict";e.filter("showdifference",function(){return function(e,r){var n=[];return e instanceof Array&&(n=e.filter(function(e){return 0==e.used})),r&&r.resource&&n.push(r.resource),n}})});
//# sourceMappingURL=../../../map/app-sc/js/filters/tongji-filter.js.map
