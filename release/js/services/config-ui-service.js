define(["../services/services.js"],function(e){"use strict";e.factory("configUIService",["serviceProxy",function(o){var i="configUIService",e={origin:o.origin,saveConfigGroup:function(e,n){o.get(i,"saveConfigGroup",e,n)},getAllConfigGroups:function(e){o.get(i,"getAllConfigGroups",[],e)},getAllConfigs:function(e){o.get(i,"getAllConfigs",[],e)},saveConfig:function(e,n){o.get(i,"saveConfig",e,n)},getConfigsByGroupName:function(e,n){o.get(i,"getConfigsByGroupName",e,n)},deleteConfigGroup:function(e,n){o.get(i,"deleteConfigGroup",e,n)},deleteConfig:function(e,n){o.get(i,"deleteConfig",e,n)}};return e}])});
//# sourceMappingURL=../../map/js/services/config-ui-service.js.map
