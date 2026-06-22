/*comparison operators evaluate only true/false statements

1. Equality ==
2. Strict Equality === --> recommended
3. Inequality !=
4. Strict
Strict Inequality !==  --> recommended
*/


/*Logical operators*

Logical AND(&&)

Logical OR(||

Logical NOT(!)
*/


let val1= true
let val2=true
let result1=val1 && val2//bool
console.log(`val1=&{val1} val2=${val2} val1 && val2=${val1 && val2}`)
let mercyAge=15
let mercyBalance=50000

// if mercy's age is greater than 18 & has more than 20k in her account

let isGreaterThan18=mercyAge
console.log(`is mercy's age greater than 18 ${isGreaterThan18}`)
let hasMoreThan20k=mercyBalance > 20000
console.log(`mercy has more than 20k ${hasMoreThan20k}`)
console.log("mercy's age is greater than 18 & has more than 20k in her account ${isGreaterThan18 && hasMoreThan20k}")
let simplified=mercyAge>18&&mercyBalance>20000
console.log(`simlified${simplified}`)
console.log(`further simplification is ${mercyAge > 18 && mercyBalance > 20000}`)