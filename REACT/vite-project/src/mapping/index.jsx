/*
THE MAP FUNCTION EXPLAINED:

The .map() method is an ARRAY method that:
1. Loops through EVERY element in an array
2. Performs an operation on each element
3. Returns a NEW array with the results

Think of it like a factory assembly line:
- Raw materials go in (original array)
- Each item gets processed (the function)
- New products come out (new array)

KEY DIFFERENCE from for loops:
- for loop: "Do something with each item" (side effects)
- .map(): "Transform each item into something NEW" (returns new array)

POP vs PUSH vs MAP:
- pop()  : Removes last item (mutates original)
- push() : Adds item to end (mutates original)  
- map()  : Creates NEW array (doesn't change original)

 BEST PRACTICE: Use .map() for rendering lists in React
BAD PRACTICE: Using for loops to render lists directly
*/

import React from 'react';

const colors = [2, 7, 23, 45, 463, 54];

// Power of the numbers (using colors array instead of undefined 'numbers')
const powersOfNums = colors.map((n) => n * n); // [4, 49, 529, 2025, 214369, 2916]
const justMap = colors.map((n) => 'cats and dogs');

function singleColor(c, i) {
  return (
    <div key={i}>
      for index <b>{i}</b> color is <b>{c}</b>
    </div>
  );
}

function singleColorComponent(props) {
  const { c, i } = props;

  return (
    <div key={i}>
      for index <b>{i}</b> color is <b>{c}</b>
    </div>
  );
}

function Mapping() {
  return (
    <div>
      <h1>Mapping colors</h1>
      
      {/* Display the powers array for demonstration */}
      <h4>Powers of numbers: {powersOfNums.join(', ')}</h4>
      
      <h4>using arrow function</h4>
      {colors.map((color, index) => {
        return (
          <div key={index}>
            for index <b>{index}</b> color is <b>{color}</b>
          </div>
        );
      })}

      <h4>using direct arrow function</h4>
      {colors.map((c, i) => (
        <div key={i}>
          for index <b>{i}</b> color is <b>{c}</b>
        </div>
      ))}

      <h4>using anonymous function</h4>
      {colors.map(function (c, i) {
        return (
          <div key={i}>
            for index <b>{i}</b> color is <b>{c}</b>
          </div>
        );
      })}

      <h4>using referencing the function</h4>
      {colors.map(singleColor)}

      <h4>using component approach</h4>
      {colors.map((c, i) => (
        <singleColorComponent key={i} c={c} i={i} />
      ))}
    </div>
  );
}

export default Mapping;
