(function () {
    'use strict';

    function sampleConfig(keyboardConfiguration, a11y) {
        var config = keyboardConfiguration.addConfiguration('component.header.interaction');

        config.addEvent(a11y.keys.arrow_up, function () {
            console.log('You just pressed arrow up when focussed on the header');
        });

        config.addEvent(a11y.keys.arrow_down, function () {
            console.log('You just pressed arrow down when focussed on the header');
        });

        config.addEvent(a11y.keys.alphabetic, function () {
            console.log('This should be logged for any alphabetical key');
        });

        config.addEvent(a11y.keys.alphanumeric, function () {
            console.log('This should be logged for any alphanumeric key');
        });

        config.addEvent(a11y.keys.space, function () {
            console.log('Totally spaced this');
        });


    }

    angular
        .module('rrijnberk.sample', ['a11y.support'])
        .run(sampleConfig);
}());
