 /*
arrays are just objects +. specialized objects

key can be a number, bool, string, undefined..number etc
value: any data type
an array and normal object; the keys are sequential ie 
enumeration starts with zero upto a value n

when accessing array elements, use bracket notation only because the keys are numbers
since the keys are numbers and sequential, they're not provided
 */

/* exercise
have all your car values inside an array.
access using the array all items; don't use loop
Store all car values inside arrays.
Access all items without using a loop
Store the object inside an array.
use bracket notation
add final element which is an array of favorite numbers
*/


let array1 = [
    // Object 1 (Index 0): Car specifications and engine details
    {
        name: "Corolla Hatchback",
        model: "Toyota",
        topspeed: "188 km/h",
        engineInfo: {  // Nested object for engine details
            cylinders: 4,
            horse_power: "169 hp",
            transmission: "CVT",
            engine_capacity: "1.2 L",
            engine_manufacturer: "Toyota Motor Corp",
            engine_name: "Toyota 8NR-FTS"
        },

        favoriteNumbers: [7, 14, 21, 28, 35]  // Nested array
    },

    // Object 2 (Index 1): Company information
    {
        company: "Toyota Motor Corporation",
        country: "Japan",
        founded: 1937
    },

    // Object 3 (Index 2): Owner information
    {
        owner: "Joe Mwangi",
        registration: "KDA 123A",
        color: "Black"
    }
];

// Display
alert(
    // Access first object (index 0): car details
`Car Name: ${array1[0]["name"]}
Model: ${array1[0]["model"]}
Top Speed: ${array1[0]["topspeed"]}

Engine Name: ${array1[0]["engineInfo"]["engine_name"]}  
Cylinders: ${array1[0]["engineInfo"]["cylinders"]}
Horse Power: ${array1[0]["engineInfo"]["horse_power"]}

Company: ${array1[1]["company"]}  
Country: ${array1[1]["country"]}

Owner: ${array1[2]["owner"]}  
Registration: ${array1[2]["registration"]}
Color: ${array1[2]["color"]}
${array1[0]["favoriteNumbers"][2]}`);  


