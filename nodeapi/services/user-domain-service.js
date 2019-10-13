var router = require("../dist/api-route")();
var service = require("../dist/service")();
var METHOD = "post";
router.route("getDomainTree", function(param, request, response){
  var domaintree, customers, leafdomains = [];
  function sortByNumberMachineNo(a, b) {
    var val1 = a.values ? a.values.number : null;
    var val2 = b.values ? b.values.number : null;
    function getMaxUnmber(variable) {
      var maxLength = 0;
      var ret = regeExp.exec(variable.label);
      while (ret != null) {
        var num = ret[0].length;
        if (num > maxLength) {
          maxLength = num;
        }
        ret = regeExp.exec(variable.label)
      }
      return maxLength;
    }
    function addZeroBefore(word) {
      var dif = max - word.length;
      for (var i = 0; i < dif; i++) {
        word = "0" + word;
      }
      return word;
    }
    if (val1 || val2) {
      val1 = val1 || 10000000000;
      val2 = val2 || 10000000001;
      return val1 - val2;
    } else {
      var regeExp = new RegExp("/\\d+/", "g");
      var mnum1 = getMaxUnmber(a);
      var mnum2 = getMaxUnmber(b);
      var max = Math.max(mnum1, mnum2);
      var la = a.label.replace(regeExp, function (word) {
        return addZeroBefore(word);
      });
      var lb = b.label.replace(regeExp, function (word) {
        return addZeroBefore(word);
      });
      return la > lb ? 1 : -1;
    }
  }
  function extractInfo(e){
    return {
      id : e.id,
      label : e.label,
      domains : e.domains,
      domainPath : e.domainPath,
      parentID : e.parentID
    }
  }
  var req = service.post('userLoginUIService/getCurrentUser', null);
  req.then(function (dt) {
    var user = dt;
    var userID = user.userID + "";
    return service.post('userDomainService/queryDomainTree', userID);
  }).then(function(dt){
    var tree = dt || [];
    function repeat(node){
      var clone = {};
      clone.id = node.id;
      clone.label = node.label;
      clone.domains = node.domains;
      clone.domainPath = node.domainPath;
      clone.parentID = node.parentID;
      var domainInfos = [];
      for(var i in node.domainInfos){
        domainInfos.push(repeat(node.domainInfos[i]))
      };
      if(domainInfos.length > 0){
        domainInfos.sort(sortByNumberMachineNo);
        clone.children = domainInfos;
      } else {
        leafdomains.push(clone);
      }
      return clone;
    }
    domaintree = repeat(tree[0]);
    return service.post('resourceUIService/getResourceByModelId', "[301]");
  }).then(function(dt){
    dt = dt || [];
    customers = dt.map(extractInfo);
    customers.sort(sortByNumberMachineNo);
    for(var i in leafdomains){
      var ld = leafdomains[i];
      var filter = customers.filter(function(customer){
        return customer.parentID == ld.id;
      });
      if(filter.length > 0){
        ld.children = filter;
      }
    }
    return service.post('resourceUIService/getResourceByModelId', "[302]");
  }).then(function(dt){
    dt = dt || [];
    projects = dt.map(extractInfo);
    projects.sort(sortByNumberMachineNo);
    projects = projects.reduce(function(a, b){
      var find = projects.find(function(project){
        return project.id == b.parentID
      });
      if(find){
        find.children = find.children || [];
        find.children.push(b)
      } else {
        a.push(b);
      };
      return a;
    }, []);
    for(var i in customers){
      var proj = customers[i];
      var filter = projects.filter(function(project){
        return project.parentID == proj.id;
      });
      if(filter.length > 0){
        proj.children = filter;
      }
    };
    response({
      code : 0,
      data : domaintree,
      message : ""
    });
  }).catch(function(e){
    response(e);
  })
}, function(e, response){
  response(e);
});
module.exports = router;