/**
 * Created by iKNSA.
 * User: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 07/02/2018
 * Time: 00:22
 */

'use strict';

phpLightCommentModule.factory('phpLightAnalyticsFactory', ['$rootScope', '$http', '$q', function ($rootScope, $http, $q) {
    var phpLightAnalyticsFactory = {};

    phpLightAnalyticsFactory.send = function (data) {
        var deferred = $q.defer();

        $http.post($rootScope.restUrl + "?route=php_light_analytics_send", { data: data }).then(
            function (response) {
                deferred.resolve(response);
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