// My list of characters
const arrUppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','W','Y','Z'];
const arrLowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z'];
const arrNumbers = [0,1,2,3,4,5,6,7,8,9];
const arrSymbols = ['!','@','#','$','%','&','*','=','+','/',';','-'];

// My components of index.html
const range = document.getElementById('myRange');
const passField = document.getElementById('password');
const output = document.getElementById('output');
output.value = parseInt(range.value);

// Variables and Constants
const maxValueRange = parseInt(range.max);
const minValueRange = parseInt(range.min);

// Functions
const increaseValue = () => {
    let currentValueRange = parseInt(range.value);
  
    if (currentValueRange < maxValueRange) {
      range.value = currentValueRange + 1;
      output.value = currentValueRange + 1;
    }

    changePassword();
    checkRange();

  }
  
const decreaseValue = () => {
  let currentValueRange = parseInt(range.value);

  if (currentValueRange > minValueRange) {
    decreaseBtn.disabled = false;
    range.value = currentValueRange - 1;
    output.value = currentValueRange - 1;
  }

  changePassword();
  checkRange();

}

const checkRange = () => {
  let currentValueRange = parseInt(range.value);

  if (currentValueRange === minValueRange) {
    decreaseBtn.disabled = true;
  } else {
    decreaseBtn.disabled = false;
  }

  if (currentValueRange === maxValueRange) {
    increaseBtn.disabled = true;
  } else {
    increaseBtn.disabled = false;
  }
}

const minCheck = 1;

const syncChecks = () => {
  const checks = [upperC, lowerC, numbers, symbols];
  
  let checked = [];
  let notChecked = [];

  checks.forEach(check => {
    if (check.checked) {
      checked.push(check);
    } else {
      notChecked.push(check);
    }
  });

  if (checked.length === minCheck) {
    checked.forEach(item => {
      item.disabled = true;
    })
    notChecked.forEach(item => {
      item.disabled = false;
    })
  } else {
    checks.forEach(item => {
      item.disabled = false;
    })
  }
}

const changePassword = () => {
  
  let password = '';
  let arrOfChar = [];
  const includeUpperC = upperC.checked;
  const includeLowerC = lowerC.checked;
  const includeNumbers = numbers.checked;
  const includeSymbols = symbols.checked;

  if(includeUpperC){
    arrOfChar = arrOfChar.concat(arrUppercaseLetters);
  }
  
  if(includeLowerC){
    arrOfChar = arrOfChar.concat(arrLowercaseLetters);
  }

  if(includeNumbers){
    arrOfChar = arrOfChar.concat(arrNumbers);
  }

  if(includeSymbols){
    arrOfChar = arrOfChar.concat(arrSymbols);
  }

  for(let i = 0; i < output.value; i++){
    let randomIndex = Math.floor(Math.random() * arrOfChar.length)
    password += arrOfChar[randomIndex];
  }
  
  passField.value = password;

}

const checkScore = () => {
  let score = zxcvbn(passField.value).score;
  switch(score){
    case 0:
      myScore.innerHTML = 'Too guessable';
      scoreDescription.innerHTML = 'Risky password. (guesses < 10^3)';
      myScore.style.backgroundColor = '#8e1d1d';
      break;
    case 1:
      myScore.innerHTML = 'Very guessable';
      scoreDescription.innerHTML = 'Protection from throttled online attacks. (guesses < 10^6)';
      myScore.style.backgroundColor = '#8e4d1d';
      break;
    case 2:
      myScore.innerHTML = 'Somewhat guessable';
      scoreDescription.innerHTML = 'Protection from unthrottled online attacks. (guesses < 10^8)';
      myScore.style.backgroundColor = '#8e7f1d';
      break;
    case 3:
      myScore.innerHTML = 'Safely unguessable';
      scoreDescription.innerHTML = 'Moderate protection from offline slow-hash scenario. (guesses < 10^10)';
      myScore.style.backgroundColor = '#738e1d';
      break;
    case 4:
      myScore.innerHTML = 'Very unguessable';
      scoreDescription.innerHTML = 'Strong protection from offline slow-hash scenario. (guesses >= 10^10)';
      myScore.style.backgroundColor = '#358e1d';
      break;
  }
}

const copy = () => {
  navigator.clipboard.writeText(passField.value);
  toastr.success("Password copied to clipboard!");
}

const resetPassword = () => {
 syncChecks();
 checkRange();
 changePassword();
 checkScore();
}

// Calling functions with event listeners
increaseBtn.addEventListener('click', increaseValue);
decreaseBtn.addEventListener('click', decreaseValue);
btnCopyPass.addEventListener('click', copy);
btnRefresh.addEventListener('click', resetPassword)
upperC.addEventListener('click', resetPassword);
lowerC.addEventListener('click', resetPassword);
numbers.addEventListener('click', resetPassword);
symbols.addEventListener('click', resetPassword);
range.addEventListener('input', resetPassword);
document.addEventListener('DOMContentLoaded', resetPassword);