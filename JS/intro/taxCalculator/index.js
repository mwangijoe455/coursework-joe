
// 1. GROSS SALARY INPUT WITH VALIDATION
let grossMonthlySal = null;  // Initialize variable to store gross salary

// Keep prompting until valid input is received
while (true) {
    let gross = prompt(`Enter your gross salary (KES):`);
    
    // Check if input is a valid number
    if (!isNaN(gross)) {
        gross = Number(gross);  // Convert string to number
        
        if (gross > 0) {
            grossMonthlySal = gross;  
            break;  
        }
    }
    alert(`Invalid amount entered. Please enter a valid amount.`);
}


let paye = 0;          // Variable to store calculated PAYE
let tier = null;       // Variable to store tax band description

// Tax Band 1: Income 0 - 24,000 taxed at 10%
if (grossMonthlySal <= 24000) {
    paye = grossMonthlySal * 0.10;  // 10% of total income
    tier = `0-24,000`;
} 

// Tax Band 2: Income 24,001 - 32,333
// First 24,000 taxed at 10%, remaining amount taxed at 25%
else if (grossMonthlySal <= 32333) {
    paye = (24000 * 0.10) +                           // Tax on first 24,000
           ((grossMonthlySal - 24000) * 0.25);        // Tax on excess above 24,000
           tier = `24,001-32,333`;
} 

// Tax Band 3: Income 32,334 - 500,000
// First band (24,000) at 10%, second band (8,333) at 25%, 
// remaining amount taxed at 30%
else if (grossMonthlySal <= 500000) {
    paye = (24000 * 0.10) +                           // Tax on first 24,000
           ((32333 - 24000) * 0.25) +                 // Tax on 24,001-32,333
           ((grossMonthlySal - 32333) * 0.30);        // Tax on excess above 32,333
    tier = `32,334-500,000`;
} 

// Tax Band 4: Income 500,001 - 800,000
// Previous bands taxed accordingly, remaining amount taxed at 32.5%
else if (grossMonthlySal <= 800000) {
    paye = (24000 * 0.10) +                           // Tax on first 24,000
           ((32333 - 24000) * 0.25) +                 // Tax on 24,001-32,333
           ((500000 - 32333) * 0.30) +                // Tax on 32,334-500,000
           ((grossMonthlySal - 500000) * 0.325);      // Tax on excess above 500,000
           tier = `500,001-800,000`;
} 

// Tax Band 5: Income above 800,000
// All previous bands taxed accordingly, remaining amount taxed at 35%
else {
    paye = (24000 * 0.10) +                           // Tax on first 24,000
           ((32333 - 24000) * 0.25) +                 // Tax on 24,001-32,333
           ((500000 - 32333) * 0.30) +                // Tax on 32,334-500,000
           ((800000 - 500000) * 0.325) +              // Tax on 500,001-800,000
           ((grossMonthlySal - 800000) * 0.35);       // Tax on excess above 800,000
            tier = `Above 800,000`;
}

paye = paye - 2400;  // Subtract relief from calculated PAYE

if (paye < 0) {
    paye = 0;
}
let shif= grossMonthlySal*(2.75/100);
let housingLevy= grossMonthlySal*(1.5/100);

// NSSF is a pension scheme - employee contributes 6% of pensionable pay
// Pensionable pay is capped at KES 108,000 per month
let nssf = 0;           // Variable to store NSSF contribution
let nssf_tier = null;   // Variable to store NSSF tier description

// NSSF Tier 1: Income up to 9,000
// Employee contributes 6% of the entire amount
if (grossMonthlySal <= 9000) {
    nssf = grossMonthlySal * 0.06;  // 6% of total income
    nssf_tier = 'NSSF Tier 1 (Below sh 9,000)';
} 

// NSSF Tier 2: Income between 9,001 and 108,000
// First 9,000 at 6%, remaining amount also at 6%
// (Total contribution = 6% of entire income up to 108,000)
else if (grossMonthlySal <= 108000) {
    let tier1_contrib = 9000 * 0.06;                    // 6% on first 9,000 = 540
    let tier2_contrib = (grossMonthlySal - 9000) * 0.06; // 6% on amount above 9,000
    nssf = tier1_contrib + tier2_contrib;               // Total employee contribution
    nssf_tier = 'NSSF Tier 2 (sh 9,001 - 108,000)';
} 

// NSSF Tier 3: Income above 108,000
// Contribution is capped at 108,000 * 6% = 6,480
else {
    nssf = 108000 * 0.06;  // Maximum employee contribution (6,480)
    nssf_tier = 'NSSF Tier 3 (Above sh 108,000)';
}

// Net salary = Gross salary - PAYE tax - deducts
let netSal = grossMonthlySal - paye - nssf-shif-housingLevy;
let totalDeducts= shif+nssf+housingLevy+paye;
// 6. DISPLAY RESULTS
alert(`Gross Salary: KES ${grossMonthlySal}
PAYE: Ksh ${paye}
NSSF: Ksh ${nssf}
Net Salary: Ksh ${netSal}
PAYE Tier: ${tier}
SHIF: ${shif}
Housing levy: Ksh ${housingLevy}
Total Deductions:ksh ${totalDeducts}`);


