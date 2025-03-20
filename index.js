const capitalize = (str) => {
    const firstChar = str.charAt(0).toUpperCase();

    return firstChar + str.slice(1);
}

const reverseString = (str) => {
    let reversed = [];

    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i]);
    }

    return reversed.join("");
}

const calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    },

    divide: function(a, b) {
        return a / b;
    },

    multiply: function(a, b) {
        return a * b;
    }
}

export { capitalize, reverseString, calculator };