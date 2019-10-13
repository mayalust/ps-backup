define([],function(){return function(n){var e=n.element,t=(n.global,n.target);n.route;e.style&&t.css(e.style);var r=$("<div></div>"),a=$("<span></span>"),c=$("<br />");return require(["clock"],function(n){var e=new n;e.start(),e.on("change",function(n){a.text(n)})}),r.append(a),r.append(c),r}});
//# sourceMappingURL=../../map/toolkit/component/timeInfo.js.map
