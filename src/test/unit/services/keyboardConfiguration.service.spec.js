describe('The a11y ng support framework : service : keyboard configuration service ', function () {
    var a11y, keyboardConfiguration;

    beforeEach(module('a11y.support'));

    beforeEach(inject(function (_a11y_, _keyboardConfiguration_) {
        a11y = _a11y_;
        keyboardConfiguration = _keyboardConfiguration_;
    }));

    describe('api should contain:', function () {
        it('addConfiguration', function () {
            expect(keyboardConfiguration.addConfiguration).toBeDefined();
        });

        it('getConfiguration', function () {
            expect(keyboardConfiguration.getConfiguration).toBeDefined();
        });
    });

    it('should have no configurations by default.', function () {
        expect(keyboardConfiguration.size()).toBe(0);
    });

    it('should be able to add a configuration.', function () {
        keyboardConfiguration.addConfiguration('sample.configuration');
        expect(keyboardConfiguration.size()).toBe(1);
    });

    it('should return a previously generated config when trying to create one with a existing key.', function () {
        var config1 = keyboardConfiguration.addConfiguration('sample.configuration'),
            config2 = keyboardConfiguration.addConfiguration('sample.configuration');
        expect(config1).toBe(config2);
    });

    it('should be able to get a configuration.', function () {
        var config = keyboardConfiguration.addConfiguration('sample.configuration');
        expect(keyboardConfiguration.getConfiguration('sample.configuration')).toBe(config);
    });

    it('should be able to remove a configuration.', function () {
        keyboardConfiguration.addConfiguration('sample.configuration');
        keyboardConfiguration.removeConfiguration('sample.configuration');
        expect(keyboardConfiguration.size()).toBe(0);
    });

    it('should not throw an error when attempting removal of a non-existent configuration', function () {
        var error;
        try {
            keyboardConfiguration.removeConfiguration('sample.configuration');
        } catch (err) {
            error = err;
        }
        expect(error).toBeUndefined();
    });

    describe('configuration:', function () {
        var config,
            testFunction = function (){},
            testKeys = {
                0: { key: '0', keyCode: 48, which: 48, alt: true, ctrl: false, shift: true },
                a: { key: 'a', keyCode: 65, which: 65, alt: true, ctrl: false, shift: true },
                enter: { key: 'Enter', keyCode: 13, which: 13, alt: false, ctrl: false, shift: false }
            };

        beforeEach(function () {
            config = keyboardConfiguration.addConfiguration('sample.configuration');
        });

        describe('api should contain:', function () {
            it('addAction', function () {
                expect(config.addAction).toBeDefined();
            });

            it('addActions', function () {
                expect(config.addActions).toBeDefined();
            });

            it('getAction', function () {
                expect(config.getAction).toBeDefined();
            });

            it('removeAction', function () {
                expect(config.removeAction).toBeDefined();
            });
        });

        it('should be able to add a action for a specific key', function (){
            config.addAction(a11y.keys.enter, function (){});
            expect(config.size()).toBe(1);
        });

        it('should be able to add a action for a specific key', function (){
            config.addActions([a11y.keys.enter, a11y.keys.backspace], function (){});
            expect(config.size()).toBe(2);
        });

        it('should return void method for undefined key', function (){
            expect(config.getAction(undefined)).toEqual(angular.noop);
        });

        it('should return void method for non existent key', function (){
            expect(config.getAction(a11y.keys.enter)).toEqual(angular.noop);
        });

        it('should be able to get a action for by it\'s key without modifiers', function (){
            config.addActions([a11y.keys.enter, a11y.keys.backspace], testFunction);
            expect(config.getAction(testKeys.enter)).toEqual(testFunction);
        });

        it('should be able to get a action for the alphabetic key', function (){
            config.addAction(a11y.keys.alphabetic, testFunction, true, false, true);
            expect(config.getAction(testKeys.a)).toBe(testFunction, 'Alphabetical keys should return the test method.');
            expect(config.getAction(testKeys[0])).toBe(angular.noop, 'Numerical keys should return the void method');
        });

        it('should be able to get a action for the alphabetic key', function (){
            config.addAction(a11y.keys.numeric, testFunction, true, false, true);
            expect(config.getAction(testKeys[0])).toBe(testFunction, 'Numerical keys should return the test method.');
            expect(config.getAction(testKeys.a)).toBe(angular.noop, 'Alphabetic keys should return the void method');
        });

        it('should be able to get a action for the alphabetic key', function (){
            config.addAction(a11y.keys.alphanumeric, testFunction, true, false, true);
            expect(config.getAction(testKeys.a)).toBe(testFunction, 'Alphabetical keys should return the test method.');
            expect(config.getAction(testKeys[0])).toBe(testFunction, 'Numerical keys should return the test method.');
        });

        it('should be able to add a action for a specific key without modifiers', function (){
            config.addActions([a11y.keys.enter, a11y.keys.backspace], testFunction);
            config.removeAction(a11y.keys.enter);
            expect(config.size()).toBe(1);
        });

        it('should not throw error when removing unbound key', function (){
            var error;
            try {
                config.addActions([a11y.keys.enter, a11y.keys.backspace], testFunction);
                config.removeAction(a11y.keys.space);
            } catch(err) {
                error = err;
            }
            expect(error).toBeUndefined();
        });


    });


});
