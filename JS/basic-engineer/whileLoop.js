/*
loops: run a block of code over & over again ie repeatedly;
you shouldn't loop forever ie there should be an exit condition.,

while (condition){
do this..
}
*/

let n= 0;
let condition=true;
 while(condition){
    console.log(`n is`, n);
    n++;  //increment
    if (n >100){
        condition=false;
    }
 }

 /*
 create a function of your choice
 the functio  should take a parametre and the parametre should be greater than 0
 have a loop inside that counts down from this number
 use while loop should print n
 */

/*function countDown(n) {
    while (n > 0) {
        console.log(n);
        n--;  // decrement
    }
}

countDown(25);  // run function with number 25*/

/*
kindergarten teacher wants to  generate a maths table for student. this table is dynamic

create a function @function1< give it any name>.--it does not take any parametres
this function propmts a user for a number.
1. prompts user for the first number
2. prompts user for the 2nd number
check if number is a valid number greater than 1
use recurssion or while loop to ensure user enters a correct number for num1 and 2
after a number is entered; call @function2 which takes numbers as a parameters
example=> @function 2(number1, number2)

create a function @function2<give it a name>
this function takes in the following parametres 
@parameter1 number greater than 1.
@parameter2 number greater than 1.
check if @parameter1 is a number greater than 1
check if @parameter2 is a number greater than 1
example if @function2(3,5)
create a maths table for it. ie console.log
4*4=16
4*3=12
4*2=8
4*1=4

3*5=
3*4=
3*2=
3*1=

1*5=
1*4=
1*3=
1*2=
1*1=

hint: use nested while loops
*/

//nested loops: while loop example

function promptStudent(){
    let num1=null,num2=null;
    while (true) {
        num1=prompt(`enter the first number`);
        
        if(isNaN(num1)){
            continue;   // restarts loop
        }

        num2=prompt(`enter the second number`);
        
        if(isNaN(num2)){
            continue;
        }
        
        num1=parseInt(num1);  // converts string to number
        num2=parseInt(num2);
        

        if(num1 <= 0 || num2 <= 0){
            alert("Numbers must be greater than 0");
            continue;   // restart loop
        }
        
        break;         // exits loop
    }
    console.log(`got valid number`, num1, num2);
    return [num1, num2];  
}

function mathTable(num1,num2){
    if(!num1 || num1<=0 || !num2 || num2<=0){  
        console.error(`ensure numbers entered are greater than 0`);
        return;
    }
    
    let outerLoop=num1;
    while (outerLoop > 0){
        let innerLoop=num2;
        while(innerLoop>0){
            console.log(`${outerLoop} * ${innerLoop} = ${outerLoop * innerLoop}`); 
            innerLoop--; 
        }
        console.log("---");  // Separator between rows
        outerLoop--;
    }
}

const numbers = promptStudent();
if(numbers !== null){
    mathTable(numbers[0], numbers[1]);
}

