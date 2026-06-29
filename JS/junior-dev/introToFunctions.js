/*functions--->block of code designed to perform a specific task. 
functions allow you to write re-usable code that can be called.
syntax---->
function < name of variable> (parametres){ 
do this..
}

create a simple functions that prints out the current time..
to call a function means to execute the written code block of code 
function name of variable ():*/


//function timeAlert(){
    //const date = new Date();
    //alert(`time stamp: ${date.toLocaleString("en-KE", {timeZone:"Africa/Nairobi"})}`);
//}

//timeAlert();  // calling a function

//function to find area of a triangle

function areaOfTriangle(base, height){
    console.log(`base, height is ${base, height} its type is ${typeof base, height}`);
    console.log(`height is ${height} its type is ${typeof base}`);
    const area=.5*base*height;
    console.log(`for triangle with base ${base} and height ${height} area is ${area}`);
    
}

// scenario: call the areaof triangle function don't pass any arguments <>

areaOfTriangle();

// scenario2: call the function with a base of 20 & no width

areaOfTriangle(20);

//scenario3: call the function pass base of 20 , height of 30

areaOfTriangle(20,30);

// scenario4: create a variable base1=50 and height1=60

let base1=50, height1=60;
areaOfTriangle(base1, height1);

//scenario5: create a variable base2="joe" and height2= true

let base2='joe', height2= true;
areaOfTriangle(base2, height2);



