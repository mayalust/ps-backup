define(["toolkit/date-handler","toolkit/value-list-handler"],function(R,A){return function(e,t,n){var r,a,u,l,o=A.init(),f=t.nodesDes,c=t.kpisDes,i=t.format,p=t.frequency,s=t.freqObj,g=t.timespan,m=t.aggregate_rule,d=t.autoFillBlank,k=(t.simulate,function(t){return a.map(function(e){return"function"==typeof t?t({ci:e.ci.label,kpi:e.kpi.label}):e.ci.label+"-"+e.kpi.label})}),v=function(){return f.map(function(e){return e.label})},h=function(){return c.map(function(e){return e.label})},b=function(){return a},D=function(){var e=[],t=function(e){return e.FormatByString(i)};if(0<p)e=o.getTimeRange().map(function(e){return t(e.getDate())});else for(var n in r)e.push(t(new Date(r[n].time)));return 0==e.length&&e.push("-"),[e]},y=function(n){return a.map(function(e){var t;return t="function"==typeof n?n({ci:e.ci.label,kpi:e.kpi.label}):e.ci.label+"-"+e.kpi.label,0==e.data.length&&(e.data=[null]),{name:t,data:e.data}})};!function(i){var e=function(e){var t=e.ci.id,n=e.kpi.id;return i.filter(function(e){return t==e.nodeId&&n==e.kpiCode})};for(var t in a=function(e,t){var n=[];for(var i in e)for(var r in t)n.push({ci:e[i],kpi:t[r]});return n}(f,c),l=R.init(),u=R.init(l.getTimeStamp()-g),o.setTimeRange(u,l,s),o.setAutoFillBlank(d),o.setAggregateRule(m),a)a[t].data=o.aggregateValues(e(a[t]));n({rawData:i,getLegend:k,timestamps:function(){var e=[];if(0<p){for(var t=l;u<t;t-=p)e.push(t);e.push(u),e=e.sort(function(e,t){return e-t})}else for(var t in r)e.push(r[t].time);return 0==e.length&&e.push("-"),e}(),getResources:v,getKpis:h,getDataMap:b,getxAxis:D,getSeries:y})}(e)}});
//# sourceMappingURL=../../../map/toolkit/component/explainer/time.js.map
