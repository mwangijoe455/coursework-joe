/*our own callback function
doing shape stuff-----> shapes:
circle
rectangle
triangle

1. for each of the shapes; create a function be it anonymous or named to 
calculate the area of the shapes mentioned above. ensure the function takes required parametres.test the function. 
2. create a super function called shape
its going to take the following params..
 @param 1=> function correct shape required
 param2 => shape name string
 @param 3=> s1 required
 @param4 => s2 optional
 @param5=> s3 optional
  inside your function shape: console each of the parametres & their types
  for each of your functions ie for area circle, area rectangle and areatriangle 
  call the shape function and pass required parametres
  2. inside your shape function create a result variable. 
  equate it to the function call of @param1 & pass param3, param4, param 5 
  example
  result=param1(param3, param4, param5)
  4. console.log(`for shape ${@param2} area is ${result}`)
  for each shape call it like step 2 and see results
  */


// Named functions for each shape
function circleArea(r) {
    const areaC = Math.PI*r*r;
    alert(`Circle Area is: ${areaC}`);
}

function rectangleArea(l, w) {
    
    alert(`Rectangle Area is: ${l*w}`);
}

function triangleArea(b, h) {
    triangleA = .5*b*h

    alert(`Triangle Area is: ${triangleA}`);
}

// calling each function
circleArea(5);
rectangleArea(4, 6);
triangleArea(8, 5);

//2.

function shape(shapefunc, shapeName, side1, side2, side3){
    console.log(`shape function ${shapefunc} its a type of a${typeof shapefunc}`);
    console.log(`shape name ${shapeName} its a type of a ${typeof shapeName}`);
    console.log(`side 1 function ${side1} its a type of a ${typeof side1}`);
    console.log(`side 2 ${side2} its a type of a ${typeof side2}`);
    console.log(`side3 ${side3} its a type of a ${typeof side3}`);
    const result = shapefunc(side1, side2, side3);
    console.log(`for shape ${shapeName} area is ${result}`);
    return result;
}
 shape(circleArea, `circle`, 5);