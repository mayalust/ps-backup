let WebSocketServer = require("ws").Server,
  { dateparser } = require("ps-ultility");

function stringify(str) {
  let a;
  try {
    a = JSON.stringify(str);
  } catch (e) {
    throw new Error(e);
    return;
  }
  return a;
}

function parse(str) {
  let rs;
  try {
    rs = JSON.parse(str);
  } catch (e) {
    return;
  }
  return rs;
}

function getRandom(arr) {
  let len = arr.length,
    rnd = Math.floor(Math.random() * len);
  return arr[rnd];
}
class MessageData {
  constructor(jsonStr) {
    let json = parse(jsonStr);
    if (json == null) {
      return;
    }
    for (let i in json) {
      this[i] = json[i];
    }
  }
  getParams() {
    return this.param || {
      ciid: "",
      kpi: "",
      instances: ""
    };
  }
  getNodeIds() {
    let { ciid } = this.getParams();
    return ciid.split(",")
  }
  getKpiIds() {
    let { kpi } = this.getParams();
    return kpi.split(",").filter(d => d != 999997);
  }
  getInstances() {
    let { instances } = this.getParams();
    return instances.split(",")
  }
}
class FakeWs {
  constructor(app) {
    this.state = "pending";
    this.timer = null;
    this.wss = new WebSocketServer({ port: 8081 });
    this.wss.on("connection", ws => {
      ws.on("message", message => {
        this.loopCall = () => {
          let msgData = this.packSendData(new MessageData(message));
          ws.send(stringify(msgData));
          this.timer = setTimeout(() => {
            this.loopCall && this.loopCall();
          }, 100);
        }
        this.loopCall();
      });
      ws.on("close", e => {
        this.state = "close";
        clearTimeout(this.timer);
        delete this.loopCall;
        delete this.timer;
      })
      ws.on("error", e => {
        this.state = "error";
        console.log(e);
      })
    });
    this.wss.on("closed", e => {
      console.log("closed");
    })
    this.wss.on("error", e => {
      console.log(e);
    })
  }
  packSendData(msg) {
    let nodeIds = msg.getNodeIds(),
      kpiIds = msg.getKpiIds(),
      instances = msg.getInstances(),
      nid = getRandom(nodeIds),
      kid = getRandom(kpiIds),
      instance = getRandom(instances),
      arisingTime = dateparser().getDateString();
    if (instance.indexOf("_") != -1) {
      kid = 999997;
    }
    return {
      code: 0,
      message: null,
      data: {
        nodeId: nid,
        kpiCode: kid,
        instance: instance,
        value: Math.round(Math.random() * 5),
        arisingTime: arisingTime
      }
    }
  }
}
module.exports = FakeWs;