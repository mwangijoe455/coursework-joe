/*
purpose of console.log is to debug by printing out info.
console.log ensures that you write consoles in such away that you would figure out the issue
*/

//simple exercise


const salaryGross=50000
console.log("gross salary is", salaryGross)
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