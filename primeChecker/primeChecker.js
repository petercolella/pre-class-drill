const primeChecker = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return n > 1;
};

console.log(1, primeChecker(1));
console.log(2, primeChecker(2));
console.log(3, primeChecker(3));
console.log(4, primeChecker(4));
console.log(5, primeChecker(5));
console.log(6, primeChecker(6));
console.log(7, primeChecker(7));
console.log(8, primeChecker(8));
console.log(9, primeChecker(9));
console.log(10, primeChecker(10));
console.log(11, primeChecker(11));
