# a11y-ng-support &nbsp;![Travis build status](https://travis-ci.org/rrijnberk/a11y-ng-support.png?branch=master)

> Accessibility support framework for Angular 1.4+ projects

## Installing a11y-ng-support
You can install this package locally with npm
> Please note that this framework requires AngularJS 1.4+, and is not (yet) available for angular 2

##npm
```bash
    # To install latest release
    npm install a11y-ng-support
    
    # To install latest and update package.json 
    npm install a11y-ng-support --save
```

# Using the a11y-ng-support framework
to get started using the framework you should add **a11.support** to your module dependencies
```javascript
    angular.module('sampleProject', ['a11y.support'])
```


##Getting started with the keyboard 
The keyboard portion of the framwework consists out of the a11-keyboard directive (attribute) and the configuration service.

You can setup actions using the configuration service in a controller and/or during the run phase. An example of how to do this is can be seen below:

Creating a configuration:
```javascript
        var config = keyboardConfiguration.addConfiguration('sample.span.interaction');
```

Adding actions:
```javascript
    config.addAction(a11y.keys.space, function () {
        console.log('Space');
    });
    
    config.addAction(a11y.keys.space, function () {
        console.log('Space + Alt');
    }, true);
    
    config.addAction(a11y.keys.space, function () {
        console.log('Space + ctrl');
    }, false, true);
    
    config.addAction(a11y.keys.space, function () {
        console.log('Space + Shift');
    }, false, false, true);
    
    config.addAction(a11y.keys.space, function () {
        console.log('Space + Alt + Ctrl + Shift');
    }, true, true, true);
    
    }
```

#### addAction / removeAction: 
The interface for adding and removing actions uses the following api:

- key: The key to listen for.
- action: The callback method when the key is pressed.
- Alt key modifier: Should alt be pressed down.
- Ctrl key modifier: Should ctrl be pressed down.
- Shift key modifier: Should shift be pressed down.

#### Keys supported
Currently supported keys are:

- 0-9,
- a-z,
- arrows,
- backspace,
- enter,
- escape &
- tab.

Supported as shorthand are:

- alphabetic [a-z]
- alphanumeric [0-1, a-z]
- numeric [0-1]

### Binding a configuration to a dom element
Binding a configuration to a dom element can be done using the a11y-keyboard attribute directive as so: 
```javascript
    <span a11y-keyboard="sample.span.interaction">keyboard aware span</span>
```

## Inspiration for this support framework

These are some posts i read which inspired me to do more and create this framework.

- Accessibility in AngularJS and Beyond, Marcy Sutton (http://marcysutton.com/slides/fluent2015/#/1)
- The inaccessible web: how we got into this mess, Mischa Andrews (https://uxdesign.cc/the-inaccessible-web-how-we-got-into-this-mess-7cd3460b8e32#.htogr0eqf)

## Issues & Feature requests
Please use labels when using github's [issue tracker](https://github.com/rrijnberk/a11y-ng-support/issues) for registering a bug report or enhancement request. 
