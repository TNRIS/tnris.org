'use strict';

angular.module('ContactFormApp')
  .directive('progressBar', [ function() {
    return {
      restrict: 'A',
      scope: {
        value: "=",
        type: "="
      },
      template: [
      '<div class="progress">',
        '<div class="progress-bar" ng-class="barType" role="progressbar" ng-style="barStyle" ',
          'aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="100">',
          '{{value}}%',
        '<div>',
      '</div>'
      ].join(""),
      link: function (scope) {
        scope.barType = "";
        scope.$watch('type', function () {
          if (!scope.type) { return; }
          scope.barType = "progress-bar-" + scope.type;
        });
        scope.$watch('value', function () {
          if (!scope.value) { scope.value = 0; }
          scope.barStyle = {
            'min-width': '2em',
            'width': scope.value + '%'
          };
        });
      }
    };
  }]);
