/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
const numberArray = [19, 5, 42, 2, 77];
const sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((num1, num2) => num1 - num2)
    .slice(0, 2)
    .reduce((total, number) => total + number, 0);



/* 
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ", 
  "*****"
]
*/

const towerBuilder = (nFloors) => {
    let stars = 1
    const pattern = []
    for (let i = 0; i < nFloors; i++) {
      pattern.push("*".repeat(stars))
      stars = stars + 2
    }
    const maxCharacters = pattern.slice(-1)[0].length;
    return pattern.map((floor) => {
      let spaces = maxCharacters - floor.length
      return `${" ".repeat(spaces / 2)}${floor}${" ".repeat(spaces / 2)}`
    }
  }
  

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

const narcissistic = (number) => {
    const sumOfPower = number
      .toString()
      .split("")
      .reduce((total, num) => total + Math.pow(num, number.toString().length), 0);
    return sumOfPower === number ? true : false;
  };
  