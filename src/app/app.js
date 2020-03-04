
import angular from 'angular';


//import './test/test.js';
import template from './test/test.html'
import '../less/style.css'

angular.module('njuren',[])

.controller('AppCtrl', function AppCtrl($scope, $location, $rootScope, $window) {
  $scope.msg="Njuren from app";

}).directive('testMessage', function () {
  return {

      template: template, 
      controller: "AppCtrl",
      restrict:'EA',
      link: function(scope,element,attributes){
        element.addClass('warning');
      }
    
  };
}); ;
