//Constants containing our document selectors
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//Creating necessary date and time objects
var date = new Date();
console.log(date);
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hour + " Minute: " + min + " Second: " + sec);

//Contains the degrees we want the arms to turn
let hourPosition = (hour * 360/12) + (min *(360/60)/12); //additional math to slowly move arm toward next hour
let minPosition = (min * 360/60) + (sec * (360/60)/60); //additional math to slowly move arm toward next minute
let secPosition = sec * 360/60; /*multiply current sec by 360 and divide result by 60 to get the current degree position for the second hand*/

function runClock() {
    
    //Updating position based on actual time plus degree incremented for each hand
    //solves weird return to 0 hand issue for arms going around clock
    hourPosition = hourPosition + (3/360);
    minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;
    
    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

/*sets interval for calling runClock function at 
1 second to update current time*/
var interval = setInterval(runClock, 1000);