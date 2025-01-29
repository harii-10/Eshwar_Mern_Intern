function array(){
  let num = [];
  let size = parseInt(prompt("Enter the Size of the Array"));

  for(let i=0; i<size; i++){
    let element = parseInt(prompt(`Enter the element ${i+1} :`));
    num.push(element);
  }
  return num;
}

function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum === n;
}

function findEvenPrime(numbers) {
  return numbers.filter(num => num === 2);
}

function findPerfectNumbers(numbers) {
  return numbers.filter(isPerfectNumber);
}

let arr = array();
console.log("Array: ", arr);

let perfectNumbers = findPerfectNumbers(arr);
console.log("Perfect Numbers: ", perfectNumbers);

let evenPrime = findEvenPrime(arr);
console.log("Even Prime Numbers: ", evenPrime);
