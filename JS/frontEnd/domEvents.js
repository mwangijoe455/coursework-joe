// events: if sth happens iwant to be notified.
// before attaching an event you must be able to access the element
// querySelector, getElementById
// event listener 
// 

import { eventLoopUtilization } from "perf_hooks";

function clickAlert(e){
    alert(`button was clicked`);
}

document.querySelector(`#btn-event checker`)
.addEventListener(`click`, clickAlert);

function mouseOverAlert(cats){
    console.log(cats);
    console.log(`mouse over`, Date.now());
}

/*
create a button:
1. attach a click event which shows an alert
2. attach a mouseover which shows on the console the current date
    for each of the events, print the event ie console.log events
    @param1 => event (click, mouse over etc) as string
    @param2 => callback(e )=> is a dom element

    have x and y coordinates being displayed on the screen when someone moves
*/

/*
we can attach an event to window<active tab>
for on mouseMove and print out the co-ordinates of the mouse
*/

window.addEventListener(`mousemove`, (e)=>{
    //console.log(e);
    //console.log(`X direction`, e.clientX);
    //console.log(`Y direction`, e.clientY);
    document.getElementById(`x-b`).innerText =e.clientX;
    document.getElementById(`y-b`).innerText =e.clientY;
});
