function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

console.log(a()()());

//closures and higher order function
function boo(string) {
  return function (name) {
    return function (name2) {
      console.log(`hi ${name2}`);
    };
  };
}

boo("hi")("john")("tanya");

const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`);

// AHH! HOW DOES IT REMEMBER THIS 5 years from now?
const booString = boo2("sing");
const booStringName = booString("John");
const booStringNameName2 = booStringName("tanya");
console.log("booStringNameName2: ", booStringNameName2);
