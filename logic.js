let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b == 0) {
        resetVars()
        return 'Undefined';
    } else {
        return a / b;
    }
}

function operate(operator, a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

let numButtons = document.querySelectorAll(".numButton")

numButtons.forEach( (buttonEL) => {
    buttonEL.addEventListener("click", ()=>{
        if(operator == "") {
            if (result != ""){
                resetVars()
            }
            firstNumber += buttonEL.innerText
            updateDisplay(firstNumber)
        }
        else {
            secondNumber += buttonEL.innerText;
            updateDisplay(secondNumber);
        }
    })
});

function updateDisplay(number){
    const displayEl = document.getElementById("display")
    displayEl.innerText = number
}

let opButtons = document.querySelectorAll(".opButton");

opButtons.forEach((operandButton) => {
    operandButton.addEventListener("click", function() {
        if (result != ""){
            firstNumber = result
            secondNumber = ""
            result = ""
        }
        if (firstNumber != "" && secondNumber != "" && result == ""){
            firstNumber = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber))
            secondNumber = ""
        }
        operator = operandButton.innerText;
    })
})

let eqButton = document.querySelector(".eqButton");
eqButton.addEventListener("click", function() {
    if (firstNumber == "" || secondNumber == "" || operator == ""){
        resetVars()
        updateDisplay("Need 2 numbers")
        return
    }
    result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    updateDisplay(result);
    operator = ""
})

let clearButton = document.getElementsByClassName("clearButton")[0];
    clearButton.addEventListener("click", function() {
        updateDisplay("0");
        resetVars()
})

function resetVars(){
    firstNumber = "";
    secondNumber = "";
    operator = "";
    result = "";
}