define(["angular"],function(r){var n=r.module("myapp");n.filter("subResourcefilter",function(){return function(r,n){var e,u,t=n.keyword,i=n.gatewayId;return null!=t&&""!=t||""!=i?r instanceof Array?r.filter(function(r){return!(r.resourcesArray instanceof Array)||(e=r.resourcesArray.some(function(r){return""==t||null==t||-1!=r.label.indexOf(t)}),u=r.resourcesArray.some(function(r){return!i||r.gatewayId==i}),e&&u)}):[]:r}}),n.filter("kpiDisp",function(){return function(r){var n=[];for(var e in r)1!=r[e].used&&n.push(r[e]);return n}}),n.filter("checkshow",function(){return function(r){var n=[];for(var e in r)0!=r[e].show&&n.push(r[e]);return n}}),n.filter("showOtherFilter",function(){return function(r,n){var e=[];for(var u in r)r[u].channelType!=n&&e.push(r[u]);return e}}),n.filter("resourcesfilter",function(){return function(r,n){var e=[];for(var u in r){if(r[u].label)var t=-1!=r[u].label.indexOf(n);else t=-1;(t||""==n||r[u].checked)&&e.push(r[u])}return e}})});
//# sourceMappingURL=../../../map/app-topo/js/filters/filter.js.map