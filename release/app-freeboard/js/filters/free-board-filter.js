define(["filters/filters"],function(n){"use strict";n.filter("percent",function(){return function(n){return parseInt(n),parseInt(n)+"%"}}),n.filter("getunit",function(){return function(n){var r=[{label:"所有单位",value:""}];for(var t in n){var e=n[t].unit;r.find(function(n){return n.value==e})||r.push({label:e,value:e})}return r}}),n.filter("unitfilter",function(){return function(n,r){var t=[];for(var e in n)""!=r&&null!=r&&null!=r&&r!=n[e].unit||t.push(n[e]);return t}}),n.filter("anchorFilter",function(){return function(n,r){return n.filter(function(n){return!r||n.value!=r.value||!r.applied})}})});
//# sourceMappingURL=../../../map/app-freeboard/js/filters/free-board-filter.js.map
