define({on:{init:function(e){var s=e.target,a=s.$state.params.startdate?new Date(s.$state.params.startdate):new Date((new Date).getTime()-72e5),t=s.$state.params.enddate?new Date(s.$state.params.enddate):new Date,d=moment(a).utc().format(),u=moment(t).utc().format(),n=s.$state.params.id;s.$getResourceById(n,function(i){var o,a=function(e){d=moment(e.dateRangeTime[0]).utc().format(),u=moment(e.dateRangeTime[1]).utc().format(),o=e.type;var a=[i.id],t=[],n=[];for(var r in kpiDes=e.kpi,e.kpi)t.push(e.kpi[r].dataItemId),n.push(e.kpi[r].instance);n=n.toString(),s.setValue("featureEchart",null),function(e,l,a){if(s.showLoading(),s.hideNoData(),0<e.length&&0<l.length&&a){var t={isRealTimeData:!1,includeInstance:!0,startTime:d,endTime:u};1==o?(t.queryInstances="00",t.dataType=11,t.aggregateFunc=2,t.aggregatePeriod="1h"):2==o?(t.queryInstances="00",t.dataType=11,t.aggregateFunc=2,t.aggregatePeriod="1d"):t.queryInstances="00",s.getKpiValueList(e,l,0,function(a){if(0<a.length){s.hideLoading();var m=a.reduce(function(e,a){var t=s.dateHandler(a.arisingTime);return e?t.before(e)?t:e:t},null),e=(a.reduce(function(e,a){var t=s.dateHandler(a.arisingTime);return e?t.after(e)?t:e:t},null),kpiDes.map(function(t){var e=a.filter(function(e){var a=e.kpiCode;return e.instance,t.dataItemId==a});return e.sort(function(e,a){var t=new Date(e.arisingTime),n=new Date(a.arisingTime);return t.getTime()-n.getTime()}),{name:t.kpiName,type:"line",symbolSize:0,data:e.map(function(e){var a=new Date(e.arisingTime),t=s.dateHandler(a);return s.dateHandler("2017/01/01"),[t.minus(m),e.value]})}})),t={title:{textStyle:{color:"#fff"}},grid:{containLabel:"true",left:"23px",right:"50px"},tooltip:{trigger:"axis",formatter:function(e,a,t){var n="";for(var r in e){var i=e[r].value[0],o=e[r].value[1],s=e[r].marker,d=e[r].seriesIndex,u=m.clone().addTimeStamp(i);l&&(n+=s+kpiDes[d].kpiName,n+=":"+o+"["+u.getDateString("MM/dd,hh:mm:ss")+"]<br>")}return n}},legend:{data:e.map(function(e){return e.name})},toolbox:{feature:{restore:{},dataZoom:{},saveAsImage:{type:"png",name:"振动分析-特征趋势图",backgroundColor:"#0b2232"}},iconStyle:{normal:{borderColor:"#fff"},emphasis:{borderColor:"#e6e2e2"}}},xAxis:{boundaryGap:!1,type:"value",max:"dataMax",axisLabel:{formatter:function(e){return m.clone().addTimeStamp(e).getDateString("MM/dd,hh:mm:ss")}}},yAxis:{type:"value"},series:e.map(function(e){return e.type="line",e.symbolSize=0,e.data=e.data,e})};s.render(t)}else s.showNoData()},t)}else s.showNoData()}(a,t,n)},e=s.getValue("featureEchart");e&&a(e),s.off("drawDiagnoseFeatureEchart1"),s.on("drawDiagnoseFeatureEchart1",function(e){a(e)})})},dblclick:function(e){var a=e.target,t=a.getValue("echarts/data");if(t&&t[e.ui.dataIndex]){var n=t[e.ui.dataIndex];a.setValue("global/sensor",{kpiId:n.kpiCode,instance:n.instance}),a.setValue("global/dt",n),a.setValue("global/time",a.dateHandler(n.arisingTime)),a.trigger("analysisShakeviewchange",2)}}}});
//# sourceMappingURL=../../../map/solution/customview/featureAnalysis/featureAnalysisChart.js.map