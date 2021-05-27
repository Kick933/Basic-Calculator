const show = document.querySelector("#display-area");

let temp_delete = "";
let delete_string1 = "";
let delete_string2 = "";
let temp_dot = 0;
let dot1 = temp_dot;
let dot2 =0;
let opr1_length=0;
let opr2_length=0;
let temp_length = 0;

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
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    show.textContent += "1";
    temp_length++;
})
const two = document.querySelector("#two")
two.addEventListener('click',()=>{
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    show.textContent += "2";
    temp_length++;
})
const three = document.querySelector("#three")
three.addEventListener('click',()=>{
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    show.textContent += "3";
    temp_length++;
})
const four = document.querySelector("#four")
four.addEventListener('click',()=>{
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    show.textContent += "4";
    temp_length++;
})
const five = document.querySelector("#five")
five.addEventListener('click',()=>{
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    show.textContent += "5";
    temp_length++;
})
const six = document.querySelector("#six")
six.addEventListener('click',()=>{
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    show.textContent += "6";
    temp_length++;
})
const seven = document.querySelector("#seven")
seven.addEventListener('click',()=>{
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    show.textContent += "7";
    temp_length++;
})
const eight = document.querySelector("#eight")
eight.addEventListener('click',()=>{
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    show.textContent += "8";
    temp_length++;
})
const nine = document.querySelector("#nine")
nine.addEventListener('click',()=>{
    if(temp_length == 5){
        alert("Maximum limit reached");
        return;
    }
    if(temp_length == 0){
        display_nothing();
    }
    show.textContent += "9";
    temp_length++;
})


// Handles usage of dot for first operand.
const aDot = document.querySelector("#dot")
aDot.addEventListener('click',()=>{
    if(temp_dot == 0){
    show.textContent += ".";
    dot1++;
    }else{
        alert("Dot allowed only once.");
    }
})

// Clear the screen on clicking "CLEAR".
const clear = document.querySelector("#clear-btn")
clear.addEventListener('click',()=>{
    display_zero();
    temp_dot = 0;
    dot1 = temp_dot;
    dot2 =0;
    opr1_length=0;
    opr2_length=0;
    temp_length = 0;
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