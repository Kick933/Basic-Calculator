const show = document.querySelector("#display-area");

let temp_delete = "";
let delete_string1 = "";
let dot = 0;
let temp_length = 0;
let opr1 = 0;
let opr2 = 0;
let operator = "";
let operatorBeingDisplayed = 0;
// Displays zero on display.
function display_zero(){
    show.textContent = "0"
    temp_length = 0;
}
function display_nothing(){
    show.textContent = "";
}
// Event listeners for each number.
const one = document.querySelector('#one')
one.addEventListener('click',()=>{
    if(operatorBeingDisplayed == 1){
        display_nothing();
        operatorBeingDisplayed =0;
        secondOperandAvailable = 1;
    }
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    if(dot == 1){
        temp_length = 4
    }
    show.textContent += 1;
    temp_length++;
})
const two = document.querySelector("#two")
two.addEventListener('click',()=>{
    if(operatorBeingDisplayed == 1){
        display_nothing();
        operatorBeingDisplayed =0;
        secondOperandAvailable = 1;
    }
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    if(dot == 1){
        temp_length = 4
    }
    show.textContent += 2;
    temp_length++;
})
const three = document.querySelector("#three")
three.addEventListener('click',()=>{
    if(operatorBeingDisplayed == 1){
        display_nothing();
        operatorBeingDisplayed =0;
        secondOperandAvailable = 1;
    }
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    if(dot == 1){
        temp_length = 4
    }
    show.textContent += 3;
    temp_length++;
})
const four = document.querySelector("#four")
four.addEventListener('click',()=>{
    if(operatorBeingDisplayed == 1){
        display_nothing();
        operatorBeingDisplayed =0;
        secondOperandAvailable = 1;
    }
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    if(dot == 1){
        temp_length = 4
    }
    show.textContent += "4";
    temp_length++;
})
const five = document.querySelector("#five")
five.addEventListener('click',()=>{
    if(operatorBeingDisplayed == 1){
        display_nothing();
        operatorBeingDisplayed =0;
        secondOperandAvailable = 1;
    }
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    if(dot == 1){
        temp_length = 4
    }
    show.textContent += "5";
    temp_length++;
})
const six = document.querySelector("#six")
six.addEventListener('click',()=>{
    if(operatorBeingDisplayed == 1){
        display_nothing();
        operatorBeingDisplayed =0;
        secondOperandAvailable = 1;
    }
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    if(dot == 1){
        temp_length = 4
    }
    show.textContent += "6";
    temp_length++;
})
const seven = document.querySelector("#seven")
seven.addEventListener('click',()=>{
    if(operatorBeingDisplayed == 1){
        display_nothing();
        operatorBeingDisplayed =0;
        secondOperandAvailable = 1;
    }
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    if(dot == 1){
        temp_length = 4
    }
    show.textContent += "7";
    temp_length++;
})
const eight = document.querySelector("#eight")
eight.addEventListener('click',()=>{
    if(operatorBeingDisplayed == 1){
        display_nothing();
        operatorBeingDisplayed =0;
        secondOperandAvailable = 1;
    }
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    if(dot == 1){
        temp_length = 4
    }
    show.textContent += "8";
    temp_length++;
})
const nine = document.querySelector("#nine")
nine.addEventListener('click',()=>{
    if(operatorBeingDisplayed == 1){
        display_nothing();
        operatorBeingDisplayed =0;
        secondOperandAvailable = 1;
    }
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    if(dot == 1){
        temp_length = 4
    }
    show.textContent += "9";
    temp_length++;
})


// Handles usage of dot for first operand.
const aDot = document.querySelector("#dot")
aDot.addEventListener('click',()=>{
    if(dot == 0){
    show.textContent += ".";
    dot++;
    }else{
        alert("Dot allowed only once.");
    }
})

// Clear the screen on clicking "CLEAR".
const clear = document.querySelector("#clear-btn")
clear.addEventListener('click',()=>{
    display_zero();
    dot = 0;
    opr1 = 0;
    opr2 = 0;
    operatorBeingDisplayed = 0;
    temp_length = 0;
    operator = "";
})
// Handles working of "DELETE" button.
const btnDelete = document.querySelector("#delete-btn")
btnDelete.addEventListener('click',()=>{
    if(temp_length == 1){
        display_zero();
    }else if(show.textContent !== "0"){
    temp_delete = show.textContent;
    delete_string1 = temp_delete.slice(0, temp_length - 1);
    show.textContent = delete_string1;
    temp_length--;
    }
})

//
//
//
//
// The event listeners handle operator buttons.
//
//
//
//

const addition = document.querySelector("#add");
addition.addEventListener('click', ()=>{
    if(operatorBeingDisplayed == 0){
    opr1 = show.textContent;
    temp_length = 0;
    dot = 0
    show.textContent = "+";
    operator = "add";
    operatorBeingDisplayed = 1;
    }else{
        operator = "add";
        show.textContent = "+";
        operatorBeingDisplayed = 1;
    }
})
const subtraction = document.querySelector("#subtract");
subtraction.addEventListener('click', ()=>{
    if(operatorBeingDisplayed == 0){
    opr1 = show.textContent;
    temp_length = 0;
    dot = 0;
    show.textContent = "-";
    operator = "subtract";
    operatorBeingDisplayed = 1;
    }else{
        operator = "subtract";
        show.textContent = "-";
        operatorBeingDisplayed = 1;
    }
})
const multiplication = document.querySelector("#multiply");
multiplication.addEventListener('click', ()=>{
    if(operatorBeingDisplayed ==0){
    opr1 = show.textContent;
    temp_length = 0;
    dot = 0;
    show.textContent = "X";
    operator = "multiply";
    operatorBeingDisplayed = 1;
    }else{
        operator = "multiply";
        operatorBeingDisplayed = 1;
        show.textContent = "X";
    }
})
const division = document.querySelector("#divide");
division.addEventListener('click', ()=>{
    if(operatorBeingDisplayed ==0){
    opr1 = show.textContent;
    temp_length = 0;
    dot = 0;
    show.textContent = "/";
    operator = "divide";
    operatorBeingDisplayed = 1;
    }else{
        operator = "divide";
        operatorBeingDisplayed = 1;
        show.textContent = '/';
    }
})

const equal = document.querySelector("#equal")
equal.addEventListener('click',()=>{
        opr2 = show.textContent;
        if( dot == 1){
    if(operator == "add"){
        show.textContent = (Number(opr1)*10 + Number(opr2)*10)/10;
    }else if(operator == "subtract"){
        show.textContent = (opr1*10 - opr2*10)/10;
    }else if(operator == "divide"){
        if(opr2 == 0){
            alert("Can't divide by zero");

        }else{
            show.textContent = (opr1*10 / opr2*10);
        };
    }else if(operator == "multiply"){
        show.textContent = (opr1*10 * opr2*10)/100;
    }else{
        if(operator == "add"){
            show.textContent = (Number(opr1) + Number(opr2));
        }else if(operator == "subtract"){
            show.textContent = (opr1 - opr2);
        }else if(operator == "divide"){
            if(opr2 == 0){
                alert("Can't divide by zero");
    
            }else{
                show.textContent = (opr1 / opr2);
            };
        }else if(operator == "multiply"){
            show.textContent = (opr1 * opr2);
        }
}
        }
    opr1 = show.textContent;
})