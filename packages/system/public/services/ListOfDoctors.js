'use strict';

//Global service for global variables
angular.module('mean.system').factory('ListOfDoctors', [

  function() {
    var obj = {
      listOfDoctors: [
        {
          firstname : 'Bruce',
          lastname  : 'Neben'
        },
        {
          firstname : 'Sally',
          lastname  : 'McCullem'
        }
      ]
    };
    return obj;
  }
]);
