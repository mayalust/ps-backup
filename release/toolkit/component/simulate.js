function _typeof(n){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}define([],function(){return function(n,u,c,e,v,a,l){var s=[],t=new Date,r=a||{},g=t.getTime(),m=function(n){var a=new Date(n);return a.getFullYear()+"-"+a.getMonth()+"-"+a.getDate()},o=function(l){var n=function(u){var n=function(o,i){var n,a=function(n){var a;v&&(a=v[o]);var t=function(n){if(n){var a=n[1],t=n[0],e=a-t;return Math.round(10*(t+Math.random()*e))/10}return Math.round(100*Math.random())}(a),e=g+30*l*24*3600*1e3,r={agentId:"0",aggregatePeriod:null,aggregateStatus:null,aggregateType:null,arisingTime:m(e),compressCount:0,computeTaskId:0,dataSerialNumber:0,dataTime:null,insertTime:m(e),kpiCode:i.id,nodeId:u.id,notes:null,numberValue:t,quality:0,resourceId:0,stringValue:null,value:t,valueStr:t+""};n&&(r.instance=n),s.push(r)};if(e)for(var t in e)n=e[t],a(n);else a()};for(var a in c)n(a,c[a])};for(var a in u)n(u[a])};if("time"==n)for(var i=0;i<8;i++)o(i);else"ci"==n?o(0):"ci_2d"==n?function(){var n=r.dictionaryService,f=["energyType","industryShortType"],a=function(r,o){n.getDictValues(o,function(n){if(0==n.code){var t=[],a=function(a){t.some(function(n){return n.label==a.label})||t.push(a)};for(var e in n.data)a(n.data[e]);f[r]={path:o,status:"finished",data:t},f.every(function(n){return"object"==_typeof(n)})&&function(){var n=function(l){var n=function(i,u){var n=function(o){var n=function(n){var a;v&&(a=v[i]);var t=function(n){if(n){var a=n[1],t=n[0],e=a-t;return Math.round(10*(t+Math.random()*e))/10}return Math.round(100*Math.random())}(a),e=g,r={agentId:"0",aggregatePeriod:null,aggregateStatus:null,aggregateType:null,arisingTime:m(e),compressCount:0,computeTaskId:0,dataSerialNumber:0,dataTime:null,insertTime:m(e),kpiCode:u.id,nodeId:l.id,notes:null,numberValue:t,instance:o.label+","+n.label,quality:0,resourceId:0,stringValue:null,value:t,valueStr:t+""};s.push(r)};for(var a in f[1].data)n(f[1].data[a])};for(var a in f[0].data)n(f[0].data[a])};for(var a in c)n(a,c[a])};for(var a in u)n(u[a]);"function"==typeof l&&l(s)}()}})};for(var t in f)a(t,f[t])}():"ci_3d"==n&&function(){var i,n=r.dictionaryService,d=["energyType","industryShortType"],a=function(r,o){n.getDictValues(o,function(n){if(0==n.code){var t=[],a=function(a){t.some(function(n){return n.label==a.label})||t.push(a)};for(var e in n.data)a(n.data[e]);d[r]={path:o,status:"finished",data:t},d.every(function(n){return"object"==_typeof(n)})&&function(){var n=function(f){var n=function(u,l){var n=function(i){var n=function(o){var n=function(n){var a;v&&(a=v[u]);var t=function(n){if(n){var a=n[1],t=n[0],e=a-t;return Math.round(10*(t+Math.random()*e))/10}return Math.round(100*Math.random())}(a),e=g,r={agentId:"0",aggregatePeriod:null,aggregateStatus:null,aggregateType:i.valueCode,arisingTime:m(e),compressCount:0,computeTaskId:0,dataSerialNumber:0,dataTime:null,insertTime:m(e),kpiCode:l.id,nodeId:f.id,notes:null,numberValue:t,instance:n.label+","+o.label,quality:0,resourceId:0,stringValue:null,value:t,valueStr:t+""};s.push(r)};for(var a in d[1].data)n(d[1].data[a])};for(var a in d[0].data)n(d[0].data[a])};for(var a in i)n(i[a])};for(var a in c)n(a,c[a])};for(var a in u)n(u[a]);"function"==typeof l&&l(s)}()}})};for(var t in d)a(t,d[t]);n.getDictValues("aggregateType",function(n){0==n.code&&(i=n.data.slice(0,2))})}();return s}});
//# sourceMappingURL=../../map/toolkit/component/simulate.js.map
