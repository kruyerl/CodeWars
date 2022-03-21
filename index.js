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
const test1 = "(){}[]";
const test2 = "([{}])";
const test3 = "(}";
const test4 = "[(])";
const test5 = "[({})](]";

//find matching pairs next to each other and remove from the string
//continue until cant match

const findPair = (str) => {};

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
console.log(validBraces(test1));
console.log(validBraces(test2));
console.log(validBraces(test3));
console.log(validBraces(test4));
console.log(validBraces(test5));
