/* 1.named function
   2.anonymous function:---> without a name- 
   function assigned to a variable*/

   function areaCircle(r){       // named function
    return 3.142*r*r            //area of function
   }
   let age =23;
   let samsAge = age;
   let ac =areaCircle;
   console.log(ac); //type of ac is a function
   ac(10); //function

   /*
1. create a function of your choice. use named function 
2. assign that function a variable 
3. directly create equate your variable to the function definition
4. Remove the original function. 
5. try calling the variable and try calling the original function. <Make an observation> 
6. Remove the name of the function, since it is useless
7. Anonymous function <function without a name>
*/


// 1. create a function of your choice. use named function
function calculatePower(I, V) {
    return I * V;  // power = joules per second
}

// 2. assign that function a variable
const watts = calculatePower;

// 3. anonymous function
let calculatePower = function(I, V) {
    return I * V;  // power = joules per second
};

// 4. Remove the original function.
calculatePower = null;

// 5. try calling the variable and try calling the original function. <Make an observation>
console.log(watts(2, 3));      // 6
console.log(calculatePower);   // null

// <Observation: The variable still holds the reference to the function, 
// but the original function name no longer works because we set it to null.>

// 6. Remove the name of the function, since it is useless
const watts = function(I, V) {
    return I * V;  // power = joules per second
};

// 7. Anonymous function <function without a name>
(function(I, V) {
    console.log(I * V);  // power = joules per second
})(4, 5);  // 20