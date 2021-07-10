console.log("HELL WORLD");

// FUNCTIONS

function doSomething() {
  for (let i = 0; i < 50; i += 5) {
    console.log("i: ", i);
  }
}

doSomething();
doSomething();
doSomething();
doSomething();
doSomething();

function buyCheese(type) {
  if (type === "cheddar") {
  } else if (type === "gouda") {
    //
  } else {
    console.log("MEh, dont buy cheese");
  }
}

/* 
FUNCTIONS HAVE: AT LEAST 3 things
the function keyword:
function 

the function name
buyCheese

the function body
{
  everything inside the curlie moustaches
}


1 -> 1

function can either:
return a value
or none
*/

console.clear();

function calcAge(yearOfBirth) {
  let variable = 2021 - yearOfBirth;

  return variable;
}

const myAge = calcAge(1994);
const chrisAge = calcAge(2001);
const cherylAge = calcAge(2010);

console.log("myAge: ", myAge);

let value = 1;
console.log("value:", value);

function changeAge(yearOfBirth) {
  value = 2021 - yearOfBirth;
  return value;
}

const filipeAge = changeAge(1995, "class", "verb", "another verb");
console.log("filipeAge:", filipeAge);
console.log("value:", value);
const noemiAge = changeAge(1999);
console.log("noemiAge:", noemiAge);
console.log("value:", value);

console.clear();

const somethingElse = calcAge(2020);

console.log(calcAge(2020));

console.clear();

/* 
function
nameOfFunction
body

() -> parameters / arguments
 */

// function
// name: newTHing
// list of arguments ->empty
// body of the function
function newThing(bananas) {
  console.log("bananas:", bananas);
}

newThing("bananas");
newThing(1);
newThing([]);
newThing({});
newThing(function anotherOne() {});
newThing();

console.clear();
function sum(number1, number2, number3) {
  return number1 + number2 + number3;
}

console.log(sum(1, 3, 7));

function logic(nationality) {
  switch (nationality) {
    case "portuguese": {
      console.log("🇵🇹");
      break;
    }
    case "french": {
      console.log("🇫🇷");
      break;
    }
    default: {
      console.log("choose your own damned flag");
    }
  }
}

logic("portuguese");
logic("french");

function ifElseExample(age) {
  if (age < 5) {
    return "Go drink milk instead";
  }

  if (age < 10) {
    return "Youre too young";
  }

  return "HAAAY";
}

console.log(ifElseExample(3));
console.log(ifElseExample(9));
console.log(ifElseExample());

const anotherExample = ifElseExample;
console.log(anotherExample(9));
const log = console.log;

log("HELLO THERE", log === console.log);

console.clear();

// DIFERENT kINDS OF TESTS
// Unit Tests
// Test the smallest unit of code available -> function

function canWithdrawMoney(bankAccount) {
  if (bankAccount < 0) {
    return false;
  } else {
    return true;
  }
}

// check if i can withdraw with 1
// the function returns true, i was expecting it to return true
// canWithdrawMoney("10000000");

// if i call withdrawmoney with 1000 should be true
// expect canWithdrawMoney(1000) toBe -> true
