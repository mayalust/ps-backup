/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init: function (event) {
      var target = event.target;
      var global = event.global;

      var isButtonflag = true;
      // 存图片的路径
      var configParam = {
        "resourceId": 0,
      };
      

      
      target.off("standardProject");
      target.on("standardProject", function (data) { 
          params = {
            // deviceCode: data.deviceCode,
           standardProjectNo: data.standardProjectNo,
        }  
        standardProjectFun(params);
      });
      function standardProjectFun(params) { 
        target.postService("deviceResumeUIService", "getMaintainStandardListByCondition", [params], function (tc) {
          if (tc.data) {
            var createProject = tc.data;
            // 标准项目编号 历史维修方案
            var standardProject, historyProject = [];
            for (var i = 0; i < createProject.length; i++) {
              if (createProject[i].type == "0") {
                standardProject = createProject[i];
              } else if (createProject[i].type == "1") {
                historyProject.push(createProject[i]);
              }
            }
            // 历史记录
            // target.trigger("historyProject", historyProject);

            var render = function () {
              var ctrlGroups = [
                /*[{
                  type: "label",
                  value: "标准项目编号：",
                  class: "col-md-2",
                  style: {
                    color: "#a6bacc",
                    textAlign: "right",
                    fontSize: "14px",
                    paddingRight: "35px"
                  }

                }, {
                  type: "label",
                  value: standardProject.standardProjectNo
                }], [{
                  type: "label",
                  value: "工程项目名称:",
                  class: "col-md-2",
                  style: {
                    color: "#a6bacc",
                    textAlign: "right",
                    fontSize: "14px",
                    paddingRight: "35px"
                  }
                }, {
                  type: "label",
                  value: standardProject.standardName
                }], [{
                  type: "label",
                  value: "定年修主控/重点:",
                  class: "col-md-2",
                  style: {
                    color: "#a6bacc",
                    textAlign: "right",
                    fontSize: "14px",
                    paddingRight: "35px"
                  }
                }, {
                  type: "label",
                  value: standardProject.isSk == 0 ? "否" : "是"
                }], [{
                  type: "label",
                  value: "高危等级:",
                  class: "col-md-2",
                  style: {
                    color: "#a6bacc",
                    textAlign: "right",
                    fontSize: "14px",
                    paddingRight: "35px"
                  }
                }, {
                  type: "label",
                  value: standardProject.highDangerLevel == 0 ? "无" : standardProject.highDangerLevel + "是"
                }]*/
              ];
              // 1 维修作业标准
              // 2 质量层级表
              // 3 高危技术方案
              // 4 安全技术交底
              // 5 工时工序表
              // 6 施工方案
              var loopStandardProjectLst = function (file) {
                var item = [{
                  type: "label",
                  value: file.label,
                  class: "col-md-2",
                  style: {
                    color: "#a6bacc",
                    textAlign: "right",
                    fontSize: "14px",
                    paddingRight: "35px"
                  }
                }, {
                  type: "label",
                  value: file.fileName,
                  linkage: file.filePath
                }, /*{
                  type: "uploadFile2",
                  icon: "glyphicon glyphicon-file",
                  group: "enterprisesImages",
                  url: "api/rest/upload/resourceFileUIService/uploadResourceFile",
                  groupId: "repairQuality",
                  fileFormat: "txt|xlsx|docx|pdf|doc|png|jpg",
                  formData: configParam,
                  text: "上传",
                  on: {
                    submit: function (elem) {
                      // 修改文件的

                      file.fileName = elem.label;
                      file.filePath = elem.value.qualifiedName;
                      event.target.growl("上传文件成功", "success");
                      render();
                    }
                  }
                }*/];
                return item;
              }
              if(standardProject){
                 for (var i = 0; i < standardProject.fileList.length; i++) {
                   ctrlGroups.push(loopStandardProjectLst(standardProject.fileList[i]));
                 }
              }
              target.render(ctrlGroups);
            };
            render();


          }
        })
      }

    }
  }
}