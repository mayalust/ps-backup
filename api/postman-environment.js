const psfile = require("ps-file"),
  pathLib = require("path"),
  environments = require("../js/services/service_factory"),
  rootFile = pathLib.resolve(__dirname, "../js/services");
let gen = ["192.168.1.191", "10.26.10.91", "10.27.16.133:8090", "101.132.188.149:20009", "36.110.36.118:19180"].entries();

function addFlexStr(str) {
  if (str == "alert-query-service") {
    return ["alert", "query", "flex", "service"];
  }
  let arr = str.split("-");
  return arr;
}

function camelhill(a) {
  let arr = a.map((d, i) => {
    if (d == "ui") {
      return "UI"
    }
    if (d == "kpidata") {
      return "kpiData"
    }
    if (i == 0) {
      return d;
    }
    return d.charAt(0).toUpperCase() + d.substring(1);
  });
  return arr.join("");
}

function render(url, callback) {
  let node = psfile(rootFile);
  node.children(n => {
      return n.isDir == false;
    })
    .then(children => {
      let values = children.map(child => {
        let name = camelhill(addFlexStr(child.basename));
        return {
          enabled: true,
          key: name,
          value: "http://" + url + "/api/rest/post/" + name,
          type: "text"
        };
      });
      values.push({
        enabled: true,
        key: "localdb",
        value: "http://" + url + "/localdb",
        type: "text"
      })
      let json = {
        name: url,
        values: values
      };
      psfile(__dirname).write("./environments/" + url + ".postman.json", JSON.stringify(json, null, 2)).then(d => {
        callback();
      });
    });
}

function callSeries({
  value,
  done
}) {
  if (done == false) {
    render(value[1], () => {
      callSeries(gen.next())
    });
  }
}
callSeries(gen.next());