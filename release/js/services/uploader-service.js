define(["../services/services.js"],function(e){"use strict";e.factory("fuploader",["FileUploader","configUIService","growl",function(e,l,r){var t={domainPath:"",groupName:"dashboardImage",id:0,invalid:!1,key:"",keyDesc:"",label:"",value:""},a="|jpg|png|jpeg|bmp|gif|svg|",o=new e({url:l.origin+"/api/rest/uploadConfig/configUIService/uploadConfigFile",withCredentials:!0}),d={},i=function(){o.filters.push({name:"imageFilter",fn:function(e,i){var n=e.name.split("."),o=n[n.length-1];return-1==a.indexOf(o)?(r.warning("文件格式仅支持"+a+"文件，请重新选择",{}),!1):!(1e3<e.size/1024)||(r.warning("您选择的文件大于1M，请重新选择",{}),!1)}}),o.onWhenAddingFileFailed=function(e,i,n){console.info("onWhenAddingFileFailed",e,i,n)},o.onAfterAddingFile=function(e){},o.onCompleteItem=function(e,i,n,o){if(console.info("onCompleteItem",i),i)if(0==i.code){var a=i.data;t.value=a,r.success("图片上传成功",{}),l.saveConfig(t,function(e){d.fileUploadComplete(e)})}else r.error(i.message,{});else r.error("操作异常了，尝试重新刷新",{})}};return i.prototype.on=function(e,i){d[e]=i},i.prototype.uploadFile=function(e,i){if(d.fileUploadComplete=i,o.clearQueue(),o.addToQueue(e),0<o.queue.length){var n=o.queue[0];t.label=n.file.name,l.saveConfig(t,function(e){if(0==e.code){var i=e.data.id;t.id=i,n.formData=[{value:"images/dashboardImage",id:i}],n.upload()}})}},new i}])});
//# sourceMappingURL=../../map/js/services/uploader-service.js.map
