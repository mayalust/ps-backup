define({
  on: {
    init: function (event, complete, df) {
      var target = event.target,
        techParameters;

      function bind(target, fn) {
        return function () {
          return fn.apply(target, arguments);
        };
      }

      function getIndex(obj, inx) {
        var n = 0;
        for (var i in obj) {
          if (inx == i) {
            return n;
          }
          n++;
        }
      }

      function toNumber(d) {
        return d - 0;
      }

      function throttle(fn, time) {
        var timer,
          obj = {};
        return function (data) {
          let nodeId = data.nodeId,
            kpiCode = data.kpiCode,
            instance = data.instance || "_";
          if (timer == null) {
            timer = setTimeout(() => {
              fn.call(this, obj);
              timer = null;
            }, time);
          } else {
            obj[kpiCode] = data;
          }
        };
      }

      function TechParameters() {
        this.valueListMap = {};
        this.getKpiValueList(
          bind(this, function () {
            this.setWebSocket();
          })
        );
      }

      function createCell(value) {
        return {
          type: "label",
          value: value,
          composory: "none",
          style: {
            "white-space": "pre-wrap",
            borderBottom: "1px solid #666666",
            height: "41px"
          },
          class: "col-xs-4"
        };
      }

      function initCtrlGroup() {
        var arr = ["名称", "数值", "更新时间"].map(function (item) {
          return createCell(item);
        });
        return [arr];
      }

      function setEachGroup(item) {
        var val = item["_value"] == null ? "-" : item["_value"],
          unit = item.unit && item.unit != "NA" ? item.unit : "",
          arr;
        val = val + unit;
        arr = [
          item.kpiName,
          val,
          target
          .dateHandler(item.arisingTime)
          .getDateString("yy/MM/dd hh:mm:ss")
        ].map(function (item) {
          return createCell(item);
        });
        return arr;
      }
      TechParameters.prototype.getDomainAreaLineTree_alertStatus = function (
        callback
      ) {
        target.getDomainAreaLineTree_alertStatus(
          bind(this, function (resource) {
            this.resource = resource;
            callback && callback.call(this, resource);
          })
        );
      };
      TechParameters.prototype.getAttrsByResource = function (callback) {
        this.getDomainAreaLineTree_alertStatus(
          bind(this, function (resource) {
            target.getAttrsByResource(
              resource,
              bind(this, function (attrs) {
                this.attributes = attrs;
                callback && callback.call(this, attrs);
              })
            );
          })
        );
      };
      TechParameters.prototype.getMeasureLocate = function (callback) {
        this.getAttrsByResource(
          bind(this, function (attrs) {
            this.resource.getMeasureLocate().then(
              bind(this, function (sensors) {
                var sensor = sensors.find(function (sensor) {
                    return sensor.label.trim() == "整体";
                  }),
                  dataItems = sensor ? sensor.kpis : [],
                  inx = 0;
                this.dataItemsMap = dataItems.reduce(function (a, b) {
                  a[b.dataItemId] = b;
                  inx++;
                  return a;
                }, {});
                callback && callback.call(this, this.dataItemsMap);
              })
            );
          })
        );
      };
      TechParameters.prototype.getKpis = function (callback) {
        this.getMeasureLocate(
          bind(this, function (dataItemsMap) {
            target.getKpisByModelId(this.resource.modelId, function (kpis) {
              kpis.forEach(function (kpi) {
                dataItemsMap[kpi.id] ?
                  (dataItemsMap[kpi.id].unit = kpi.unit) :
                  null;
              });
              callback && callback.call(this, dataItemsMap);
            });
          })
        );
      };
      TechParameters.prototype.handValueList = function (valueList) {
        if (valueList instanceof Array) {
          valueList.forEach(
            bind(this, function (b) {
              this.dataItemsMap[b.kpiCode]["_value"] = b.value;
              this.dataItemsMap[b.kpiCode]["arisingTime"] = b.arisingTime;
            })
          );
        } else {
          for (var i in valueList) {
            this.dataItemsMap[i]["_value"] = valueList[i].value;
            this.dataItemsMap[i].arisingTime = valueList[i].arisingTime;
          }
        }
      };
      TechParameters.prototype.render = function () {
        var ctrlGroups = initCtrlGroup(),
          list = Object.values(this.dataItemsMap);
        [].push.apply(ctrlGroups, list.map(setEachGroup));
        this.tableIns = target.render(ctrlGroups);
      };
      TechParameters.prototype.refresh = function (data) {
        if (!this.tableIns) {
          return;
        }
        for (var i in data) {
          bind(this, function (i, val) {
            var inx = getIndex(this.dataItemsMap, i),
              item = this.dataItemsMap[i],
              value = val.value == null ? "-" : val.value,
              unit = item.unit && item.unit != "NA" ? item.unit : "",
              trs = this.tableIns.find("tr"),
              tr = trs[inx + 1],
              tds = tr.getElementsByTagName("td"),
              spa1 = tds[1].getElementsByTagName("span")[2],
              spa2 = tds[2].getElementsByTagName("span")[2];
            spa1.innerText = value + unit;
            spa2.innerText = target
              .dateHandler(val.arisingTime)
              .getDateString("yy/MM/dd hh:mm:ss");
          })(i, data[i]);
        }
      };
      TechParameters.prototype.webSocket = function (callback) {
        target.webSocket(
          this.resource.id,
          Object.keys(this.dataItemsMap),
          bind(this, throttle(callback, 3000)),
          "instance_parameter"
        );
      };
      TechParameters.prototype.setWebSocket = function () {
        this.webSocket(
          bind(this, function (data) {
            this.refresh(data);
          })
        );
      };
      TechParameters.prototype.getKpiValueList = function (callback) {
        this.getKpis(
          bind(this, function (dataItemsMap) {
            target.getKpiValueCi(
              [this.resource.id],
              Object.keys(dataItemsMap).map(toNumber),
              bind(this, function (valueList) {
                this.handValueList(valueList);
                this.render();
                callback();
              }),
              {
                isRealTimeData: true,
                includeInstance: true
              }
            );
          })
        );
      };
      techParameters = new TechParameters();
      target.on("$destroy", function (d) {

      })
    }
  }
});