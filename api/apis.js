const Mock = require('mockjs');
const psfile = require('ps-file');
const pathLib = require('path');
const { Random } = Mock;

function parse(str) {
  let rs;
  try {
    rs = JSON.parse(str);
  } catch (e) {
    return;
  }
  return rs;
}
module.exports = function (app) {
  let alerts = Mock.mock({
    "data|50-100": [{
      'id': "@string(\"number\", 16)",
      'label': "@last()",
      'arisingTime': "@datetime('yyyy-MM-dd HH:mm:ss')"
    }]
  });
  app.post("myService.myMethod", (params, next) => {
    let rs = Mock.mock({
      "data|10": [{
        "id": "@string('number', 8)"
      }]
    })
    next({
      a: rs.data
    })
  })
  app.post("ticketLogService.getByTicketNo", (params, next) => {
    psfile(pathLib.resolve(__dirname, `./json/getByTicketNo`)).read(`${params[0]}.json`).then(d => {
      let data = parse(d.toString());
      next(data.data || data);
    }).catch(e => {
      next(e);
    });
  })
  app.post("alertQueryFlexService.getAlertByPage", (params, next) => {
    setTimeout(function () {
      let alertData = alerts.data,
        total = alertData.length,
        start = params[1].start,
        length = params[1].length;
      next({
        data: alertData.slice(start, start + length),
        total: total
      });
    }, 0);
  })
  app.post("kpiDataFlexService.getKpiValueList", (params, next) => {
    setTimeout(function () {
      let arr = [];
      let nodeIds = params[1]["nodeIds"] || [];
      let kpiCodes = params[1]["kpiCodes"] || [];
      let instances = params[1]["queryInstances"];
      instances = instances ? instances.split(",") : null;
      nodeIds.forEach(nodeId => {
        kpiCodes.forEach(kpiCode => {
          if (instances) {
            instances.forEach(ins => {
              arr.push({
                nodeId: nodeId,
                kpiCode: kpiCode,
                instance: ins,
                value: Random.integer(0, 5),
                arrisingTime: Random.datetime("yyyy-MM-dd HH:mm:ss")
              })
            })
          } else {
            arr.push({
              nodeId: nodeId,
              kpiCode: kpiCode,
              value: Random.integer(0, 5),
              arrisingTime: Random.datetime("yyyy-MM-dd HH:mm:ss")
            })
          }

        })
      })
      next(arr);
    }, 0);
  })
  app.post("resourceUIService.getResourceById", (params, next) => {
    psfile(pathLib.resolve(__dirname, "./json")).read("getResourceById.json").then(d => {
      let data = parse(d.toString());
      next(data.data || data);
    });
  })
  app.post("deviceResumeUIService.getDeviceCheckTrustByCondition", (params, next) => {
    psfile(pathLib.resolve(__dirname, "./json")).read("getDeviceCheckTrustByCondition.json").then(d => {
      let data = parse(d.toString());
      next(data.data || data);
    });
  })
  app.post("maintenanceTaskUIService.getTaskBySimpleConditionWithPage", (params, next) => {
    psfile(pathLib.resolve(__dirname, "./json")).read("getTaskBySimpleConditionWithPage.json").then(d => {
      let data = parse(d.toString());
      next(data.data || data);
    });
  })
};