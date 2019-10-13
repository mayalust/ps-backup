define(["directives/directives","bootstrap-dialog","datatables.net","datatables.net-bs","datatables.net-select"],function(t,l,e){"use strict";t.initDirective("alertTable",["$timeout","$compile","growl","$filter",function(t,n,b,s){return{restrict:"A",controller:["$scope","$element","$attrs",function(i,t,e){var u,a=t;i.$on(Event.ALERTINFOSINIT+"_view",function(t,e){u&&(u.destroy(),a.empty()),!1,u=a.DataTable({dom:e.option[0]&&0<e.option[0].length?$.ProudSmart.datatable.footerdom:"",language:$.ProudSmart.datatable.language,data:e.option[0],pageLength:i.selLength,order:[[6,"desc"]],columns:[{title:"告警对象",data:"devName"},{title:"告警名称",data:"title"},{title:"告警消息",data:"message"},{title:"告警级别",data:"severity"},{title:"状态",data:"state"},{title:"首次告警时间",data:"firstArisingTime"},{title:"最近告警时间",data:"arisingTime"},{title:"次数",data:"count"},{title:"关闭告警时间",data:"closeTime"},$.ProudSmart.datatable.optionCol3],columnDefs:[{targets:0,data:"devName",render:function(t,e,a){var n="";if(i.menuitems.A02_S02){var s=a.nodeTypeList[a.nodeTypeList.length-1];n=300==s?"[管理域]"+t:301==s?"[客户域]"+t:302==s?"[项目域]"+t:"<a href='#/facility/DEVICESEARCH/"+a.nodeId+"'>"+t+"</a>"}else n=t;return n}},{targets:1,data:"title",render:function(t,e,a){return i.menuitems.A01_S05&&a.agentId&&-1!=a.agentId.indexOf("RULE:")?"<a href='#/alertRules/"+a.nodeId+"/"+a.alertCode+"'>"+t+"</a>":t}},{targets:2,data:"message",render:function(t,e,a){return escape(t)}},{targets:3,data:"severity",render:function(t,e,a){var n="无数据",s="alerts-warning";return 4==t?(n="严重",s="alerts-critical"):3==t?(n="重要",s="alerts-major"):2==t?(n="次要",s="alerts-minor"):1==t&&(n="警告",s="alerts-warning"),"<span class='label "+s+"'>"+n+"</span>"}},{targets:4,data:"state",render:function(t,e,a){return 0==t?"<span class='label label-info'>新产生</span>":5==t?"<span class='label label-primary'>已确认</span>":10==t?"<span class='label label-warning'>处理中</span>":20==t?"<span class='label label-success'>已解决</span>":30==t?"已忽略":"无数据"}},{targets:5,data:"firstArisingTime",render:function(t,e,a){return s("date")(t,"yyyy-MM-dd HH:mm:ss")}},{targets:6,data:"arisingTime",render:function(t,e,a){return s("date")(t,"yyyy-MM-dd HH:mm:ss")}},{targets:8,data:"closeTime",render:function(t,e,a){return s("date")(t,"yyyy-MM-dd HH:mm:ss")}},{targets:9,orderable:!1,data:"option",render:function(t,e,a){var n="<div class='btn-group btn-group-sm'>";return 0==a.state?i.menuitems.A08_S05&&(n+="<button id='claim-btn' class='btn btn-primary' ><span class='hidden-xs'> 确认</span></button>"):i.menuitems.A08_S05&&(n+="<button disabled class='btn btn-primary' ><span class='hidden-xs'> 确认</span></button>"),0==a.state||5==a.state||10==a.state?i.menuitems.A07_S05&&(n+="<button id='close-btn' class='btn btn-default' ><span class='hidden-xs'> 关闭</span></button>"):i.menuitems.A07_S05&&(n+="<button disabled class='btn btn-default' ><span class='hidden-xs'> 关闭</span></button>"),!i.menuitems.A06_S05||0!=a.state&&5!=a.state||(n+="<button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'> 更多<span class='caret'></span></button>",n+="<ul class='dropdown-menu' role='menu'>",i.menuitems.A06_S05&&(n+="<li><a role='button' id='order-btn'>转工单</a></li>"),n+="</ul>"),n+="</div>"}}],rowCallback:function(t,e,a){e.selected?$(t).addClass("selected"):$(t).removeClass("selected"),n(t)(i)}})}),a.on("init.dt",function(){}),a.on("length.dt",function(t,e,a){i.selLength=a}),a.on("change","#allselect-btn",function(t){if(t.stopPropagation(),t.target.checked){u.rows().select();for(var e=u.rows({selected:!0}),a=0;a<e.nodes().length;a++){u.row(e.nodes()[a]).data().selected=!0}u.rows().invalidate().draw(!1)}else{for(e=u.rows({selected:!0}),a=0;a<e.nodes().length;a++){u.row(e.nodes()[a]).data().selected=!1}u.rows().deselect(),u.rows().invalidate().draw(!1)}i.selectedHandler()}),a.on("change",".itemCheckBox",function(t){var e=$(this).closest("tr"),a=u.row(e);t.target.checked?a.data().selected=!0:a.data().selected=!1;var n=u.rows({selected:!0});n.count()!=u.rows()[0].length?($("#allselect-btn").attr("checked",!1),$("#allselect-btn").prop("checked",!1)):n.count()==u.rows()[0].length&&($("#allselect-btn").attr("checked",!0),$("#allselect-btn").prop("checked",!0)),i.selectedHandler()}),a.on("click","#claim-btn",function(t){t.stopPropagation(),t.preventDefault();var e=$(this).closest("tr"),a=u.row(e);i.doAction("claim",[a.data().alertId],function(t){t&&i.reloadViewId()})}),a.on("click","#close-btn",function(t){t.stopPropagation(),t.preventDefault();var e=$(this).closest("tr"),a=u.row(e);i.doAction("close",[a.data().alertId],function(t){0==t.code?i.reloadViewId():a.cells().invalidate().draw(!1)})}),a.on("click","#order-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=u.row(e),n=a.data();i.ngDialogOrder(n),i.submitBtn=function(){i.doAction("submit-btn",111,function(t){t&&(a.data().state=10,a.cells().invalidate().draw(!1))})}}),a.on("click","#cancel-btn",function(t){t.preventDefault();var e=$("#newtr").closest("tr"),a=u.row(e);a.data();e.css("display","none"),i.doAction("cancel-btn",a.data(),function(t){})}),i.$on("addOrder",function(){i.addOrder()}),i.$on("selectedOrder",function(){i.selectedOrder()}),i.$on("selectedClose",function(){i.selectedClose()}),i.$on("changeState",function(){!function(){for(var t=!1,e=u.rows({selected:!0}),a=(e.count(),e.nodes()),n=0;n<a.length;n++){var s=u.row(a[n]);s.data();s.cells().invalidate().draw(!1),t=!0}t&&($(".itemCheckBox").each(function(){$(this).attr("checked",!1)}),$("#allselect-btn").attr("checked",!1),u.rows().deselect())}()}),i.selectedOrder=function(){var t=u.rows({selected:!0}),c=t.count(),d=t.nodes();0!=c?l.show({title:"提示",closable:!1,message:"确认您所选择的 "+c+" 条记录吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(t){for(var e=0,a=0,n=[],s=!1,l=0;l<d.length;l++){var o=u.row(d[l]),r=o.data();0==r.state?(n.push(r.alertId),e++,o.data().state=5):a++,c==e+a&&(s=!0,b.success("成功确认"+e+"个,失败"+a+"个",{}),i.selectAlertList.selList=[],i.$apply())}s&&i.doAction("claim",n,function(t){t&&(o.cells().invalidate().draw(!1),$(".itemCheckBox").each(function(){$(this).attr("checked",!1)}),$("#allselect-btn").attr("checked",!1),u.rows().deselect())}),t.close()}},{label:"取消",action:function(t){t.close()}}]}):b.warning("当前没有选中的告警项",{})},i.selectedClose=function(){var t=u.rows({selected:!0}),c=t.count(),d=t.nodes();0!=c?l.show({title:"提示",closable:!1,message:"确认您所选择的 "+c+" 条记录吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(t){for(var e=0,a=0,n=[],s=!1,l=0;l<d.length;l++){var o=u.row(d[l]),r=o.data();0==r.state||5==r.state||10==r.state?(n.push(r.alertId),e++,o.data().state=20):a++,c==e+a&&(s=!0,b.success("成功确认"+e+"个,失败"+a+"个",{}),i.selectAlertList.selList=[],i.$apply())}s&&i.doAction("close2",n,function(t){t&&(o.cells().invalidate().draw(!1),$(".itemCheckBox").each(function(){$(this).attr("checked",!1)}),$("#allselect-btn").attr("checked",!1),u.rows().deselect())}),t.close()}},{label:"取消",action:function(t){t.close()}}]}):b.warning("当前没有选中的告警项",{})},i.addOrder=function(){var t=u.rows({selected:!0}),e=t.count(),a=t.nodes();if(0!=e){for(var n=0,s=0,l=[],o=!1,r=0;r<a.length;r++){var c=u.row(a[r]),d=c.data();0==d.state||5==d.state?(l.push(d.alertId),n++,c.data().state=10):s++,e==n+s&&(o=!0,b.success("成功确认"+n+"个,失败"+s+"个",{}))}o&&i.doAction("order",l,function(t){})}else b.warning("当前没有选中的告警项",{})}}]}}]),t.initDirective("alertPageTable",["$timeout","$compile","growl","$filter",function(t,n,b,s){return{restrict:"A",controller:["$scope","$element","$attrs",function(i,t,e){var u,a=t;i.$on(Event.ALERTINFOSINIT,function(t,e){u&&(u.destroy(),a.empty()),!1,u=a.DataTable({ordering:!1,dom:$.ProudSmart.datatable.specialdom,language:$.ProudSmart.datatable.language,processing:!0,serverSide:!0,select:$.ProudSmart.datatable.select,ajax:i.pipeline(),columns:[$.ProudSmart.datatable.selectCol,{title:"告警对象",data:"devName"},{title:"告警名称",data:"title"},{title:"告警消息",data:"message"},{title:"告警级别",data:"severity"},{title:"状态",data:"state"},{title:"首次告警时间",data:"firstArisingTime"},{title:"最近告警时间",data:"arisingTime"},{title:"次数",data:"count"},{title:"关闭告警时间",data:"closeTime"},$.ProudSmart.datatable.optionCol3],columnDefs:[{targets:0,orderable:!1,render:function(t,e,a){return"display"==e?t?'<input class="itemCheckBox" checked type="checkbox">':'<input class="itemCheckBox" type="checkbox">':""}},{targets:1,data:"devName",render:function(t,e,a){var n="";if(i.menuitems.A02_S02){var s=a.nodeTypeList[a.nodeTypeList.length-1];n=300==s?"[管理域]"+t:301==s?"[客户域]"+t:302==s?"[项目域]"+t:"<a href='#/facility/DEVICESEARCH/"+a.nodeId+"'>"+t+"</a>"}else n=t;return n}},{targets:2,data:"title",render:function(t,e,a){return i.menuitems.A01_S05&&a.agentId&&-1!=a.agentId.indexOf("RULE:")?"<a href='#/alertRules/"+a.nodeId+"/"+a.alertCode+"'>"+t+"</a>":t}},{targets:3,data:"message",render:function(t,e,a){return escape(t)}},{targets:4,data:"severity",render:function(t,e,a){var n="无数据",s="alerts-warning";return 4==t?(n="严重",s="alerts-critical"):3==t?(n="重要",s="alerts-major"):2==t?(n="次要",s="alerts-minor"):1==t&&(n="警告",s="alerts-warning"),"<span class='label "+s+"'>"+n+"</span>"}},{targets:5,data:"state",render:function(t,e,a){return 0==t?"<span class='label label-info'>新产生</span>":5==t?"<span class='label label-primary'>已确认</span>":10==t?"<span class='label label-warning'>处理中</span>":20==t?"<span class='label label-success'>已解决</span>":30==t?"已忽略":"无数据"}},{targets:6,data:"firstArisingTime",render:function(t,e,a){return s("date")(t,"yyyy-MM-dd HH:mm:ss")}},{targets:7,data:"arisingTime",render:function(t,e,a){return s("date")(t,"yyyy-MM-dd HH:mm:ss")}},{targets:9,data:"closeTime",render:function(t,e,a){return s("date")(t,"yyyy-MM-dd HH:mm:ss")}},{targets:10,data:"option",render:function(t,e,a){var n="<div class='btn-group btn-group-sm'>";return 0==a.state?i.menuitems.A08_S05&&(n+="<button id='claim-btn' class='btn btn-primary' ><span class='hidden-xs'> 确认</span></button>"):i.menuitems.A08_S05&&(n+="<button disabled class='btn btn-primary' ><span class='hidden-xs'> 确认</span></button>"),0==a.state||5==a.state||10==a.state?i.menuitems.A07_S05&&(n+="<button id='close-btn' class='btn btn-default' ><span class='hidden-xs'> 关闭</span></button>"):i.menuitems.A07_S05&&(n+="<button disabled class='btn btn-default' ><span class='hidden-xs'> 关闭</span></button>"),!i.menuitems.A06_S05||0!=a.state&&5!=a.state||(n+="<button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown'> 更多<span class='caret'></span></button>",n+="<ul class='dropdown-menu' role='menu'>",i.menuitems.A06_S05&&(n+="<li><a role='button' id='order-btn'>转工单</a></li>"),n+="</ul>"),n+="</div>"}}],rowCallback:function(t,e,a){e.selected?$(t).addClass("selected"):$(t).removeClass("selected"),n(t)(i)},drawCallback:function(t){0<this.api().data().length?$(".footerdom").show():($(".footerdom").hide(),$(".dataTables_wrapper .row").hide()),$(".dataTables_wrapper .dataTables_filter").empty(),$("#allselect-btn").attr("checked",!1),$("#allselect-btn").prop("checked",!1)}})}),a.on("init.dt",function(){var t=$(".special-btn").parent();t.html('<div class="btn-group margin-bottom-5"><button type="button" ng-click="selectedOrder();" ng-show="menuitems[&apos;A08_S05&apos;]" ng-disabled="confirmActiveAlert.length == 0" class="btn btn-default btn-sm"><i class="fa fa-check"></i><span class="hidden-sm"> 确认告警</span></button><button type="button" ng-click="selectedClose();" ng-show="menuitems[&apos;A07_S05&apos;]" ng-disabled="closeActiveAlert.length == 0" class="btn btn-default btn-sm"><i class="fa fa-close"></i><span class="hidden-sm"> 关闭告警</span></button><button type="button" ng-if="false" ng-click="addOrder();" class="btn btn-default btn-sm"><i class="fa fa-mail-forward"></i><span class="hidden-sm"> 转工单</span></button></div>'),n(t)(i)}),a.on("change","#allselect-btn",function(t){if(t.stopPropagation(),t.target.checked){u.rows().select();for(var e=u.rows({selected:!0}),a=0;a<e.nodes().length;a++){u.row(e.nodes()[a]).data().selected=!0}u.rows().invalidate().draw(!1)}else{for(e=u.rows({selected:!0}),a=0;a<e.nodes().length;a++){u.row(e.nodes()[a]).data().selected=!1}u.rows().deselect(),u.rows().invalidate().draw(!1)}i.selectedHandler()}),a.on("change",".itemCheckBox",function(t){var e=$(this).closest("tr"),a=u.row(e);t.target.checked?a.data().selected=!0:a.data().selected=!1;var n=u.rows({selected:!0});n.count()!=u.rows()[0].length?($("#allselect-btn").attr("checked",!1),$("#allselect-btn").prop("checked",!1)):n.count()==u.rows()[0].length&&($("#allselect-btn").attr("checked",!0),$("#allselect-btn").prop("checked",!0)),i.selectedHandler()}),a.on("click","#claim-btn",function(t){t.stopPropagation(),t.preventDefault();var e=$(this).closest("tr"),a=u.row(e);i.doAction("claim",[a.data().alertId],function(t){t&&(a.data().state=5,i.$broadcast(Event.ALERTINFOSINIT,{option:[]}))})}),a.on("click","#close-btn",function(t){t.stopPropagation(),t.preventDefault();var e=$(this).closest("tr"),a=u.row(e);i.doAction("close",[a.data().alertId],function(t){0==t.code?(a.data().state=20,null==t.data.closeTime&&(a.data().closeTime=t.data.actTime),i.$broadcast(Event.ALERTINFOSINIT,{option:[]})):a.cells().invalidate().draw(!1)})}),a.on("click","#order-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),s=u.row(e),a=s.data();i.ngDialogOrder(a),i.submitBtn=function(){i.doAction("submit-btn",111,function(t){if(t){var e=i.pageAlertList,a=s.data();for(var n in e)e[n].alertId==a.alertId&&(e[n].state=10),i.ajaxListUpdate.push(e[n]);u.ajax.reload()}})}}),a.on("click","#cancel-btn",function(t){t.preventDefault();var e=$("#newtr").closest("tr"),a=u.row(e);a.data();e.css("display","none"),i.doAction("cancel-btn",a.data(),function(t){})}),i.$on("addOrder",function(){i.addOrder()}),i.$on("selectedOrder",function(){i.selectedOrder()}),i.$on("selectedClose",function(){i.selectedClose()}),i.$on("changeState",function(){!function(){for(var t=!1,e=u.rows({selected:!0}),a=(e.count(),e.nodes()),n=0;n<a.length;n++){var s=u.row(a[n]);s.data();s.cells().invalidate().draw(!1),t=!0}t&&($(".itemCheckBox").each(function(){$(this).attr("checked",!1)}),$("#allselect-btn").attr("checked",!1),u.rows().deselect())}()}),i.selectedOrder=function(){var t=u.rows({selected:!0}),r=t.count(),c=t.nodes();0!=i.confirmActiveAlert.length?l.show({title:"提示",closable:!1,message:"当前有 "+i.confirmActiveAlert.length+" 个告警未确认状态，要确认吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(t){for(var e=0,a=0,n=[],s=!1,l=0;l<c.length;l++){var o=u.row(c[l]);0==o.data().state?(e++,o.data().state=5):a++,r==e+a&&(s=!0,b.success("成功确认"+e+"个,失败"+a+"个",{}),i.selectAlertList.selList=[],i.$apply())}i.confirmActiveAlert.forEach(function(t){n.push(t.alertId)}),s&&i.doAction("claim2",n,function(t){t&&(i.confirmActiveAlert=[],o.cells().invalidate().draw(!1),$(".itemCheckBox").each(function(){$(this).attr("checked",!1)}),$("#allselect-btn").attr("checked",!1),u.rows().deselect())}),t.close()}},{label:"取消",action:function(t){t.close()}}]}):b.warning("当前没有要确认的告警项",{})},i.selectedClose=function(){var t=u.rows({selected:!0}),c=t.count(),d=t.nodes();0!=i.closeActiveAlert.length?l.show({title:"提示",closable:!1,message:"当前有 "+i.closeActiveAlert.length+" 个告警未关闭状态，要关闭吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(t){for(var e=0,a=0,n=[],s=!1,l=0;l<d.length;l++){var o=u.row(d[l]),r=o.data();0==r.state||5==r.state||10==r.state?(e++,o.data().state=20):a++,c==e+a&&(s=!0,b.success("成功关闭"+e+"个,失败"+a+"个",{}),i.selectAlertList.selList=[],i.$apply())}s&&(i.closeActiveAlert.forEach(function(t){n.push(t.alertId)}),i.doAction("close2",n,function(t){t&&(i.closeActiveAlert=[],o.cells().invalidate().draw(!1),$(".itemCheckBox").each(function(){$(this).attr("checked",!1)}),$("#allselect-btn").attr("checked",!1),u.rows().deselect())})),t.close()}},{label:"取消",action:function(t){t.close()}}]}):b.warning("当前没有要关闭的告警项",{})},i.addOrder=function(){var t=u.rows({selected:!0}),e=t.count(),a=t.nodes();if(0!=e){for(var n=0,s=0,l=[],o=!1,r=0;r<a.length;r++){var c=u.row(a[r]),d=c.data();0==d.state||5==d.state?(l.push(d.alertId),n++,c.data().state=10):s++,e==n+s&&(o=!0,b.success("成功确认"+n+"个,失败"+s+"个",{}))}o&&i.doAction("order",l,function(t){})}else b.warning("当前没有选中的告警项",{})}}]}}])});
//# sourceMappingURL=../../map/js/directives/equipment-malfunctions-dom.js.map