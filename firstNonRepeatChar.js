function firstLetter(input) {
  //   console.log([...input]);
  const filteredArr = [...input].filter(c => {
    const newRegExp = new RegExp(c, 'g');
    // console.log('newRegExp', newRegExp);
    input.match(new RegExp(c, 'g')).length == 1;
  });
  //   console.log('filteredArr', filteredArr);
  return [...input].filter(c => input.match(new RegExp(c, 'g')).length == 1)[0];
}

console.log(
  firstLetter('the quick brown fox jumps over the calm kitten quietly')
);

function firstNonRepeatChar(str) {
  var charCounts = new Map();
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var charCount = charCounts.get(char);
    if (charCount) {
      charCounts.set(char, charCount + 1);
    } else {
      charCounts.set(char, 1);
    }
  }

  for (var j of charCounts) {
    // console.log(j);
    if (j[1] === 1) {
      return j[0];
    }
  }
}

console.log(
  firstNonRepeatChar('the quick brown fox jumps over the calm kitten quietly')
);
