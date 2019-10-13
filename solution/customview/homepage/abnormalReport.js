define({
  "on": {
    "init": function (event, complete, df) {
      var valueListMap = {},
        target = event.target,
        total = 0,
        instanceIds = {
          1: '点检异常数',
          2: '注意告警数',
          3: '警告告警数',
          4: '危险告警数'
        };

      function toFixed(n) {
        return function (num) {
          var number = Math.pow(10, n)
          return Math.round(num * number) / number
        }
      }

      function toNumber(val) {
        val = val - 0;
        return val === val ? val : 0;
      }

      function propMap(obj, callback) {
        var rs = [];
        for (var i in obj) {
          rs.push(callback(i, obj[i]));
        }
        return rs;
      }

      function getChildren(callback) {
        target.getDomainAreaLineTree(function (resource) {
          resource.getChildren(function (n, i, l) {
              return l < 2
            })
            .then(function (children) {
              callback(children);
            })
        })
      }

      function getKpivValueList(nodeIds, kpiCodes, callback) {
        var params = ["kpi", {
          "isRealTimeData": true,
          "includeInstance": true,
          "nodeIds": nodeIds,
          "kpiCodes": kpiCodes
        }]
        target.postService("kpiDataFlexService", "getKpiValueList", params, callback, {
          "isRealTimeData": true,
          "includeInstance": true
        })
      }

      function sum(a) {
        var rs = 0;
        for (var i in a) {
          rs += a[i];
        }
        return rs;
      }

      function getValueListMap(a, b) {
        var value,
          kpiCode = b.kpiCode,
          nodeId = b.nodeId,
          instance = b.instance;
        a[nodeId] = a[nodeId] || {};
        a[nodeId][kpiCode] = a[nodeId][kpiCode] || {};
        if (kpiCode == 7203) {
          if (instance == null) {
            return a;
          }
          insId = instance.split(",")[0];
          a[nodeId][kpiCode][insId] = b.value || 0;
        }
        if (kpiCode == 7302) {
          value = toNumber(b.value) || 0;
          a[nodeId][kpiCode]["_"] = toFixed(2)(value / total * 100);
        }
        return a;
      }

      function attribute(obj, path) {
        let {
          length
        } = path, inx = 0;
        while (inx < length) {
          let key = path[inx],
            item = obj[key];
          if (item == null) {
            return;
          }
          obj = item;
          inx++;
        }
        return obj;
      }

      function setAnalysisData(domain) {
        var rs = {};
        rs.province = domain.label;


        function createItem(kpiCode, defaultValue) {
          defaultValue = defaultValue == null ? 0 : defaultValue;
          let value = attribute(valueListMap, [domain.id, kpiCode, insId]) || defaultValue;
          value += "";
          return function (insId, label) {
            return {
              name: label,
              value
            };
          }
        }
        rs.data = propMap(instanceIds, createItem(7203))
          .concat(propMap({
            "_": "异常处理率"
          }, createItem(7302, 0)));
        rs.index = domain.values.number || 0;
        return rs;
      }

      getChildren(function (children) {
        getKpivValueList(children.map(function (d) {
          return d.id;
        }), [7203, 7302], function (returnData) {
          var totalNumber = returnData.data.reduce(function (a, b) {
            var nodeId = b.nodeId,
              kpiCode = b.kpiCode,
              val = toNumber(b.value);
            if (kpiCode == 7302) {
              if (a[nodeId] != null) {
                console.error("nodeId : " + nodeId + ", kpiCode : " + kpiCode + ", instance : " + b.instance + ", 存在重复输入情况，请联系KQI编写者修改漏洞。");
              }
              a[nodeId] = val;
            }
            return a;
          }, {});
          total = sum(totalNumber);
          valueListMap = returnData.data.reduce(getValueListMap, {});
          var list = children.map(setAnalysisData);
          target.render(list);
        })
      })
    }
  }
});