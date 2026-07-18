/*
how to work with forms

"on submit" => default; you have to prevent default behaviour
*/

import { console } from "inspector";

document.getElementById(`form1`).addEventListener(`submit`,()=>{});

function submitForm(e){
    e.preventDefault();  // stops the form from making auto submission
    // submit

    const inputList =document.querySelector('#form1').querySelectorAll('input');

    const input1=inputList[0];
    const input2=inputList[1];
    console.log('input 1',input1.value);
    console.log('input 2',input1.value);
    console.log(`f1 input1`,document.getElementById(`form1input1`).value);
    console.log(`f1 input2`,document.getElementById(`form1input2`).value);
}


document.getElementById(`form1`).addEventListener(`submit`,submitForm);
document.getElementById(`form1input1`).addEventListener(`input`,(e)=>{
    console.log(e.target.value)
});

function submitForm(e){
    console.log(`input 1`, input.value);
    console.log(`input 2`, input.value);
    console.log(`fi input1`, document.getElementById(`forminput1`).value);
    console.log(`fi input2`, document.getElementById(`forminput2`).value);
    input.value =`cats & dogs`  // update from this

}

/*
mini exer:
1.create an html form: atleast 2 inputs & a submission button
2. attach the submit event listener
3. prevent form default behaviour
4. print out the values of form inputs 
*/

window.addEventListener(`beforeunload`,(e)=>{
    console.log(`Page is clode`);
    e.preventDefault();
    e.returnValue='';
});

document.getElementById(`div2`).addEventListener(`click`,()=>{
    console.log(`DIV 2 clicked`);
});

document.getElementById(`btn2`).addEventListener(`click`,()=>{
    console.log(`BTN clicked`);
})