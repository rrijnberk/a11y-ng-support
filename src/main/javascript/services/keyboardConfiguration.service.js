var grouping = {
        alphabetical: /^[a-z]$/,
        alphanumerical: /^[0-9a-z]$/,
        numerical: /^[0-9]$/
    },
    keyboardConstants = {
        0: {key: '0', keyCode: 48, which: 48},
        1: {key: '1', keyCode: 49, which: 49},
        2: {key: '2', keyCode: 50, which: 50},
        3: {key: '3', keyCode: 51, which: 51},
        4: {key: '4', keyCode: 52, which: 52},
        5: {key: '5', keyCode: 53, which: 53},
        6: {key: '6', keyCode: 54, which: 54},
        7: {key: '7', keyCode: 55, which: 55},
        8: {key: '8', keyCode: 56, which: 56},
        9: {key: '9', keyCode: 57, which: 57},
        a: {key: 'a', keyCode: 65, which: 65},
        b: {key: 'b', keyCode: 66, which: 66},
        c: {key: 'c', keyCode: 67, which: 67},
        d: {key: 'd', keyCode: 68, which: 68},
        e: {key: 'e', keyCode: 69, which: 69},
        f: {key: 'f', keyCode: 70, which: 70},
        g: {key: 'g', keyCode: 71, which: 71},
        h: {key: 'h', keyCode: 72, which: 72},
        i: {key: 'i', keyCode: 73, which: 73},
        j: {key: 'j', keyCode: 74, which: 74},
        k: {key: 'k', keyCode: 75, which: 75},
        l: {key: 'l', keyCode: 76, which: 76},
        m: {key: 'm', keyCode: 77, which: 77},
        n: {key: 'n', keyCode: 78, which: 78},
        o: {key: 'o', keyCode: 79, which: 79},
        p: {key: 'p', keyCode: 80, which: 80},
        q: {key: 'q', keyCode: 81, which: 81},
        r: {key: 'r', keyCode: 82, which: 82},
        s: {key: 's', keyCode: 83, which: 83},
        t: {key: 't', keyCode: 84, which: 84},
        u: {key: 'u', keyCode: 85, which: 85},
        v: {key: 'v', keyCode: 86, which: 86},
        w: {key: 'w', keyCode: 87, which: 87},
        x: {key: 'x', keyCode: 88, which: 88},
        y: {key: 'y', keyCode: 89, which: 89},
        z: {key: 'z', keyCode: 90, which: 90},
        alphabetic: {key: 'a-z'},
        alphanumeric: {key: '0-9a-z'},
        arrow_left: {key: 'ArrowLeft', keyCode: 37, which: 37},
        arrow_up: {key: 'ArrowUp', keyCode: 38, which: 38},
        arrow_right: {key: 'ArrowRight', keyCode: 39, which: 39},
        arrow_down: {key: 'ArrowDown', keyCode: 40, which: 40},
        backspace: {key: 'Backspace', keyCode: 8, which: 8},
        enter: {key: 'Enter', keyCode: 13, which: 13},
        escape: {key: 'Escape', keyCode: 27, which: 27},
        numeric: {key: '0-9'},
        space: { code: 'Space', keyCode: 32, which: 32},
        tab: {key: 'Tab', keyCode: 9, which: 9}
    };

function isGrouping(grouping, key) {
    return grouping.test(key);
}

function ConfigurationMap() {
    var keys = [],
        configurations = [];

    this.add = add;
    this.get = get;
    this.remove = remove;

    function add(key) {
        var config = new Configuration();
        keys.push(key);
        configurations.push(config);
        return config;
    }

    function get(key) {
        return configurations[keys.indexOf(key)];
    }

    function remove(key) {
        var index = keys.indexOf(key);
        if (index !== -1) {
            keys.splice(index, 1);
            configurations.splice(index, 1);
        }
    }
}

function Configuration() {
    var keys = [],
        actions = [];

    // Todo:  Is this the best name, event seems inappropriate?
    this.addEvent = addEvent;
    this.addEvents = addEvents;
    this.getEvent = getEvent;
    this.removeEvent = removeEvent;

    function addEvent(key, action, alt, ctrl, shift) {
        keys.push(generateTrueKey(key, alt, ctrl, shift));
        actions.push(action);
    }

    function addEvents(keys, action, alt, ctrl, shift){
        keys.map(function (key){
            addEvent(key, action, alt, ctrl, shift)
        });
    }
    
    function generateTrueKey(key, alt, ctrl, shift){
        var trueKey = JSON.parse(JSON.stringify(key));
        trueKey.alt = !!alt;
        trueKey.ctrl = !!ctrl;
        trueKey.shift = !!shift;
        return trueKey;
    }
    
    function getEvent(key) {
        var action, trueKey;
        if (key) {
            action = actions[getIndex(key)];
            if (!action && isGrouping(grouping.alphabetical, key.key)) {
                trueKey = generateTrueKey(keyboardConstants.alphabetic, key.alt, key.ctrl, key.shift);
                action = actions[getIndex(trueKey)];
            }
            if (!action && isGrouping(grouping.numerical, key.key)) {
                trueKey = generateTrueKey(keyboardConstants.numeric, key.alt, key.ctrl, key.shift);
                action = actions[getIndex(trueKey)];
            }
            if (!action && isGrouping(grouping.alphanumerical, key.key)) {
                trueKey = generateTrueKey(keyboardConstants.alphanumeric, key.alt, key.ctrl, key.shift);
                action = actions[getIndex(trueKey)];
            }
        }
        return action || angular.noop;
    }

    function getIndex(key){
        for(var i = 0; i < keys.length; i++) {
             if(angular.equals(key, keys[i])) {
                return i;
            }
        }
        return -1;
    }

    function removeEvent(key, alt, ctrl, shift) {
        var index = getIndex(generateTrueKey(key, alt, ctrl, shift));
        if (index !== -1) {
            keys.splice(index, 1);
            actions.splice(index, 1);
        }
    }
}

function keyboardConfigurationService() {
    var service = this,
        configs = new ConfigurationMap();

    service.addConfiguration = configs.add;
    service.getConfiguration = configs.get;

    service.$get = function () {
        return {
            addConfiguration: configs.add,
            getConfiguration: configs.get
        };
    };
}

angular
    .module('a11y.support')
    .provider('keyboardConfiguration', keyboardConfigurationService)
    .constant('a11y', {
        keys: keyboardConstants
    });