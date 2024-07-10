// utility.js
// Don't touch this file!! Write all of your code in the utility.test.js

/**
 * Checks if the provided string is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters
 * that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
  return cleanStr === cleanStr.split("").reverse().join("");
}

/**
 * Calculates the nth Fibonacci number.
 * The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} - The nth Fibonacci number.
 */
function fibonacci(n) {
  let a = 0,
    b = 1,
    temp;
  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
}

/**
 * Converts temperature from Fahrenheit to Celsius.
 * @param {number} fahrenheit - The temperature in Fahrenheit.
 * @returns {number} - The temperature in Celsius.
 */
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

/**
 * Converts temperature from Celsius to Fahrenheit.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} - The temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

/**
 * Calculates the factorial of a number.
 * The factorial of a number is the product of all positive integers less than or equal to the number.
 * @param {number} num - The number to calculate the factorial of.
 * @returns {number} - The factorial of the number.
 */
function factorial(num) {
  if (num < 0) {
    return -1;
  }
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

module.exports = {
  isPalindrome,
  fibonacci,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  factorial,
};
