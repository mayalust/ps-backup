define([],function(){return function(e){var t=$("<div></div>").css({position:"relative",width:"100%"}),u=(e.index,e.element),f=e.chartOptionService,v=e.timeout,g=$("<div></div>"),n=$("<div>偏差值低预警</div>"),y=$("<button class='btn btn-primary'>模拟分析过程</button>").css({margin:"10px"});return n.css("background-color","red"),n.css("position","absolute"),n.css("color","#fff"),n.css("padding","10px"),n.css("top","30px"),n.css("right","90px"),n.css("width","140px"),n.css("text-align","center"),n.css("font-weight","bold"),n.css("font-size","16px"),n.css("border-radius","8px"),n.css("box-shadow","1px 1px 10px #ff5a00"),n.css("display","none"),n.css("z-index",999),t.append(g),t.append(y),v(function(){u.style&&g.css(u.style),g.css("width",t.width()),$$.loadExternalJs(["echarts","macarons"],function(e){var n,s,i=new f.linechart,t=e.init(g[0],"macarons"),a=[],o=[],r=[],c=0;i.setTitle({text:""});var l=[],d=(new Date).getTime()-2592e5;if(1==u.parameters.type)var x=[69,70,71,70,69,68,69,70,69,71,70,71,70,70,71,71,72,71,71,70,71,72,71,71,70,70,70,70,70,69,69,70,70,70,71,71,71,71,70,71,70,71,71,71,72,72,71,72,72,70],m=[68.4,69.8,70.6,69.4,68.7,67.6,68.6,69.4,68.6,70.8,69.4,70.6,69.8,69.7,70.6,70.4,71.6,70.6,70.4,69.6,70.8,71.8,70.7,68.4,67.3,67.6,67.9,68.6,69.4,68.7,67.6,67.2,67.4,67.8,68.1,68.8,69.6,68.3,67.4,67.8,68.3,69.4,70.6,69.8,69.4,69.1,69.9,71.6,70.1,69.5];else{x=[85,80,80,80,79,82,82,80,78,83,84,83,80,80,81,82,84,85,85,83,81,82,81,81,80,80,80,80,80,79,79,81,83,82,79,77,80,82,79,78,80,81,82,79,84,83,81,82,84,79],m=[84,79,79.6,79.4,79,81.5,81,79.6,77.6,82.5,83.7,82.6,79.4,79.6,80.6,81.5,83.7,84.6,84.5,82.7,80.8,81.4,80.6,80.8,79.8,79.9,79.9,79.8,78.6,78.6,78.4,80.6,82.7,81.7,78.6,76.8,79.4,81.8,78.6,77.8,79.8,80.8,81.9,78.4,83.8,82.4,80.9,81.6,83.4,78.9];for(var p in x)x[p]+p*p/200<88?(x[p]+=p*p/200,m[p]+=p*p/200):(x[p]=Math.round(100*(88-2*Math.random()))/100,m[p]=Math.round(100*(88-2*Math.random()))/100)}var h;for(var p in x)l.push(d+300*p*1e3);i.setTimeformat("时分"),i.setLegend(["估计值","测量值"]),h=t,s=function(e,t,n){i.setxAxis({data:e});var s=i.getxAxis();i.setSeries([{name:"估计值",data:t,smooth:!0,markLine:{label:{normal:{show:!0}},lineStyle:{normal:{color:"#cc2424"}},data:[{name:"报警温度",yAxis:90}]},itemStyle:{normal:{color:"#66c9d8"}}},{name:"测量值",data:n,smooth:!0,markLine:{label:{normal:{show:!0}},lineStyle:{normal:{type:"solid",color:"#cc2424"}},data:[{name:"跳闸温度",yAxis:100}]},markArea:{data:1==u.parameters.type?[[{name:"波动偏差过大",xAxis:s[22]},{xAxis:s.length<=26?s[s.length-1]:s[26]}],[{name:"波动偏差过大",xAxis:s[29]},{xAxis:s.length<=40?s[s.length-1]:s[40]}],[{name:"波动偏差过大",xAxis:s[43]},{xAxis:s.length<=45?s[s.length-1]:s[45]}]]:[[{name:"长时间接近告警温度",xAxis:s[32]},{xAxis:s.length<=48?s[s.length-1]:s[48]}]],itemStyle:{normal:{color:"#f7dde2"}}},itemStyle:{normal:{color:"#8e66d8"}}}]);var a=i.returnOption();a.yAxis.max=100,a.yAxis.min=60,h.setOption(a)},y.on("click",function(e){var t=$(e.currentTarget);a=l.slice(0,20),o=x.slice(0,20),r=m.slice(0,20),s(a,o,r),"模拟分析过程"==t.text()?(n=function(){c<l.length&&(a.push(l[c]),o.push(x[c]),r.push(m[c]),v(function(){s(a,o,r),c++,"function"==typeof n&&n()},1e3))},c=21,t.text("返回初始状态"),t.removeClass("btn-primary"),t.addClass("btn-cancel"),n()):"返回初始状态"==t.text()&&(t.text("模拟分析过程"),t.removeClass("btn-cancel"),t.addClass("btn-primary"),n=void 0)}),s(l.slice(0,20),x.slice(0,20),m.slice(0,20)),$(window).on("resize",function(e){t.resize()})})}),t}});
//# sourceMappingURL=../../map/toolkit/component/featurechart.js.map