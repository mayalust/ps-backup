define({
  "on": {
    "init": function (event, complete, df) {
      var target = event.target,
        kpis = {
          "1,count": '点检异常数',
          "2,count": '注意告警数',
          "3,count": '警告告警数',
          "4,count": '危险告警数'
        }

      function values(d, fn) {
        var rs = [];
        for (var i in d) {
          rs.push(fn(i, d[i]))
        }
        return rs;
      }

      function QueryAlert() {
        this.resource = undefined;
      }
      QueryAlert.prototype.getChildren = function (callback) {
        target.getDomainAreaLineTree(function (res) {
          res.getChildren(function (n, i, l) {
            return l < 2
          }).then(function (resources) {
            this.resource = resources;
            callback(resources);
          });
        })
      }
      QueryAlert.prototype.getKpiValueList = function (callback) {
        this.getChildren(function (resource) {
          var nodeIds = resource.map(function (d) {
              return d.id
            }),
            kpiCodes = [7203];
          target.getKpiValueCi(nodeIds, kpiCodes, function (valueList) {
            callback(valueList.reduce(function (a, b) {
              a[b.nodeId] = a[b.nodeId] || {};
              a[b.nodeId][b.instance] = b;
              return a;
            }, {}));
          }, {
            includeInstance: true,
            isRealTimeData: true
          })
        })
      }

      new QueryAlert().getKpiValueList(function (valueMap) {
        var options = makeOption(this.resource.map(function (resource) {
          var val = valueMap[resource.id] || {};
          resource.data = Object.keys(kpis).map(function (instance) {
            return {
              name: kpis[instance],
              value: val[instance] ? val[instance].value : 0
            };
          });
          return resource;
        }));
        target.render(options);
      })

      function makeOption(queryItems) {
        return {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            data: values(kpis, function (key, val) {
              return val;
            })
          },
          series: queryItems.map(function (d, i) {
            var pie = new pieData(d.label, d.data);
            pie.setX(20 + (i % 3) * 30);
            pie.setY(30 + Math.floor(i / 3) * 45);
            return pie.getData();
          }),
          graphic: {
            elements: queryItems.map(function (d, i) {
              var left = 18 + (i % 3) * 30,
                top = 50 + Math.floor(i / 3) * 45;
              return {
                type: "text",
                top: top + "%",
                left: left + "%",
                style: {
                  text: d.label,
                  fill: "white",
                  textAlign: "center",
                  textVerticalAlign: "middle"
                }
              }
            })
          }
        }
      }

      function pieData(title, data) {
        this.title = title;
        this.data = data;
        this.x = undefined;
        this.y = undefined;
      }
      pieData.prototype.setX = function (num) {
        this.x = num + "%";
      }
      pieData.prototype.setY = function (num) {
        this.y = num + "%";
      }
      pieData.prototype.getData = function () {
        return {
          name: '告警信息',
          type: 'pie',
          center: [this.x, this.y],
          radius: ['25%', '35%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '12',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: values(this.data, function (key, val) {
            return {
              name: val.name,
              value: val.value || 0
            }
          })
        }
      }
    }
  }
});