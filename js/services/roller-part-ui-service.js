/**
 * Created by whui on 2018/2/11.
 */
define(['../services/services.js'], function (services) {
  'use strict';
  services.factory('rollerPartUIService', ['serviceProxy',
    function (serviceProxy) {
      var placeServiceName = 'rollerPartUIService',
        service = {};
      /**
       * 获取备件更换和服役履历信息
       */
      service.getRollerPartActionLogByCondition = function (obj, callBack) {
        serviceProxy.get(placeServiceName, "getRollerPartActionLogByCondition", [obj], callBack);
      };

      /**
       * 查询所有辊道
       */
      service.getRollerPartByCondition = function (obj, callBack) {
        serviceProxy.get(placeServiceName, "getRollerPartByCondition", [obj], callBack);
      };


      /**
       * 删除故障信息
       */
      service.deleteDeviceFaultInfoById = function (id, callBack) {
        serviceProxy.get(placeServiceName, "deleteDeviceFaultInfoById", id, callBack);
      };

      /**
       * 发起辊道备修委托
       * @param rollerPartList   List<RollerPart>
       * @param paramValues     Map<String, Object>
       * @param callBack
       */

      service.rollerTrust = function (rollerPartList, paramValues, callBack) {
        serviceProxy.get('baogangTicketService', "rollerTrust", [rollerPartList, paramValues], callBack);
      };

      /**
       * 发起卷筒备修委托
       * @param rollerPartList
       * @param message
       * @param paramValues
       * @param callBack
       */

      service.rollerReelTrust = function (rollerPartList, message, paramValues, callBack) {
        serviceProxy.get('baogangTicketService', "rollerReelTrust", [rollerPartList, message, paramValues], callBack);
      };

      service.getFactorySettlementByConditonAndPage = function (condtion, pageRequest, callBack) {
        serviceProxy.get('baogangTicketService', "getFactorySettlementByConditonAndPage", [condtion, pageRequest], callBack);
      };


      service.rollerReelTrustReplace = function (ticketNo, actionLog, taskValues, callBack) {
        serviceProxy.get('baogangTicketService', "rollerReelTrustReplace", [ticketNo, actionLog, taskValues], callBack);
      };


      /**
       * 点检计划任务更改 => 批量点检
       * @param ticketTaskList
       * @param callBack
       */

      service.pointCheckBatchDeal = function (ticketTaskList, callBack) {
        serviceProxy.get('baogangTicketService', "pointCheckBatchDeal", [ticketTaskList], callBack);
      };

      /**
       * 生成额外计划
       * @param srcTaskList
       * @param changeDate
       * @param changeReason
       * @param callBack
       */

      service.createTempPointCheckTask = function (srcTaskList, changeDate, changeReason, callBack) {
        serviceProxy.get("baogangTicketService", "createTempPointCheckTask", [srcTaskList, changeDate, changeReason], callBack);
      };

      /**
       * 计划日期调整
       * @param srcTaskList
       * @param changeDate
       * @param changeReason
       * @param callBack
       */


      service.changeTaskPlanTime = function (srcTaskList, changeDate, changeReason, callBack) {
        serviceProxy.get("baogangTicketService", "changeTaskPlanTime", [srcTaskList, changeDate, changeReason], callBack);
      };

      /**
       * 点检任务统计
       * @param ticketTaskQueryModel
       * @param callBack
       */

      service.getPointCheckStatis = function (ticketTaskQueryModel, callBack) {
        serviceProxy.get("baogangTicketService", "getPointCheckStatis", [ticketTaskQueryModel], callBack);
      };


      /**
       * 总包诊断工程师提交报告:
       * @param deviceCycleReportResume 主要报告报告查询条件和页面其他内容字段
       * @param callBack
       */

      service.createCycleReport = function (deviceCycleReportResume, callBack) {
        serviceProxy.get("baogangTicketService", "createCycleReport", [deviceCycleReportResume], callBack);
      };


      /**
       * 总包诊断工程师查询kpi
       * @param CycleReportCondition
       * @param callBack
       */

      service.getCycleKpiList = function (CycleReportCondition, callBack) {
        serviceProxy.get("baogangTicketService", "getCycleKpiList", [CycleReportCondition], callBack);
      };


      /**
       * 诊断分析工程师发起报告流程
       * @param deviceCycleReportResume
       * @param callBack
       */
      service.sendCycleReportByTicket = function (deviceCycleReportResume, callBack) {
        serviceProxy.get("baogangTicketService", "sendCycleReportByTicket", [deviceCycleReportResume], callBack);
      };


      /**
       * @param obj 参数主要包括：服务的设备ID
       * @param callBack
       */

      service.getRollerPartByCondition = function (obj, callBack) {
        serviceProxy.get(placeServiceName, "getRollerPartByCondition", obj, callBack);
      };

      /**
       * 更换辊道
       * @param obj
       * @param callBack
       */
      service.rollerOnBoard = function (obj, callBack) {
        serviceProxy.get(placeServiceName, "rollerOnBoard", obj, callBack);
      };
      /**
       * 工作日调整-日期调整
       * @param conditions  dateTime["2017-01-01","2017-01-02"]
       * @param pageRequest  分页
       * @param callBack
       */
      service.getDatePickerListByCondition = function (conditions, pageRequest, callBack) {
        serviceProxy.get("maintenanceTaskUIService", "getDatePickerListByCondition", [conditions, pageRequest], callBack);
      };

      /**
       * 计划预设定时期查询
       * @param params
       * @param callBack
       */

      service.getPlanTaskTime = function (params, callBack) {
        serviceProxy.get("maintenanceTaskUIService", "getPlanTaskTime", params, callBack);
      };

      /**
       * 计划预设定时期设置
       * @param planTaskTime
       * @param callBack
       */

      service.setPlanTaskTime = function (planTaskTime, callBack) {
        serviceProxy.get("maintenanceTaskUIService", "setPlanTaskTime", planTaskTime, callBack);
      };
      /**
       * 工作日调整
       * @param srcDatePickerList
       * @param targetDate 调整日期
       * @param changeReason 调整原因
       * @param callBack
       */

      service.changeDatePickerBatch = function (srcDatePickerList, targetDate, changeReason, callBack) {
        serviceProxy.get("maintenanceTaskUIService", "changeDatePickerBatch", [srcDatePickerList, targetDate, changeReason], callBack);
      };

      /**
       * 宝钢查询日表列表
       */
      service.getDailyReportByCondtionAndPage = function (condtion, pageRequest, callBack) {
        serviceProxy.get('baogangExtService', "getDailyReportByCondtionAndPage", [condtion, pageRequest], callBack);
      };


      /**
       * 故障模型-查询
       * @type {string}
       */


      var faultRuleService = "faultRuleService";
      service.getFaultDiagnosisModelByConditionAndPage = function (condtion, pageRequest, callBack) {
        serviceProxy.get(faultRuleService, "getFaultDiagnosisModelByConditionAndPage", [condtion, pageRequest], callBack);
      };


      service.addFaultDiagnosisModel = function (faultDiagnosisModel, callBack) {
        serviceProxy.get(faultRuleService, "addFaultDiagnosisModel", faultDiagnosisModel, callBack);
      };

      service.deleteFaultDiagnosisModel = function (faultDiagnosisModel, callBack) {
        serviceProxy.get(faultRuleService, "deleteFaultDiagnosisModel", faultDiagnosisModel, callBack);
      };

      /**
       * 裂化模型-速率
       * @type {string}
       */
      service.getCrackRateModelByConditionAndPage = function (condtion, pageRequest, callBack) {
        serviceProxy.get(faultRuleService, "getCrackRateModelByConditionAndPage", [condtion, pageRequest], callBack);
      };
      service.addCrackRateModel  = function (crackRateModel, callBack) {
        serviceProxy.get(faultRuleService, "addCrackRateModel", crackRateModel, callBack);
      };
      service.deleteFaultCrackRateModel = function (crackRateModel, callBack) {
        serviceProxy.get(faultRuleService, "deleteFaultCrackRateModel", crackRateModel, callBack);
      };

      /**
       * 裂化模型-温差
       * @type {string}
       */
      service.getCrackDiffModelByConditionAndPage = function (condtion, pageRequest, callBack) {
        serviceProxy.get(faultRuleService, "getCrackDiffModelByConditionAndPage", [condtion, pageRequest], callBack);
      };
      service.addCrackDiffModel  = function (crackRateModel, callBack) {
        serviceProxy.get(faultRuleService, "addCrackDiffModel", crackRateModel, callBack);
      };
      service.deleteCrackDiffModel = function (crackRateModel, callBack) {
        serviceProxy.get(faultRuleService, "deleteCrackDiffModel", crackRateModel, callBack);
      };
      /**
       * 查找模型分析对应的字段
       * @param modelId
       * @param callBack
       */
      service.getDiagnosisModel = function (modelId, callBack) {
        serviceProxy.get(faultRuleService, "getDiagnosisModel", modelId, callBack);
      };








      return service;
    }
  ]);
});

