import {
  caesarCipher,
  calculator,
  capitalize,
  reverseString,
} from "./index.js";

test('write "cintia" to be "Cintia"', () => {
  expect(capitalize("cintia")).toBe("Cintia");
});

test('write "katasymbebekos" to "Katasymbebekos"', () => {
  expect(capitalize("katasymbebekos")).toBe("Katasymbebekos");
});

test('write "cintia" to be "aitnic"', () => {
  expect(reverseString("cintia")).toBe("aitnic");
});

test("adds 1 + 2 equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts 30 - 12 equal 18", () => {
  expect(calculator.subtract(30, 12)).toBe(18);
});

test("divide 30 by 2 equals to 15", () => {
  expect(calculator.divide(30, 2)).toBe(15);
});

test("multiply 10 * 100 equals to 1000", () => {
  expect(calculator.multiply(10, 100)).toBe(1000);
});

test('xyz with shift factor 3 equal to "abc"', () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test('"HeLLo" with shift factor 3 equal to "KhOOr"', () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test('"Hello, World!" with shift factor 3 equal to "Khoor, Zruog!"', () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});