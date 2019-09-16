const pangram = string =>
  string
    .toLowerCase()
    .replace(/[^A-Za-z]/g, '')
    .split('')
    .filter((v, i, a) => {
      //   console.log('v:', v, 'i:', i, 'a:', a);
      return a.indexOf(v) === i;
    }).length == 26;

const pangramStr = string =>
  string
    .toLowerCase()
    .replace(/[^A-Za-z]/g, '')
    .split('')
    .filter((v, i, a) => {
      console.log('v:', v, 'i:', i);
      console.log('a.indexOf(v) === i', a.indexOf(v) === i);
      return a.indexOf(v) === i;
    });

console.log(pangram('JavaScript is the best'));
console.log('pangramStr:', pangramStr('JavaScript is the best'));
