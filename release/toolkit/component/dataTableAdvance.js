function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}define(["commonMethod","configs"],function(t){return function(n){var I,r,t=n,P=n.scope,i=n.rootScope,M=(n.route,n.element),T=n.SwSocket,s=(n.previewMode,n.alertService,n.userLoginUIService),o=(n.growl,t.defer),d=(n.serviceCenterService,n.dictionaryService,n.resourceUIService,n.ticketTaskService,n.projectUIService,n.kpiDataService,n.window,M.advance.getfunction,M.$attr("advance/getListTable")),O=n.global,j=(P=n.scope,n.compile),D=M.$attr("parameters/listbottom"),F=M.$attr("parameters/col")||1,A=10;delete M.growl,Object.defineProperty(M,"dataSource",{enumerable:!1});var l=$("<div></div>");l.css("width","100%"),l.css("overflow-y","auto"),l.css("overflow-x","hidden");var a,J=$("<table></table>").addClass("table table-hover"),c=$("<div></div>").addClass("btn-group").css("margin-bottom","10px").css("display","none");return l.append(c),l.append(J),$$.runExpression(M.$attr("advance/expression"),function(t){if("0"==t.code){var e=t.data;a=(a="function"==typeof e?e(n,system):e)||{}}else a={};!function(a){var S=a.format;a.theme,n.q;M.setFilter=function(t){},M.setFormat=function(t){S=t},M.search=function(){},M.render=function(h,y){o.resolve("underwatch"),J.children().remove();var k,C=[];c.children().remove();var w=h.showSelect;k=h instanceof Array?h:h.data,S=h.format;var _=h.rowCallbackKey;w&&S.unshift({type:"checkbox",value:"checked",name:"全选"}),A=h.pageSize||A;var t=function(t){var e=$("<div></div>").addClass(t.class||"btn btn-primary"),a=t.$attr("on/click"),n=$("<span></span>").addClass(t.icon);return e.text(t.label),e.prepend(n),e.on("click",function(t){a&&a(t)}),e};if(h.buttons)for(var e in c.css("display","block"),h.buttons)c.append(t(h.buttons[e]));$$.loadExternalJs(["datatables.net","datatables.net-bs","datatables.net-select"],function(t){setTimeout(function(){for(var t=[],e=[],a=function(r,g,x,v){t.push({data:0!=g?v.value+"_$"+g:v.value,title:v.name,render:function(p,t,m){var f,e,t=v.type,a=function(t,e){var a=M.getParameter("resourceId"),n="";0!=g&&(n="_$"+g);var r=t["params"+n]?t["params"+n][0].id:"",i=$("<span></span>");i.attr("fmtInx",x),1==e.websocket&&i.attr("webSocket",a+","+r),i.css("cursor","default");var s=e.style;s&&i.css(s);var o=e.format||function(){return null==p?"":p},d=e.render;return d?(f=d(p,"display",t,e),i.append(f)):(i.attr("title",o(p)),i.text(null==o(p)?"-":o(p))),i},n=$("<div></div>");return"valueBased"==t?(p||(p=""),(e=v.options[p])||(e=v.options[""]),t=e.type):e=v,(f="text"==t?a(m,e):"link"==t?function(t){{if("none"!=t.filePath&&t.filePath){var e=$("<a target='_blank'></a>");e.attr("fmtInx",x);var a=v.linkage,n=v.value;1==v.websocket&&e.attr("webSocket",s+","+d);var r=v.style;r&&e.css(r);var i=m.fileName?m.fileName:m[n];return e.text(i),e.attr("href",m[a]),e}var s=M.getParameter("resourceId"),o="";0!=g&&(o="_$"+g);var d=t["params"+o]?t["params"+o][0].id:"",l=$("<span></span>");l.attr("fmtInx",x),1==v.websocket&&l.attr("webSocket",s+","+d),l.css("cursor","default");var r=v.style;r&&l.css(r);var c=v.format||function(){return null==p?"":p},u=v.render;return u?(f=u(p,"display",t,v),l.append(f)):(l.attr("title",c(p)),l.text(null==c(p)?"-":c(p))),l}}(m):"checkbox"==t?function(t,e){var a=$('<input type="checkbox" id="checkbox"/>');a.attr("fmtInx",x),t.checked&&(a.attr("checked",!0),a.prop("checked",!0));return a}(m):"date"==t?function(){var t=$("<span></span>");t.css("cursor","default");var e=v.style;e&&t.css(e);t.css("display","inline-block");var a=v.render;p?a?t.text(a(p)):t.text(useMomentFormat(p,"yyyy-MM-dd hh:mm:ss")):t.text("-");return t}():"input"==t?function(t,e){0!=g&&"_$"+g;e.$attr("on/change");var a=$("<input />");a.attr("fmtInx",x),a.addClass("form-control");var n=e.style;n&&a.css(n);if(e.attrs)for(var r in e.attrs)a.attr(r,e.attrs[r]);return a}(0,e):"select"==t?function(t,e){var a=$("<div></div>"),n=e.class||"";a.addClass(n);var r=e.style;a.css("padding","3px"),"object"==_typeof(r)&&a.css(r);return a}(0,e):"progressbar"==t?function(){var t=$("<div></div>").addClass("progress sm");t.attr("fmtInx",x);var e=$("<div></div>").addClass("progress-bar").css("width",p||0);switch(t.append(e),!0){case 100==p:e.addClass("progress-bar-aqua");break;case 90<p:e.addClass("progress-bar-green");break;case 80<p:case 70<p:e.addClass("progress-bar-yellow");break;case 60<p:e.addClass("progress-bar-red");break;default:e.addClass("progress-bar-danger")}return t}():"priority"==t?function(){var t=$("<span></span>").addClass("label");t.attr("fmtInx",x),2==p?t.text("注意").addClass("alerts-minor"):3==p?t.text("警告").addClass("alerts-critical"):4==p?t.text("危险").addClass("alerts-black"):"-1"==p?t.text("正常").addClass("alerts-normal").css("background-color","#16b695"):t.text("无").css("font-size","12px");return t.css("cursor","default"),t}():"circum"==t?function(){var t=$("<span></span>").addClass("label");t.attr("fmtInx",x),"0"==p?(t.css("display","inline-block"),t.css("width","20px"),t.css("height","20px"),t.css("background","#00bb7b"),t.css("border-radius","10px")):"1"==p?(t.css("display","inline-block"),t.css("width","20px"),t.css("height","20px"),t.css("background","#FD0001"),t.css("border-radius","10px")):t.text("无").css("font-size","12px");return t.css("cursor","default"),t}():"circum1"==t?function(){var t=$("<span></span>").addClass("label");t.attr("fmtInx",x),"1"==p?(t.css("display","inline-block"),t.css("width","20px"),t.css("height","20px"),t.css("background","#00bb7b"),t.css("border-radius","10px")):"2"==p?(t.css("display","inline-block"),t.css("width","20px"),t.css("height","20px"),t.css("background","#efd80b"),t.css("border-radius","10px")):"3"==p?(t.css("display","inline-block"),t.css("width","20px"),t.css("height","20px"),t.css("background","#ff8800"),t.css("border-radius","10px")):"4"==p&&(t.css("display","inline-block"),t.css("width","20px"),t.css("height","20px"),t.css("background","#FD0001"),t.css("border-radius","10px"));return t.css("cursor","default"),t}():"jquery"==t?function(t,e){var a=$("<div></div>"),n=e.render;n&&(f=n(t),a.append(f));return a}(m,e):"button"==t?function(t,e){e.$attr("on/click"),Math.uuid(32);var a=$("<span></span>").addClass(e.icon||"glyphicon glyphicon-asterisk"),n=$("<button></button>").addClass(e.class||"btn btn-primary").text(e.label).attr("id","dataTable_btn_"+r);return n.attr("fmtInx",x),n.prepend(a),n}(0,e):"directiveSingle"==t?function(t,e){var a=M.getParameter("resourceId"),n="";0!=g&&(n="_$"+g);{if(t["params"+n]){var r=t["params"+n][0].id,i=$("<span></span>"),s=$("<div></div>").css("position","relative"),o=$("<div></div>").addClass("input-group"),d=$("<div></div>").addClass("btn btn-default").text(t.name),l=$("<div></div>").addClass("input-group-btn"),c=$("<input />").addClass("form-control").attr("id","inputAll_"+m["id"+n]),u=$("<div></div>").addClass("input-group-btn"),p=$("<button></button>").addClass("btn btn-primary").text("发送").attr("id","sendBtnAll_"+m["id"+n]),f=$("<div></div>").attr("id","ulWrap_"+m["id"+n]).css("display","none"),n="";return 0!=g&&(n="_$"+g),c.attr("webSocket",a+","+r),s.attr("fmtInx",x),i.addClass("input-group-addon"),i.text("500"),o.css("width","100%"),o.append(c),o.append(u),l.append(d),u.append(p),s.append(o),s.append(f),s}return""}}(m):"directiveInput"==t?function(n,t){var r="";0!=g&&(r="_$"+g);var e=$("<div></div>").css("position","relative"),a=$("<div></div>").addClass("input-group"),i=$("<div></div>").addClass("btn btn-default").text(n.name),s=$("<div></div>").addClass("input-group-btn"),o=$("<input />").addClass("form-control").attr("id","inputAll_"+m["id"+r]),d=$("<div></div>").addClass("input-group-btn"),l=$("<span></span>").addClass("glyphicon glyphicon-plus-sign").attr("id","icon_"+m["id"+r]),c=$("<button></button>").addClass("btn btn-default").attr("id","plusBtn_"+m["id"+r]),u=$("<button></button>").addClass("btn btn-default").text("发送").attr("id","sendBtnAll_"+m["id"+r]);$("button[id*=sendBtnAll_"+m["id"+r]+"]").on("click",function(t){t.stopPropagation();var e={};for(var a in n.params)e[n.params[a].name]=$("input[id*=inputAll_"+m["id"+r]+"]").val();M.sendItemDirByValue(m.id,e)});var p=$("<div></div>").attr("id","ulWrap_"+m["id"+r]).css("display","none"),f=$("<ul></ul>").css("width","auto").css("box-shadow","1px 1px 10px 1px rgba(0,0,0,.5)").css("border","1px solid #ddd").css("position","absolute").css("list-style","none").css("background-color","#ddd").css("margin",0).css("padding","0px").css("z-index","99999"),v=function(n){var t=M.getParameter("resourceId"),e=n.id,a=$("<li></li>").css("margin","10px"),r=$("<div></div>").addClass("input-group"),i=$("<div></div>").addClass("input-group-addon"),s=$("<div></div>").attr("id","add_"+n.id).addClass("input-group-addon").text("-"),o=$("<div></div>").addClass("input-group-btn"),d=$("<span></span>").text(n.label),l=$("<input />").addClass("form-control").attr("id","input_"+n.id),c=$("<button></button>").addClass("btn btn-primary").text("发送").attr("id","sendBtn_"+n.id);l.css("min-width","60px"),M.getKpiValueCi([t],[e],function(t){$("[id*=add_"+n.id+"]").text(t[0].value)});var u={ciid:[t].toString(),kpi:[e].toString()},p=Math.uuid();T.unregister(p);var f="register";return T.register(p,f,function(t){$("[id*=add_"+n.id+"]").text(t.data.value)}),T.send(p,f,"kpi",u),$("input[id*=input_"+n.id).on("change",function(t){n.$value=$(this).val()}),$("input[id*=input_"+n.id).on("click",function(t){t.stopPropagation()}),$("button[id*=sendBtn_"+n.id).on("click",function(t){(void 0)(),t.stopPropagation();var e=$("input[id*=input_"+n.id).val(),a={};a[n.name]=e,M.sendItemDirByValue(m.id,a)}),i.append(d),o.append(c),r.append(i).append(s).append(l).append(o),a.append(r),a};$("div[id*=ulWrap_"+m["id"+r]+"]").on("click",function(t){t.stopPropagation()});var r="";0!=g&&(r="_$"+g);for(var b in n["params"+r])f.append(v(n["params"+r][b]));return e.attr("fmtInx",x),a.append(o),a.append(d),s.append(i),c.append(l),d.append(c),d.append(u),p.append(f),e.append(a),e.append(p),e}(m):"buttonGroup"==t?function(t,r){var e=$("<div></div>").addClass("btn-group"),a=function(t,e){r.$attr("on/click"),Math.uuid(32);var a=$("<span></span>").addClass(e.icon||"glyphicon glyphicon-asterisk"),n=$("<button></button>").addClass(e.class||"btn btn-primary").text(m[e.name]?e.sublabel:e.label).attr("id","dataTable_btn_"+t);return n.attr("fmtInx",x),n.prepend(a),n};for(var n in r.content)e.append(a(n,r.content[n]));return e}(0,e):"buttonGroupAlert"==t?function(t,e){var a=$("<div></div>").addClass("btn-group"),n=function(t,e){e.$attr("on/click"),Math.uuid(32);var a=$("<span></span>").addClass(e.icon||"glyphicon glyphicon-asterisk"),n=$("<button></button>").addClass(e.class||"btn btn-primary").text(e.label).attr("id","dataTable_btn_"+t);return n.attr("fmtInx",x),n.prepend(a),e.disabled&&n.attr("disabled","true"),n};for(var r in e.content)e.content[r].disabled=!1,"confirm"==e.content[r].name&&0!=m.state&&-100!=m.state&&(e.content[r].disabled=!0),"ignore"==e.content[r].name&&0!=m.state&&-100!=m.state&&5!=m.state&&10!=m.state&&(e.content[r].disabled=!0),a.append(n(r,e.content[r]));return a}(0,e):"orderStatus"==t?function(){var t=$("<span></span>").addClass("label");t.attr("fmtInx",x),10==p?t.text("未发布").addClass(" label-primary"):100==p?t.text("处理中").addClass("label-warning"):200==p?t.text("已完成").addClass("label-info"):150==p&&t.text("已撤销").addClass("label-info");return t}():"status"==t?function(){var t=$("<span></span>").addClass("label");t.attr("fmtInx",x),0==p||-100==p?t.text("新产生").addClass("label-info"):5==p?t.text("已确认").addClass("label-primary"):10==p?t.text("已确认").addClass("label-primary"):20==p?t.text("已解决").addClass("label-success"):t.text("已忽略").addClass("");return t}():"statusZhanJiang"==t?function(){var t=$("<span></span>").addClass("label");t.attr("fmtInx",x),0==p||-100==p?t.text("待诊断").addClass("label-info"):5==p?t.text("已确认").addClass("label-primary"):10==p?t.text("已确认").addClass("label-primary"):20==p?t.text("已解决").addClass("label-success"):t.text("已忽略").addClass("");return t}():"dateTimePicker"==t?$("<div></div>"):"alarmSource"==t?function(t,e){(a=$("<span></span>")).attr("fmtInx",x),0==e.cursor?a.css("cursor","default"):a.css("cursor","pointer");if(1==p)a.text("在线预警");else if(2==p)a.text("智能诊断");else if(3==p)a.text("大数据分析");else if(4==p)a.text("离线诊断");else if(130==p)a.text("点检异常");else if(100==p)a.text("当日点检");else if(110==p)a.text("精密检测");else if(120==p)a.text("检修计划");else if(140==p)a.text("备修委托");else if(210==p)a.text("临时委托");else if(220==p)a.text("辊道备修");else if("合并告警"==p){var a=$("<a></a>");a.attr("fmtInx",x),a.css("cursor","pointer"),a.text("合并告警")}else a.text(p);return a}(0,e):"customHtml"==t?function(t,e){var a=$("<div></div>"),n=e.style||{},r=(e.class,e.content||{});if(t.fileList instanceof Array)t.fileList.forEach(function(t){var e=$('<a target="_blank" href="'+t.filePath+'">'+t.label+"</a><br />");a.append(e)});else{"object"==_typeof(n)&&a.css(n);var i=e.attr?e.attr:"id";a.attr(i,t[e.data]),a.append(r)}return a}(m,e):"uploadFile2"==t?function(t,e){var a=$("<div></div>");a.attr("id","group"),a.addClass("btn-group");var n=$("<td></td>"),r=t.style||{},i=t.btnStyle||{},s=t.class||"",o=t.disabled,d=$("<button></button>");$("<button></button>").attr("id","submitBtn");t.$attr("on/submit");t.group,d.addClass("btn btn-default"),d.text("预览"),n.addClass(s),"object"==_typeof(r)&&n.css(r);var l=$("<button></button>");l.attr("id","buttonUpload");var c=$("<span></span>");c.attr("id","txt");var u=$("<span></span>"),p=(t.$attr("on/click"),$("<input />"));p.attr("id","fileDom"),p.attr("type","file"),p.css("display","none"),l.addClass("btn btn-default"),l.attr("type","button"),l.css("top","3px"),a.append(l),t.icon&&(u.addClass(t.icon),l.append(u));o&&l.prop("disabled","disabled");return l.css(i),c.text("选择文件"),l.append(c),d.off("click"),d.on("click",function(t){M.createSystemPopupByJsonName("imagePrev",{title:"图片内容预览",width:"500px",config:void 0},{file:void 0})}),n.append(p),n.append(a),n}(v):a(m,e)).attr("src_data",p),f.attr("col_index",r),n.append(f),n.html()}}),e.push({targets:r,global:O,width:v.width||null,data:0!=g?v.value+"_$"+g:v.value})},n=function(t){for(var e in S)a(t*S.length+parseInt(e),t,e,S[e])},r=0;r<F;r++)n(r);var s=function(t){var r=[],e=function(t,e){var a=Math.floor(t/F),n=t%F;r[a]||(r[a]={}),function(t,e){for(var a in e)t[a]=e[a]}(r[a],function(t,e){var a={};for(var n in t){var r=0!=e?"_$"+e:"";a[n+r]=t[n]}return a}(e,n))};for(var a in t)e(a,t[a]);return r},i=s(k),o="";o="standard"==D?$.ProudSmart.datatable.footerdom:"none"==D?"":"pageAndTotal"==D?'<"row"<"clo-lg-12">>t<"row footerdom"<"col-lg-4"l><"col-lg-8"p>>':'<"row"<"clo-lg-12">>t<"row footerdom"<"col-lg-12"p>>';var d,c,u,p,f,v,b,m,l={ordering:!1,dom:o,language:$.ProudSmart.datatable.language,rowCallback:function(T,D,A){var B;h.paging?(B=s([D])[0],k.push(B)):B=D;var t=k.find(function(t){if(t[_]===D[_])return!0}),e=function(t){for(var e in t)this[e]=t[e]};B.hasOwnProperty("dom")||Object.defineProperty(B,"dom",{enumerable:!1,value:$(T)});C.push(B),e.prototype={removeRow:function(t){if(I.row(T._DT_RowIndex).remove().draw(!1),"function"==typeof t){var e=[],a=I.data();for(var n in a)parseInt(n)==n&&e.push(a[n]);t(e)}}},t.tableElement=new e(B);var a=h.$attr("on/rowClick");$(T).on("click",function(t){a&&a({index:A,row:B})});for(var n=function(t,e,a,i){var s=$(T).find("[col_index*="+t+"]");if("valueBased"==i.type){var n=s.attr("src_data");n||(n="");var r=i.options[n];r||(r=i.options[""]),i=r}if("checkbox"==i.type)s.on("change",function(t){$.fn.every=function(a){var n=!0;return $(this).each(function(t,e){a(e)||(n=!1)}),n};var e=J.find("input#checkbox").every(function(t){return $(t).prop("checked")});e?J.find("#checkboxall").prop("checked",!0):J.find("#checkboxall").removeAttr("checked")});else if("button"==i.type||"link"==i.type){var o=i.$attr("on/click");s.on("click",function(t){"function"==typeof o&&o({index:A,row:B,columnIndex:a})})}else if("alarmSource"==i.type){var o=i.$attr("on/click");s.on("click",function(t){"function"==typeof o&&o({index:A,row:B,columnIndex:a})})}else if("buttonGroup"==i.type)for(var d in i.content)!function(t){var e=i.content[t].$attr("on/click"),a=s.find("#dataTable_btn_"+t);a.off("click"),a.on("click",function(t){t.stopPropagation(),B.nodeId&&M.setParameter("id",B.nodeId),"function"==typeof e&&e({index:A,row:B})})}(d);else if("buttonGroupAlert"==i.type)for(var d in i.content)!function(t){var e=i.content[t].$attr("on/click"),a=s.find("#dataTable_btn_"+t);a.off("click"),a.on("click",function(t){t.stopPropagation(),"function"==typeof e&&e({index:A,row:B})})}(d);else if("input"==i.type){var l=i.$attr("on/change");s.val(D[i.value]||""),s.on("change",function(t){t.stopPropagation(),l&&l({index:A,row:B,value:s.val()})})}else if("uploadFile2"==i.type){var c=$("<button></button>");c.addClass("btn btn-primary"),c.text("上传");var u=i.$attr("on/submit"),p=$(T).find("#fileDom"),f=$(T).find("#group"),v=$(T).find("#buttonUpload"),b=$(T).find("#txt"),m={};m.group=i.group,c.on("click",function(t){M.uploadFile1(file,m,function(t){c.remove(),b.text(file.name+"已经成功上传！"),cfg=t.data,u&&u(t,p,i,B)})}),p.on("change",function(t){file=p[0].files[0],b.css({overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap",width:"80px",display:"block"}),b.text(file.name),b.attr("title",file.name),f.append(c)}),v.on("click",function(t){p.trigger("click")})}else if("dateTimePicker"==i.type){s.children().remove();var g=$("<div></div>"),x=i.style;"object"==_typeof(x)&&g.css(x);var h=i.class||"",y=i.value;g.addClass(h);var k=$("<div></div>"),l=i.$attr("on/change"),C=Math.uuid(),w=$("<input id=dateTime"+C+" />").addClass("form-control").attr("type","text");g.append(k),k.css("position","relative"),k.append(w),setTimeout(function(){$$.loadExternalJs(["laydate"],function(t){t.render({elem:"#dateTime"+C,theme:"#393D49",type:"datetime",btns:["clear","confirm"],value:y?useMomentFormat(y,"YYYY-MM-DD HH:mm:ss"):"",done:function(t,e,a){l&&l({target:M,global:O,row:B,value:{getUTCDateString:""==t?"":formatDatebyMomentToUTC(t),getDateString:t}})}})})}),s.append(g)}else if("select"==i.type){var n=i.value+"",l=i.$attr("on/change"),_=("function"==typeof i.options?i.options(D):i.options)||[],S=i.format||{id:"id",label:"label"},I=0,P=_.map(function(t){var e={id:I,text:t[S.label]};return I++,e});s.children().remove(),$$.loadExternalJs(["select2"],function(){var t=$("<select></select>"),n=i.$attr("on/change");t.css("width","100%");var e=_.find(function(t){return t[S.id]==D[i.value]}),a=_.indexOf(e)+"",r={language:{noResults:function(){return i.noresults||"没有该匹配项"}},placeholder:i.placeholder||"请选择...",data:P};t.on("select2:select",function(t){if("function"==typeof n){var e=t.params.data.id,a=_[e];try{n({row:B,current:i,value:a})}catch(t){}}}),s.append(t),t.select2(r),t.val(a),t.trigger("change.select2")})}},r=function(t){for(var e in S)n(t*S.length+parseInt(e),t,e,S[e])},i=0;i<F;i++)r(i);j(T)(P)},initComplete:function(){},pageLength:A,columns:t,columnDefs:e};if(h.paging?(l.processing=!0,l.serverSide=!0,l.ajax=(d={},c=h.paging,u=h.params,p=$.extend({pages:1,url:"",data:null,method:"POST"},d),f=-1,m=b=v=null,function(n,r,t){var e=!1,a=n.start,i=n.start,s=n.length,o=a+s;if(n.order.pop(),t.clearCache?(e=!0,t.clearCache=!1):(f<0||a<f||v<o||JSON.stringify(n.order)!==JSON.stringify(b.order)||JSON.stringify(n.columns)!==JSON.stringify(b.columns)||(JSON.stringify(n.search),JSON.stringify(b.search)),e=!0),b=$.extend(!0,{},n),e){if(a<f&&(a-=s*(p.pages-1))<0&&(a=0),v=(f=a)+s*p.pages,n.start=a,n.length=s*p.pages,$.isFunction(p.data)){var d=p.data(n);d&&$.extend(n,d)}else $.isPlainObject(p.data)&&$.extend(n,p.data);var l={start:n.start,length:n.length,statCount:1==n.draw};c(u,l,function(t,e){t.forEach(function(t){t.selected=!1});var a={};a.data=t,a.draw=n.draw,a.recordsTotal=null!=e?-1==e?m.recordsTotal:e:t.length,a.recordsFiltered=a.recordsTotal,m=$.extend(!0,{},a),f!=i&&a.data.splice(0,i-f),-1<=s&&a.data.splice(s,a.data.length),r(a)})}})):l.data=i,I&&(I.destroy(),J.empty()),M.on("$destroy",function(){I&&I.destroy()}),I=J.DataTable(l),w){var g=$(J.find("th")[0]);g.children().remove(),g.text("");var x=$('<input type="checkbox" id="checkboxall"/>');x.on("change",function(t){var e=$(this).prop("checked");e?J.find("input#checkbox").prop("checked",!0):J.find("input#checkbox").removeAttr("checked")}),g.append(x)}M.search=function(){if(1==arguments.length){var t=arguments[0];J.DataTable().search(t,!1,!0)}else if(2==arguments.length){var e=arguments[0],t=arguments[1];J.DataTable().column(e).search(t,!1,!0)}},J.css("width","100%"),I.getChecked=function(){var t=C.filter(function(t,e,a){return!!t.dom.find("input#checkbox").prop("checked")&&a.indexOf(t)===e});return t},y&&y(I)})})};var t=a.$attr("on/init");if("function"==typeof t)if(i.cacheAllData)r=i.cacheAllData.on("domainTreeQuery",function(){try{t({target:M,global:O})}catch(t){console.error(t)}});else try{t({target:M,global:O})}catch(t){console.error(t)}else o.resolve("underwatch"),function(){if("simulate"==d){var t=a.$attr("simulate");null==t?t={size:4,formatter:[{label:"label",value:function(t,e){return"设备列表"+t}},{label:"data1",value:function(t,e){return e.random([0,100])}},{label:"data2",value:function(t,e){return e.random([0,100])}},{label:"data3",value:function(t,e){return e.random([0,1])}}]}:null==t.formatter&&(t.formatter=[{label:"label",value:function(t,e){return"设备列表"+t}},{label:"data1",value:function(t,e){return e.random([0,100])}},{label:"data2",value:function(t,e){return e.random([0,100])}},{label:"data3",value:function(t,e){return e.random([0,1])}}]),M.getSimulateList(t,function(t){M.render(t)})}else if("alert"==d)M.getAllAlerts(function(t){M.render(t)});else if("newdevice"==d){var e={domainPath:s.user.domains};M.getDevicesByCondition(e,function(t){M.render(t)})}else"energyType"==d?M.energyTypeList(function(t){M.render(t)}):"currentDirectiveByDevice"==d?M.currentDirective(function(t){M.render(t)}):"currentAlertByDevice"==d?M.getCurrentAlert(function(t){M.render(t)}):"currentDevicesByProject"==d&&M.getCurrentDevices(function(t){M.render(t)})}();l.underWatch=!0}(a)}),P&&P.$on("$destroy",function(){r&&r()}),l}});
//# sourceMappingURL=../../map/toolkit/component/dataTableAdvance.js.map
