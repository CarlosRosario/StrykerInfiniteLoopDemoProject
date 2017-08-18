/*global angular, require*/
require('angular');
(function() {
    'use strict';
    angular.module('dummyModule', [])
        .factory('dummy_service', function() {
            var index,
                dataValue = 0,
                problemDummyFunction = function() {
                    for(index = 0; index < 10; index++){
                        dataValue += 1;
                    }
                },
                dummyFunctionA = function() {
                    return 1;
                },
                dummyFunctionB = function() {
                    return 2;
                },
                dummyFunctionAddTwoNumbers = function(a,b) {
                    return a + b;
                },
                dummyFunctionSubtractTwoNumbers = function(a,b) {
                    return a - b;
                },
                dummyFunctionMultiplyTwoNumbers = function(a,b) {
                    return a * b;
                },
                dummyFunctionDivideTwoNumbers = function(a,b) {
                    return a / b;
                },
                getDataValue = function() {
                    return dataValue;
                };

            return {
                problemDummyFunction: problemDummyFunction,
                dummyFunctionA: dummyFunctionA,
                dummyFunctionB: dummyFunctionB,
                dummyFunctionAddTwoNumbers: dummyFunctionAddTwoNumbers,
                dummyFunctionSubtractTwoNumbers: dummyFunctionSubtractTwoNumbers,
                dummyFunctionMultiplyTwoNumbers: dummyFunctionMultiplyTwoNumbers,
                dummyFunctionDivideTwoNumbers: dummyFunctionDivideTwoNumbers,
                getDataValue: getDataValue
            };
        });
}());