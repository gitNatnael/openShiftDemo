import template from './test.html'


angular.module('njuren').controller('messageCtrl', function ($scope) {
    $scope.message = "Njurfunktion";
}).directive('testMessage', function () {
    return {

        template: template, 
        controller: "messageCtrl"
      
    };
}); 
