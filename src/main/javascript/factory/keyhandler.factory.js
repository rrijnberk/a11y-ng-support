function KeyHandlerFactory(keyboardConfiguration, eventKeyService) {

    function generateKeyHandler(configuration) {
        var config = keyboardConfiguration.getConfiguration(configuration);

        return function ($event) {
            var key = eventKeyService.get($event),
                action = config.getEvent(key);

            (action||angular.noop)($event);
        };
    }

    return {
        getKeyHandler: generateKeyHandler
    };

}

angular
    .module('a11y.support')
    .factory('keyHandlerFactory', KeyHandlerFactory);