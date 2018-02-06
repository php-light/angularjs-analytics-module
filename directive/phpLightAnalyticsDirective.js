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
            misc: '=phpLightAnalyticsMisc'
        },
        link: function ($scope, $element) {
            $element.on('click', function (event) {
                event.preventDefault();
                var data = {};

                data.currentUrl = $window.location.href;
                data.currentHash = $window.location.hash;
                data.identifier = $scope.identifier;
                data.event = event.type;

                if ($scope.misc && !angular.equals($scope.misc, {})) {
                    data.misc = $scope.misc;
                }

                if ($rootScope.security && $rootScope.security.user)
                    data.user = $rootScope.security.user;

                phpLightAnalyticsFactory.send(data);
            });
        }
    };
}]);
