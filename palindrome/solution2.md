```js
var isPalindrome = function(str) {
  return (
    str
      .split('')
      .reverse()
      .join('') === str
  );
};
```
