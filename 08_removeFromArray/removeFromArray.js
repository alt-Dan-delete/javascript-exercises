const removeFromArray = function(inArr, ...inValues) {    
    const myArr = []

    inArr.forEach((item) => {
        if (!inValues.includes(item)) {
            myArr.push(item)
        }
    })

    return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
