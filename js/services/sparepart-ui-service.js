define(['../services/services.js'], function(services) {
  'use strict';
  services.factory('sparePartUIService', ['serviceProxy',
    function(serviceProxy) {
      var service = 'sparePartUIService',
        factory = {};

      //==========================   备件入库   ===============================================  
      //保存入库单
      factory.saveInStockOrder = function(param, callback) {
        serviceProxy.get(service, 'saveInStockOrder', param, callback);
      };

      //保存出库单
      factory.saveOutStockOrder = function(param, callback) {
        serviceProxy.get(service, 'saveOutStockOrder', param, callback);
      };

      //保存备件
      factory.saveSparePart = function(param, callback) {
        serviceProxy.get(service, 'saveSparePart', param, callback);
      };

      //保存库单条目
      factory.saveStockOrderItem = function(param, callback) {
        serviceProxy.get(service, 'saveStockOrderItem', param, callback);
      };

      //根据库单id获取条目
      factory.getStockOrderItemsById = function(id, callback) {
        serviceProxy.get(service, 'getStockOrderItemsByStockOrderId', id, callback);
      };

      //根据备件id获取备件信息
      factory.getSparePartById = function(id, callback) {
        serviceProxy.get(service, 'getSparePartById', id, callback);
      };

      //根据备件id获取库单记录
      factory.getStockOrderItemsBySparePartId = function(id, callback) {
        serviceProxy.get(service, 'getStockOrderItemsBySparePartId', id, callback);
      };

      //提交库单
      factory.commitStockOrder = function(id, callback) {
        serviceProxy.get(service, 'commitStockOrder', id, callback);
      };

      //删除库单
      factory.deleteStockOrder = function(id, callback) {
        serviceProxy.get(service, 'deleteStockOrder', id, callback);
      };

      //删除备件
      factory.deleteSparePart = function(id, callback) {
        serviceProxy.get(service, 'deleteSparePart', id, callback);
      };

      //删除库单条目
      factory.deleteStockOrderItem = function(id, callback) {
        serviceProxy.get(service, 'deleteStockOrderItem', id, callback);
      };

      //获取所有入库信息
      factory.getAllInStockOrders = function(callback) {
        serviceProxy.get(service, 'getInStockOrders', '', callback);
      };

      //获取所有出库信息
      factory.getAllOutStockOrders = function(callback) {
        serviceProxy.get(service, 'getOutStockOrders', '', callback);
      };

      //获取所有备件
      factory.getAllSpareParts = function(callback) {
        serviceProxy.get(service, 'getAllSpareParts', '', callback);
      };
      
      factory.getSparePartByDeviceId = function(deviceId,callback) {
        serviceProxy.get(service, 'getSparePartByDeviceId', [deviceId], callback);
      };
      
      factory.saveSparePart = function(obj,callback) {
        serviceProxy.get(service, 'saveSparePart', obj, callback);
      };
      
      factory.deleteSparePart = function(id,callback) {
        serviceProxy.get(service, 'deleteSparePart', [id], callback);
      };
      return factory;
    }
  ]);

});