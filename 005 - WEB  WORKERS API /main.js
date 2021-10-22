 /*
* * * Web Workers API
  */

//** What is a Web Worker? */

//** Browser Support */

//** Check Web Worker Support */

if (typeof(Worker) !== "undefined") {
  // Yes! Web worker support
  // Some code...
} else {
  // Sorry! No Web Worker support...
}

//** Create a Web Worker File */

let i = 0;

function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()", 500);
}

timedCount();

//** Reuse the Web Worker */

//** Web Workers and the DOM */