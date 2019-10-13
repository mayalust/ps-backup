var router = require("../dist/api-route")();
var METHOD = "post";
router.route("login/:user/:password", function(params, request, response){
  var user = params['user'];
  var password = params['password'];
  request(METHOD, "userLoginUIService/login", [user, password], callback);
  function callback(d){
    response(d);
  }
})
module.exports = router;