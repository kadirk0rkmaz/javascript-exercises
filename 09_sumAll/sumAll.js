const sumAll = function(start, stop) {    
    if (!Number.isInteger(start) || !Number.isInteger(stop)) {
        return 'ERROR';
    }

    if (start < 0 || stop < 0) {
        return 'ERROR';
    }
    
    let result = 0;
    if (start > stop) {
        const tmp = start;
        start = stop;
        stop = tmp;
    }

    for (let i = start; i <= stop; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
