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
  };
  

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
  

  /*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

const getCount = (str) => {
  let vowelsCount = 0;
  [...str].forEach((char) => {
    if (char.match(/[aeiou]/gi)) vowelsCount++;
  });
  return vowelsCount;
};

/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/
const string1 = "abc";
const string2 = "abcdef";
const string3 = "abcdefg";
const string4 = "";
const string5 = "a";

const solution = (str) => {
  if (str.length === 0) return [];
  return `${str}${str.length % 2 === 0 ? "" : "_"}`.match(/.{2}/g);
};
const solution2 = (str) => `${str}_`.match(/.{2}/g) || [];

/*Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.
Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/
const validBraces = (braces) => {
  let string = braces;
  while (
    string.includes("{}") ||
    string.includes("[]") ||
    string.includes("()")
  ) {
    string = string
      .split("[]")
      .join("")
      .split("{}")
      .join("")
      .split("()")
      .join("");
  }
  return string.length > 0 ? false : true;
};