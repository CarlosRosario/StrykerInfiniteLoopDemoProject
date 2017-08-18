/*global angular, require, describe, it, afterAll, beforeAll, beforeEach, afterEach, module, expect, inject, spyOn  */
require('angular-mocks');
(function() {
    'use strict';

    describe('dummy test service: ', function() {
        angular.mock.module.sharedInjector();
        beforeAll(angular.mock.module('dummyModule'));

        beforeAll(inject(function($injector) {
            this.dummyService = $injector.get('dummy_service');
        }));

        afterAll(angular.mock.module('dummyModule'));

        describe('When the problem dummy function is called, it', function() {
            beforeEach(function() {
                this.dummyService.problemDummyFunction();
            });

            it('should give the data value the correct value', function() {
                expect(this.dummyService.getDataValue()).toEqual(10);
            });
        });

        describe('when dummy function A is called, it', function(){
            it('should return the value 1', function(){
                expect(this.dummyService.dummyFunctionA()).toEqual(1);
            });
        });

        describe('when dummy function B is called, it', function(){
            it('should return the value 2', function(){
                expect(this.dummyService.dummyFunctionB()).toEqual(2);
            });
        });

        describe('when dummyFunctionAddTwoNumbers is called, it', function() {
           it('should return the sum of the two values passed in', function(){
              expect(this.dummyService.dummyFunctionAddTwoNumbers(5,5)).toEqual(10);
           });
        });

        describe('when dummyFunctionSubtractTwoNumbers is called, it', function() {
            it('should return the difference of the two values passed in', function(){
                expect(this.dummyService.dummyFunctionSubtractTwoNumbers(5,5)).toEqual(0);
            });
        });

        describe('when dummyFunctionMultiplyTwoNumbers is called, it', function() {
            it('should return the sum of the two values passed in', function(){
                expect(this.dummyService.dummyFunctionMultiplyTwoNumbers(5,5)).toEqual(25);
            });
        });

        describe('when dummyFunctionDivideTwoNumbers is called, it', function() {
            it('should return the quotient of the two values passed in', function(){
                expect(this.dummyService.dummyFunctionDivideTwoNumbers(5,5)).toEqual(1);
            });
        });
    });
}());