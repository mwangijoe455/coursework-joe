/*functions--->block of code designed to perform a specific task. 
functions allow you to write re-usable code that can be called.
syntax---->
function < name of variable> (parametres){ 
do this..
}

create a simple functions that prints out the current time..
to call a function means to execute the written code block of code 
function name of variable ():*/


function timeAlert(){
    const date = new Date();
    alert(`time stamp: ${date.toLocaleString("en-KE", {timeZone:"Africa/Nairobi"})}`);
}

timeAlert();  // calling a function


