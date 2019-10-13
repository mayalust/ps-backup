function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}define(["../services/services.js"],function(services){"use strict";services.factory("chartOptionService",["$q",function(q){var factory={},_LINECHARTBASE_={animation:!0,title:{show:!0,padding:30,text:"草莓大棚温度变化",textStyle:{fontWeight:"bold",fontSize:16}},tooltip:{trigger:"axis"},legend:{data:[]},calculable:!0,xAxis:{type:"category",boundaryGap:!0,data:["","","","","","",""],axisLine:{lineStyle:{color:"#b0b0b0",width:1}},axisLabel:{show:!0,textStyle:{}},splitLine:{lineStyle:{color:"rgb(239, 239, 239)",width:1}},axisTick:{show:!0,lineStyle:{}}},yAxis:{show:!0,max:500,min:0,type:"value",boundaryGap:!1,axisLine:{lineStyle:{color:"#b0b0b0",width:1}},splitLine:{lineStyle:{color:"rgb(239, 239, 239)",width:1}},axisLabel:{show:!0,textStyle:{}},axisTick:{show:!0,lineStyle:{}}},series:[{name:"数据",type:"line",data:[],boundaryGap:[.2,.2],itemStyle:{},lineStyle:{},areaStyle:{}}]},_PIECHARTBASE_={title:{text:"新建饼图",subtext:"纯属虚构",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:["提花机A－产量","提花机B－产量","提花机C－产量","提花机D－产量","提花机E－产量"]},calculable:!0,series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:335,name:"提花机A－产量"},{value:310,name:"提花机B－产量"},{value:234,name:"提花机C－产量"},{value:135,name:"提花机D－产量"},{value:1548,name:"提花机E－产量"}]}]},_MAPCHART_={backgroundColor:"#404a59",title:{text:"",subtext:"",sublink:"",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:function(t){return t.seriesName+":"+t.value[2]}},bmap:{center:[104.114129,37.550339],zoom:5,roam:!0,mapStyle:{styleJson:[]}},series:[{name:"运行设备数",type:"scatter",coordinateSystem:"bmap",data:[],symbolSize:function(t){var e;return 20<10+(e=t?.2*t[2]:0)?20:10+e},label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!0}},itemStyle:{normal:{color:"#ddb926"}}},{name:"运行设备数",type:"effectScatter",coordinateSystem:"bmap",data:[],symbolSize:function(t){var e;return 20<10+(e=t?.2*t[2]:0)?20:10+e},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#f4e925",shadowBlur:10,shadowColor:"#333"}},zlevel:1}]},_SCATTERCHART_={title:{text:"某设备平均转速／作业温度散点分布",subtext:"温度，湿度"},tooltip:{trigger:"axis",showDelay:0,axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1}}},legend:{data:["设备A","设备B"]},xAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value}"},show:!0,axisLine:{lineStyle:{color:"#ccc"}}}],yAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value}"},show:!0,axisLine:{lineStyle:{color:"#ccc"}}}],series:[{name:"设备A",type:"scatter",data:[],symbolSize:function(t,e){var a=.5*t[0];return 8<a?8:a<2?2:a},markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{lineStyle:{normal:{type:"solid",color:"#333",width:2}},data:[{yAxis:5},{xAxis:50}]}},{name:"设备B",type:"scatter",data:[],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{data:[{type:"average",name:"平均值"}]}}]},_BARCHARTBASE_={legend:{data:[]},title:{text:"提花机产量",subtext:"",sublink:"",left:"left",textStyle:{color:"#000"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{},xAxis:[{type:"category",interval:0,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value",min:0,max:250,axisLabel:{formatter:"{value}"}}],series:[{name:"数据",type:"bar",data:[10,52,200,334,390,330,220]}]},_RADARCHARTBASE_={title:{text:"某工业企业生产数据统计",subtext:""},tooltip:{trigger:"axis"},legend:{orient:"vertical",x:"right",y:"bottom",data:["预计产量","实际产量"]},polar:[{indicator:[{text:"产品A产量",max:6e3},{text:"产品B产量",max:16e3},{text:"产品C产量",max:3e4},{text:"产品D产量",max:38e3},{text:"产品E产量",max:52e3},{text:"产品F产量",max:25e3}]}],calculable:!0,series:[{name:"计划 vs 实际",type:"radar",data:[{value:[4300,1e4,28e3,35e3,5e4,19e3],name:"预计产量"},{value:[5e3,14e3,28e3,31e3,42e3,21e3],name:"实际产量"}]}]},_GAUGECHARTBASE_={tooltip:{formatter:"{a} <br/>{c} {b}"},series:[{name:"速度",type:"gauge",z:3,min:0,max:220,radius:"80%",axisLine:{lineStyle:{width:10}},axisTick:{length:15,lineStyle:{color:"auto"}},splitLine:{length:20,lineStyle:{color:"auto"}},title:{textStyle:{fontWeight:"bolder",fontSize:20,fontStyle:"italic"}},detail:{textStyle:{fontWeight:"bolder"}},data:[{value:40,name:"km/h"}]}]},_FUNNELCHARTBASE_={title:{text:"漏斗图",subtext:"纯属虚构"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},toolbox:{feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},legend:{data:["展现","点击","访问","咨询","订单"]},calculable:!0,series:[{name:"漏斗图",type:"funnel",left:"10%",top:60,bottom:60,width:"80%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"descending",gap:2,label:{normal:{show:!0,position:"inside"},emphasis:{textStyle:{fontSize:20}}},labelLine:{normal:{length:10,lineStyle:{width:1,type:"solid"}}},itemStyle:{normal:{borderColor:"#fff",borderWidth:1}},data:[{value:60,name:"访问"},{value:40,name:"咨询"},{value:20,name:"订单"},{value:80,name:"点击"},{value:100,name:"展现"}]}]},_VENNCHARTBASE_={title:{text:"访问 vs 咨询",subtext:"各个数据的集合"},tooltip:{trigger:"item",formatter:"{b}: {c}"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!1,series:[{name:"韦恩图",type:"venn",itemStyle:{normal:{label:{show:!0,textStyle:{fontFamily:"Arial, Verdana, sans-serif",fontSize:16,fontStyle:"italic",fontWeight:"bolder"}},labelLine:{show:!1,length:10,lineStyle:{width:1,type:"solid"}}},emphasis:{color:"#cc99cc",borderWidth:3,borderColor:"#996699"}},data:[{value:100,name:"访问"},{value:50,name:"咨询"},{value:20,name:"公共"}]}]},_RESTANGLECHARTBASE_={title:{text:"手机占有率",subtext:"虚构数据"},tooltip:{trigger:"item",formatter:"{b}: {c}"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!1,series:[{name:"矩形图",type:"treemap",itemStyle:{normal:{label:{show:!0,formatter:"{b}"},borderWidth:1},emphasis:{label:{show:!0}}},data:[{name:"三星",value:6},{name:"小米",value:4},{name:"苹果",value:4},{name:"华为",value:2},{name:"联想",value:2},{name:"魅族",value:1},{name:"中兴",value:1}]}]},_KCHART_={title:{text:"某设备温度曲线"},legend:{data:["设备温度"]},dataZoom:{show:!0,realtime:!0,start:50,end:100},xAxis:[{type:"category",boundaryGap:!0,axisTick:{onGap:!1},splitLine:{show:!1},data:[]}],yAxis:[{type:"value",scale:!0,boundaryGap:[.01,.01]}],series:[{name:"温度",type:"k",data:[]}]};for(var i in factory.chart=chart,factory.chart.prototype.axisReverse=axisReverse,factory.chart.prototype.setxAxis=setxAxis,factory.chart.prototype.getxAxis=getxAxis,factory.chart.prototype.setxAxisArr=setxAxisArr,factory.chart.prototype.setTitle=setTitle,factory.chart.prototype.setyAxis=setyAxis,factory.chart.prototype.setyAxisArr=setyAxisArr,factory.chart.prototype.setLegend=setLegend,factory.chart.prototype.setLegendByCiKpi=setLegendByCiKpi,factory.chart.prototype.setSeries=setSeries,factory.chart.prototype.setSeriesByCiKpi=setSeriesByCiKpi,factory.chart.prototype.setSeriesWithNameByCiKpi=setSeriesWithNameByCiKpi,factory.chart.prototype.setColor=setColor,factory.chart.prototype.returnOption=returnOption,factory.chart.prototype.simulate=simulate,factory.chart.prototype.setLegendformat=setLegendformat,factory.chart.prototype.setTimeformat=setTimeformat,factory.chart.prototype.timeformat="年月日时分",factory.chart.prototype.legendFormat="{ci} + '-' + {kpi}",factory.chart.prototype.setBaseOption=setBaseOption,factory.chart.prototype.setGrid=setGrid,factory.chart.prototype.setBoundaryGap=setBoundaryGap,factory.chart.prototype)Object.defineProperty(factory.chart.prototype,i,{enumerable:!1});for(var i in factory.linechart=linechart,factory.linechart.prototype=Object.create(factory.chart.prototype,{}),factory.linechart.prototype.baseOption=_LINECHARTBASE_.$clone(),factory.piechart=piechart,factory.piechart.prototype=Object.create(factory.chart.prototype,{}),factory.piechart.prototype.baseOption=_PIECHARTBASE_.$clone(),factory.mapchart=mapchart,factory.mapchart.prototype=Object.create(factory.chart.prototype,{}),factory.mapchart.prototype.baseOption=_MAPCHART_.$clone(),factory.barchart=barchart,factory.barchart.prototype=Object.create(factory.chart.prototype,{}),factory.barchart.prototype.baseOption=_BARCHARTBASE_.$clone(),factory.radarchart=radarchart,factory.radarchart.prototype=Object.create(factory.chart.prototype,{}),factory.radarchart.prototype.baseOption=_RADARCHARTBASE_.$clone(),factory.radarchart.prototype.setPolar=setPolar,factory.gaugechart=gaugechart,factory.gaugechart.prototype=Object.create(factory.chart.prototype,{}),factory.gaugechart.prototype.baseOption=_GAUGECHARTBASE_.$clone(),factory.funnelchart=funnelchart,factory.funnelchart.prototype=Object.create(factory.chart.prototype,{}),factory.funnelchart.prototype.baseOption=_FUNNELCHARTBASE_.$clone(),factory.vennchart=vennchart,factory.vennchart.prototype=Object.create(factory.chart.prototype,{}),factory.vennchart.prototype.baseOption=_VENNCHARTBASE_.$clone(),factory.restanglechart=restanglechart,factory.restanglechart.prototype=Object.create(factory.chart.prototype,{}),factory.restanglechart.prototype.baseOption=_RESTANGLECHARTBASE_.$clone(),factory.scatterchart=scatterchart,factory.scatterchart.prototype=Object.create(factory.chart.prototype,{}),factory.scatterchart.prototype.baseOption=_SCATTERCHART_.$clone(),factory.kchart=kchart,factory.kchart.prototype=Object.create(factory.chart.prototype,{}),factory.kchart.prototype.baseOption=_KCHART_.$clone(),factory.linechart.prototype)Object.defineProperty(factory.linechart.prototype,i,{enumerable:!1});for(var i in factory.piechart.prototype)Object.defineProperty(factory.piechart.prototype,i,{enumerable:!1});for(var i in factory.mapchart.prototype)Object.defineProperty(factory.mapchart.prototype,i,{enumerable:!1});for(var i in factory.scatterchart.prototype)Object.defineProperty(factory.scatterchart.prototype,i,{enumerable:!1});function scatterchart(){chart.call(this,_SCATTERCHART_)}function kchart(){chart.call(this,_KCHART_)}function linechart(){chart.call(this,_LINECHARTBASE_)}function barchart(){chart.call(this,_BARCHARTBASE_)}function radarchart(){chart.call(this,_RADARCHARTBASE_)}function gaugechart(){chart.call(this,_GAUGECHARTBASE_)}function funnelchart(){chart.call(this,_FUNNELCHARTBASE_)}function vennchart(){chart.call(this,_VENNCHARTBASE_)}function restanglechart(){chart.call(this,_RESTANGLECHARTBASE_)}function mapchart(){chart.call(this,_MAPCHART_)}function setTitle(t){this.title.$extension(t)}function piechart(){chart.call(this,_PIECHARTBASE_)}function chart(t){"object"==_typeof(t)&&this.$clone(t)}function setGrid(t){var e={grid:{}};e.grid.$extension(t),this.$extension(e)}function setBoundaryGap(t){this.boundaryGap=t}function axisReverse(){var t=this.xAxis.$clone(),e=this.yAxis.$clone();this.xAxis=e,this.yAxis=t}function setBaseOption(t){this.baseOption=t,Object.defineProperty(this,"baseOption",{enumerable:!1})}function setPolar(t){this.polar=[{indicator:t}]}function setyAxis(t){var e=this;e.yAxis?e.yAxis.axisLabel?e.yAxis.axisLabel.show=t.show:e.yAxis.axisLabel={show:t.show}:e.yAxis={axisLabel:{}},t.type&&(e.yAxis.type=t.type),t.name&&(e.yAxis.name=t.name),"log"==t.type?(delete e.yAxis.min,delete e.yAxis.max):("auto"!=t.max?e.yAxis.max=t.max:delete e.yAxis.max,"auto"!=t.min?e.yAxis.min=t.min:delete e.yAxis.min)}function setyAxisArr(t){var e=this;e.yAxis[0]?e.yAxis[0].axisLabel?e.yAxis[0].axisLabel.show=t.show:e.yAxis[0].axisLabel={show:t.show}:e.xAxis[0]={axisLabel:{}},"auto"!=t.max?e.yAxis[0].max=t.max:delete e.yAxis[0].max,"auto"!=t.min?e.yAxis[0].min=t.min:delete e.yAxis[0].min}function setxAxis(t,a){var r=this;null==r.xAxis&&(r.xAxis={}),r.xAxis.$extension({name:t.name,axisLabel:{show:t.show},boundaryGap:t.boundaryGap}),0<t.data.length?r.xAxis.data=t.data.map(function(t){if(0==a)return t;var e=new Date(t);return $formatDate(e,r.timeformat)}):r.xAxis.data=["-","-","-","-","-","-","-"]}function getxAxis(){return this.xAxis.data}function setxAxisArr(t){var a=this;a.xAxis[0]?a.xAxis[0].axisLabel?a.xAxis[0].axisLabel.show=t.show:a.xAxis[0].axisLabel={show:t.show}:a.xAxis[0]={axisLabel:{}},0<t.data.length?("function"==typeof t.formatter&&(a.xAxis[0].axisLabel?a.xAxis[0].axisLabel.formatter=t.formatter:a.xAxis[0].axisLabel={formatter:t.formatter}),"string"==t.format?a.xAxis[0].data=t.data:a.xAxis[0].data=t.data.map(function(t){var e=new Date(t);return $formatDate(e,a.timeformat)})):a.xAxis[0].data=["-","-","-","-","-","-","-"]}function setTimeformat(t){this.timeformat=t}function setLegend(t){this.legend.data=t}function setLegendByCiKpi(t){var e=this;this.legend.data=t.map(function(t){return runFormula.call(e,t)})}function setLegendformat(t){this.legendFormat=t}function runFormula(element){var result=[],ci=element.ci,kpi=element.kpi,format=this.legendFormat;return format=format.replace("{kpi}","'"+(kpi||"")+"'"),format=format.replace("{ci}","'"+(ci||"")+"'"),eval(format)}function setSeries(t){var e=this;if(e.series=[],0<t.length)for(var a in t){var r=e.baseOption.series[0].$clone();0<t[a].data.length?r.$extension(t[a]):(r.$extension(t[a].$clone()),r.$extension({name:"-",data:[{name:"-",value:"0"}]})),e.series.push(r)}else(r=e.baseOption.series[0].$clone()).name="设备，指标",r.data=[0,0,0,0,0,0,0],e.series=[r]}function setSeriesByCiKpi(t){var e=this;if(e.series=[],0<t.length)for(var a in t){(r=e.baseOption.series[0].$clone()).$extension(t[a].$clone()),r.$extension({name:runFormula.call(e,t[a].name),data:t[a].data}),e.series.push(r)}else{var r=e.baseOption.series[0].$clone();e.series=[r.$extension({name:{ci:"设备",kpi:"指标"},data:[0,0,0,0,0,0,0]})]}}function setSeriesWithNameByCiKpi(t){var e=this;for(var a in e.series=[],t){var r=e.baseOption.series[0].$clone();r.$extension(t[a].$clone()),r.$extension({name:runFormula.call(e,t[a].name),data:t[a].data.map(function(t){return t.name=runFormula.call(e,t.name),t.value=t.value,t})}),0==r.data.length&&(r.data=[{name:r.name,value:0}]),e.series.push(r)}}function simulate(){for(var t=[],e=0;e<7;e++)t.push(parseInt(30*Math.random()));this.series[0].data=t}function setColor(t){var e=this;for(var a in e.series)e.series[a]&&(e.series[a].areaStyle=t?(e.series[a].itemStyle={normal:{color:t}},e.series[a].lineStyle={normal:{color:t}},{normal:{color:t}}):(e.series[a].itemStyle={},e.series[a].lineStyle={},{}))}function returnOption(){return this.$clone()}return factory}])});
//# sourceMappingURL=../../map/js/services/chart-option-service.js.map
