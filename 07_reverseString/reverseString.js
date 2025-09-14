const reverseString = function (inStr) {
    let myStr = ''
    for (let i = inStr.length - 1; i >= 0; i--) {
        myStr += inStr.at(i)
    }
    return myStr
};

// Do not edit below this line
module.exports = reverseString;
