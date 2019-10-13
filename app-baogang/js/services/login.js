angular.module('myApp.services')
    .factory('userList', function ($http, $q,API) {
        return {
            getList: function (e) {
                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: API.user
                }).then(function (data) {
                     
                    deferred.resolve(data);
                }, function (e) {
                    deferred.resolve(e);
                });
                return deferred.promise;
            }
        }
    });
