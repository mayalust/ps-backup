define({on:{init:function(n,e,i){var r,a={},t=n.target,d=0,u={1:"点检异常数",2:"注意告警数",3:"警告告警数",4:"危险告警数"};function l(n){return(n-=0)==n?n:0}function o(n,e){var i=[];for(var r in n)i.push(e(r,n[r]));return i}function c(n,e){var i,r,t,a,u=e.kpiCode,o=e.nodeId,c=e.instance;if(n[o]=n[o]||{},n[o][u]=n[o][u]||{},7203==u){if(null==c)return n;insId=c.split(",")[0],n[o][u][insId]=e.value||0}return 7302==u&&((i=l(e.value))&&console.log("==="+i,u),n[o][u]._=(a=2,r=i/d*100,t=Math.pow(10,a),Math.round(r*t)/t+"%")),n}function f(t){var n={};function e(i,r){return r=null==r?0:r,function(n,e){return{name:e,value:a[t.id]&&a[t.id][i]&&a[t.id][i][n]||r}}}return n.province=t.label,n.data=o(u,e(7203)).concat(o({_:"异常处理率"},e(7302,"0%"))),n.index=t.values.number||0,n}r=function(r){var n,e,i;n=r.map(function(n){return n.id}),e=function(n){var e=n.data.reduce(function(n,e){var i=e.nodeId,r=e.kpiCode,t=l(e.value);return 7302==r&&(null!=n[i]&&console.error("nodeId : "+i+", kpiCode : "+r+", instance : "+e.instance+", 存在重复输入情况，请联系KQI编写者修改漏洞。"),n[i]=t),n},{});d=function(n){var e=0;for(var i in n)e+=n[i];return e}(e),a=n.data.reduce(c,{});var i=r.map(f);t.render(i)},i=["kpi",{isRealTimeData:!0,includeInstance:!0,nodeIds:n,kpiCodes:[7203,7302]}],t.postService("kpiDataFlexService","getKpiValueList",i,e,{isRealTimeData:!0,includeInstance:!0})},t.getDomainAreaLineTree(function(n){n.getChildren(function(n,e,i){return i<2}).then(function(n){r(n)})})}}});
//# sourceMappingURL=../../../map/solution/customview/homepage/abnormalReport.js.map