(function () {
    'use strict';

    function sampleConfig(keyboardConfiguration, a11y) {
        var config = keyboardConfiguration.addConfiguration('component.header.interaction');

        config.addAction(a11y.keys.arrow_up, function () {
            console.log('You just pressed arrow up when focussed on the header');
        });

        config.addAction(a11y.keys.arrow_down, function () {
            console.log('You just pressed arrow down when focussed on the header');
        });

        config.addAction(a11y.keys.alphabetic, function () {
            console.log('This should be logged for any alphabetic key');
        });

        config.addAction(a11y.keys.alphanumeric, function () {
            console.log('This should be logged for any alphanumeric key');
        });

        config.addAction(a11y.keys.space, function () {
            console.log('Totally spaced this');
        });

        config.addAction(a11y.keys.space, function () {
            console.log('Totally in an alternate space man');
        }, true);

        config.addAction(a11y.keys.space, function () {
            console.log('Fully in a controlled space sir');
        }, false, true);

        config.addAction(a11y.keys.space, function () {
            console.log('Far out in a shifted space dude');
        }, false, false, true);

        config.addAction(a11y.keys.space, function () {
            console.log('Controlled shift to alternate space is successful');
        }, true, true, true);

    }

    angular
        .module('rrijnberk.sample', ['a11y.support'])
        .run(sampleConfig);
}());
