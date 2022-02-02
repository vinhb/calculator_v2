const operators = document.querySelectorAll('[data-operation]');
const numbers = document.querySelectorAll('[data-number]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-clear]');
const currentOperandText = document.querySelector('[data-current-operand]')
const calculatorScreen = document.querySelector('span');
 
const calculator = {
    value: document.querySelector('[data-current-operand]').textContent,
    currentOperand: '',
    previousOperand: '',
    firstNumber: '',
    secondNumber: '',
    add: (num1, num2) => num1 + num2,
    sub: (num1, num2) => num1 - num2,
    divide: (num1, num2) => num1 / num2,
    multi: (num1, num2) => num1 * num2,
    result: '',
}


const operate = (sign) => {
    // think I need a holding variable
    // will need to convert "numbers" to actual numbers
    if (calculator.operator === '+') {
        add(firstInput, secondInput);
    } 
    else if (calculator.operator === '-') {
        sub(firstInput, secondInput); 
    } else if (calculator.operator === '*') {
        multi(firstInput, secondInput); 
    } else {
        divide(firstInput, secondInput); 
    }
    updateDisplay();
}

const updateDisplay = () => {
    // when a button is pushed determine if calc screen needs to be updated
    
    // if the button is a number check if it's a decimal and if there already is a decimal
        // if not add the number to the screen
    
    //if button is delete
        //remove the most recent number
        // update first or secondnumber to reflect
    calculatorScreen.textContent = calculator.value;
}


const clear = () => {
    calculator.firstNumber = '';
    calculator.secondNumber = '';
    calculator.operator = '';
    calculator.value = 0;
    updateDisplay();
}

const appendNumber = (number) => {    
    // check current length of number
    (number === '.' && calculator.value.includes('.')) ? false : 

    Number(calculator.value) === 0 ? calculator.value = number : calculator.value += number; // check calculator is currently showing 0 to replace with number rather than append

    updateDisplay();
    
}

const deleteNumber = () => {
    if (calculator.value.length <= 1) {
        calculator.value = '0';
    } else {
        calculator.value = calculator.value.slice(0,-1);
    }
    // call update display
    updateDisplay();
}

const storeNumber = (number) => {
    // when an operator is pressed, needs to update calculator firstNumber
    calculator.firstNumber = number;
}

const setOperator = (sign) => {
    
    if (calculator.currentOperand === '') { // if there isn't a current operand
        calculator.currentOperand = sign;
    } else { 
        calculator.previousOperand = calculator.currentOperand;
        calculator.currentOperand = sign;
    }
}


operators.forEach(operator => operator.addEventListener('click', (e) => {
    setOperator(e.target.getAttribute('data-operation'));
    storeNumber(calculatorScreen.textContent);
}))

numbers.forEach(number => number.addEventListener('click', (e) => {
    // need to check if e.target.textContent === '.'
    appendNumber(e.target.textContent);
}))

deleteButton.addEventListener('click', deleteNumber);

allClearButton.addEventListener('click', clear);