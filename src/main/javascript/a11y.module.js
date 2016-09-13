var keyboardConstants = {
    arrow_up: { key: "ArrowUp", keyCode: 38, which: 38 },
    arrow_down: { key: "ArrowDown", keyCode: 40, which: 40 }
};

angular
    .module('a11y.support', []);

angular
    .module('a11y.support')
    .constant('a11y', {
        keys: keyboardConstants
    });