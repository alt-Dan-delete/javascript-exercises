const repeatString = function (inStr, num) {
    let myStr = '';
    if (num < 0) {
        return 'ERROR'
    }
    for (let index = 0; index < num; index++) {
        myStr += inStr
    }
    return myStr;
};

// Do not edit below this line
module.exports = repeatString;
