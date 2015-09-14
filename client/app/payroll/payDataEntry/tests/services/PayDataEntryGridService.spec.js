'use strict';

describe('Service: PayDataEntryGridService', function () {
	// load the service's module
    beforeEach(module('payDataEntryApp'));

    var _PayDataEntryGridService, $httpBackend, _scope, dummy;

    beforeEach(inject(function ($rootScope, $injector, PayDataEntryGridService) {
    	_scope = $rootScope.$new();
    	$httpBackend = $injector.get('$httpBackend');

    	_PayDataEntryGridService = PayDataEntryGridService;
    	dummy = {
			gridOptions: {
				data:{}
			}
		};
    }));
    afterEach(function(){
    	$httpBackend.verifyNoOutstandingExpectation();
    	$httpBackend.verifyNoOutstandingRequest();
    });
    describe('PayDataEntryGridService:list', function () {
    	it('should get the PayDataEntryGridService', function() {

    		$httpBackend.when('GET', '/static/hrii/portlets/angular/abstract.html').respond({});
    		$httpBackend.when('GET', '/static/hrii/portlets/angular/payroll/paycycleprocessing/views/main.html').respond({});
    		$httpBackend.when('GET', '/static/hrii/portlets/angular/payroll/payDataEntry/views/PayDataEntryGrid.html').respond({});
    		$httpBackend.expectGET('http://localhost/PayDayCACServices/rest/v1/payroll/paydataentry/list').respond({
	        	searchCount: 0,
	        	payGroupList: {
	        		payGroup: "ABC",
        			description: "DBA Load Test",
        			company: "DSS",
        			companyDescription: "Consumer Products",
        			payFrequency: "B",
        			payFrequencyDescription: "Biweekly",
        			status: "Active",
        			cycleStatus: 1,
        			cycleStatusDescription: "Available",
        			thirdPartySickFlag: false
	        	}
	        });
    		_PayDataEntryGridService.loadGrid(dummy);
    		expect(dummy.gridOptions.data).not.toBe({});
    		$httpBackend.flush();
    	});
    });
});
