/**
 * Created by iKNSA.
 * User: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 06/02/2018
 * Time: 19:16
 */

'use strict';

phpLightAnalyticsModule.directive('phpLightAnalytics', ['$rootScope', '$window', 'phpLightAnalyticsFactory',
    function ($rootScope, $window, phpLightAnalyticsFactory) {
    return {
        restrict: 'EA',
        scope: {
            identifier: '@phpLightAnalyticsIdentifier',
            event: '@phpLightAnalyticsEvent',
            misc: '=phpLightAnalyticsMisc'
        },
        link: function ($scope, $element) {
            $element.on('click', function (event) {
                var data = {};

                data.identifier = $scope.identifier;
                data.event = $scope.event ? $scope.event : event.type;

                if ($scope.misc && !angular.equals($scope.misc, {})) {
                    data.misc = $scope.misc;
                }

                phpLightAnalyticsFactory.send(data);
            });
        }
    };
}]);
