define({
  "on": {
    "init": function (event) {
      var target = event.target;
      var lngsstart = 72;
      var lngswidth = 65;
      var latsstart = 13.5;
      var latswidth = 40;
      var lngs = [lngsstart, lngsstart + lngswidth];
      var lats = [latsstart, latsstart + latswidth];
      var rootScope = target.getRootScope();
      target.render();
      //debugger;
      target.$on("$renderGraphComplete", function () {
        target.queryDomainTree(function (dt) {
          var domains = dt[0].domainInfos || [];
          domains.sort(function (a, b) {
            var y1 = a.$attr("values/latitude");
            var y2 = b.$attr("values/latitude");
            return y2 - y1;
          });
          var WIDTH = 1200,
            HEIGHT = 700;
          var ci = domains.map(function (elem) {
            return elem.id;
          });
          var kpi = [999999, 3014];
          target.getKpiValueCi(ci, kpi, function (valuelist) {
            var create3Dbar = function (domain) {
              var name = domain.label;
              var lng = domain.values.longitude;
              var lat = domain.values.latitude;
              var deviceAll = domain.description;
              if (deviceAll == " ") {
                deviceAll = 0;
              }
              target.create3Dbar(name, function (ins) {
                var find = valuelist.find(function (value) {
                  return value.nodeId == domain.id && value.kpiCode == 999999;
                }) || {};
                var deviceNum = valuelist.find(function (value) {
                  return value.nodeId == domain.id && value.kpiCode == 3014;
                }) || {};
                // 
                // 
                if (deviceNum.value > deviceAll) {
                  deviceNum.value = deviceAll;
                }
                var persentage = (deviceNum.value / deviceAll) * 100;
                ins.setAlarmStatus(find.value);
                //ins.setValue(persentage.value || 0);
                ins.setValue(persentage || 0);
                // 
                var x = (lng - lngs[0]) / (lngs[1] - lngs[0]) * 1200;
                var y = (lats[1] - lat) / (lats[1] - lats[0]) * 700;
                ins.setPos({
                  x: x,
                  y: y
                });
                ins.on("click", function (event) {
                  var path = "navigate";
                  //target.setParameter("id", domain.id);
                  target.navigateToTab({
                    index: path,
                    id: domain.id
                  });
                  //domain.click();
                });
              });
            }
            for (var i in domains) {
              create3Dbar(domains[i])
            }
          }, {
            "isRealTimeData": true,
            "includeInstance": true
          });
        });
      })

    }
  }
})