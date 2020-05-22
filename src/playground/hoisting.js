//Actual Code

console.log(text); // undefined - 'text' was used before it was defined
greet(); // hello
console.log(greet2); // undefined - 'greet2' was used before it was defined.
console.log(greet2()); // Type Error: greet2 is not a function
var text = "welcome";

function greet() {
  console.log("Hello");
}

var greet2 = function () {
  console.log("Hello2");
};

//Hoisted code

var text = undefined;
var greet2 = undefined;

function greet() {
  console.log("Hello");
}

console.log(text); // undefined
greet(); // hello
console.log(greet2); // undefined
console.log(greet2()); // Type Error: greet2 is not a function

var text = "welcome";

var greet2 = function () {
  console.log("Hello2");
};
