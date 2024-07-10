// utility.test.js

const {
  isPalindrome,
  fibonacci,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  factorial,
} = require("./utility");

describe("isPalindrome", () => {
  test("should return true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("should return false for a non-palindrome word", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("should be case insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test("should ignore spaces, punctuation, and special characters", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  });
});
