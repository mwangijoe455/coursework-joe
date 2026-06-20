/*ccomparison operators evaluate only true/false statementas

1. Equality ==
2. Strict Equality === --> recommended
3. Inequality !=
4. Strict
Strict Inequality !==  --> recommended
*/


let num1='33'
let num2=33
let strictEqual=num1===num2  //bool
console.log(`num1=${num1}===num2=${num2} Ans ${strictEqual} its type is ${typeof strictEqual}`)
let nonStrictEquality=num1==num2
console.log(`num1=${num1}==num2=${num2} Ans ${nonStrictEquality} its type is ${typeof nonStrictEquality}`)

let val1= "30"
let val2= 30
//different types aren't equal


let strictInequality=val1!==val2
console.log(`val1${val1}===val2=${val2} Ans ${strictInequality} its type is ${typeof strictInequality}`)

let ineQuality=val1!=val2
console.log(`val1=${val1}===val2=${val2} Ans ${ineQuality} its type is ${typeof ineQuality}`)