define([],function(){return function(a){var n,o=a.element,r=$("<table width='100%' class='table table-hover no-margin'>");$$.runExpression(o.$attr("advance/expression"),function(r){if("0"!=r.code)throw new Error(r.message);var e=r.data;n=(n=e)||{}});var d=a.global,t=$("<thead></thead>"),i=$("<tbody></tbody>"),l={ready:"ready"};!function(n,r){var e=function(r,e){l[r]?l[r]=e:n.on(r,function(r){e({jquery:r,global:d,tools:a,ui:o})})};for(var t in r)e(t,r[t])}(r,n.$attr("on")),r.append(t).append(i);return o.render=function(r){t.children().remove(),i.children().remove();var e=$("<tr></tr>");for(var n in t.append(e),r[0])e.append($("<th>"+r[0][n].label+"</th>"));for(n in r)i.append(function(r,e){var n=$("<tr></tr>");for(var t in e)n.append($("<td>"+e[t].value+"</td>"));return n}(0,r[n]))},"function"==typeof l.ready&&l.ready({target:o,global:d,tools:a,ui:o}),r}});
//# sourceMappingURL=../../map/toolkit/component/list.js.map