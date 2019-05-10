function isValidPass(password) {
  return /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/.test(password);
}

console.log(isValidPass('RexTheDog')); // true
console.log(isValidPass('rexthedog')); // false
console.log(isValidPass('REXTHEDOG')); // false
console.log(isValidPass('Dog')); // false
