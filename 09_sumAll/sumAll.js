const sumAll = function(a, b) {
    const array = [];
    if (a > 0 && b > 0) {
        if (a < b) {
            for (let i = a; i <= b; i++) {
                array.push(i);
            }
        } else if (a > b) {
            for (let i = b; i <= a; i++) {
                array.push(i);
            }
        }
        const result = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return result;
    }

};

// Do not edit below this line
module.exports = sumAll;
