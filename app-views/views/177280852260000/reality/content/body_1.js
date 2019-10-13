/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;


      // 获取背景色的kpi
      var params = ["kpi", {
        includeInstance: true,
        isRealTimeData: true,
        nodeIds: [407451616770876],
        kpiCodes: [999997]
      }];
      target.postService("kpiDataFlexService", "getKpiValueList", params, function(tc333) {
        // 

        var params = ["kpi", {
          includeInstance: true,
          isRealTimeData: true,
          nodeIds: [407451616770876],
          kpiCodes: [29002, 29003, 29004, 29005, 29006]
        }];


        target.postService("kpiDataFlexService", "getKpiValueList", params, function(tc) {
          // 
          if (tc.code == "0") {

            var newDatas = [];
            var data1 = tc333.data;
            var newArr = tc.data;

            //排序
            var datas = [];
            for (var i = 0; i < newArr.length; i++) {
              if (newArr[i].kpiCode == 29002) {
                datas.push(newArr[i]);
                //   datas.splice(i,1);
              }
            }
            for (var i = 0; i < newArr.length; i++) {
              if (newArr[i].kpiCode == 29003) {
                datas.push(newArr[i]);
                //   datas.splice(i,1);
              }
            }
            for (var i = 0; i < newArr.length; i++) {
              if (newArr[i].kpiCode == 29004) {
                datas.push(newArr[i]);
                //   datas.splice(i,1);
              }
            }
            for (var i = 0; i < newArr.length; i++) {
              if (newArr[i].kpiCode == 29005) {
                datas.push(newArr[i]);
                //   datas.splice(i,1);
              }
            }
            for (var i = 0; i < newArr.length; i++) {
              if (newArr[i].kpiCode == 29006) {
                datas.push(newArr[i]);
                //   datas.splice(i,1);
              }
            }

            // 处理显示的数据

            for (var i = 0; i < datas.length; i++) {
              var obj = {};
              obj.kpi = datas[i].instance;
              obj.name = datas[i].kpiCode;
              obj.data = datas[i].value;
              obj.date = useMomentFormat(datas[i].arisingTime, "yyyy-MM-dd hh:mm:ss");
              obj.id = datas[i].nodeId;
              for (var j = 0; j < data1.length; j++) {
                var objw = data1[j];
                var objw1 = data1[j].instance.split("_")[0];
                var objw2 = data1[j].instance.split("_")[1];
                if (objw1 == datas[i].kpiCode && objw2 == datas[i].instance) {
                  obj.color = data1[j].value;
                }
              }
              newDatas.push(obj);
            }
            // 



            // // 数据处理
            var newDatas2 = new Array();
            var mapData = new Map();

            function GetNewDataArray(arrData) {
              for (var i = 0; i < arrData.length; i++) {
                var tmpObj = arrData[i];

                if (mapData.has(tmpObj.kpi)) {
                  var tmpMapVal = mapData.get(tmpObj.kpi);
                  delete tmpObj.kpi;
                  delete tmpObj.id;
                  if (tmpObj.name == 33001) {
                    tmpObj.name = "进水流量"
                  } else if (tmpObj.name == 33002) {
                    tmpObj.name = "出水流量"
                  } else if (tmpObj.name == 33004) {
                    tmpObj.name = "流量差"
                  }
                  tmpMapVal.status.push(tmpObj);
                  mapData.set(tmpMapVal.kpi, tmpMapVal);
                } else {
                  var tmpMapVal = {};
                  tmpMapVal.kpi = tmpObj.kpi;
                  tmpMapVal.id = tmpObj.id;
                  tmpMapVal.status = [];
                  tmpMapVal.status.push(tmpObj.kpi);
                  delete tmpObj.kpi;
                  delete tmpObj.id;
                  if (tmpObj.name == 33001) {
                    tmpObj.name = "进水流量"
                  } else if (tmpObj.name == 33002) {
                    tmpObj.name = "出水流量"
                  } else if (tmpObj.name == 33004) {
                    tmpObj.name = "流量差"
                  }
                  tmpMapVal.status.push(tmpObj);
                  mapData.set(tmpMapVal.kpi, tmpMapVal);
                }
              }

              mapData.forEach(function(item, key, mapData) {
                newDatas2.push(item);
              });
            }
            GetNewDataArray(newDatas);
            // 

            // for(var i=0;i<newDatas2.length;i++){
            //     var data = newDatas2[i]
            //     delete data.kpi;
            // };

            for (var i = 0; i < newDatas2.length; i++) {
              var whui = newDatas2[i].status;
              var tem1 = whui[0];
              var tem2 = whui[1];
              whui.splice(0, 1, tem2);
              whui.splice(1, 1, tem1);
            };



            for (var i = 0; i < newDatas2.length; i++) {
              var wh1 = newDatas2[i].status;
              var arr = [];
              for (var j = 0; j < wh1.length; j++) {
                var wh2 = wh1[j];
                if (wh2 && wh2.color) {
                  arr.push(wh2.color)
                }
              }

              if (arr.length != 0) {
                var max = Math.max.apply(null, arr);
                var wh4 = wh1[1] + "_" + max.toString();
                wh1.splice(1, 1, wh4);
              }
            }
            // 
            // delete
            var newDatas3 = [];
            for (var i = 0; i < newDatas2.length; i++) {
              var obj1 = newDatas2[i];
              // delete obj1.id;
              // delete obj1.kpi;
              var arr1 = newDatas2[i].status;
              if (arr1[1]) {
                newDatas3.push(arr1[1]);
              }
            }

            var data = newDatas3;


            function success(datas) {
              var render = function() {
                target.render(datas);
              };
              render();
            };
            success(data);

          }
        });




      });




    }
  }
}