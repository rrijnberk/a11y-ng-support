/* The keyboard configuration service
 * - Pub/Sub system for configurations
 */

function ConfigurationMap(){
    var keys = [],
        configurations = [];

    this.add = add;
    this.get = get;
    this.remove = remove;

    function add(key){
        var config = new Configuration();
        keys.push(key);
        configurations.push(config);
        return config;
    }

    function get(key){
        return configurations[keys.indexOf(key)];
    }

    function remove(key){
        var index = keys.indexOf(key);
        if(index !== -1) {
            keys.splice(index, 1);
            configurations.splice(index, 1);
        }
    }
}

function Configuration(){
    var keys = [],
        actions = [];

    // Todo:  Is this the best name, event seems inappropriate?
    this.addEvent = addEvent;
    this.getEvent = getEvent;
    this.removeEvent = removeEvent;

    function addEvent(key, action){
        keys.push(key);
        actions.push(action);
    }

    function getEvent(key){
        return actions[keys.indexOf(key)];
    }

    function removeEvent(key){
        var index = keys.indexOf(key);
        if(index !== -1) {
            keys.splice(index, 1);
            actions.splice(index, 1);
        }
    }
}

function keyboardConfigurationService(){
    var service = this,
        configs = new ConfigurationMap();

    service.addConfiguration = configs.add;
    service.getConfiguration = configs.get;

    service.$get = function (){
        return {
            addConfiguration: configs.add,
            getConfiguration: configs.get
        };
    };
}

angular
    .module('a11y.support')
    .provider('keyboardConfiguration', keyboardConfigurationService);