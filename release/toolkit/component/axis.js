define([],function(){return function(i){var a,t=$("<div></div>").addClass("box"),r=i.element,s=i.global,d=i.element.style;return $$.runExpression(r.$attr("advance/expression"),function(e){if("0"==e.code){var n=e.data;a=(a="function"==typeof n?n(i,system):n)||{}}else a={},console.error(e.message);!function(e){var n=e.$attr("on/init");d=d||{};if(r.render=function(e){t.children().remove();var n=$("<ul></ul>").addClass("timeline horizontal");d&&n.css(d);var i=function(e){var n=$("<li></li>"),i=$("<i></i>"),a=($("<h3></h3>").addClass("timeline-header no-border"),$("<span></span>").addClass("time")),t=$("<div></div>").addClass("timeline-item"),r="";if(e.time&&a.text(e.time),e.icon&&i.addClass(e.icon),0<e.disList.length)for(var s in e.disList)r+="<h3 class='timeline-header no-border' title='".concat(e.disList[s].value,"' >").concat(e.disList[s].value,"</h3>");else r="<h3 class='timeline-header no-border'>处理人:默认</h3>";return t.append(a),t.append(r),n.append(i),n.append(t),n};if(0<e.length)for(var a in e)n.append(i(e[a]));t.append(n)},n)try{n({target:r,global:s})}catch(e){}}(a)}),t}});
//# sourceMappingURL=../../map/toolkit/component/axis.js.map
