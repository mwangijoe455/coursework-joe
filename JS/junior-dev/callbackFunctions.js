/* task: create a function that prints an alert for the current date & time
-does not take any parametres
-prints alert current timestamp
-test function by calling it*/

// Create function that shows alert with current Kenyan time (UTC+3)
function showCurrentDateTime() {
    const now = new Date();
    alert(`East African Time: ${now.toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}`);   
}
setInterval(showCurrentDateTime, 3000);  //callback function after 3 seconds

showCurrentDateTime();


// using an anonymous function
const showCurrentDateTime = function() {
    const now = new Date();
    alert(`East African Time: ${now.toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}`);
};

setInterval(showCurrentDateTime, 3000);  //callback function after 3 seconds

showCurrentDateTime();

//using arrow function
const showCurrentDateTime = () => {
    const now = new Date();
    alert(`East African Time: ${now.toLocaleString('en-KE', {timeZone: 'Africa/Nairobi' })}`);
};

setInterval(showCurrentDateTime, 3000); // Callback function after 3 seconds

// Call the function immediately when the page loads
showCurrentDateTime();