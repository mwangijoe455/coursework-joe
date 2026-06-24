/*if and else if statetements*/


    let age = prompt('Enter your age:')
    console.log(`age is ${age} typeof ${typeof age}`)
    alert(`You entered ${age}`)
    
    if (age > 50) {
        alert('Retirement gaining momentum')
    } else if (age > 27) {
        alert('Ready for marriage')
    } else if (age > 18) {
        alert("You're an adult")
    } else if (age > 13) {
        alert('You are a teen')
    } else if (age > 10) {
        alert('You are a pre-teen')
    } else {
        alert('You are a child')
    }


