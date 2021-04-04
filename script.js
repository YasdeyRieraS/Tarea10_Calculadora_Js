addButton = document.querySelector("#Sum");
subtractButton = document.querySelector("#subtraction");
multiplyButtom = document.querySelector("#multiplication");
divideButtom = document.querySelector("#division");

function add(){
    number1 = document.querySelector("#number1Field");
    number2 = document.querySelector("#number2Field");
    result = document.querySelector("#result");
    result.textContent = 'Result: ' + (parseInt(number1.value) + parseInt(number2.value));
}

function substract(){
    number1 = document.querySelector("#number1Field");
    number2 = document.querySelector("#number2Field");
    result = document.querySelector("#result");
    result.textContent = 'Result: ' + (parseInt(number1.value) - parseInt(number2.value));
}

function multiply(){
    number1 = document.querySelector("#number1Field");
    number2 = document.querySelector("#number2Field");
    result = document.querySelector("#result");
    result.textContent = 'Result: ' + (parseInt(number1.value) * parseInt(number2.value));
}

function divide(){
    number1 = document.querySelector("#number1Field");
    number2 = document.querySelector("#number2Field");
    result = document.querySelector("#result");
    result.textContent = 'Result: ' + (parseInt(number1.value) / parseInt(number2.value));
}

addButton.addEventListener('click', add);
subtractButton.addEventListener('click', substract);
multiplyButtom.addEventListener('click', multiply);
divideButtom.addEventListener('click', divide);