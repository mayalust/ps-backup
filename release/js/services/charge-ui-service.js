define(["../services/services.js"],function(e){"use strict";e.factory("chargeUIService",["serviceProxy",function(t){var n="chargeUIService",e={saveOrder:function(e,r){t.get(n,"saveOrder",e,r)},getOrderByOrderNo:function(e,r){t.get(n,"getOrderByOrderNo",e,r)},getCouponByPromoCode:function(e,r){t.get(n,"getCouponByPromoCode",e,r)},getCurrentUserProduct:function(e){t.get(n,"getCurrentUserProduct",[],e)},getCurrentUserOrder:function(e){t.get(n,"getCurrentUserOrder",[],e)},getAllPrice:function(e){t.get(n,"getAllPrice",[],e)}};return e}])});
//# sourceMappingURL=../../map/js/services/charge-ui-service.js.map
