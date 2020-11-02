/* jshint esversion: 6 */

const leadingZero = (item) => {
    if (item < 10) return "0" + item;
    else return item;
};

const prepareTime = () => {
    const now = new Date();
    var hours = leadingZero(now.getHours());
    var minutes = leadingZero(now.getMinutes());
    var seconds = leadingZero(now.getSeconds());
    return hours + ":" + minutes + ":" + seconds;
};

const numLineGen = (...line) => {
    var asciiBlock = "";
    var classes = "";
    for (var i = 0; i < line.length; i++) {
        if (line[i] == 1) classes = "yes";
        else classes = "no";
        asciiBlock = asciiBlock.concat("<span class='" + classes + "'>█</span>");
    }
    asciiBlock = asciiBlock.concat("<br/>");
    return asciiBlock;
};

const dec2bin = (...decs) => {
    var fullBlock = "";
    var bin;
    for (var i = 0; i < decs.length; i++) {
        bin = (decs[i]).toString(2);
        while (bin.length < 4) bin = "0".concat(bin);
        fullBlock = fullBlock.concat(numLineGen(bin[0], bin[1], bin[2], bin[3]));
    }
    return fullBlock;
};

const asciiNumber = (number) => {
    var ascii;
    switch (number) {
        case "0":
            ascii = dec2bin(15,9,9,9,15);
            break;
        case "1":
            ascii = dec2bin(1,1,1,1,1);
            break;
        case "2":
            ascii = dec2bin(15,1,15,8,15);
            break;
        case "3":
            ascii = dec2bin(15,1,15,1,15);
            break;
        case "4":
            ascii = dec2bin(9,9,15,1,1);
            break;
        case "5":
            ascii = dec2bin(15,8,15,1,15);
            break;
        case "6":
            ascii = dec2bin(15,8,15,9,15);
            break;
        case "7":
            ascii = dec2bin(15,1,1,1,1);
            break;
        case "8":
            ascii = dec2bin(15,9,15,9,15);
            break;
        case "9":
            ascii = dec2bin(15,9,15,1,15);
            break;
    }
    return ascii;
};

const asciiTime = (time, timeTab) => {
    time = time.replace(/:/g,"");
    for (var i = 0; i < timeTab.length; i++) {
        timeTab[i].innerHTML = asciiNumber(time[i]);
    }
};

const updateClock = () => {
    var h1 = document.getElementById("h1");
    var h2 = document.getElementById("h2");
    var m1 = document.getElementById("m1");
    var m2 = document.getElementById("m2");
    var s1 = document.getElementById("s1");
    var s2 = document.getElementById("s2");
    var time = prepareTime();
    asciiTime(time, [h1, h2, m1, m2, s1, s2]);
    setTimeout(updateClock, 500);
};
