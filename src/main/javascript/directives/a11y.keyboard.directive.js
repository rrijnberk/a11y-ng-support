function A11yKeyboardController($scope, $element, keyHandlerFactory){
    var vm = this,
        handler = null;

    if(!$element.attr('tabindex')) {
        $element.attr('tabindex', 0);
    }

    $scope.$watch(getKeyValue, updateKeyHandler);
    $scope.$on('$destroy', deconstruct);

    function deconstruct(){
        $element.unbind('keydown', handler);
    }

    function getKeyValue(){
        return vm.a11yKeyboard || vm.a11yKeyboardStr;
    }

    function updateKeyHandler(){
        deconstruct();
        if(vm.a11yKeyboard || vm.a11yKeyboardStr) {
            handler = keyHandlerFactory.getKeyHandler(vm.a11yKeyboard || vm.a11yKeyboardStr);
            if(handler) {
                $element.bind('keydown', handler);
            }
        }
    }
}

function a11yKeyboardDirective(){
    return {
        bindToController: {
            a11yKeyboard: '=',
            a11yKeyboardStr: '@a11yKeyboard'
        },
        controller: 'a11yKeyboardController',
        controllerAs: 'a11yKeyboardCtrl',
        restrict: 'A'
    };
}

angular
    .module('a11y.support')
    .controller('a11yKeyboardController', A11yKeyboardController)
    .directive('a11yKeyboard', a11yKeyboardDirective);
