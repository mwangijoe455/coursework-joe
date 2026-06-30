/*
Procedure

1. Declare a variable name in the global scope.

2. Create a function called sayMyName.
   - console.log() the name and line number.
   - Remember to call the function.

3. Declare a variable inside the function.
   - Give it a different name.
   - Print the name and line number.

4. Create an if statement inside the function.
   - Use any truthy condition.
   - Inside the block, console.log() the name and its line number.

5. Inside the if block, declare another variable.
   - Give it a new name.
   - console.log() the name and line number.

6. After the if block,
   - console.log() the function variable and line number.

7. Try declaring the same variable name
   in the same scope.
*/

// 1. Global scope variable
let name = "Joe"; // Line 30

// 2. Function
function sayMyName() {
    console.log("Line 34:", name);

    // 3. Function scope variable or local variable
    let fullName = "Joseph Mwangi";
    console.log("Line 38:", fullName);

    // 4. If statement
    if (true) {
        console.log("Line 42:", fullName);

        // 5. Block  or local scope variable
        let nickName = "Mwas";
        console.log("Line 46:", fullName);
    }

    // 6. After the if block
    console.log("Line 50:", fullName);

    // 7. Redeclaring the same variable in the same scope (Uncomment to see the error)
    // let fullName = "Another Name";
}

// Call the function
sayMyName();