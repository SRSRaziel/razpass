// My list of characters
const arrUppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','W','Y','Z'];
const arrLowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z'];
const arrNumbers = [0,1,2,3,4,5,6,7,8,9];
const arrSymbols = ['!','@','#','$','%','&','*','=','+','/',';','-'];

// My components of index.html
const range = document.getElementById('myRange');
const passField = document.getElementById('password');

let output = parseInt(range.value);

// Since the HTML components have IDs, I don't have to define all of them here. They're already defined.

// Functions
const increaseValue = () => {
    let currentValueRange = parseInt(range.value);
    let maxValueRange = parseInt(range.max);
  
    if (currentValueRange < maxValueRange) {
      range.value = currentValueRange + 1;
      output = currentValueRange + 1;
    }

    changePassword();

  }
  
const decreaseValue = () => {
  let currentValueRange = parseInt(range.value);
  let minValueRange = parseInt(range.min);

  if (currentValueRange > minValueRange) {
    range.value = currentValueRange - 1;
    output = currentValueRange - 1;
  }

  changePassword();
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

  for(let i = 0; i < output; i++){
    let randomIndex = Math.floor(Math.random() * arrOfChar.length)
    password += arrOfChar[randomIndex];
  }
  
  passField.value = password;

}

const copy = () => {
  navigator.clipboard.writeText(passField.value);
  toastr.success("Password copied to clipboard!");
}

const resetPassword = () => {
 syncChecks();
 changePassword(); 
}

// Calling functions with event listeners
increaseBtn.addEventListener('click', increaseValue);
decreaseBtn.addEventListener('click', decreaseValue);
btnCopyPass.addEventListener('click', copy);
upperC.addEventListener('click', resetPassword);
lowerC.addEventListener('click', resetPassword);
numbers.addEventListener('click', resetPassword);
symbols.addEventListener('click', resetPassword);
range.addEventListener('input', changePassword);
document.addEventListener('DOMContentLoaded', changePassword);
btnCopyPass.addEventListener('click', copy);