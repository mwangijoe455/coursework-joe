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

function countDown(n) {
    while (n > 0) {
        console.log(n);
        n--;  // decrement
    }
}

countDown(25);  // run function with number 25

