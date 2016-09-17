function isKey(key){
    var isKey = this.key && this.key === key.key,
        isCode = this.code && this.code === key.code,
        isKeyCode = this.keyCode && this.keyCode === key.keyCode,
        isWhich = this.which && this.which === key.which;
    return isKey || isCode || isKeyCode || isWhich;
}

function eventKeyFactory(a11y){
    function getValue(key){
        return a11y.keys[key];
    }

    function keyForEvent(event) {
        var key = Object.keys(a11y.keys).map(getValue).filter(angular.bind(event, isKey))[0],
            keyResult = angular.copy(key) || {};
        keyResult.alt = !!event.altKey;
        keyResult.ctrl = !!event.ctrlKey;
        keyResult.shift = !!event.shiftKey;
        return keyResult;
    }

    return {
        get: keyForEvent
    };
}

angular
    .module('a11y.support')
    .factory('eventKeyFactory', eventKeyFactory);

