


/*
node js < fs >
for your data in the .json file
for each applicant data => 
create a msg: to inform him/her that he/she didn't 
get a job but be on the lookout when new opportunities arise
*/


 // step 1: ensure your js file can acces the data.

 
// console.log(data);  // sees data

// step 2: use a for or while loop to go thru' each data point

// step 3: create a message example based on gender.,'dear sir/madam, 
// we regret to inform you that you won't be a good fit for the position applied., 
// however we would encourage you to try next opening'
// console.log(the message)


/* step 4: create an empty array and the user dataincluding the messages
  {
    id: 10,
    first_name: 'Casi',
    last_name: 'Bastie',
    email: 'cbastie9@elpais.com',
    gender: 'Female',
    phone: '322-912-0642'
  } */

// step 5: write this data to a file called output.json
// hint: do JSON stringify ie js object to json 
// save this data to your file ie output.json


// import data from json file
const { error } = require("console");
const data = require(`./data.json`);
const fs=require(`fs`);

const x ={
    id: 10,
    first_name: 'Casi',
    last_name: 'Bastie',
    email: 'cbastie9@elpais.com',
    gender: 'Female',
    phone: '322-912-0642'  
};  //JS object

let y = JSON.stringify(x);  // javascript object notation
console.log(y);
console.log(typeof y);


const output =[];
    let i;
    for(i=0; i<data.length;  i++){
      const doc =data[i];

      const {first_name,last_name, email, gender, phone}=doc;
      console.log(`documet is`,doc);
         let title='';
    if(gender === 'Male'){
        title='Sir';
        }else{
            title='Madam';
        }
    
    const message=`Dear ${title} ${doc.first_name} ${doc.last_name} we regret to inform you that
    that you will not proceed further at the interview phases`;
    output.push({first_name,last_name, email, gender, phone, message});
    }
      console.log(output);
      const outputText=JSON.stringify(output);  //text format
      fs.writeFile(`output.json`, outputText, (error)=>{});
    

      