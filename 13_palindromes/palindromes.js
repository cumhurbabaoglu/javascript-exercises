const palindromes = function (string) {
    const array = string.toLowerCase()
                         .split("")
                        .filter(letter => letter !== "," && letter !== " ");

    for (let i = 0; i < array.length / 2; i++) {
        if (array[i] !== array.at(-i - 1)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
