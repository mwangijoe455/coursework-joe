/*the type of is just to tell you the variable type
--> number
--> string
--> bool
--> null
--> undefined
*/

let num1=589
console.log("number one ", num1,"its type is", typeof num1)
let strNum="694"
console.log("string number", strNum,"its type is", typeof strNum)
let myName='joe'
console.log(`my name is`,myName,"its type is:",typeof myName)
let isMmarried=true
console.log("is married",isMmarried, 'its type is',typeof isMmarried)
let nullVal=null
console.log('marriage state',nullVal,'its type is',typeof nullVal)
let unValue;
console.log("unvalue", unValue,"its type is",typeof unValue)


const bonus="200"
const salaryGross=500+bonus
console.log("gross salary is", salaryGross, 'its type is', typeof salaryGross)
//tax calc.

const paye=salaryGross*.16
console.log("for gross salary of", salaryGross, "PAYE is", paye)
const nhif=2500
console.log("NHIF deduction", nhif)
const sha=2500
console.log("SHA is", sha)
const totalDeductions=paye+nhif+sha
console.log("total deductions are:", totalDeductions)
const netSalary=salaryGross-totalDeductions
console.log("your net salary is:",netSalary)