/** 仪表板 : [ 我的首页[协同工作员-1级] ] - 532609492296068 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var attr = ['domains', 'sendTime'];
      //*下面内容别动
      target.hide();
      var showAdvance = false;
      target.off("showAdvance");
      target.on("showAdvance", function() {
        target.show();
        showAdvance = true;
      });
      target.off("hideAdvance");
      target.on("hideAdvance", function() {
        target.hide();
        showAdvance = false;
      });
      target.off("toggle");
      target.on("toggle", function() {
        
        if (showAdvance) {
          target.trigger("hideAdvance");
        } else {
          target.trigger("showAdvance");
        }
      });
      target.setScopeValue("advanceSearch", {});
      var areas = [],
        lines = [];
      var area, line = {};
      target.queryDomainTree(function(domain) {
        for (var i in domain[0].domainInfos) {
          for (var j in domain[0].domainInfos[i].domainInfos) {
            areas.push(domain[0].domainInfos[i].domainInfos[j]);
          }
        };
        target.getResourceByModelId(301, function(customers) {
          var render = function() {
            for (var i in areas) {
              var filter = customers.filter(function(customer) {
                return customer.domains.indexOf(areas[i].domains) != -1;
              });
              areas[i].domainInfos = filter;
            }
            area = area || areas[0];

            lines = area.domainInfos || [];
            var find = lines.find(function(elem) {
              return elem.id == line.id
            });
            line = find ? find : lines[0];
            line = line || {};
            target.setScopeValue("advanceSearch/" + attr[0], {
              type: "domains",
              value: line
            });
            var ctrlGroups = [
              [{
                type: "label",
                value: "高级",

                style: {
                  width: "55px",
                  textAlign: "center"
                }
              }, {
                type: "label",
                value: "厂区",
                class: "col-md-1",
                style: {
                  textAlign: "center"
                }
              }, {
                type: "select",
                value: area.id,
                class: "col-md-2",
                on: {
                  change: function(elem) {
                    area = elem.value;
                    render();
                  }
                },
                options: areas,
                format: {
                  "id": "domains",
                  "label": "label"
                }
              }, {
                type: "label",
                value: "产线",
                class: "col-md-1",
                style: {
                  textAlign: "center"
                }
              }, {
                type: "select",
                value: line.id,
                class: "col-md-2",
                on: {
                  change: function(elem) {
                    target.setScopeValue("advanceSearch/" + attr[0], {
                      type: "domains",
                      value: elem.value
                    });
                  }
                },
                options: lines,
                format: {
                  "id": "id",
                  "label": "label"
                },
              }, {
                type: "label",
                value: "起始时间",
                class: "col-md-1",
                style: {

                  textAlign: "center"
                }
              }, {
                type: "dateRangePicker",
                value: "",
                class: "col-md-3",
                on: {
                  change: function(elem) {
                    var start = target.dateHandler(elem.value.start);
                    var end = target.dateHandler(elem.value.end);
                    var timeSpan = [start, end];
                    target.setScopeValue("advanceSearch/" + attr[1], {
                      type: "between",
                      value: timeSpan
                    });
                  }
                },
              }, {
                type: "button",
                class: "col-md-1 col-md-offset-1",
                btnclass: "btn btn-primary",
                value: "查 询",
                btnStyle: {
                  width: "100px",
                },
                on: {
                  click: function() {
                    console.log(target.getScopeValue("advanceSearch"));
                    target.trigger("advance_search_toDolist");
                  }
                }
              }]
            ];
            target.render(ctrlGroups);
          }
          render();
        });
      });
    }
  }
}