define(["controllers/controllers"],function(e){"use strict";e.controller("ViewMapsCtrl",["$scope","kpiDataService","SwSocket","Info","alertService","userLoginUIService","resourceUIService",function(s,e,t,o,r,a,n){var i,l={backgroundColor:"#404a59",title:{text:"",subtext:"",sublink:"",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:function(e){return e.seriesName+":"+e.value[2]}},bmap:{center:[104.114129,37.550339],zoom:5,roam:!0,mapStyle:{styleJson:[]}},series:[{name:"运行设备数",type:"scatter",coordinateSystem:"bmap",data:[],symbolSize:function(e){return e?20<e[2]?20:e[2]<10?10:e[2]:0},label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!0}},itemStyle:{normal:{color:"#ffffff"}}},{name:"运行设备数",type:"effectScatter",coordinateSystem:"bmap",data:[],symbolSize:function(e){return e?20<e[2]?20:e[2]<10?10:e[2]:0},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#e1cd0a",shadowBlur:10,shadowColor:"#333"}},zlevel:1}]};o.get("../localdb/echarts-map.json",function(e){i=e,l.bmap.mapStyle.styleJson=i.styleJson_dark,n.statDeviceByStandardAddress(function(e){var t={};if(0==e.code){for(var o in e.data)if(o){var r=o.split(",");-1<r[0].indexOf("市")?t[r[0]]?t[r[0]]=t[r[0]]+e.data[o]:t[r[0]]=e.data[o]:1<r.length&&(t[r[1]]=e.data[o])}for(var o in t){var a={};a.name=o,a.value=i.geoCoord[o],a.value&&a.value.push(t[o]),l.series[0].data.push(a);var n=5;i.topCount&&(n=i.topCount),l.series[0].data.length<=n&&l.series[1].data.push(a)}s.$broadcast(Event.ECHARTMAPINFOSINIT,{option:l})}})})}])});
//# sourceMappingURL=../../map/js/controllers/view-maps-ctrl.js.map
