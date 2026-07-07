/*
for loop(startpoint; condition; iteration;){
    do this---->

    }*/           
// convert while loop to for loop


let k=0;
while(k<20){
    console.log(`k is`, k);
    k++;
}

// for loop equivalent
for(k=0; k<20; k++){
     console.log(`k is`, k);
}


//example of nested for loops
function promptStudent(){
    let num1=null,num2=null;
    while (true) {
        num1=prompt(`enter the first number`);
        
        if(num1 === null){
            alert("Operation cancelled");
            return null;
        }
        
        if(isNaN(num1)){
            continue;   // restarts loop
        }

        num2=prompt(`enter the second number`);
        
        if(num2 === null){
            alert("Operation cancelled");
            return null;
        }
        
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
    
    for(let outerLoop = num1; outerLoop > 0; outerLoop--){
        for(let innerLoop = num2; innerLoop > 0; innerLoop--){
            console.log(`${outerLoop} * ${innerLoop} = ${outerLoop * innerLoop}`);
        }
        console.log("---");  // Separator between rows
    }
}

const numbers = promptStudent();
if(numbers !== null){
    mathTable(numbers[0], numbers[1]);
}