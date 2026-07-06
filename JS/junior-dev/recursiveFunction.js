/*
a recursive function is a function that calls itself.
--> since this creates an endless loop you 
need to find a way to terminate. ie using a 
return statement & if condition
*/

function salaryGrossPromptProcess(){
  let gross = prompt(`enter your gross salary`);
  if (isNaN(gross)===false){
    console.log(`you entered this amount ${gross} exiting`);
    return; // exit a function
  }
  alert(`entered invalid gross salary. enter a number. Try again`);
salaryGrossPromptProcess();
}
  salaryGrossPromptProcess();


  //remove the alert=>
 // initial prompt should be: enter your gross salary
 // any prompt after that should be: invalid gross salary. enter a number. Try again
  

  function salaryGrossPromptProcess(attempt=0){
    let gross=null;
    if (attempt===0){
        gross=prompt(`enter your gross salary`);
    }else{
        gross =prompt(`invalid gross salary entered. enter a number for gross salary. try again`);
    }
     if(isNaN(gross)===false){
    console.log(`you entered this amount ${gross} exiting`);
    return;
  }
    salaryGrossPromptProcess(attempt+1);
  }
  salaryGrossPromptProcess();
  
/*
  Create a function to calculate the factorial of a number.
  The function takes one parameter:
  - @param1: A number
  Returns the factorial of the number.
  Example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

  Check that the number entered is greater than or equal to 1.
  Hint: Use a recursive function.
*/



// Function to calculate factorial
function factorial(num) {
    // Check if number is greater than or equal to 1
    if (num < 1) {
        alert("Number must be greater than or equal to 1");
        return null;
    }
    
    // Base case: factorial of 1 is 1
    if (num === 1) {
        return 1;
    }
    
    // Recursive case: n! = n * (n-1)!
    return num * factorial(num - 1);
}

// Get user input using prompt
let userInput = prompt("Enter a number to calculate its factorial:");

// Check if user clicked Cancel
if (userInput === null) {
    alert("You cancelled the operation");
} else {
    // Convert to number
    let number = Number(userInput);
    
    // Check if it's a valid number
    if (isNaN(number)) {
        alert("Please enter a valid number");
    } else {
        let result = factorial(number);
        if (result !== null) {
            alert(`The factorial of the number is: ${number} is ${result}`);
        }
    }
}