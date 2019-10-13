angular.module("myApp.configs", [])
    .constant('API', (function () {
        var service = '192.';
        return {
            user: {
                auth: service + 'api/user/auth.api',
                show: service + 'api/user/show.api',
            }
        }
    })());