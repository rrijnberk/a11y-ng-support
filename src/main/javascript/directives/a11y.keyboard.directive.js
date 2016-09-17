function deconstruct($element, handler){
    $element.unbind('keydown', handler);
}

function A11yKeyboardController($scope, $element, keyHandlerFactory){
    var vm = this,
        handler = keyHandlerFactory.getKeyHandler(vm.a11yKeyboard);

    if(!$element.attr('tabindex')) {
        $element.attr('tabindex', 0);
    }

    $element.bind('keydown', handler);

    $scope.$on('$destroy', angular.bind(vm, deconstruct, $element, handler));
}

function a11yKeyboardDirective(){
    return {
        bindToController: {
            a11yKeyboard: '@'
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