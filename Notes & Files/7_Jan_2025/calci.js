const add = (a, b) => (a + b).toFixed(2); -
const sub = (a, b) => (a - b).toFixed(2);
const mul = (a, b) => (a * b).toFixed(2);
const div = (a, b) => b !== 0 ? (a / b).toFixed(2) : "Division by zero is not allowed";
const rem = (a, b) => b !== 0 ? (a % b).toFixed(2) : "Modulo by zero is not allowed";

let a = parseFloat(prompt("Enter Number 1:"));
let b = parseFloat(prompt("Enter Number 2:"));

document.getElementById("add").textContent = `Addition of ${a} and ${b}: ${add(a, b)}`;
document.getElementById("sub").textContent = `Subtraction of ${a} and ${b}: ${sub(a, b)}`;
document.getElementById("mul").textContent = `Multiplication of ${a} and ${b}: ${mul(a, b)}`;
document.getElementById("div").textContent = `Division of ${a} and ${b}: ${div(a, b)}`;
document.getElementById("rem").textContent = `Remainder of ${a} and ${b}: ${rem(a, b)}`;
