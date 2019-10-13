/**
 * Created by whui on 2018/2/5.
 */
define(['../services/services.js'], function (services) {
  'use strict';
  services.factory('deviceResumeUIService', ['serviceProxy',
    function (serviceProxy) {
      var placeServiceName = 'deviceResumeUIService',
        service = {};
      /**
       * 获取故障信息
       */
      service.getDeviceFaultInfoList = function (obj, callBack) {
        serviceProxy.get(placeServiceName, "getDeviceFaultInfoList", [obj], callBack);
      };
      /**
       * 保存故障信息
       */
      service.saveDeviceFaultInfo = function (obj, callBack) {
        serviceProxy.get(placeServiceName, "saveDeviceFaultInfo", [obj], callBack);
      };
      /**
       * 删除故障信息
       */
      service.deleteDeviceFaultInfoById = function (id, callBack) {
        serviceProxy.get(placeServiceName, "deleteDeviceFaultInfoById", id, callBack);
      };


      /**
       * 获取故障手顺书故障信息
       */
      service.getDeviceFaultBookList = function (obj, callBack) {
        serviceProxy.get(placeServiceName, "getDeviceFaultBookList", obj, callBack);
      };
      /**
       * 保存故障手顺书故障信息
       */
      service.saveDeviceFaultBook = function (obj, callBack) {
        serviceProxy.get(placeServiceName, "saveDeviceFaultBook", [obj], callBack);
      };
      /**
       * 删除故障手顺书故障信息
       */
      service.deleteDeviceFaultBookById = function (id, callBack) {
        serviceProxy.get(placeServiceName, "deleteDeviceFaultBookById", id, callBack);
      };


      /**
       * 模型分析查询and保存接口
       */
      service.getWorkInfoByDeviceId = function (deviceId, callBack) {
        serviceProxy.get("baogangDeviceService", "getWorkInfoByDeviceId", [deviceId], callBack);
      };
      service.saveDeviceWorkInfoList = function (deviceId,deviceWorkInfoList, callBack) {
        serviceProxy.get("baogangDeviceService", "saveDeviceWorkInfoList", [deviceId,deviceWorkInfoList], callBack);
      };

      // 查询设备最新工况
      service.getDeviceConditionStatus = function (deviceId, callBack) {
        serviceProxy.get("baogangDeviceService", "getDeviceConditionStatus", [deviceId], callBack);
      };
      // 查询模型分析结果
      service.getModelAnalysisResultByConditionAndPage = function (params,PageRequest, callBack) {
        serviceProxy.get("baogangDeviceService", "getModelAnalysisResultByConditionAndPage", [params,PageRequest], callBack);
      };
      // 发起模型分析
      service.sendModelAnalysis = function (deviceId,analysisTime, callBack) {
        serviceProxy.get("baogangDeviceService", "sendModelAnalysis", [deviceId,analysisTime], callBack);
      };
      // 训练数据同步
      service.sendModelAnalysisTrain = function (deviceId,trainType,startTime,endTim, callBack) {
        serviceProxy.get("baogangDeviceService", "sendModelAnalysisTrain", [deviceId,trainType,startTime,endTim], callBack);
      };

      /**
       * 报警统计
       */
      service.getDeviceDiagnosticResumeListBypage = function (params, pageRequset, callBack) {
        serviceProxy.get(placeServiceName, "getDeviceDiagnosticResumeListBypage", [params, pageRequset
        ], callBack);
      };


      /**
       * 周期报告查询（真分页接口）
       */
      service.getDeviceCycleReportReumeListByPage = function (params, pageRequset, callBack) {
        serviceProxy.get(placeServiceName, "getDeviceCycleReportReumeListByPage", [params, pageRequset], callBack);
      };
      /**
       * 宝钢导出表格的接口
       * @param service
       * @param method
       * @param format
       * @param params
       * @param pageRequset
       * @param callBack
       */

      service.exportBGExcel = function (service, method, format, params, pageRequset, callBack) {
        serviceProxy.get("exportExcel/" + service, method + "?" + format, [params, pageRequset], callBack);
      };
      service.exportHBExcel = function (service, method, format, params, callBack) {
          serviceProxy.get("exportExcel/" + service, method + "?" + format, [params], callBack);
      };


      return service;
    }
  ]);
});
