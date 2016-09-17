describe('The a11y ng support framework : directives : a11y-keyboard directive', function () {
    var sampleTag = '<div a11y-keyboard="this.is.my.sample"></div>',
        sampleTag2= '<div a11y-keyboard="this.is.my.sample" tabindex="2"></div>';

    var $compile,
        directiveController;

    var scope$onSpy = jasmine.createSpy('scope.$on'),
        attrSpy = jasmine.createSpy('attr'),
        bindSpy = jasmine.createSpy('bind'),
        getKeyHandlerSpy = jasmine.createSpy('keyHandlerFactory.getKeyHandler'),
        unbindSpy = jasmine.createSpy('unbind'),
        triggerHandlerSpy = jasmine.createSpy('triggerHandler');

    var fauxScope = {
        $on: scope$onSpy
    };

    beforeEach(module('a11y.support'));

    beforeEach(inject(function (_$compile_, $controller) {
        $compile = _$compile_;
        directiveController = $controller('a11yKeyboardController', {
            $scope: fauxScope,
            $element: {
                attr: attrSpy,
                bind: bindSpy,
                unbind: unbindSpy,
                triggerHandler: triggerHandlerSpy
            },
            keyHandlerFactory: {
                getKeyHandler: getKeyHandlerSpy
            }});
    }));

    afterEach(function (){
        scope$onSpy.calls.reset();
        attrSpy.calls.reset();
        bindSpy.calls.reset();
        unbindSpy.calls.reset();
        triggerHandlerSpy.calls.reset();
    });

    it('should compile without issues', function () {
        var error;
        try {
            $compile(sampleTag)(fauxScope);
        } catch(e) {
            error = e;
        }
        expect(error).toBeUndefined('We should not have an error. Yet we got:' + error);
    });

    it('should add the tabindex="0" attribute to the element', function (){
        var expectation = '<div a11y-keyboard="this.is.my.sample" class="ng-scope" tabindex="0"></div>',
            elem = $compile(sampleTag)(fauxScope);
        expect(elem[0].outerHTML).toBe(expectation);
    });

    it('should not override the existing tabindex when available', function (){
        var expectation = '<div a11y-keyboard="this.is.my.sample" tabindex="2" class="ng-scope"></div>',
            elem = $compile(sampleTag2)(fauxScope);
        expect(elem[0].outerHTML).toBe(expectation);
    });

    it('should bind a keypress event listener', function (){
        $compile(sampleTag);
        expect(bindSpy.calls.argsFor(0)[0]).toBe('keydown');
    });

    it('should set a destruction handler', function (){
        $compile(sampleTag);
        expect(scope$onSpy.calls.argsFor(0)[0]).toBe('$destroy');
    });

    it('on destruction unbind should be called for the keypress listener', function (){
        $compile(sampleTag);
        scope$onSpy.calls.argsFor(0)[1]();
        expect(unbindSpy.calls.argsFor(0)[0]).toBe('keydown');
    });
});
