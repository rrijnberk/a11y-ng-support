var keyboardConstants = {
    0 : {key: "0", keyCode: 48, which: 48},
    1 : {key: "1", keyCode: 49, which: 49},
    2 : {key: "2", keyCode: 50, which: 50},
    3 : {key: "3", keyCode: 51, which: 51},
    4 : {key: "4", keyCode: 52, which: 52},
    5 : {key: "5", keyCode: 53, which: 53},
    6 : {key: "6", keyCode: 54, which: 54},
    7 : {key: "7", keyCode: 55, which: 55},
    8 : {key: "8", keyCode: 56, which: 56},
    9 : {key: "9", keyCode: 57, which: 57},
    a : {key: "a", keyCode: 65, which: 65},
    b : {key: "b", keyCode: 66, which: 66},
    c : {key: "c", keyCode: 67, which: 67},
    d : {key: "d", keyCode: 68, which: 68},
    e : {key: "e", keyCode: 69, which: 69},
    f : {key: "f", keyCode: 70, which: 70},
    g : {key: "g", keyCode: 71, which: 71},
    h : {key: "h", keyCode: 72, which: 72},
    i : {key: "i", keyCode: 73, which: 73},
    j : {key: "j", keyCode: 74, which: 74},
    k : {key: "k", keyCode: 75, which: 75},
    l : {key: "l", keyCode: 76, which: 76},
    m : {key: "m", keyCode: 77, which: 77},
    n : {key: "n", keyCode: 78, which: 78},
    o : {key: "o", keyCode: 79, which: 79},
    p : {key: "p", keyCode: 80, which: 80},
    q : {key: "q", keyCode: 81, which: 81},
    r : {key: "r", keyCode: 82, which: 82},
    s : {key: "s", keyCode: 83, which: 83},
    t : {key: "t", keyCode: 84, which: 84},
    u : {key: "u", keyCode: 85, which: 85},
    v : {key: "v", keyCode: 86, which: 86},
    w : {key: "w", keyCode: 87, which: 87},
    x : {key: "x", keyCode: 88, which: 88},
    y : {key: "y", keyCode: 89, which: 89},
    z : {key: "z", keyCode: 90, which: 90},
    arrow_left: { key: "ArrowLeft", keyCode: 37, which: 37 },
    arrow_up: { key: "ArrowUp", keyCode: 38, which: 38 },
    arrow_right: { key: "ArrowRight", keyCode: 39, which: 39 },
    arrow_down: { key: "ArrowDown", keyCode: 40, which: 40 },
    backspace: { key: "Backspace", keyCode: 8, which: 8 },
    enter : { key: "Enter", keyCode: 13, which: 13 },
    escape : { key: "Escape", keyCode: 27, which: 27 },
    tab : { key: "Tab", keyCode: 9, which: 9 }
};

angular
    .module('a11y.support', []);

angular
    .module('a11y.support')
    .constant('a11y', {
        keys: keyboardConstants
    });