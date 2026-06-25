

let grossMonthlySal = null;
while (true) {
    let gross = prompt(`enter your gross salary`);
    if (!isNaN(gross)) {
        gross = Number(gross);
        if (gross > 0) {
            grossMonthlySal = gross;
            break;
        }
    }
    alert(`invalid amount entered.ensure you enter valid amount`);
}

console.log(`got gross Salary is ${grossMonthlySal} its type is ${typeof grossMonthlySal}`);

let paye = 0;

// Tier 1: 0 - 24,000 taxed at 10%
if (grossMonthlySal <= 24000) {
    paye = grossMonthlySal * 0.10;
}

// Band 2: 24,001 - 32,333
// First 24,000 taxed at 10%
// Remaining amount taxed at 25%
else if (grossMonthlySal <= 32333) {
    paye = (24000 * 0.10) +
           ((grossMonthlySal - 24000) * 0.25);
}

// Tax Band 3: 32,334 - 500,000
// First band taxed at 10%
// Second band taxed at 25%
// Remaining amount taxed at 30%
else if (grossMonthlySal <= 500000) {
    paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((grossMonthlySal - 32333) * 0.30);
}

// Tax Band 4: 500,001 - 800,000
// Previous bands taxed accordingly
// Remaining amount taxed at 32.5%
else if (grossMonthlySal <= 800000) {
    paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) +
           ((grossMonthlySal - 500000) * 0.325);
}

// Tax Band 5: Above 800,000
// Previous bands taxed accordingly
// Remaining amount taxed at 35%
else {
    paye = (24000 * 0.10) + ((32333 - 24000) * 0.25) + ((500000 - 32333) * 0.30) +
           ((800000 - 500000) * 0.325) + ((grossMonthlySal - 800000) * 0.35);
}

// Subtract personal relief
paye = paye - 2400;
if (paye < 0) {
    paye = 0;
}

// Calculate net salary after PAYE deduction
let netSal = grossMonthlySal - paye;

// Display results
console.log(`Gross Salary: KES ${grossMonthlySal}`);
console.log(`PAYE: KES ${paye}`);
console.log(`Net Salary: KES ${netSal}`);