'use strict';

angular.module('mean.system').controller('listOfDoctorsController', ['$scope', 'Global', 'ListOfDoctors',
  function($scope, Global, ListOfDoctors) {
    $scope.global = Global;
    $scope.listOfDoctors = ListOfDoctors.listOfDoctors;
  }
]);
