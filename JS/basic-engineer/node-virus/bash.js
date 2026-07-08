//const fs=require(`fs`);  // node.js file system

/*
fs.appendFile(@param1, @param2)
@param1 => file name :<path>
@param2 => data to write to the file
@param3 => callback function(@errorparam) if there's an error else successful
*/

/*
creating an app with two loops and one for loop
function---> give it a suitable name:
void function-- function that doesn't take any parameters
create a file and 10k lines of code:>> current date.txt
<got you 1>
<got you 2>
<got you 3>
hint: use a for loop
file system API-- works in node.js
*/

/*function testAppendFile(){
    const fileData = `hello world testing file\n`;
    const cb =(error)=> {};
    fs.appendFile(`testfile.txt`,fileData,cb);  
}
testAppendFile();*/



const fs = require('fs');  // node js file system (as global variable)

function myApp() {
    let fileData = `writing \n`;
    let fileName = `${Date.now()}.txt`;
    let cb = (error) => {};  // void function on callback
    
    let i;
    for (i = 0; i <=1000; i++) {
        fileData = fileData + `a thousand lines\n${i}\n`;  // contacenating a string
    }
    fs.writeFile(fileName, fileData, cb);
}
myApp(); 
