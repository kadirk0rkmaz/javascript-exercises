const removeFromArray = function(arr, ...args) {
    let idx;
    for (let arg of args) {
        while (arr.includes(arg)) {
            idx = arr.indexOf(arg);
            arr.splice(idx, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;