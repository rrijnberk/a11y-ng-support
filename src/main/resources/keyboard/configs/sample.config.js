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

    }

    angular
        .module('rrijnberk.sample', ['a11y.support'])
        .run(sampleConfig);
}());
