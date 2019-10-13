/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;

      target.on("queryTablelist1", function(data) {
        target.navigateTo("index", {
          main: 2,
          sub: 0,
        }, "self");
      });

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
          if (tc.code == "0") {
            var newDatas = [];
            var data1 = tc333.data;
            // 
            // 
            var datas = tc.data;
            // for(var j=0;j<data1.length;j++){
            //     var objw = data1[j];
            //     var objw1 = data1[j].instance.split("_")[0];
            //     var objw2 = data1[j].instance.split("_")[1];
            //     for(var i=0;i<datas.length;i++){
            //         var obj = {};
            //             obj.kpi = datas[i].instance;
            //             obj.name = datas[i].kpiCode;
            //             obj.data = datas[i].value;
            //             obj.date = useMomentFormat(datas[i].arisingTime,"yyyy-MM-dd hh:mm:ss");
            //             obj.id = datas[i].nodeId;

            //         if(objw1 == datas[i].kpiCode && objw2 == datas[i].instance){
            //             obj.color = data1[j].value;
            //         }
            //         newDatas.push(obj);

            //     }                
            // }


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
            // }

            // var fix = {
            //     id:0 ,
            //     status: ["whui",{name:"A温度",data:0,date:"2018-09-12T07:29:56.771+0000"}, 
            //     {name:"A温度",data:0,date:"2018-09-12T07:29:56.771+0000"},
            //     {name:"A温度",data:0,date:"2018-09-12T07:29:56.771+0000"},
            //     {name:"A温度",data:0,date:"2018-09-12T07:29:56.771+0000"}, 
            //     {name:"A温度",data:0,date:"2018-09-12T07:29:56.771+0000"}]
            //   }
            // newDatas.unshift(fix);

            // 数据处理
            var newDatas2 = new Array();
            var mapData = new Map();

            function GetNewDataArray(arrData) {
              for (var i = 0; i < arrData.length; i++) {
                var tmpObj = arrData[i];
                if (mapData.has(tmpObj.kpi)) {
                  var tmpMapVal = mapData.get(tmpObj.kpi);
                  delete tmpObj.kpi;
                  delete tmpObj.id;
                  if (tmpObj.name == 29002) {
                    tmpObj.name = "A温度"
                  } else if (tmpObj.name == 29003) {
                    tmpObj.name = "B温度"
                  } else if (tmpObj.name == 29004) {
                    tmpObj.name = "C温度"
                  } else if (tmpObj.name == 29005) {
                    tmpObj.name = "D温度"
                  } else if (tmpObj.name == 29006) {
                    tmpObj.name = "E温度"
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
                  if (tmpObj.name == 29002) {
                    tmpObj.name = "A温度"
                  } else if (tmpObj.name == 29003) {
                    tmpObj.name = "B温度"
                  } else if (tmpObj.name == 29004) {
                    tmpObj.name = "C温度"
                  } else if (tmpObj.name == 29005) {
                    tmpObj.name = "D温度"
                  } else if (tmpObj.name == 29006) {
                    tmpObj.name = "E温度"
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
            for (var i = 0; i < newDatas2.length; i++) {
              var data = newDatas2[i]
              delete data.kpi;
            };
            // 
            var mulu = {
              id: 0,
              status: ["空", {
                  name: "A温度",
                  data: "A温度",
                  date: "2018-11-01 14:56:58"
                },
                {
                  name: "B温度",
                  data: "B温度",
                  date: "2018-11-01 14:56:58"
                },
                {
                  name: "C温度",
                  data: "C温度",
                  date: "2018-11-01 14:56:58"
                },
                {
                  name: "D温度",
                  data: "D温度",
                  date: "2018-11-01 14:56:58"
                },
                {
                  name: "E温度",
                  data: "E温度",
                  date: "2018-11-01 14:56:58"
                }
              ]
            };


            for (var i = 0; i < newDatas2.length; i++) {
              if (i % 11 == 0) {
                newDatas2.splice(i, 0, mulu);
              }
            }



            var data = newDatas2;

            function success(datas) {
              var render = function() {
                target.render(datas);
              };
              render();
            };
            success(data);

          }
        });



        // 第二
      });
      // var data = [{
      //     id: 0,
      //     status: ["测点1",{name:"温度1",data:3,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"温度1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"温度1",data:7,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"温度1",data:9,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"温度1",data:11,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 1,
      //     status: ["测点2",{name:"1",data:6,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:7,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:9,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:10,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 2,
      //     status: ["测点3",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 3,
      //     status: ["测点4",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 4,
      //     status: ["测点5",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 5,
      //     status: ["测点6",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 6,
      //     status: ["测点7",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 7,
      //     status: ["测点8",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 8,
      //     status: ["测点9",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 9,
      //     status: ["测点10",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 10,
      //     status: ["测点11",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 11,
      //     status: ["测点12",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 12,
      //     status: ["测点13",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 13,
      //     status: ["测点14",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 14,
      //     status: ["测点15",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 15,
      //     status: ["测点16",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 16,
      //     status: ["测点17",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 17,
      //     status: ["测点18",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },{
      //     id: 18,
      //     status: ["测点19",{name:"1",data:2,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:5,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:8,date:"2018-09-12T07:29:56.771+0000"},
      //     {name:"1",data:12,date:"2018-09-12T07:29:56.771+0000"}, 
      //     {name:"1",data:22,date:"2018-09-12T07:29:56.771+0000"}]
      //   },

      //   ];



    }
  }
}