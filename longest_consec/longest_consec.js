function longest_consec(arr, k) {
  let max = 0;
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    let tempLongest = '';
    for (let j = i; j < i + k && j < arr.length; j++) {
      tempLongest += arr[j];
    }
    if (tempLongest.length > max) {
      longest = tempLongest;
      max = tempLongest.length;
    }
  }
  return longest;
}

console.log(
  longest_consec(
    ['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'],
    2
  )
);
