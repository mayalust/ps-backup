define(["controllers/controllers","Array"],function(e){"use strict";e.initController("configAlertDialog",["$scope",function(e){}]),e.initController("configAlertCtrl",["$scope","$q","viewFlexService","$timeout","growl","dialogue","ngDialog","userDomainService","userLoginUIService","resourceUIService",function(r,e,c,t,s,a,d,i,u,f){c.getAllMyViews(function(e){if(0==e.code){var t=e.data.filter(function(e){return"configAlert"==e.viewType}),n=function(l){var o=t.filter(function(e){return!l||e.viewTitle!=l.viewTitle}).map(function(e){return e.viewTitle}),a=$$.duplicateName("新建告警组",o),e=function(e,t){if(l)var n=JSON.parse(l.content);var i=function(e,t){var n,i=t.split(",");for(var l in e)(n=e[l]).value=-1<i.indexOf(n.replacer+"");return e};r.dialog={input:[{label:"告警组名称",value:l?l.viewTitle:a,data:"viewTitle",type:"input",composory:!0,events:{change:function(e){-1!=o.indexOf(e.value)?(e.error="告警视图以存在，请更换视图名称",r.dialog.button[0].disabled=!0):""==e.value?(e.error="告警视图名称不可为空",r.dialog.button[0].disabled=!0):(e.error=void 0,r.dialog.button[0].disabled=!1)}}},{label:"资源域",value:l?n.domain:null,data:"content/domain",type:"tree",key:"domainPath",mark:"domain",options:e,fontsize:"12px",width:"200px"},{label:"设备模板",value:l?n.nodeType:null,data:"content/nodeType",type:"tree",key:"id",mark:"nodes",options:t,fontsize:"12px",width:"200px"},{value:l?n.pageSize:1e3,label:"取得告警数量",data:"content/pageSize",type:"input",events:{change:function(e){var t=/\d.*/.test(e.value);r.dialog.button[0].disabled=t?(e.error=void 0,!1):(e.error="请输入数字",!0)}}},{label:"内容关键词",value:l?n.messageFilter:"",data:"content/messageFilter",type:"input"},{label:"告警状态",data:"content/states",type:"checkbox",options:i([{label:"新产生",replacer:0},{label:"已确认",replacer:5},{label:"处理中",replacer:10},{label:"已解决",replacer:20}],l?n.states:"")},{label:"告警级别",data:"content/severities",type:"checkbox",options:i([{label:"警告",replacer:1,value:!1},{label:"次要",replacer:2,value:!1},{label:"重要",replacer:3,value:!1},{label:"严重",replacer:4,value:!1}],l?n.severities:"")}],button:[{label:l?"编辑":"创建",icon:"btn btn-primary",fn:function(){d.close();var e,t=function(e){var l={},t=function(e,t){var n;if("checkbox"==t.type){for(var i in n=[],t.options)t.options[i].value&&n.push(t.options[i].replacer);n=n.toString()}else n=t.value;l.$attr(t.data,n)};for(var n in e)t(0,e[n]);return l.content=JSON.stringify(l.content),l}(r.dialog.input);t.viewType="configAlert",e=l?(t.viewId=l.viewId,c.updateView):c.addView,e(t,function(e){"0"==e.code&&(l?(l.viewTitle=e.data.viewTitle,l.content=e.data.content,s.success("告警视图 [ "+e.data.viewTitle+" ] 修改成功",{})):(r.viewlist.source.push(e.data),s.success("创建告警视图成功",{})))})}},{label:"取消",icon:"btn btn-default",fn:function(){d.close()}}]}};!function t(){null==window.domainlist?i.queryDomainTree(u.user.userID,function(e){0==e.code&&(window.domainlist=e.data,t())}):null==window.rootModel?f.getRootModel(function(e){0==e.code&&(window.rootModel=[e.data],f.getModels(function(e){Array.prototype.push.apply(window.rootModel,e.data),t()}))}):e(window.domainlist,window.rootModel)}(),d.open({template:"../partials/config-alert-dialog.html",className:"ngdialog-theme-plain",scope:r})};r.viewlist={source:t,header:[{label:"新建告警视图",icon:"fa fa-plus",type:"button",class:"btn btn-primary btn-sm",style:{margin:"2px"},events:{click:function(e){n()}}},{label:"删除",icon:"fa fa-minus",type:"button",visible:function(e){return!e.some(function(e){return 1==e.selected})},class:"btn btn-default btn-sm",style:{margin:"2px"},events:{click:function(e){var n=e,t=e.map(function(e){return e.viewId}),i=e.map(function(e){return e.viewTitle}),l=[{label:"是",icon:"btn btn-success",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(){a.close(),c.deleteViews(t,function(e){if(0==e.code)for(var t in s.success("告警视图 [ "+i.toString()+" ] 删除成功",{}),n)n[t].remove()})}},{label:"否",icon:"btn btn-default",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(){a.close()}}];a.open({title:{label:"删除告警视图"},description:{label:"确认要删除告警视图   [ "+i.toString()+" ]  吗？"},fnlist:l})}}}],columnDefs:[{label:"视图名称",data:"viewTitle",type:"text",filterable:!0,sortable:!0},{label:"创建时间",data:"createTime",type:"date",format:"yy-mm-dd, hh:nn:ss",filterable:!1,sortable:!0},{label:"更新时间",data:"updateTime",type:"date",format:"yy-mm-dd, hh:nn:ss",filterable:!1,sortable:!0},{label:"操作",width:141,type:"buttonGroup",filterable:!1,sortable:!1,options:[{label:"编辑",type:"button",class:"btn btn-primary",events:{click:function(e,t){n(e)}}},{label:"删除",type:"button",events:{click:function(e){var t=e,n=e.viewId,i=e.viewTitle,l=[{label:"是",icon:"btn btn-success",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(){a.close(),c.deleteViews([n],function(e){0==e.code&&(s.success("告警视图 [ "+i+" ] 删除成功",{}),t.remove())})}},{label:"否",icon:"btn btn-default",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(){a.close()}}];a.open({title:{label:"删除告警视图"},description:{label:"确认要删除告警视图   [ "+i+" ]  吗？"},fnlist:l})}}},{label:"复制",type:"button",events:{click:function(e){var n=e,t=r.viewlist.source.map(function(e){return e.viewTitle}),i=$$.duplicateName(e.viewTitle,t),l=e.content,o=[{label:"创建",icon:"btn btn-success",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(e){var t={viewType:"configure",viewTitle:e.input[0].value,content:l};c.addView(t,function(e){0==e.code&&(s.success("复制告警视图["+e.data.viewTitle+"]成功",{}),a.close(),n.insertAfter(e.data))})}},{label:"取消",icon:"btn btn-default",style:{width:"50%","border-radius":0,"font-size":"18px","font-weight":"bold",padding:10},fn:function(){a.close()}}];a.open({title:{label:"复制视图"},input:[{value:i,composory:!0,label:"新视图名称",placeholder:"新视图名称",onChange:function(e){var t=this.value,n=r.viewlist.source.find(function(e){return e.viewTitle==t});o[0].disabled=n?(e.error="此视图名已被占用，请更换.",!0):""==t?(e.error="视图名不可为空.",!0):(e.error=null,!1)}}],fnlist:o})}}}]}]}}})}])});
//# sourceMappingURL=../../../map/app-oc/js/controllers/config-alert-ctrl.js.map
