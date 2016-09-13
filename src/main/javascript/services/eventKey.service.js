function isKey(key){
    return this.key === key.key || this.keyCode === key.keyCode || this.which === key.which;
}

function eventKeyService(a11y){
    this.get = keyForEvent;

    function getValue(key){
        return a11y.keys[key];
    }

    function keyForEvent(event) {
        return Object.keys(a11y.keys).map(getValue).filter(angular.bind(event, isKey))[0];
    }
}

angular
    .module('a11y.support')
    .service('eventKeyService', eventKeyService);