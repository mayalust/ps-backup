define(["simulate"],function(f){return function(u,n,e){var i=n.nodesDes,r=n.kpisDes,a=n.instance,l=n.simulate,t=(u=f("ci",i,r,a,l),function(n,r){var e=[],i=function(a){var n={ci:a,children:[]},e=function(n){return{kpi:n,value:(e=a,i=n,r=u.find(function(n){return n.kpiCode==i.id&&n.nodeId==e.id}),r?r.value:"-")};var e,i,r};for(var i in r)n.children.push(e(r[i]));return n};for(var a in n)e.push(i(n[a]));return e}(i,r)),c=function(a){var n=[],e=function(e){var n={name:e.ci.label,data:[]},i=function(n){return{name:"function"==typeof a?a({ci:e.ci.label,kpi:n.kpi.label,value:n.value}):e.ci.label+"-"+n.kpi.label,value:n.value}};for(var r in e.children)n.data.push(i(e.children[r]));return n};for(var i in t)n.push(e(t[i]));return n},o=function(r){var a=[],n=function(e){var n=function(n){return"function"==typeof r?r({ci:e.ci.label,kpi:n.kpi.label,value:n.value}):e.ci.label+"-"+n.kpi.label};for(var i in e.children)a.push(n(e.children[i]))};for(var e in t)n(t[e]);return a};e({getSeries:c,getLegend:o,data:{nodes:i,kpis:r,legend:o(),series:c()}})}});
//# sourceMappingURL=../../../map/toolkit/component/explainer/deno_ci.js.map
