function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}define(["commonMethod"],function(b){return function(i){var p,e=i,r=[],t=i.global,o=i.growl,u=i.element,n=new b(i),l=i.SwSocket,v=i.serviceCenterService,a=u.$attr("parameters/webSocket"),s=u.$attr("advance/getoption"),f=u.$attr("parameters/colwidth"),d=u.$attr("parameters/itemstyle");$$.runExpression(u.$attr("advance/expression"),function(e){if("0"!=e.code)throw new Error(e.message);var t=e.data;m=(m="function"==typeof t?t(i,system):t)||{}});var m,g=i.resourceUIService;m&&(p=m.type);var y=[],C=$("<div></div>").addClass("free-board-kpilist-"+d).addClass("row"),c=m.$attr("on/init");if(u.socket=function(t){if(a){var e=y.find(function(e){return e.data("kpiId")==t.kpiCode});if(e){var i=e.find("#col-value"),n=e.attr("unit");n?i.text(t.value+" "+n):i.text(t.value)}}},u.render=function(e){C.children().remove();var t=e,i=function(l){var c=t.find(function(e){return e.kpiCode==l.id});v.units.getAll().then(function(e){var t=e.find(function(e){return e.unitCode==l.unit}),i=c?c.value:"-",n="";i=t&&" "!=t.unitName?(n=t.unitName,i+" "+t.unitName):i;var a=$("<div></div>").addClass("col-md-"+12/f).attr("unit",n);a.data("kpiId",l.id);var s,d=$("<div></div>").addClass("row"),r=$("<div></div>").addClass("col-md-6").css("line-height","30px").css("font-weight","bold").css("color","#888").css("padding","5px 15px").text(l.label),o=$("<div></div>").addClass("col-md-6 col-right");"button"==p?((s=$("<button></button>").addClass("btn btn-primary")).text("复位"),1==i&&s.addClass("active"),s.on("click",function(e){var n=s.hasClass("active")?0:1;v.directives.getBymodelId(modelId).then(function(e){if(e instanceof Array){var t=e.find(function(e){return-1!=e.kpiDefinitionIds.indexOf(l.id)});if(t){var i={};i[t.params[0].label]=n,t&&g.sendDeviceDirective(nodes[0],t.id,i,function(e){})}}}),s.hasClass("active")?s.removeClass("active"):s.addClass("active")})):s=$("<div></div>").attr("id","col-value").addClass("col-right-inner").text(i);o.append(s),d.append(r).append(o),a.append(d),a[0].style.cursor="pointer",a[0].onclick=function(){u.navigateTo("index",{main:2,sub:0},"self")},C.append(a),y.push(a)})},n=function(e){var t=m.format,i=t[0].value,n=t[1].value,a=/\{item:(.*)\}/,s=$$.runRegExp(i,a,1),d=$$.runRegExp(n,a,1),r=e?e[d]:"-";e.kpiUnit&&(r=r+" "+e.kpiUnit);var o=$("<div></div>").addClass("col-md-"+12/f).attr("unit",e.kpiUnit);o.data("kpiId",e.kpiCode);var l=$("<div></div>").addClass("row"),c=$("<div></div>").text(e[s]+(t[0].subname?t[0].subname:""));if(t[0].selclass?c.addClass(t[0].selclass):c.addClass("col-md-6"),t[0].style)for(var p in t[0].style)c.css(p,t[0].style[p]);else c.css("line-height","30px").css("font-weight","bold").css("color","#888").css("padding","5px 15px");var u,v=$("<div></div>");if(t[1].selclass?v.addClass(t[1].selclass):v.addClass("col-md-6 col-right"),u=$("<div></div>").attr("id","col-value").text(r),t[1].selclass_inner?u.addClass(t[1].selclass_inner):u.addClass("col-right-inner"),t[1].style)for(var p in t[1].style)u.css(p,t[1].style[p]);v.append(u),l.append(c).append(v),o.append(l),C.append(o),y.push(o)};if(0<r.length)for(var a in r)i(r[a]);else if(0<e.length)for(var a in e)n(e[a]);else{var s=$("<div></div>");s.css("text-align","center"),s.css("background-color","#fff"),s.css("padding","10px"),s.text("没有符合条件的记录。"),C.append(s)}},"function"==typeof c)try{c({target:u,global:t,self:n,tools:e})}catch(e){}else if("selected-kpi"==s){n.getCiKpi(function(e,t){var i=e.map(function(e){return e.id}),n=(r=t).map(function(e){return"object"==_typeof(e)?e.id:e}),a={ciid:i.toString(),kpi:n.toString()},s=Math.uuid(),d="register";l.register(s,d,function(e){u.socket(e.data)}),l.send(s,d,"kpi",a),v.getValues(i,n).then(u.render,function(e){o.error(e)})})}return C}});
//# sourceMappingURL=../../map/toolkit/component/kpilist2.js.map
