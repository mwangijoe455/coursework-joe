/*
conditions--> control the flow of code by making decisions

conditional operators: if,else if, else

 scenario 1. declare a variable of your choice: assign truthy value
 create an if statement & put the variable inside the if statement condition inside the 
 if console.log('scenario 1 it run')
 
 scenario 2: declare a variable of your choice, assign a falsy value, create an if statement and 
 put the variable inside the if statement inside the if console.log('it run')

 scenario 3: create an if statement inside the if statement condition part. have true inside 
 the block ({}) console.log('it run')

 scenario 4: create an if statement inside the if statement condition part. have false.
 inside the block({}) console.log(scenario 4 it run)
 
 scenario 5: create an if statement inside the if statement condition part. have 10>20
 inside the block({}) console.log(scenario 5 it run)
 
  scenario 6: create an if statement inside the if statement condition part. have 20>10
  inside the block({}) console.log(scenario 6 it run) 

  */




// Scenario 1: Truthy value
const myChoice = 'my favorite galaxy'
if(myChoice){
    console.log('scenario 1 it run')
}

// Scenario 2: Falsy value
const myChoice1 = ''
if(myChoice1){
    console.log('it run')  // Won't execute
}

// Scenario 3: True in condition
if(true){
    console.log('scenario 3 it run')
}

// Scenario 4: False in condition
if(false){
    console.log('scenario 4 it run')  // Won't execute
}

// Scenario 5: 10 > 20 (false)
if(10 > 20){
    console.log('scenario 5 it run')  // Won't execute
}

// Scenario 6: 20 > 10 (true)
if(20 > 10){
    console.log('scenario 6 it run')
}
