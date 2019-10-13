/**
 * 注意：在使用时，删除该注释的内容
 * POPUP标准，适用于有弹出的各级视图，绝大部分情况下请勿修改
 * 版本：1.0.3
 * 多个下载的路径修改
 * 1.0.2 download和del支持了下载和清空
 * 1.0.1 上传增加了multiple属性
 */
expression = {
  on: {
    init: function (event) {
      var target = event.target;
      var global = event.global;
      var scope = target.getRootScope();

      //获得显示数据
      var params = target.getPopupData().resource;

      //获得form表单格式,这里可以修改format，比如format2
      var format = target.getPopupData().format;

      //获得分列数
      var colnum = target.getPopupData().colnum ? target.getPopupData().colnum : 2;

      //获得编辑状态：0表示查看，1表示编辑
      var status = target.getPopupData().status;

      if (!params || !format) {
        return;
      }

      //按照显示格式排序
      format.sort(function (a, b) {
        return a.index - b.index;
      })

      //控制form的显示
      var ctrlGroups = [];
      var subGroups = [];
      var count = 0;
      for (var i = 0; i < format.length; i++) {
        count++;//计数器开始计数，用于%

        var fmt = format[i];

        //如果名字有.的话，拆分
        var fmtnameAry = fmt.name.split(".");
        if (fmtnameAry.length > 1) {
          fmt.n1 = fmtnameAry[0];
          fmt.n2 = fmtnameAry[1];
        }

        //设置label的内容
        var labelObj = {
          type: "label",
          composory: fmt.composory,
          value: fmt.label + ":"
        }

        //设置value的内容，可以扩展下面的类型
        var valueObj;
        if (fmt.popuptype == "select") {
          valueObj = {
            type: "select",
            value: fmtnameAry.length > 1 ? (params[fmt.n1][fmt.n2] != undefined ? params[fmt.n1][fmt.n2] : "请选择") : (params[fmt.name] != undefined ? params[fmt.name] : "请选择"),
            on: {
              change: function (elem) {
                if (elem.current.n1) {
                  params[elem.current.n1][elem.current.n2] = elem.value[elem.current.format.id];
                } else {
                  params[elem.current.name] = elem.value[elem.current.format.id];
                }
                //  如果有broadcast为true的时候，发布自己的选中值
                if (elem.current.format.broadcast) {
                  scope.$broadcast(elem.current.name, {value: elem.value[elem.current.format.id]})
                  scope.$emit(elem.current.name, {value: elem.value[elem.current.format.id]})
                }
              }
            },
            options: fmt.options,
            format: {
              id: fmt.selectId,
              label: fmt.selectLabel,
              broadcast: fmt.broadcast,
              parentName: fmt.parentName,
              parentKey: fmt.parentKey
            },
            name: fmt.name,
            n1: fmt.n1,
            n2: fmt.n2
          }
        } else if (fmt.popuptype == "dateTimePicker" || fmt.popuptype == "datePicker") {
          valueObj = {
            id: Math.uuid(),
            type: fmt.popuptype,
            attrs: fmt.attrs,
            value: fmtnameAry.length > 1 ? params[fmt.n1][fmt.n2] : params[fmt.name],
            disabled: status == 0 ? "disabled" : false,
            on: {
              change: function (elem) {
                if (elem.current.n1) {
                  params[elem.current.n1][elem.current.n2] = elem.value.getUTCDateString;
                } else {
                  params[elem.current.name] = elem.value.getUTCDateString;
                }
              }
            },
            name: fmt.name,
            n1: fmt.n1,
            n2: fmt.n2
          }
        } else if (fmt.popuptype == "uploadFile" || fmt.popuptype == "uploadFile2") {
          valueObj = {
            type: fmt.popuptype,
            attrs: fmt.attrs,
            group: fmt.group,
            manual: fmt.manual,
            multiple: fmt.multiple,
            btnstatus: fmt.btnstatus,
            text: fmt.text,
            path: fmt.path,
            disabled: status == 0 ? "disabled" : false,
            on: {
              submit: function (returnObj, fileDom, elem) {
                if (elem.n1) {
                  params[elem.n1][elem.n2] = returnObj;
                } else {
                  params[elem.name] = returnObj;
                }
              },
              download: function (returnObj, fileDom, elem) {
                //支持多个路径用,分割
                var pathary = elem.path.split(",");
                pathary.forEach(function (path) {
                  if (path) {
                    window.open(path, '_blank')
                  }
                })
              },
              del: function (returnObj, fileDom, elem) {
                if (elem.n1) {
                  params[elem.n1][elem.n2] = null;
                } else {
                  params[elem.name] = null;
                }
              }
            },
            name: fmt.name,
            n1: fmt.n1,
            n2: fmt.n2
          }
        } else if (fmt.popuptype == "customHtml") {
          valueObj = {
            type: fmt.popuptype,
            attrs: fmt.attrs,
            value: fmtnameAry.length > 1 ? (fmt.render ? fmt.render(params[fmt.n1][fmt.n2]) :
              params[fmt.n1][fmt.n2]) : (fmt.render ? fmt.render(params[fmt.name]) : params[fmt.name]),
          }
        } else if (fmt.popuptype == "textarea") {
          valueObj = {
            type: "textarea",
            attrs: fmt.attrs,
            value: fmtnameAry.length > 1 ? (fmt.render ? fmt.render(params[fmt.n1][fmt.n2]) : params[fmt.n1][fmt.n2]) : (fmt.render ? fmt.render(params[fmt.name]) : params[fmt.name]),
            disabled: status == 0 ? "disabled" : false,
            on: {
              change: function (elem) {
                if (elem.current.n1) {
                  params[elem.current.n1][elem.current.n2] = elem.value;
                } else {
                  params[elem.current.name] = elem.value;
                }
              }
            },
            name: fmt.name,
            n1: fmt.n1,
            n2: fmt.n2
          }
        } else {
          valueObj = {
            type: "input",
            attrs: fmt.attrs,
            value: fmtnameAry.length > 1 ? (fmt.render ? fmt.render(params[fmt.n1][fmt.n2]) : params[fmt.n1][fmt.n2]) : (fmt.render ? fmt.render(params[fmt.name]) : params[fmt.name]),
            disabled: status == 0 ? "disabled" : false,
            on: {
              change: function (elem) {
                var find = elem.current.attrs && elem.current.attrs.type == "number";
                if (elem.current.n1) {
                  params[elem.current.n1][elem.current.n2] = find ? Number(elem.value) : elem.value;
                } else {
                  params[elem.current.name] = find ? Number(elem.value) : elem.value;
                }
              }
            },
            name: fmt.name,
            n1: fmt.n1,
            n2: fmt.n2
          }
        }

        //如果拉伸的话，那么就另起一行，之前的都要存起来
        if (fmt.stretch) {
          if (subGroups.length > 0) {
            ctrlGroups.push(subGroups); //把以前的存起来
            subGroups = [];
          }
          valueObj.colSpan = colnum * 2; //设置colSpan为colnum的两倍
          subGroups.push(labelObj);
          subGroups.push(valueObj);
          ctrlGroups.push(subGroups); //把现在的存起来
          count = 0; //计数器重置
          subGroups = [];
        } else {
          subGroups.push(labelObj);
          subGroups.push(valueObj);
          if (count % colnum == 0) {
            count = 0; //计数器重置
            ctrlGroups.push(subGroups)
            subGroups = [];
          }
        }
      }
      //最后如果还有没配对的，那么就再次放入
      if (subGroups.length > 0) {
        ctrlGroups.push(subGroups)
      }

      target.render(ctrlGroups);
    }
  }
}