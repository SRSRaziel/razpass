// My list of characters
const arrUppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','W','Y','Z'];
const arrLowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z'];
const arrNumbers = [0,1,2,3,4,5,6,7,8,9];
const arrSymbols = ['!','@','#','$','%','&','*','=','+','/','.',',',';','-'];

// My components of index.html
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const range = document.getElementById('myRange');
const output = document.getElementById('output');

// Functions
const increaseValue = () => {
    let currentValueRange = parseInt(range.value);
    let maxValueRange = parseInt(range.max);
  
    if (currentValueRange < maxValueRange) {
      range.value = currentValueRange + 1;
      output.value = currentValueRange + 1;
    }
  }
  
const decreaseValue = () => {
  let currentValueRange = parseInt(range.value);
  let minValueRange = parseInt(range.min);

  if (currentValueRange > minValueRange) {
    range.value = currentValueRange - 1;
    output.value = currentValueRange - 1;
  }
}


// Calling functions with event listeners
increaseBtn.addEventListener('click', increaseValue);
decreaseBtn.addEventListener('click', decreaseValue);
  