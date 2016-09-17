function KeyHandlerFactory(keyboardConfiguration, eventKeyFactory) {

    function generateKeyHandler(configuration) {
        var config = keyboardConfiguration.getConfiguration(configuration);

        return function ($event) {
            var key = eventKeyFactory.get($event),
                action = config.getEvent(key);
                action($event);
        };
    }

    return {
        getKeyHandler: generateKeyHandler
    };

}

angular
    .module('a11y.support')
    .factory('keyHandlerFactory', KeyHandlerFactory);

