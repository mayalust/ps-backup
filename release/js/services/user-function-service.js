define(["../services/services.js"],function(n){"use strict";n.factory("userFunctionService",["serviceProxy",function(o){var u="userFunctionService",n={addFunction2Role:function(n,e,t){o.get(u,"addFunction2Role",[n,e],t)},addMethod2Function:function(n,e,t){o.get(u,"addMethod2Function",[n,e],t)},deleteFunction2Role:function(n,e,t){o.get(u,"deleteFunction2Role",[n,e],t)},modifyFunction:function(n,e){o.get(u,"modifyFunction",n,e)},queryFunction2Role:function(n,e){o.get(u,"queryFunction2Role",n,e)},queryAllFunction:function(n){o.get(u,"queryAllFunction",[],n)},queryFunctionByParentCode:function(n,e){o.get(u,"queryFunctionByParentCode",n,e)},queryAllFunctionByUser:function(n,e,t){o.get(u,"queryAllFunctionByUser",[n,e],t)}};return n}])});
//# sourceMappingURL=../../map/js/services/user-function-service.js.map
