const daysElm = document.querySelector('#days');
const hoursElm = document.querySelector('#hours');
const minutesElm= document.querySelector('#minutes');
const secondsElm= document.querySelector('#seconds');
const pannelElm = document.querySelector ('.pannel');
//data di natale 
const EndDate= new Date("December 25 2022");
const EndDateInMs= EndDate.getTime();

//tabella in ms
const secondInMs= 1000;
const minuteInMs= 60 * secondInMs;
const hourInMs = 60 * minuteInMs;
const dayInMs= 24 * hourInMs;


// timer a set interval
const counterTimer = setInterval(timer, 1000);
function timer() {
   //oggi in ms
const nowInMs = new Date().getTime();
const diff = EndDateInMs - nowInMs;
//riempimento dei box
//console.log(diff / dayInMs);
if (diff >0) {

daysElm.innerHTML= Math.floor(diff / dayInMs);
//console.log( (diff % dayInMs) / hourInMs);
hoursElm.innerHTML = Math.floor( (diff % dayInMs) / hourInMs);
minutesElm.innerHTML = Math.floor( (diff % hourInMs) / minuteInMs);
secondsElm.innerHTML = Math.floor( (diff % minuteInMs ) / secondInMs );
} else {
    clearInterval(timer);
    pannelElm.innerHTML = "<h1>Buon Natale!</h1>";
}
}