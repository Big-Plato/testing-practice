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

const plaintext = "abcdefghijklmnopqrstuvwxyz";

const caesarCipher = (str, shift) => {
  const shiftedWord = [];

  for (const letter in str) {
    const index = plaintext.indexOf(str[letter]);
    const letterCode = checkCharCode(letter);
    console.log(letterCode);
    const isUpper = isUpperCase(letter);

    if (letterCode || letterCode && isUpper) {
      shiftedWord.push(plaintext[(index + shift) % 26]);
    } else {
      shiftedWord.push(letterCode);
    }
  }
  return shiftedWord.join("");
};

const checkCharCode = (char) => {
  const index = char.charCodeAt(0);
  if (index <= 65 || (index >= 90 && index <= 97) || index >= 122) {
    return true;
  }
  return false;
};

const isUpperCase = (char) => {
  if (char.toUpperCase()) {
    return true;
  }
  return false;
};

export { caesarCipher, calculator, capitalize, reverseString };
