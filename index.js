/*

A Narcissistic Number is a positive number which is the sum of its own digits, 
each raised to the power of the number of digits in a given base. 
In this Kata, we will restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcisstic:
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

Your code must return true or false (not 'true' and 'false') 
depending upon whether the given number is a Narcissistic number in base 10. 
This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, 
only valid positive non-zero integers will be passed into the function.
*/

//145

const calcSumOfPowers = (number) => {
  const sumofpower = number
    .toString()
    .split("")
    .reduce((total, num) => total + Math.pow(num, number.toString().length), 0);
  return sumofpower === number ? true : false;
};

console.log(calcSumOfPowers(1652));
