/*
objects are complex data types that houses other datatypes.

in real life you can't express data using a single variable.
-> {
    key:value,
    key:value,
    key:value
}
key=> < number or a string <unique>
value => any other datatype <boolean, string, null, object> be a function.
if value is a function < method >


object oriented programming
functional programming
why objects are useful? 
1. if you want to represent complex datatypes ->
*/

 //example:
/*
 const studentName=`Joe`;
 const studentAge= 26;
 const studentPhone =`+254 714 648 540`;

 //parent

 const parentName =`Margaret`;
 const parentEmail= `maggy@gmail.com`;

 // you can have one variable to rep the whole thing.

 const student = {
    name: `joe mwangi`,
    age: 26,
    `favorite quote` : `Backwards never, Forward Ever`,
    parent: {
        name: `Elizabeth`,
        phone: `25445689876`,    
    },
    pet:{},
    34: `favorite number`,
    sayMyName: function() {
     console.log(`joe mwangi`) ;  
    },
    announce: function(){
        alert(`joe mwangi gracing you with his presence`)
    },
 };*/

 /* create an object called car. should have these properties:
 name, model, topspeed, engine info., 
 how many cylinder the car have, manufacturer of engine, company,
 number as property < key>: any number
 alert-info: function that when called prints info.of the car as an alert*/


// exercise on object
const myFavoriteCar = {
    name: "Corolla Hatchback",
    model: "Toyota",
    topspeed: "188 km/h",
    engineInfo: {
        cylinders: 4,
        horse_power: "169 hp",
        transmission: "CVT",
        engine_capacity: "1.2 L",
        engine_manufacturer: "Toyota Motor Corp",
        engine_name: "Toyota 8NR-FTS"
    },
    company: "Toyota Motor Corporation",
    numberOfCylinders: 4,
    
    alertInfo: function() {
        alert(`Car Name: ${myFavoriteCar.name}
Model: ${myFavoriteCar.model}
Top Speed: ${myFavoriteCar.topspeed}
Engine: ${myFavoriteCar.engineInfo.engine_name}
Cylinders: ${myFavoriteCar.engineInfo.cylinders}
Horse Power: ${myFavoriteCar.engineInfo.horse_power}
Transmission: ${myFavoriteCar.engineInfo.transmission}
Engine Capacity: ${myFavoriteCar.engineInfo.engine_capacity}
Engine Manufacturer: ${myFavoriteCar.engineInfo.engine_manufacturer}
Company: ${myFavoriteCar.company}
Number of Cylinders: ${myFavoriteCar.numberOfCylinders}`);
    },
};

myFavoriteCar.alertInfo();

console.log(`my  car datatype ${typeof myFavoriteCar}`);
console.log(myFavoriteCar);
console.log(`my  car datatype ${typeof myFavoriteCar}`);
console.log("--Engine Info Table--");
console.table(myFavoriteCar.engineInfo);

/*
2 ways of accessing object properties:
i. dot notation--doesn't work for everything
    does not work for properties which are numbers,
    string with spaces starting with a number or special symbols
    can only access properties that follow variable naming

ii. bracket notation--> works for everything
accesses properties using variables

for each property access it using 
both notation and bracket notation
*/ 



//dot notation
console.log("Name:", myFavoriteCar.name);
console.log("Model:", myFavoriteCar.model);
console.log("Top Speed:", myFavoriteCar.topspeed);
console.log("Company:", myFavoriteCar.company);
console.log("Number of Cylinders:", myFavoriteCar.numberOfCylinders);
console.log("Engine Name:", myFavoriteCar.engineInfo.engine_name);
console.log("Cylinders:", myFavoriteCar.engineInfo.cylinders);
console.log("Horse Power:", myFavoriteCar.engineInfo.horse_power);
console.log("Transmission:", myFavoriteCar.engineInfo.transmission);
console.log("Engine Capacity:", myFavoriteCar.engineInfo.engine_capacity);
console.log("Engine Manufacturer:", myFavoriteCar.engineInfo.engine_manufacturer);

// bracket notation
console.log("Name:", myFavoriteCar["name"]);
console.log("Model:", myFavoriteCar["model"]);
console.log("Top Speed:", myFavoriteCar["topspeed"]);
console.log("Company:", myFavoriteCar["company"]);
console.log("Number of Cylinders:", myFavoriteCar["numberOfCylinders"]);
console.log("Engine Name:", myFavoriteCar["engineInfo"]["engine_name"]);
console.log("Cylinders:", myFavoriteCar["engineInfo"]["cylinders"]);
console.log("Horse Power:", myFavoriteCar["engineInfo"]["horse_power"]);
console.log("Transmission:", myFavoriteCar["engineInfo"]["transmission"]);
console.log("Engine Capacity:", myFavoriteCar["engineInfo"]["engine_capacity"]);
console.log("Engine Manufacturer:", myFavoriteCar["engineInfo"]["engine_manufacturer"]);

