define([],function(){return function(n,r,e){var a,i,f=r.nodesDes,t=r.kpisDes,u=r.format,o=r.frequency,p=function(n,r){var e=[];for(var t in n)for(var a in r)e.push({ci:n[t],kpi:r[a]});return e}(f,t),c=n.map(function(n){var r=new Date(n.arisingTime).getTime();return{kpiCode:n.kpiCode,nodeId:n.nodeId,time:n.arisingTime,timeStamp:r,value:n.value,picked:!1}}),l=c.map(function(n){return n.timeStamp});a=Math.min.apply(null,l),i=Math.max.apply(null,l);var v=function(n){var r=n.ci.id,e=n.kpi.id;return c.filter(function(n){return r==n.nodeId&&e==n.kpiCode})},m=function(t){var r=[],e=function(n){var r;for(var e in t)if(r=t[e].timeStamp,n<=r&&r<n+o)return t[e].value;return"-"};return 0<o?function(){for(var n=a;n<=i;n+=o)r.push(e(n))}():function(){for(var n in t)r.push(t[n].value)}(),r};for(var s in p)p[s].data=m(v(p[s]));e({rawData:n,getLegend:function(r){return p.map(function(n){return"function"==typeof r?r({ci:n.ci.label,kpi:n.kpi.label}):n.ci.label+"-"+n.kpi.label})},getResources:function(){return f.map(function(n){return n.label})},getKpis:function(){return t.map(function(n){return n.label})},getDataMap:function(){return p},getxAxis:function(){var n=[],r=function(n){return $formatDate(n,u)};if(0<o)for(var e=a;e<i;e+=o)n.push(r(new Date(e)));else for(var e in c)n.push(r(new Date(c[e].time)));return 0==n.length&&n.push("-"),[n]},getSeries:function(n){var r=[];for(var e in f){var t=p.filter(function(n){return n.ci.label==f[e].label}),a=[];for(var i in t[0].data){var u=[];for(var o in t)u.push(t[o].data[i]);a.push(u)}r[e]={name:f[e].label,data:a}}return r}})}});
//# sourceMappingURL=../../../map/toolkit/component/explainer/scatter_normal.js.map
