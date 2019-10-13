define({
  "on": {
    "init": function (event, complete, df) {
      let target = event.target,
        kpisMap = {},
        deviceDetail;

      function parse(str) {
        var a;
        try {
          a = JSON.parse(str)
        } catch (e) {
          return;
        }
        return a;
      }

      function isNotUndefined(d) {
        return typeof d !== "undefined";
      }

      function sensorMap(a, b) {
        a[b.name] = b;
        return a;
      }

      function childrenMap(a, b) {
        a[b.id] = b;
        return a;
      }

      function getDataItemId(dataItem) {
        return dataItem.dataItemId;
      }

      function bind(target, fn) {
        return function () {
          return fn.apply(target, arguments);
        }
      }

      function lessThan(num) {
        return function (d, i) {
          return i < num;
        }
      }

      function getNumber(str) {
        var match = /(?:.*\:)*([^\:]*)/.exec(str);
        if (typeof str == "string" || typeof str == "number") {
          return match ? match[1] - 0 : str;
        }
      }

      function getString(str) {
        var match = /(?:.*\:)*([^\:]*)/.exec(str);
        if (typeof str == "string" || typeof str == "number") {
          return match ? match[1] : str;
        }
      }

      function prop(cell, attr, val) {
        var attrs = attr.split("/").filter(isNotUndefined),
          item;
        if (typeof val === "undefined") {
          rs = cell;
          while ((item = attrs.shift()) && rs) {
            rs = rs[item];
          }
          return rs;
        }
        var last = attrs.pop(),
          rs = cell;
        while ((item = attrs.shift()) && rs) {
          rs = rs[item];
        }
        if (typeof rs === "object") {
          rs[last] = val;
        }
      }

      function attr(cell, attr, val) {
        var attrs = attr.split("/").filter(isNotUndefined),
          item;
        if (typeof val === "undefined") {
          rs = cell.attrs;
          while ((item = attrs.shift()) && rs) {
            rs = rs[item];
          }
          return rs;
        }
        var last = attrs.pop(),
          rs = cell.attrs;
        while ((item = attrs.shift()) && rs) {
          rs = rs[item];
        }
        if (typeof rs === "object") {
          rs[last] = val;
        }
      }

      function DeviceDetail() {
        this.hookToView(bind(this, function (cells, next) {
          cells.forEach(bind(this, this.handleEachCell));
          next(cells);
        }));
      }
      DeviceDetail.prototype.handleEachCell = function (cell) {
        var name = attr(cell, "text/text"),
          nodeId = getNumber(prop(cell, "nodeId")),
          kpiId = getNumber(prop(cell, "kpiId")),
          modelId = this.resource.modelId,
          ext = prop(cell, "extend");
        attr(cell, "rect/visibility", "hidden");
        attr(cell, "circle/visibility", "hidden");
        attr(cell, "text/visibility", "hidden");
        attr(cell, ".connection/stroke", "#1f8fd8");
        attr(cell, ".connection/stroke-width", 2);
        attr(cell, ".marker-target/visibility", "hidden");
        if (ext) {
          if (ext == "kpis" && modelId > 1000) {
            prop(cell, "currentdevice", 1);
          }
          return;
        }
        if (typeof this.sensors[name] !== "undefined") {
          this.sensors[name].kpis.sort(function (a, b) {
            var k1 = this.kpisMap[modelId][a.dataItemId] || {},
              k2 = this.kpisMap[modelId][b.dataItemId] || {},
              s1 = k1.serial || 0,
              s2 = k2.serial || 0;
            return s1 - s2;
          })
          prop(cell, "extend", "kpis");
          prop(cell, "sensor", name);
          prop(cell, "currentdevice", 1);
          prop(cell, "dataItem", this.sensors[name]
            .kpis.filter(lessThan(4))
            .map(getDataItemId));
          return;
        }
        if (nodeId) {
          if (typeof this.children[nodeId] !== "undefined") {
            prop(cell, "extend", "alert");
          } else {
            prop(cell, "sensor", "00");
            prop(cell, "extend", "dataItem");
            prop(cell, "nodeId", "number:" + this.resource.id);
            prop(cell, "currentdevice", 1);
            prop(cell, "dataItem", [kpiId]);
          }
          return;
        }
      }
      DeviceDetail.prototype.hookToView = function (callback) {
        this.getView(bind(this, function (json) {
          target.hooks.tap("viewloaded", callback);
          target.render(json);
          target.$on("$loadCiKpiComplete", bind(this, this.loadCiKpiComplete));
        }))
      }
      DeviceDetail.prototype.loadCiKpiComplete = function (cells) {
        var position = { x: 290, y: 0 },
          is = target.createCurrentStatus(this.resource.label, position, this.resource.getAlertState());
        this.clear = this.resource.$on("alertStateChange", function (value) {
          is.setAlarmStatus(value);
        });
      }
      DeviceDetail.prototype.destroy = function () {
        this.clear && this.clear.call(this);
      }
      DeviceDetail.prototype.getView = function (callback) {
        this.getBrothers(bind(this, function (brothers) {
          var fd = brothers.find(function (v) {
              return v.$attr("values/view/viewId");
            }) || {},
            viewId = this.resource.$attr("view/viewId") ||
            this.resource.$attr("values/view/viewId") ||
            fd.$attr("values/view/viewId");
          target.getViewById(viewId, function (view) {
            callback(parse(view.content));
          })
        }))
      }
      DeviceDetail.prototype.getBrothers = function (callback) {
        this.getChildren(bind(this, function (children) {
          this.resource.getBrothers().then(bind(this, function (brothers) {
            this.brothers = brothers;
            callback(brothers);
          }))
        }))
      }
      DeviceDetail.prototype.getChildren = function (callback) {
        this.getMeasureLocate(bind(this, function (sensor) {
          this.resource.getChildren(function (n, i, l) {
            return true;
          }).then(bind(this, function (children) {
            this.children = children;
            callback(children);
          }))
        }))
      }
      DeviceDetail.prototype.getMeasureLocate = function (callback) {
        this.getDataItemsByModelIdFromCache(bind(this, function (kpisMap) {
          this.resource.getMeasureLocate().then(bind(this, function (sensors) {
            this.sensors = sensors.reduce(sensorMap, {});
            callback(sensors);
          }));
        }))
      }
      DeviceDetail.prototype.getDataItemsByModelIdFromCache = function (callback) {
        this.getDomainAreaLineTree_alertStatus(function (resource) {
          target.getDataItemsByModelIdFromCache(resource.modelId, function (kpisMap) {
            this.kpisMap = kpisMap;
            callback(kpisMap);
          })
        })
      }
      DeviceDetail.prototype.getDomainAreaLineTree_alertStatus = function (callback) {
        target.getDomainAreaLineTree_alertStatus(bind(this, function (resource) {
          this.resource = resource;
          callback(resource);
        }));
      }
      deviceDetail = new DeviceDetail;
      target.on("$destroy", function () {
        deviceDetail.destroy();
      });
    }
  }
});