define(['../services/services.js'], function (services) {
  'use strict';
  services.factory('ticketTaskService', ['serviceProxy',
    function (serviceProxy) {
      var service = {};
      var base = "ticketTaskService";

      /**
       * 获取所有工单
       * @param callback
       */
      service.getAllTickets = function (callback) {
        serviceProxy.get(base, "getAllTickets", [], callback);
      };
      /**
       * 工单查询
       * @param callback
       */
      service.findTickets = function (obj, callback) {
        serviceProxy.get(base, "findTickets", [obj], callback);
      };

      /**
       * 提交工单
       * @param ticket
       * @param callback
       */
      service.commitTicket = function (ticket, callback) {
        serviceProxy.get(base, "commitTicket", ticket, callback);
      };
      /**
       * 查询该工单任务是否为当前登录用户的
       * @param ticket
       * @param callback
       */
      service.isMyTicketTask = function (ticketId, callback) {
        serviceProxy.get(base, "isMyTicketTask", ticketId, callback);
      };
      /**
       * 根据设备id获取工单
       * @param ticket
       * @param callback
       */
      service.getTicketsByStatusAndDeviceId = function (status, id, callback) {
        serviceProxy.get(base, "getTicketsByStatusAndDeviceId", [status, id], callback);
      };

      /**
       * 通过工单号获取工单
       * @param ticketNo
       * @param callback
       */
      service.getTicket = function (ticketNo, callback) {
        serviceProxy.get(base, "getTicket", ticketNo, callback);
      };
      /**
       * 通过设备Id，获取工单
       * @param 设备Id
       * @param callback
       */
      service.getTicketsByDeviceId = function (ticketNo, callback) {
        serviceProxy.get(base, "getTicketsByDeviceId", ticketNo, callback);
      };
      /**
       * 通过任务ID获取任务详情
       * @param ticketNo
       */
      service.getTicketTaskById = function (ticketNo, callback) {
        serviceProxy.get(base, "getTicketTaskById", ticketNo, callback);
      };

      /**
       * 通过工单号,获取任务
       * @param ticketNo
       * @param callback
       */
      service.getTicketTasks = function (ticketNo, callback) {
        serviceProxy.get(base, "getTicketTasks", ticketNo, callback);
      };

      /**
       * 告警转工单
       * @param alertId
       * @param ticket
       * @param callback
       */
      service.alertToTicket = function (alertId, ticket, callback) {
        serviceProxy.get(base, "alertToTicket", alertId, ticket, callback);
      };
      /**
       * 设备报警台数详情接口
       * @param params = {"nodeId":515445641576264,"severity":4}
       * @param callback
       */

      service.getAlertDeviceList = function (params, callback) {
        serviceProxy.get(base, "getAlertDeviceList", params, callback);
      };

      /**
       * 保存工单
       * @param ticket
       * @param callback
       */
      service.saveTicket = function (ticket, callback) {
        serviceProxy.get(base, "saveTicket", ticket, callback);
      };

      /**
       * 撤消工单
       * @param ticketId
       * @param callback
       */
      service.cancelTicket = function (ticketId, callback) {
        serviceProxy.get(base, "cancelTicket", ticketId, callback);
      };
      /**
       * 删除工单
       * @param ticketId
       * @param callback
       */
      service.deleteTicket = function (ticketId, callback) {
        serviceProxy.get(base, "deleteTicket", ticketId, callback);
      };

      /**
       * 执行工单任务
       * @param ticketId
       * @param followup
       * @param callback
       */
      service.doTask = function (ticketTask, callback) {
        serviceProxy.get(base, "doTask", ticketTask, callback);
      };

      service.getUsersByDeviceIdAndRoleAndSpecialty = function (deviceId, roleId, specialty, callback) {
        serviceProxy.get(base, "getUsersByDeviceIdAndRoleAndSpecialty", [deviceId, roleId, specialty], callback);
      };

      service.doTask4Baogang = function (ticketNo, values, callback) {
        serviceProxy.get("baogangTicketService", "doTask", [ticketNo, values], callback);
      };

      service.getComplexHandleListWithCategorys = function (selector, ticketTaskQueryModel, pageRequest, callback) {
        serviceProxy.get("baogangTicketService", "getComplexHandleListWithCategorys", [selector, ticketTaskQueryModel, pageRequest], callback);
      };

      // 查询设备工况配置
      service.getDeviceDiagnosticResumeAndAlertStatis = function (params, callback) {
        serviceProxy.get("baogangTicketService", "getDeviceDiagnosticResumeAndAlertStatis", [params], callback);
      };
      // 报警强制关闭
      service.doTaskCloseAlert = function (ticketNo,obj, callback) {
        serviceProxy.get("baogangTicketService", "doTaskCloseAlert", [ticketNo,obj], callback);
      };



      /**
       * 获取工单 10-未发布 100-执行中 200-已完成
       * @param status
       * @param callback
       */
      service.getTicketsByStatus = function (status, callback) {
        serviceProxy.get(base, "getTicketsByStatus", status, callback);
      };

      /**
       * 获取工单任务 0-待处理 100-处理中 200-已完成
       * @param  status
       * @param  callback
       */
      service.getTicketTasksByStatus = function (status, callback) {
        serviceProxy.get(base, "getTicketTasksByStatus", status, callback);
      };

      service.getTicketTasksByCondition = function (paras, callback) {
        serviceProxy.get(base, "getTicketTasksByCondition", paras, callback);
      };

      service.getTicketTasksByConditionAndPage = function (params, pageRequest, callback) {
        serviceProxy.get(base, "getTicketTasksByConditionAndPage", [params, pageRequest], callback);
      };

      service.getTicketsByConditionAndPage = function (params, pageRequest, callback) {
        serviceProxy.get(base, "getTicketsByConditionAndPage", [params, pageRequest], callback);
      };


      service.getDealTicketListByPage = function (params, pageRequest, callback) {
        serviceProxy.get(base, "getDealTicketListByPage", [params, pageRequest], callback);
      };

      service.claimAlert = function (paras, callback) {
        serviceProxy.get("baogangTicketService", "claimAlert", paras, callback);
      };

      service.getDeviceDiagnosticResumeOrTicketByPage = function (params, PageRequest, callback) {
        serviceProxy.get("baogangTicketService", "getDeviceDiagnosticResumeOrTicketByPage", [params, PageRequest], callback);
      };

      service.getInfoByPage = function (params, PageRequest, callback) {
        serviceProxy.get("baogangTicketService", "getInfoByPage", [params, PageRequest], callback);
      };


      service.complexHandleAgain = function (taskId, complexHandel, callback) {
        serviceProxy.get("baogangTicketService", "complexHandleAgain", [taskId, complexHandel], callback);
      };


      service.getDeviceDiagnosticResumeAndAlertBypage = function (params, PageRequest,callback) {
        serviceProxy.get("baogangTicketService", "getDeviceDiagnosticResumeAndAlertBypage", [params, PageRequest], callback);
      };

      service.getKnowledgeByConditionWithPage = function (knowledgeQueryModel, pageRequest, callback) {
        serviceProxy.get("knowledgeUIService", "getKnowledgeByConditionWithPage", [knowledgeQueryModel, pageRequest], callback);
      };


      service.alertTaskMergeDeal = function (taskIds, values, callback) {
        serviceProxy.get("baogangTicketService", "alertTaskMergeDeal", [taskIds, values], callback);
      };




      service.getTicketsByCondition = function (paras, callback) {
        serviceProxy.get(base, "getTicketsByCondition", paras, callback);
      };

      service.getDealTicketList = function (paras, callback) {
        serviceProxy.get(base, "getDealTicketList", paras, callback);
      };

      service.getTopicErrorDataList = function (topicErrorQueryModel, callback) {
        serviceProxy.get("kpiDataFlexService", "getTopicErrorDataList", topicErrorQueryModel, callback);
      };



      return service;
    }
  ]);
});
