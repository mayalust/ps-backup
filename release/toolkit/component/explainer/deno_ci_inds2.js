define(["simulate"],function(n){return function(l,n,e){var i=n.nodesDes,a=n.kpisDes,t=(n.instance,n.simulate,function(c,n){var e=[],i=function(r){var n={kpi:r,children:[]},e={};for(var i in c)for(var a in l)l[a].nodeId!=c[i].id||e[l[a].instance]||(e[l[a].instance]=[l[a].instance,c[i]]);var t=function(n){return{ci:n[1],instance:n[0],value:(e=n,i=r,a=l.find(function(n){return n.kpiCode==i.id&&n.instance==e[0]&&n.nodeId==e[1].id}),a?a.value:"-")};var e,i,a};for(var u in e)n.children.push(t(e[u]));return n};for(var a in n)e.push(i(n[a]));return e}(i,a)),r=function(r){var n=[],e=function(e){var n={name:e.kpi.label,data:[]},i=function(n){return{name:"function"==typeof r?r({ci:n.ci.label+"-"+n.instance,kpi:e.kpi.label,value:n.value}):e.kpi.label+"-"+n.ci.label+"-"+n.instance,value:n.value}};for(var a in e.children)n.data.push(i(e.children[a]));return n};for(var i in t)n.push(e(t[i]));return n},u=function(a){var r=[],n=function(e){var n=function(n){return"function"==typeof a?a({ci:n.ci.label+"-"+n.instance,kpi:e.kpi.label,value:n.value}):e.kpi.label+"-"+n.ci.label+"-"+n.instance};for(var i in e.children)r.push(n(e.children[i]))};for(var e in t)n(t[e]);return r};e({getSeries:r,getLegend:u,data:{nodes:i,kpis:a,legend:u(),series:r()}})}});
//# sourceMappingURL=../../../map/toolkit/component/explainer/deno_ci_inds2.js.map