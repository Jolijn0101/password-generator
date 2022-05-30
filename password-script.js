let size;
let optionsArr = [];
let password_arr = [];

function generatePassword() {
  password_arr = new Array(size).fill('*', 0, size);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const special_characters = '!@#$%^&';
  let newIndex;

  function switcher(option, index) {
    switch (option) {
      case 'numbers':
        password_arr[index] = Math.floor(Math.random() * 9);
        break;
      case 'uppercase_letters':
        password_arr[index] =
          alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
        break;
      case 'lowercase_letters':
        password_arr[index] =
          alphabet[Math.floor(Math.random() * alphabet.length)];
        break;
      case 'special_characters':
        password_arr[index] =
          special_characters[
            Math.floor(Math.random() * special_characters.length)
          ];
        break;
      default:
        break;
    }
  }

  // place first obligated elements
  for (let i = 0; i < optionsArr.length; i++) {
    newIndex = Math.floor(Math.random() * password_arr.length);

    if (password_arr[newIndex] !== '*') {
      newIndex = password_arr.indexOf('*');
    }
    switcher(optionsArr[i], newIndex);
  }

  // fill empty spaces with random values
  for (let i = 0; i < password_arr.length; i++) {
    if (password_arr[i] === '*') {
      switcher(optionsArr[Math.floor(Math.random() * optionsArr.length)], i);
    }
  }
  console.log(password_arr);
  document.querySelector('#newPassword').innerHTML =
    'Password: ' + password_arr.join('');
  document.querySelector('button').innerHTML = 'regenerate';
  clearOptions();
}

function handleSubmit() {
  size = parseFloat(document.getElementById('password_length').value);

  let checkboxes = document.getElementsByName('options');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      optionsArr.push(checkboxes[i].value);
    }
  }

  if (optionsArr.length === 0) {
    alert('choose a password option');
    clearOptions();
    return null;
  }

  generatePassword();
}

function clearOptions() {
  size = 0;
  optionsArr = [];
  password_arr = [];
}
