function isKey(key){
    return this.key === key.key || this.code === key.code || this.keyCode === key.keyCode || this.which === key.which;
}

function eventKeyService(a11y){
    this.get = keyForEvent;

    function getValue(key){
        return a11y.keys[key];
    }

    function keyForEvent(event) {
        var key = Object.keys(a11y.keys).map(getValue).filter(angular.bind(event, isKey))[0],
            keyResult = JSON.parse(JSON.stringify(key || {}));
        keyResult.alt = event.altKey;
        keyResult.ctrl = event.ctrlKey;
        keyResult.shift = event.shiftKey;
        return keyResult;
    }
}

angular
    .module('a11y.support')
    .service('eventKeyService', eventKeyService);