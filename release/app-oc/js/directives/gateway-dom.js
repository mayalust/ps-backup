define(["directives/directives","bootstrap-dialog","datatables.net","datatables.net-bs","datatables.net-select"],function(t,u,e){"use strict";t.initDirective("notConfirmedTable",["$timeout","$compile","growl",function(t,e,a){return{restrict:"A",controller:["$scope","$element","$attrs",function(s,t,a){var i,n=t;s.$on(Event.CMDBINFOSINIT+"not",function(t,e){i&&(i.destroy(),n.empty()),(i=n.DataTable({dom:e.data&&0<e.data.length?$.ProudSmart.datatable.footerdom:"",language:$.ProudSmart.datatable.language,data:e.data,select:$.ProudSmart.datatable.singleSelect,order:[[4,"desc"]],columns:[{data:"label",title:"设备名称"},{data:"externalDevId",title:"设备地址"},{data:"sn",title:"设备序列号"},$.ProudSmart.datatable.optionCol2,{data:"createTime",title:"",visible:!1}],rowCallback:function(t,e,a){},columnDefs:[{targets:0,data:"label",render:function(t,e,a){return escape(t)}},{targets:1,data:"externalDevId",render:function(t,e,a){return escape(t)}},{targets:2,data:"sn",render:function(t,e,a){return escape(t)}},{targets:3,data:"option",render:function(t,e,a){return"<button id='play-btn' class='btn btn-primary' ><i class='fa fa-play hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 识别</span></button>","<button id='del-btn' class='btn btn-default' ><i class='fa fa-minus hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 删除</span></button>","</div>","<div class='btn-group btn-group-sm'><button id='play-btn' class='btn btn-primary' ><i class='fa fa-play hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 识别</span></button><button id='del-btn' class='btn btn-default' ><i class='fa fa-minus hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 删除</span></button></div>"}}]})).on("select",function(t,e,a,n){if("row"===a){var d=i.rows(n).data()[0];s.doActionUn("select",d)}})}),n.on("init.dt",function(){}),s.$on("table-search-handle",function(t,e){e.name==a.name&&i.search(e.value).draw()}),n.on("click","#play-btn",function(t){t.stopPropagation();var e=$(this).closest("tr"),a=i.row(e);s.doActionUn("save",a.data())}),n.on("click","#del-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=i.row(e);s.doActionUn("delete",a.data(),function(t){t&&a.remove().draw(!1)})})}]}}]),t.initDirective("cmdb3Table",["$timeout","$compile","growl",function(t,d,l){return{restrict:"A",controller:["$scope","$element","$attrs",function(c,t,a){var o,n=t,r=!1;c.$on(Event.CMDBINFOSINIT+"GATEACTIVE",function(t,e){o&&(o.destroy(),n.empty()),r=!1,o=n.DataTable({dom:e.data&&0<e.data.length?$.ProudSmart.datatable.footerdom:"",language:$.ProudSmart.datatable.language,select:$.ProudSmart.datatable.select,data:e.data,order:[[7,"desc"]],columns:[$.ProudSmart.datatable.selectCol,{data:"label",title:"设备名称"},{data:"externalDevId",title:"设备地址"},{data:"managedStatus",title:"管理状态"},{data:"modelId",title:"设备模板"},{data:"sn",title:"设备序列号"},$.ProudSmart.datatable.optionCol3,{data:"createTime",title:"",visible:!1}],rowCallback:function(t,e,a){e.selected?$(t).addClass("selected"):$(t).removeClass("selected"),d(t)(c)},columnDefs:[{orderable:!1,targets:0,render:function(t,e,a){return"display"==e?t?'<input class="itemCheckBox" checked type="checkbox">':'<input class="itemCheckBox" type="checkbox">':""}},{targets:1,data:"label",render:function(t,e,a){return 0<a.isEdit&&"display"==e?(r=!0,"<input class='form-control input-sm'  type='text' value='"+(t?escape(t):"")+"'>"):escape(t)}},{targets:2,data:"externalDevId",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input class='form-control input-sm'  type='text' value='"+t+"'>":escape(t)}},{targets:3,data:"managedStatus",render:function(t,e,a){return"deactive"==t?"未启用":"已启用"}},{targets:4,data:"modelId",render:function(t,e,a){var n="";if(null!=t&&""!=t&&c.rootModelDic){var d=c.rootModelDic[t];n=d?d.label:"默认模板类型"}return 0<a.isEdit&&"display"==e?"<div class='dropdowntree select-sm' placeholder='请选择...' model='"+t+"'  change='' options='rootModel' mark='nodes' />":n}},{targets:5,data:"sn",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input id='sn' name='sn' maxlength='20' style='width:100%' class='form-control input-sm' type='text' value='"+escape(t)+"'>":escape(t)}},{targets:6,data:"option",render:function(t,e,a){var n="<div class='btn-group btn-group-sm'>";return 0<a.isEdit?(n+="<button id='save-btn' class='btn btn-primary' ><i class='fa fa-save hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 保存</span></button>",n+="<button id='del-btn' class='btn btn-default' ><i class='fa fa-save hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 取消</span></button>"):(c.menuitems.D10_S03&&(n+="<button id='edit-btn' class='btn btn-primary' ><i class='fa fa-edit hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 管理</span></button>"),"deactive"!=a.managedStatus?(c.menuitems.D07_S03&&(n+="<button id='disable-btn' class='btn btn-default' ><i class='fa fa-stop hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 停用</span></button>"),c.menuitems.D08_S03&&(n+="<button id='del-btn' class='btn btn-default' disabled><i class='fa fa-trash hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 注销</span></button>")):(c.menuitems.D06_S03&&(n+="<button id='enable-btn' class='btn btn-default' ><i class='fa fa-play hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 启用</span></button>"),c.menuitems.D08_S03&&(n+="<button id='del-btn' class='btn btn-default'><i class='fa fa-trash hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 注销</span></button>"))),n+="</div>"}}]})}),n.on("init.dt",function(){var t=$(".special-btn").parent();t.html('<div class="btn-group btn-group-sm"><a ng-click="addIns()" class="btn btn-default"><i class="fa fa-plus"></i><span class="hidden-xs"> 添加设备</span></a><a ng-click="activeSelectedIns()" class="btn btn-default"><i class="fa fa-play"></i><span class="hidden-xs"> 启用所选设备</span></a><a ng-click="activeAllIns()" class="btn btn-default"><i class="fa fa-forward"></i><span class="hidden-xs"> 启用全部设备</span></a></div>'),d(t)(c)}),c.$on("table-search-handle",function(t,e){e.name==a.name&&o.search(e.value).draw()}),n.on("change","#allselect-btn",function(t){if(t.stopPropagation(),t.target.checked){o.rows().select();for(var e=o.rows({selected:!0}),a=0;a<e.nodes().length;a++){o.row(e.nodes()[a]).data().selected=!0}o.rows().invalidate().draw(!1)}else{for(e=o.rows({selected:!0}),a=0;a<e.nodes().length;a++){o.row(e.nodes()[a]).data().selected=!1}o.rows().deselect(),o.rows().invalidate().draw(!1)}c.selectedHandler("device")}),n.on("change",".itemCheckBox",function(t){var e=$(this).closest("tr"),a=o.row(e);t.target.checked?a.data().selected=!0:a.data().selected=!1;var n=o.rows({selected:!0});n.count()!=o.rows()[0].length?($("#allselect-btn").attr("checked",!1),$("#allselect-btn").prop("checked",!1)):n.count()==o.rows()[0].length&&($("#allselect-btn").attr("checked",!0),$("#allselect-btn").prop("checked",!0)),c.selectedHandler("device")}),n.on("click","#disable-btn",function(t){t.stopPropagation();var e=$(this).closest("tr"),a=o.row(e);c.doAction("deviceDeActive",a.data(),function(t){t&&(a.data().managedStatus="deactive",a.cells().invalidate().draw(!1))})}),n.on("click","#enable-btn",function(t){var e=$(this).closest("tr"),a=o.row(e);c.doAction("deviceActive",a.data(),function(t){t&&(a.data().managedStatus="active",a.cells().invalidate().draw(!1))})}),n.on("click","#save-btn",function(t){t.stopPropagation();var e=$(this).closest("tr"),a=o.row(e),n=$('div[name="modelId"]').attr("model");a.data().modelId=n;var d=$(e).find('input[name="label"]');if(a.data().label=$(d).val(),2==a.data().isEdit&&0==a.data().id){var s=$('div[name="domainPath"]').attr("model");a.data().domainPath=s;var i=$(e).find('input[name="externalDevId"]'),l=$(e).find('input[name="sn"]');a.data().externalDevId=$(i).val(),a.data().sn=$(l).val(),Array.prototype.push.apply(a.data(),action.addItem("gatewayInfo/config")),c.doAction("gateSave",a.data(),function(t){0==t?a.data().isEdit=2:(a.data().isEdit=0,a.data().id=t.id,a.data().managedStatus="deactive",a.data().onlineStatus=t.onlineStatus,a.cells().invalidate().draw(!1))})}else 4==a.data().isEdit&&c.doAction("gateSave",a.data(),function(t){0==t?a.data().isEdit=4:(a.data().isEdit=0,r=!1,a.cells().invalidate().draw(!1))})}),n.on("click","#del-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=o.row(e);4==a.data().isEdit?(a.data().isEdit=0,a.cells().invalidate(),r=!1):c.doAction("deviceDel",a.data(),function(t){t&&(r=!1,a.remove().draw(!1))})}),n.on("click","#edit-btn",function(t){if(t.preventDefault(),!r){var e=$(this).closest("tr"),a=o.row(e);c.doAction("deviceEdit",a.data())}}),c.activeAllIns=function(){for(var t=o.rows(),s=0,i=t.nodes(),e=0;e<i.length;e++){"deactive"==o.row(i[e]).data().managedStatus&&s++}0!=s?u.show({title:"提示",closable:!1,message:"确认从 "+escape(c.selectedGateitem.name)+" 网关启用全部设备吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(t){for(var a=0,n=0,e=0;e<i.length;e++){var d=o.row(i[e]).data();"deactive"==d.managedStatus&&c.doActiveHanddler(d,function(t,e){t?(o.row(e).data().managedStatus="active",o.row(e).cells().invalidate().draw(!1),a++):n++,s==a+n&&(o.rows().deselect(),l.success("成功启用设备"+a+"台,失败"+n+"台",{}))},i[e])}t.close()}},{label:"取消",action:function(t){t.close()}}]}):l.warning("当前没有未启用设备",{})},c.activeSelectedIns=function(){var t=o.rows({selected:!0}),s=t.count(),i=t.nodes();0!=s?u.show({title:"提示",closable:!1,message:"确认从 "+escape(c.selectedGateitem.name)+" 网关启用 "+s+" 台设备吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(t){for(var a=0,n=0,e=0;e<i.length;e++){var d=o.row(i[e]).data();c.doActiveHanddler(d,function(t,e){t?(o.row(e).data().managedStatus="active",o.row(e).cells().invalidate().draw(!1),a++):n++,s==a+n&&(o.rows().deselect(),l.success("成功启用设备"+a+"台,失败"+n+"台",{}))},i[e])}t.close()}},{label:"取消",action:function(t){t.close()}}]}):l.warning("当前没有选中的设备",{})}}]}}]),t.initDirective("gatewayTable",["$timeout","$compile","growl",function(t,n,l){return{restrict:"A",controller:["$scope","$element","$attrs",function(c,t,e){var o,a=t;c.$on(Event.CMDBINFOSINIT+"GATES",function(t,e){o&&(o.destroy(),a.empty()),!1,o=a.DataTable({dom:e.data&&0<e.data.length?$.ProudSmart.datatable.footerdom:"",language:$.ProudSmart.datatable.language,select:$.ProudSmart.datatable.select,data:e.data,pageLength:c.selLength,order:[[8,"desc"]],columns:[$.ProudSmart.datatable.selectCol,{data:"name",title:"网关名称"},{data:"externalGwId",title:"网关标识"},{data:"managedStatus",title:"管理状态"},{data:"onlineStatus",title:"在线状态"},{data:"customerId",title:(c.menuitems.S12&&c.menuitems.S12.label?c.menuitems.S12.label:"客户")+"名称",visible:c.baseConfig.customerConfig.display},{data:"projectId",title:(c.menuitems.S13&&c.menuitems.S13.label?c.menuitems.S13.label:"项目")+"名称",visible:c.baseConfig.projectConfig.display},$.ProudSmart.datatable.optionCol3,{data:"createTime",title:"",visible:!1}],columnDefs:[{orderable:!1,targets:0,render:function(t,e,a){return"display"==e?t?'<input class="itemCheckBox" checked type="checkbox">':'<input class="itemCheckBox" type="checkbox">':""}},{targets:1,data:"name",render:function(t,e,a){return 0<a.isEdit&&"display"==e?(!0,"<input class='form-control input-sm'  type='text' value='"+(t?escape(t):"")+"'>"):escape(t)}},{targets:2,data:"externalGwId",render:function(t,e,a){return 2==a.isEdit&&"display"==e?"<input class='form-control input-sm'  type='text' value='"+(t?escape(t):"")+"'>":escape(t)}},{targets:3,data:"managedStatus",render:function(t,e,a){return"deactive"==t?"未启用":"已启用"}},{targets:4,data:"onlineStatus",render:function(t,e,a){return a.simulated&&"active"==a.managedStatus?"<span class='label label-primary'>模拟中</span>":"<span class='label "+("在线"==t?"label-primary":"离线"==t?"label-warning":"label-default")+"'>"+t+"</span>"}},{targets:5,data:"customerId",render:function(t,e,a){return c.customersDic&&c.customersDic[t]?c.customersDic[t].customerName:""}},{targets:6,data:"projectId",render:function(t,e,a){return c.projectsDic&&c.projectsDic[t]?c.projectsDic[t].projectName:""}},{targets:7,data:"option",render:function(t,e,a){if("display"!=e)return"";var n="<div class='btn-group btn-group-sm'>";return 0<a.isEdit?(n+="<button id='save-btn' class='btn btn-primary' ><i class='fa fa-save hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 保存</span></button>",n+="<button id='del-btn' class='btn btn-default' ><i class='fa fa-save hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 取消</span></button>"):(c.menuitems.A10_S03&&(n+="<button id='edit-btn' class='btn btn-primary' ><i class='fa fa-edit hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 管理</span></button>"),"active"==a.managedStatus?(c.menuitems.A06_S03&&(n+="<button id='disable-btn' class='btn btn-default' ><i class='fa fa-stop hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 停用</span></button>"),c.menuitems.A07_S03&&(n+="<button id='del-btn' class='btn btn-default' disabled><i class='fa fa-trash hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 注销</span></button>")):(c.menuitems.A05_S03&&(n+="<button id='enable-btn' class='btn btn-default' ><i class='fa fa-play hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 启用</span></button>"),c.menuitems.A07_S03&&(n+="<button id='del-btn' class='btn btn-default'><i class='fa fa-trash hidden-lg hidden-md hidden-sm'></i><span class='hidden-xs'> 注销</span></button>"))),n+="</div>"}}],rowCallback:function(t,e,a){e.selected?$(t).addClass("selected"):$(t).removeClass("selected"),n(t)(c)}})}),a.on("init.dt",function(){}),a.on("length.dt",function(t,e,a){c.selLength=a}),a.on("change","#allselect-btn",function(t){if(t.stopPropagation(),t.target.checked){o.rows().select();for(var e=o.rows({selected:!0}),a=0;a<e.nodes().length;a++){o.row(e.nodes()[a]).data().selected=!0}o.rows().invalidate().draw(!1)}else{for(e=o.rows({selected:!0}),a=0;a<e.nodes().length;a++){o.row(e.nodes()[a]).data().selected=!1}o.rows().deselect(),o.rows().invalidate().draw(!1)}c.selectedHandler("gateway")}),a.on("change",".itemCheckBox",function(t){var e=$(this).closest("tr"),a=o.row(e);t.target.checked?a.data().selected=!0:a.data().selected=!1;var n=o.rows({selected:!0});n.count()!=o.rows()[0].length?($("#allselect-btn").attr("checked",!1),$("#allselect-btn").prop("checked",!1)):n.count()==o.rows()[0].length&&($("#allselect-btn").attr("checked",!0),$("#allselect-btn").prop("checked",!0)),c.selectedHandler("gateway")}),a.on("click","#disable-btn",function(t){t.stopPropagation();var e=$(this).closest("tr"),a=o.row(e);c.changeManagedStatus(a.data(),function(t){t&&(a.data().managedStatus="deactive",a.cells().invalidate().draw(!1))})}),a.on("click","#enable-btn",function(t){var e=$(this).closest("tr"),a=o.row(e);c.changeManagedStatus(a.data(),function(t){t&&(a.data().managedStatus="active",a.data().simulated=!1,a.cells().invalidate().draw(!1))})}),a.on("click","#save-btn",function(t){t.stopPropagation();var e=$(this).closest("tr"),a=o.row(e),n=$('div[name="modelId"]').attr("model");a.data().modelId=n;var d=$(e).find('input[name="label"]');if(a.data().label=$(d).val(),2==a.data().isEdit&&0==a.data().id){var s=$('div[name="domainPath"]').attr("model");a.data().domainPath=s;var i=$(e).find('input[name="externalDevId"]'),l=$(e).find('input[name="sn"]');a.data().externalDevId=$(i).val(),a.data().sn=$(l).val(),c.doAction("gateSave",a.data(),function(t){0==t?a.data().isEdit=2:(a.data().isEdit=0,a.data().id=t.id,a.data().managedStatus="deactive",a.data().onlineStatus=t.onlineStatus,a.data().simulated=!1,a.cells().invalidate().draw(!1))})}else 4==a.data().isEdit&&c.doAction("gateSave",a.data(),function(t){0==t?a.data().isEdit=4:(a.data().isEdit=0,!1,a.cells().invalidate().draw(!1))})}),a.on("click","#del-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=o.row(e);4==a.data().isEdit?(a.data().isEdit=0,a.cells().invalidate(),!1):c.delGateWay(a.data(),function(t){t&&(!1,a.remove().draw(!1))})}),a.on("click","#edit-btn",function(t){t.preventDefault();var e=$(this).closest("tr"),a=o.row(e);c.gatewayHandler("update",a.data().id)}),c.activeAllIns=function(){for(var t=o.rows(),s=0,i=t.nodes(),e=0;e<i.length;e++){"deactive"==o.row(i[e]).data().managedStatus&&s++}0!=s?u.show({title:"提示",closable:!1,message:"确认从 "+escape(c.selectedGateitem.name)+" 网关启用全部设备吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(t){for(var a=0,n=0,e=0;e<i.length;e++){var d=o.row(i[e]).data();"deactive"==d.managedStatus&&c.doActiveHanddler(d,function(t,e){t?(o.row(e).data().managedStatus="active",o.row(e).cells().invalidate().draw(!1),a++):n++,s==a+n&&(o.rows().deselect(),l.success("成功启用设备"+a+"台,失败"+n+"台",{}))},i[e])}t.close()}},{label:"取消",action:function(t){t.close()}}]}):l.warning("当前没有未启用设备",{})},c.activeSelectedIns=function(){var t=o.rows({selected:!0}),s=t.count(),i=t.nodes();0!=s?u.show({title:"提示",closable:!1,message:"确认从 "+escape(c.selectedGateitem.name)+" 网关启用 "+s+" 台设备吗？",buttons:[{label:"确定",cssClass:"btn-success",action:function(t){for(var a=0,n=0,e=0;e<i.length;e++){var d=o.row(i[e]).data();c.doActiveHanddler(d,function(t,e){t?(o.row(e).data().managedStatus="active",o.row(e).cells().invalidate().draw(!1),a++):n++,s==a+n&&(o.rows().deselect(),l.success("成功启用设备"+a+"台,失败"+n+"台",{}))},i[e])}t.close()}},{label:"取消",action:function(t){t.close()}}]}):l.warning("当前没有选中的设备",{})}}]}}])});
//# sourceMappingURL=../../../map/app-oc/js/directives/gateway-dom.js.map