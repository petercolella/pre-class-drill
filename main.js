const alertTrue = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
        True!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
`;

const alertFalse = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
        False!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
`;

$('#pal-form').on('submit', function(e) {
  e.preventDefault();
  // const word = e.target[0].value;
  const word = $('#palindrome')
    .val()
    .trim();
  if (checkPalindrome(word)) {
    $('#true-or-false').html(alertTrue);
  } else {
    $('#true-or-false').html(alertFalse);
  }
});

const checkPalindrome = function(word) {
  const loopLength = word.length / 2;
  for (let i = 0; i < loopLength; i++) {
    if (word.charAt(i) !== word.charAt(word.length - 1 - i)) {
      return false;
    }
  }
  return true;
};

$('#avg-form').on('submit', function(e) {
  e.preventDefault();
  // const arr = e.target[0].value.split(',').map(num => parseFloat(num));
  const arr = $('#avg-input')
    .val()
    .trim()
    .split(',')
    .map(num => parseFloat(num));
  const avgDiv = `
    <div class="alert alert-primary alert-dismissible fade show" role="alert">
        ${findAverage(arr)}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    `;
  $('#average').html(avgDiv);
});

const findAverage = function(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
};

$('#pangram-form').on('submit', function(e) {
  e.preventDefault();
  const str = $('#pangram-input')
    .val()
    .trim();

  if (isPangram(str)) {
    $('#pangram').html(alertTrue);
  } else {
    $('#pangram').html(alertFalse);
  }
});

const isPangram = function(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  str = str.toLowerCase();
  for (let letter of alphabet) {
    if (!str.includes(letter)) {
      return false;
    }
  }
  return true;
};

$('#fibonacci-form').on('submit', function(e) {
  e.preventDefault();
  // const arr = e.target[0].value.split(',').map(num => parseFloat(num));
  const num = parseInt($('#fibonacci-input').val());
  const fibonacciDiv = `
      <div class="alert alert-primary alert-dismissible fade show" role="alert">
          [${fibonacci(num).join(', ')}]
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
      </div>
      `;
  $('#fibonacci').html(fibonacciDiv);
});

const fibonacci = function(n) {
  const t0 = performance.now().toFixed(3);
  console.log(`t of ${n} outside: ${t0}`);
  if (n <= 2) {
    return [1, 1].slice(0, n);
  } else {
    const arr = fibonacci(n - 1);
    const t1 = performance.now().toFixed(3);
    console.log('arr: ', arr);
    console.log(`t of ${n} inside: ${t1}`);
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return arr;
  }
};
