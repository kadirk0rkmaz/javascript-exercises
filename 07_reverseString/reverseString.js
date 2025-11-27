const reverseString = function(string) {
    const arr = string.split("");
    let result = [];
    for (let i = 1; i <= arr.length; i++) {
        result.push(arr.at(-i));
    }
    return result.join("");
};

// Do not edit below this line
module.exports = reverseString;
