describe('The a11y ng support framework : factory : keyhandler factory', function () {
    var keyHandlerFactory,

        actionSpy = jasmine.createSpy('action'),
        getActionSpy = jasmine.createSpy('config.getAction').and.returnValue(actionSpy),
        getConfigurationSpy = jasmine.createSpy('keyboardConfiguration.getConfiguration')
            .and.returnValue({
                getAction: getActionSpy
            }),
        keyboardConfigurationSpy = jasmine.createSpy('keyboardConfiguration')
            .and.returnValue({
                getConfiguration: getConfigurationSpy
            }),

        keyResponse = { key: 'a' },
        getSpy = jasmine.createSpy('eventKeyService.get')
            .and.returnValue(keyResponse),
        eventKeyFactorySpy = jasmine.createSpy('eventKeyService.get')
            .and.returnValue({
                get: getSpy
            });

    beforeEach(module('a11y.support'));

    beforeEach(module(function ($provide){
        $provide.service('keyboardConfiguration', keyboardConfigurationSpy);
        $provide.service('eventKeyFactory', eventKeyFactorySpy);
    }));

    beforeEach(inject(function (_keyHandlerFactory_) {
        keyHandlerFactory = _keyHandlerFactory_;
    }));


    afterEach(function (){
        getConfigurationSpy.calls.reset();
        keyboardConfigurationSpy.calls.reset();
        getSpy.calls.reset();
        eventKeyFactorySpy.calls.reset();
    });

    it('api should contain: getKeyHandler', function (){
        expect(keyHandlerFactory.getKeyHandler).toBeDefined();
    });


    describe('generateKeyHandler:', function (){
        var handler,
            cfgKey = 'sample.config.test',
            testEvent = { key: 'a'};

        beforeEach(function () {
            handler = keyHandlerFactory.getKeyHandler(cfgKey);
            handler(testEvent);
        });

        it('should have called for configuration retrieval based on the supplied key', function (){
            expect(getConfigurationSpy).toHaveBeenCalledWith(cfgKey)
        });

        it('should get the key from the eventKey service', function (){
            expect(getSpy).toHaveBeenCalledWith(testEvent);
        });

        it('should get the action from the configuration based on the key', function (){
            expect(getActionSpy).toHaveBeenCalledWith(keyResponse);
        });

        it('should trigger the action with the supplied event', function (){
            expect(actionSpy).toHaveBeenCalledWith(testEvent);
        });
    });



});
