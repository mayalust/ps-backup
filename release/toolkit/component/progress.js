define([],function(){return function(a){var c=a.element,o=a.serviceCenterService,u=$("<div></div>").addClass("progress-group"),l=$("<span></span>").addClass("progress-text"),v=$("<span></span>").addClass("progress-number"),g=$("<div></div>").addClass("progress sm"),f=$("<div></div>").addClass("progress-bar"),e=function(){c.getCiKpi(function(t,n){t=c.data.resource?c.data.resource:[],n=c.data.kpi?c.data.kpi:[];function d(a){e(a)}function i(a){e(a)}function e(a){var e,r,s,t,n,d,i,o,p={title:{},series:[{}]};e=p,c.parameters,r=a,o=c.data.applied?"bind":"manual",s=e,n=c.data.series[o],d=r,$$.runExpression(n,function(a){if("0"!=a.code)throw new Error(a.message);var e=a.data;i="function"==typeof e?e(d):e}),t=i,s.series=t,function(a){var e=a.$attr("series/0/data/0")?a.$attr("series/0/data/0"):{};switch(l.text(e.name?e.name:""),v.text(e.value?e.value+"%":""),f.css("width",e.value?e.value+"%":"0px"),f.removeClass(),!0){case 100==e.value:f.addClass("progress-bar progress-bar-aqua");break;case 90<e.value:f.addClass("progress-bar progress-bar-green");break;case 80<e.value:case 70<e.value:f.addClass("progress-bar progress-bar-yellow");break;case 60<e.value:f.addClass("progress-bar progress-bar-red");break;default:f.addClass("progress-bar progress-bar-danger")}g.append(f),u.append(l),u.append(v),u.append(g)}(p)}c.data.applied?o.units.getAll().then(function(a){a;var e=c.$attr("advance/condition")?c.$attr("advance/condition"):[],r=c.$attr("advance/getfunction")?c.$attr("advance/getfunction"):"kpiDataService.getValueList",s=c.$attr("advance/paramtype")?c.$attr("advance/paramtype"):"kpi";o.getValueListBytime(t,n,void 0,void 0,void 0,"ci",s,r,e).then(d,i)}):e({})})};return"function"==typeof c.data.defer?c.data.defer(function(){e()}):e(),c.style&&u.css(c.style),u}});
//# sourceMappingURL=../../map/toolkit/component/progress.js.map