const capitalize = (str) => {
  const firstChar = str.charAt(0).toUpperCase();

  return firstChar + str.slice(1);
};

const reverseString = (str) => {
  let reversed = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }

  return reversed.join("");
};

const calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  divide: function (a, b) {
    return a / b;
  },

  multiply: function (a, b) {
    return a * b;
  },
};


const caesarCipher = (string, shift) => {
  const plaintext = "abcdefghijklmnopqrstuvwxyz";
    const upperText = plaintext.toUpperCase();
  const shiftedWord = [];

  for (let i = 0; i < string.length; i++) {
    const index = plaintext.indexOf(string[i]);
    const indexUpper = upperText.indexOf(string[i]);

    if (plaintext.includes(string[i].toLowerCase()) &&
        isUpperCase(string[i])) {
      shiftedWord.push(plaintext[(indexUpper + shift) % 26].toUpperCase());
    } else if (plaintext.includes(string[i])) { 
      shiftedWord.push(plaintext[(index + shift) % 26]);
    } else {
      shiftedWord.push(string[i]); 
    }
  }
  return shiftedWord.join("");
};

// const checkCharCode = (char) => {
//   const index = char.charCodeAt(0);
//   if (index <= 65 || (index >= 90 && index <= 97) || index >= 122) {
//     return true;
//   }
//   return false;
// };

const isUpperCase = (char) => {
  if (char === char.toUpperCase()) {
    return true;
  }
  return false;
};

export { caesarCipher, calculator, capitalize, reverseString };
