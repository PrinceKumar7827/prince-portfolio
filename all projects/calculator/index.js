let num = "2*4";

function add() {
  let s = num.split("+");
  let a = +s[0];
  let b = +s[1];
  console.log(a + b);
};

function sub() {
  let s = num.split("-");
  let a = +s[0];
  let b = +s[1];
  console.log(a - b);
};
function mul() {
  let s = num.split("*");
  let a = +s[0];
  let b = +s[1];
  console.log(a * b);
};
function div() {
    let s = num.split("/");
    let a = +s[0];
    let b = +s[1];
    console.log(a / b);
  };

// if(num.includes('+')) {
//     add()
// } else if(num.includes('-')) {
//     sub()
// } else if (num.includes('*')) {
//     mul()
// } else if (num.includes('/')) {
//     div()
// } else {
//     console.log('error');
// }

switch (true) {
  case(num.includes('+')): add();
  break;
  case(num.includes("-")): sub();
  break;
  case(num.includes('*')): mul();
  break;
  case(num.includes('/')): div();
  break;
  default: console.log('error');
}