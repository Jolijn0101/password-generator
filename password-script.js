let size;
let optionsArr = [];
let password_arr = [];

function generatePassword() {
  for (let i = 0; i < size; i++) {
    password_arr.push('*');
  }

  for (let i = 0; i < optionsArr.length; i++) {
    switch (optionsArr[i]) {
      case 'numbers':
        console.log('doet ie het');
        /*console.log(
          password_arr[Math.floor(Math.random() * password_arr.length)]
        );
        console.log(Math.floor(Math.random() * 10));*/
        break;

      default:
        break;
    }
  }
}

function handleSubmit() {
  size = document.getElementById('password_length').value;

  let checkboxes = document.getElementsByName('options');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      optionsArr.push(checkboxes[i].value);
    }
  }
  generatePassword();
}

function clearOptions() {
  size = 0;
  optionsArr = [];
  password_arr = [];
}
