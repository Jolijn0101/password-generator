let size;
let optionsArr = [];
let password_arr = [];

//will handle the information after submitting the form
function handleSubmit() {
  //writes the value choosen as a number to size
  size = parseFloat(document.getElementById('password_length').value);

  //loops through all options and pushes only the checked ones to optionsArr
  let checkboxes = document.getElementsByName('options');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      optionsArr.push(checkboxes[i].value);
    }
  }

  // If there are no options chosen give an alert and leave the function
  if (optionsArr.length === 0) {
    alert('choose a password option');
    clearOptions();
    return null;
  }

  // after submitting the info start the generatePassword function
  generatePassword();
}

//Generates a new password matching all the requirements
function generatePassword() {
  //fill the password_array with size x "*" elements
  password_arr = new Array(size).fill('*', 0, size);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const special_characters = '!@#$%^&';
  let newIndex;

  //will be used to generate a new letter, number or special character and writes it to the right place in the password_arr
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

  // display the new password
  document.querySelector('#newPassword').innerHTML =
    'Password: ' + password_arr.join('');

  // change generate to regenerate
  document.querySelector('button').innerHTML = 'regenerate';

  //make a call to clearOptions to clear all the variables needed
  clearOptions();
}

//function for clearing the needed variables
function clearOptions() {
  size = 0;
  optionsArr = [];
  password_arr = [];
}
