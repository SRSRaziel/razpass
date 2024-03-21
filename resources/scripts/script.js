// My list of characters
const arrUppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','W','Y','Z'];
const arrLowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z'];
const arrNumbers = [0,1,2,3,4,5,6,7,8,9];
const arrSymbols = ['!','@','#','$','%','&','*','=','+','/',';','-'];

// My components of index.html
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const range = document.getElementById('myRange');
const output = document.getElementById('output');
const upperC = document.getElementById('upperC');
const lowerC = document.getElementById('lowerC');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const passField = document.getElementById('password');

// Functions
const increaseValue = () => {
    let currentValueRange = parseInt(range.value);
    let maxValueRange = parseInt(range.max);
  
    if (currentValueRange < maxValueRange) {
      range.value = currentValueRange + 1;
      output.value = currentValueRange + 1;
    }

    changePassword();
  }
  
const decreaseValue = () => {
  let currentValueRange = parseInt(range.value);
  let minValueRange = parseInt(range.min);

  if (currentValueRange > minValueRange) {
    range.value = currentValueRange - 1;
    output.value = currentValueRange - 1;
  }

  changePassword();
}

const changePassword = () => {
  
  let password = '';
  let arrOfChar = [];
  let countPref = 0;
  const includeUpperC = upperC.checked;
  const includeLowerC = lowerC.checked;
  const includeNumbers = numbers.checked;
  const includeSymbols = symbols.checked;

  if(includeUpperC){
    countPref++;
    arrOfChar = arrOfChar.concat(arrUppercaseLetters);
  }
  
  if(includeLowerC){
    countPref++;
    arrOfChar = arrOfChar.concat(arrLowercaseLetters);
  }

  if(includeNumbers){
    countPref++;
    arrOfChar = arrOfChar.concat(arrNumbers);
  }

  if(includeSymbols){
    countPref++;
    arrOfChar = arrOfChar.concat(arrSymbols);
  }

  if(countPref === 1){
    if(includeUpperC){
      upperC.disabled = true;
    }

    if(includeLowerC){
      lowerC.disabled = true;
    }

    if(includeNumbers){
      numbers.disabled = true;
    }

    if(includeSymbols){
      symbols.disabled = true;
    }
  } else {
    upperC.disabled = false;
    lowerC.disabled = false;
    numbers.disabled = false;
    symbols.disabled = false;
  }

  for(let i = 0; i < output.value; i++){
    let randomIndex = Math.floor(Math.random() * arrOfChar.length)
    password += arrOfChar[randomIndex];
  }
  
  passField.value = password;

}


// Calling functions with event listeners
increaseBtn.addEventListener('click', increaseValue);
decreaseBtn.addEventListener('click', decreaseValue);
upperC.addEventListener('click', changePassword);
lowerC.addEventListener('click', changePassword);
numbers.addEventListener('click', changePassword);
symbols.addEventListener('click', changePassword);
range.addEventListener('input', changePassword);
document.addEventListener('DOMContentLoaded', changePassword);