define(["../services/services.js"],function(t){"use strict";t.factory("ticketLogService",["serviceProxy",function(i){var t={},c="ticketLogService";return t.getByTicketNo=function(t,e){i.get(c,"getByTicketNo",t,e)},t.getHistoricActivityInstance=function(t,e){i.get(c,"getHistoricActivityInstance",t,e)},t}])});
//# sourceMappingURL=../../map/js/services/ticket-log-service.js.map
