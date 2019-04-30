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
  const sentence = $('#pangram-input')
    .val()
    .trim();

  if (isPangram(sentence)) {
    $('#pangram').html(alertTrue);
  } else {
    $('#pangram').html(alertFalse);
  }

  //   $('#pangram-input').val('');
});

const isPangram = function(input) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const str = input.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (!str.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
};
