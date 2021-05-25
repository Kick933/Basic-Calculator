const show = document.querySelector("#display-area");
 
let temp = "";
let dot1 =0;
const one = document.querySelector('#one')
one.addEventListener('click',()=>{
    show.textContent += "1";
})
const two = document.querySelector("#two")
two.addEventListener('click',()=>{
    show.textContent += "2";
})
const three = document.querySelector("#three")
three.addEventListener('click',()=>{
    show.textContent += "3";
})
const four = document.querySelector("#four")
four.addEventListener('click',()=>{
    show.textContent += "4";
})
const five = document.querySelector("#five")
five.addEventListener('click',()=>{
    show.textContent += "5";
})
const six = document.querySelector("#six")
six.addEventListener('click',()=>{
    show.textContent += "6";
})
const seven = document.querySelector("#seven")
seven.addEventListener('click',()=>{
    show.textContent += "7";
})
const eight = document.querySelector("#eight")
eight.addEventListener('click',()=>{
    show.textContent += "8";
})
const nine = document.querySelector("#nine")
nine.addEventListener('click',()=>{
    show.textContent += "9";
})
const aDot = document.querySelector("#dot")
aDot.addEventListener('click',()=>{
    if(dot1 == 0){
    show.textContent += ".";
    dot1++;
    }else{
        alert("Dot allowed only once.");
    }
})
const clear = document.querySelector("#clear-btn")
clear.addEventListener('click',()=>{
    show.textContent ="0";
})
const btnDelete = document.querySelector("#delete-btn")
btnDelete.addEventListener('click',()=>{

})