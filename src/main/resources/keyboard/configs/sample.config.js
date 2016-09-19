(function () {
    'use strict';

    var key1 = 'component.header.interaction.alpha',
        key2 = 'component.header.interaction.beta',
        key3 = 'component.header.interaction.gamma';

        function sampleConfig(keyboardConfiguration, a11y) {
        var config1 = keyboardConfiguration.addConfiguration(key1),
            config2 = keyboardConfiguration.addConfiguration(key2),
            config3 = keyboardConfiguration.addConfiguration(key3);

        config1.addAction(a11y.keys.arrow_up, function () {
            console.log('alpha : You just pressed arrow up when focussed on the header');
        });

        config1.addAction(a11y.keys.arrow_down, function () {
            console.log('alpha : You just pressed arrow down when focussed on the header');
        });

        config1.addAction(a11y.keys.alphabetic, function () {
            console.log('alpha : This should be logged for any alphabetic key');
        });

        config1.addAction(a11y.keys.alphanumeric, function () {
            console.log('alpha : This should be logged for any alphanumeric key');
        });

        config1.addAction(a11y.keys.space, function () {
            console.log('alpha : Totally spaced this');
        });

        config1.addAction(a11y.keys.space, function () {
            console.log('alpha : Totally in an alternate space man');
        }, true);

        config1.addAction(a11y.keys.space, function () {
            console.log('alpha : Fully in a controlled space sir');
        }, false, true);

        config1.addAction(a11y.keys.space, function () {
            console.log('alpha : Far out in a shifted space dude');
        }, false, false, true);

        config1.addAction(a11y.keys.space, function () {
            console.log('alpha : Controlled shift to alternate space is successful');
        }, true, true, true);
        
        //--------------

        config2.addAction(a11y.keys.arrow_up, function () {
            console.log('beta : You just pressed arrow up when focussed on the header');
        });

        config2.addAction(a11y.keys.arrow_down, function () {
            console.log('beta : You just pressed arrow down when focussed on the header');
        });

        config2.addAction(a11y.keys.alphabetic, function () {
            console.log('beta : This should be logged for any alphabetic key');
        });

        config2.addAction(a11y.keys.alphanumeric, function () {
            console.log('beta : This should be logged for any alphanumeric key');
        });

        config2.addAction(a11y.keys.space, function () {
            console.log('beta : Totally spaced this');
        });

        config2.addAction(a11y.keys.space, function () {
            console.log('beta : Totally in an alternate space man');
        }, true);

        config2.addAction(a11y.keys.space, function () {
            console.log('beta : Fully in a controlled space sir');
        }, false, true);

        config2.addAction(a11y.keys.space, function () {
            console.log('beta : Far out in a shifted space dude');
        }, false, false, true);

        config2.addAction(a11y.keys.space, function () {
            console.log('beta : Controlled shift to alternate space is successful');
        }, true, true, true);

        //--------------

        config3.addAction(a11y.keys.space, function () {
            console.log('gamma : Totally spaced this');
        });
    }

    angular
        .module('rrijnberk.sample', ['a11y.support'])
        .run(sampleConfig)
        .controller('sampleController', function (){
            var ctrl = this;

            ctrl.key = key1;
            ctrl.toggleKey = function (){
                ctrl.key = ctrl.key === key1 ? key2 : key1;
            };
        });
}());
