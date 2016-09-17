describe('The a11y ng support framework : service : event key service ', function () {
    var a11y, eventKeyService,
        enterResult = { key: 'Enter', keyCode: 13, which: 13, alt: false, ctrl: false, shift: false },
        spaceResult = { code: 'Space', keyCode: 32, which: 32, alt: false, ctrl: false, shift: false },
        blankResult = { alt: false, ctrl: false, shift: false };

    beforeEach(module('a11y.support'));

    beforeEach(inject(function (_a11y_, _eventKeyService_) {
        a11y = _a11y_;
        eventKeyService = _eventKeyService_;
    }));

    afterEach(function (){

    });

    it('api should contain: get', function (){
        expect(eventKeyService.get).toBeDefined();
    });

    describe('should return enter for', function (){
        it('key: "Enter".', function (){
            expect(eventKeyService.get({ key: "Enter" })).toEqual(enterResult);
        });

        it('keyCode: "13".', function (){
            expect(eventKeyService.get({ keyCode: 13 })).toEqual(enterResult);
        });

        it('which: "13".', function (){
            expect(eventKeyService.get({ which: 13 })).toEqual(enterResult);
        });
    });

    it('should return space for code: "Space".', function (){
        expect(eventKeyService.get({ code: "Space" })).toEqual(spaceResult);
    });

    it('should return a blank config (modifiers only) for non implemented key.', function (){
        expect(eventKeyService.get({ key: "Alt" })).toEqual(blankResult);
    });


});
