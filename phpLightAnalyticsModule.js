/**
 * Created by iKNSA.
 * User: Khalid Sookia <khalidsookia@gmail.com>
 * Date: 06/02/2018
 * Time: 19:15
 */

'use strict';

var phpLightAnalyticsModule = angular.module('phpLightAnalyticsModule', []);

phpLightAnalyticsModule.run(['$rootScope', 'phpLightAnalyticsFactory', function ($rootScope, phpLightAnalyticsFactory) {
    $rootScope.$on('$locationChangeSuccess', function () {
        phpLightAnalyticsFactory.send({ event: 'page' });
    });
}]);
