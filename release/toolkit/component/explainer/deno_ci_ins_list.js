define(["simulate"],function(n){return function(u,n,a){var e=n.Info,o=n.nodesDes,c=n.kpisDes;n.instance,n.simulate;e.get("../localdb/simulate.json",function(){var n,t=[],r=[];for(var e in u)n=u[e],-1==r.indexOf(n.instance)&&r.push(n.instance);r=r.sort();var i=function(a){var n=function(i){var n={name:{ci:a.label,kpi:i.label},value:r.map(function(e){return u.find(function(n){return e.id==n.instance.id&&n.kpiCode==i.id&&n.nodeId==a.id})})};t.push(n)};for(var e in c)n(c[e])};for(var e in o)i(o[e]);a({getLegend:function(){return c.map(function(n){return n.label})},getxAxis:function(){return[r]},getSeries:function(){return t.map(function(n){var e={};return e.name=n.name.kpi,e.data=n.value.map(function(n){return{name:n.instance.label,value:n.value}}),e})}})})}});
//# sourceMappingURL=../../../map/toolkit/component/explainer/deno_ci_ins_list.js.map
