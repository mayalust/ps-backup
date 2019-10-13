define(["toolkit/itree/tree-data-handler","pstree"],function(e,F){return function(e){var i,a,n,t,r=999999,l={root:[]},o=e,u=[],c=[],d=Array.prototype.push,s=Object.prototype.toString,g=P("Object"),f=(P("Null"),P("Undefined"),P("Array")),h=(P("Number"),P("Function")),v=(P("String"),o.element),p=$('<div class="tree-menu"></div>'),m=(v.getParameter("resource"),v.getValue("global/ROLE"),["tag tag-green","tag tag-yellow","tag tag-orange","tag tag-red"]),y="includeFields=id,label,modelId,values.number,domains,resourcetype,viewType",I=e.serviceProxy,b="device"==(v.parameters||{}).navitype,D={300:"domain",301:"customer",302:"project",1e3:"device"};function P(n){return function(e){return s.call(e)=="[object "+n+"]"&&e==e}}function S(e,n){for(var t in n)e[t]=n[t];return e}function R(e,n){var t;for(e=e||[],t=0;t<e.length;t++)n&&n(e[t],t)}function T(e){b&&e.modelId<1e3||(I.removeAllRequest(),e.setHighlight&&e.setHighlight(!0),setTimeout(function(){b?function(n){n.$location;v.setParameter("id",n.id),v.trigger("changeNavString",N.call(n)),A(n.id,function(e){S(n,e),v.setValue("global/resource",n),v.trigger("tree_resourceChange",{resource:S({},n)}),v.trigger("analysisShakeNavigateTo",0)})}(e):x(e)},100))}function x(n){var t=n.$location;v.setParameter("id",n.id),v.trigger("changeNavString",N.call(n)),A(n.id,function(e){S(n,e),v.setValue("global/resource",n),v.trigger("pathChange",t),v.trigger("tree_resourceChange",{resource:S({},n)}),v.trigger("analysisShakeNavigateTo",0)})}function N(){var e=[this.label],n=t(this);function t(e){return e.parentID&&l[e.parentID]||e.parent}for(;n;)99!=n.id&&e.push(n.label),n=t(n);return e.reverse(),e.join(" > ")}function A(e,n){v.getResourceById(e,function(e){n&&n(e)})}function V(e){return m[e-1]||"tag tag-green"}function j(e,n){var o=new RegExp("/\\d+/","g"),t=e.values&&e.values.number||null,r=n.values&&n.values.number||null;function i(e){for(var n=0,t=o.exec(e.label);null!=t;){var r=t[0].length;n<r&&(n=r),t=o.exec(e.label)}return n}function a(e){for(var n=c-e.length,t=0;t<n;t++)e="0"+e;return e}if(t||r)return t<r;var l=i(e),u=i(n),c=Math.max(l,u);return e.label.replace(o,function(e){return a(e)})<n.label.replace(o,function(e){return a(e)})}function w(o,e){var i,a,l;return R(e,function(e,n){e.domains.split("/").filter(function(e){return e});var t=e.domains.split("/").filter(function(e){return e}).slice(-2),r=e.id==t[1]?t[0]:t[1];r!==e.id?(e.parentID=r,i=e.id,l=e.modelId,a=1e3<l?1e3:l,(o[i]=e).resourceType=D[a]):(console.err("此节点为错误或无效节点",e),c.push(e))}),o}function C(e){var n,t=e.domains,r=e.modelId,o=i(e);function i(e){if(e.parentID)return l[e.parentID];console.err("没有设置PARENTID属性")}t=t.split("/").filter(function(e){return e}),o?(o.children=o.children||[],function(e,n,t){for(var r=e.length-1;-1<r&&t(n,e[r]);)e[r+1]=e[r],r--;e[r+1]=n}(o.children,e,j)):l.root.push(e),1e3<r?e.$location=(n=v.getRootScope("rootModelsDic")[r],"motor"==function(e){if(n)return((n.attrs||[]).find(function(e){return"viewType"==e.name})||{}).sourceValue}()?"motor":"device"):300==r?(function(e){for(var n=[],t=e.modelId,r=e;(r=i(r))&&r.modelId==t;)n.push(r);return n}(e),1==e.layer?e.$location="index":2==e.layer?e.$location="navigate":3==e.layer?e.$location="factory":(e.$location={error:"unhandled node",message:"[300]layer is over 3, cannot handle"},console.error("管理域出现"+e.layer+"级，不可被处理",e.label,e.modelId,e.layer))):301==r?e.$location="production":302==r&&(e.children&&e.children[0]&&1e3<e.children[0].modelId||1==e.layer?e.$location="devicegroup":e.$location="virtual"),console.assert(e.$location,"$location没正确倒入",e.label,e.modelId,e.layer)}function k(e,n,t){runtime("getStatus开始加载"),v.getKpiValueCi(e,n,function(e){runtime("getStatus完成加载"),t&&t(e)},{isRealTimeData:!0})}function B(n){var i=[],t=[300,301,302];!function r(o){var e=t[o];e&&v.getResourceByModelId(e,function(e){var n,t;n=i,f(t=e)?d.apply(n,t):d.call(n,t),r(o+1)},y),!e&&n&&n(i)}(0)}function M(e){w(l,e);var n,t=[];R(e,function(e){C(e),t.push(e.id)}),dev=l.root,function n(e){R(e,function(e){!e.children&&u.push(e),e.children&&n(e.children)})}(dev),b||(a?a.modelId<1e3&&(n=l[a.id]):n=l.root[0],n&&(n.$location?x(n):n.postponed=!0)),k(t,[r],O)}function O(e){var n;R(e,function(e){l[e.nodeId].status=e.value,l[e.nodeId].icon=V(e.value)}),n=function(e){!function(e){runtime("getResourceSuccess开始");var n=[];w(l,e),R(e,function(e){C(e),n.push(e.id)}),runtime("MAP全完成",l.root),k(n,[r],E)}(e)},runtime("resource开始加载"),v.getDevicesByCondition({},function(e){runtime("resource完成加载"),n&&n(e)},y)}function E(e){R(e,function(e,n){l[e.nodeId].status=e.value,l[e.nodeId].icon=V(e.value)});var n=l.root,t=u.find(function(e){return e.children instanceof Array&&0<e.children.length});l.firstDevice=g(t)&&f(t.children)&&t.children[0],console.assert(l.firstDevice,"没有找到任何设备"),n=n&&n[0]&&1==n[0].layer&&300==n[0].modelId?n[0].children:n,i=F(p[0],{data:f(n)?n:[],animate:!1,themes:"show-line folder-pull-right steel-industry condense",on:{init:function(){this.icon=this.icon||"tag tag-green",this.open=this.depth<2},click:function(e){b&&"device"!==this.resourceType?(e.preventDefault(),this.toggle()):T(this)}}});var r=b?g(a)?a.modelId<1e3?l.firstDevice:a:l.firstDevice||null:a||(l.root?l.root[0]:null),o=i.find(function(e){return(r&&r.id)==e.id});g(o)&&h(o.eachParent)&&o.eachParent(function(e){!e.open&&e.toggle()}),g(o)&&h(o.highlight)&&o.highlight(),g(o)&&!o.open&&h(o.toggle)&&o.toggle(),o&&(b?T(o):(1e3<o.modelId||o.postponed)&&(delete o.postponed,T(o))),runtime("allfinished",n)}return n=function(e){a=e,B(M)},(t=(v.getValue("global/resource")||{}).id||v.getParameter("id"))&&v.getResourceById(t,function(e){n&&n(e)}),!t&&n&&n(null),v.on("treeSelect",function(){var n=v.getParameter("id"),e=i.find(function(e){return e.id==n});e&&h(e.eachParent)&&e.eachParent(function(e){!e.open&&e.toggle()}),e&&h(e.highlight)&&e.highlight()}),v.on("searchtree",function(n){i.search(function(e){return-1!=e.label.indexOf(n)})}),p}});
//# sourceMappingURL=../../map/toolkit/component/treemenu.js.map
