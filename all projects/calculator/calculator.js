function one() {
    let one = document.getElementById('display');
    one.value += '1';
}
function two() {
    let two = document.getElementById('display');
    two.value += '2';
}
function three() {
    let three = document.getElementById('display');
    three.value += '3';
}
function four() {
    let four = document.getElementById('display');
    four.value += '4';
}
function five() {
    let five = document.getElementById('display');
    five.value += '5';
}
function six() {
    let six = document.getElementById('display');
    six.value += '6';
}
function seven() {
    let seven = document.getElementById('display');
    seven.value += '7';
}
function eight() {
    let eight = document.getElementById('display');
    eight.value += '8';
}
function nine() {
    let nine = document.getElementById('display');
    nine.value += '9';
}
function zero() {
    let zero = document.getElementById('display');
    zero.value += '0';
}
function allcancel() {
    let ac = document.getElementById('display');
    ac.value = '';
}
function backspace() {
    let backspace = document.getElementById('display');
    backspace.value = backspace.value.slice(0, -1);
}
function add() {
    let add = document.getElementById('display');
    add.value += '+';
}
function subtract() {
    let subtract = document.getElementById('display');
    subtract.value += '-';
}
function multiply() {
    let multiply = document.getElementById('display');
    multiply.value += '*';
}
function divide() {
    let divide = document.getElementById('display');
    divide.value += '/';
}
function decimal() {
    let decimal = document.getElementById('display');
    decimal.value += '.';
}

function output() {
    let val = document.getElementById("display").value;
    let result = eval(val);
    document.getElementById('display').value = result;
}



