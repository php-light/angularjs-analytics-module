/**
 * Created by iKNSA.
 * User: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 07/02/2018
 * Time: 00:22
 */

'use strict';

phpLightCommentModule.factory('phpLightAnalyticsFactory', ['$rootScope', '$http', '$q', '$window', 'VALUE_PARAMETERS',
    function ($rootScope, $http, $q, $window, VALUE_PARAMETERS) {
        var phpLightAnalyticsFactory = {};

        phpLightAnalyticsFactory.send = function (data) {
            var shouldIgnore = false;
            data.currentUrl = $window.location.href;
            data.currentHash = $window.location.hash;

            angular.forEach(VALUE_PARAMETERS.phpLight.analytics.ignore.hash.startsWith, function (ignore) {
                if (data.currentHash.match(new RegExp('^#!\\/' + ignore , 'i'))) {
                    shouldIgnore = true;
                }
            });

            if (shouldIgnore) return;

            var deferred = $q.defer();

            $http.post($rootScope.restUrl + "?route=php_light_analytics_send", { data: data }).then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function (error) {
                    console.error('Error in phpLightAnalyticsFactory send method');
                    console.error(error);
                }
            );

            return deferred.promise;
        };

        return phpLightAnalyticsFactory;
    }]);
