/*
DOM Acess using:

i. querySlector
ii. documentGet<.....>

=> create an html page:
    i. should have 2 divs
    - div1

    1. getElementById: grabs element with specified id ie div1
        create a variable assign to the DOM elementwith id< div1>
        console.log(this variable)
        in the browser console => should be able to hover it

    2. getElementByClass     // hint: use <.>for id
    create a variable assign to the dom element with class <list item>
    console.log this element; view in your browser
    in browser console you should be able to hover over the element

    3.querySelector:    // hint: use # for id
        i. for the id 
            create a variable assign to the dom element with class <list item>
            console.log this element; view in your browser
            in browser console you should be able to hover over the element
            repeat using querySelectorAll---> this gives an array
            use a for loop to go thru' the array elements and print each element
*/

const div1=document.getElementById(`div1`);
const div2=document.querySelector(`#div1`);
console.log(div1);
console.log(div2);

const listOfItems= document.getElementsByClassName(`fruits`);
const queryListOfItems =document.querySelector(`.fruits`);
const queryListOfAllItems =document.querySelectorAll(`.fruits`);

console.log(listOfItems);
console.log(queryListOfAllItems);
console.log(queryListOfItems);

for(let i=0; i<queryListOfAllItems.length; i++){
    console.log(queryListOfAllItems[i]);
}


/*
update dom elements.
    1. innerHtml replaces the html
    2. innerText replaces inner text

    Buttons=>
        i. original content
        ii. updating content
        iii. update the inner text
*/

const otherFruits =[`kiwi`, `pineapple`, `dragon fruit`];
const originalDiv= document.querySelector(`#div1`).innerHTML;
console.log(originalDiv);


function original(){
    console.log(`original clicked`); // reset the div to its original value
    document.querySelector('#div1').innerHTML = originalDiv;  //replaces original content
}

function replace(){
  console.log(`replace clicked`);
  const newHtml=`
     <h3>List of Chores</h3>
        <ul>
            <li class="list item">wash clothes</li>
            <li class="list item">clean kitchen</li>
            <li class="list item">fetch water</li>

        </ul>
  `;
  document.querySelector('#div1').innerHTML=newHtml;
}
function updateFruits(){
  console.log(`update fruits clicked`);
}



