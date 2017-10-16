const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

//e is event object
//original function without passing in any additional arguments
//function reveal(e) {
//    e.preventDefault(); //prevents the default behavior of event object
//    CTA.classList.toggle("hide");
//    ALERT.classList.toggle("hide");
//}

function reveal(e, current) {
    e.preventDefault(); //prevents the default behavior of event object
    
    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Oooops!" : CTA.innerHTML = "Book Now!";
    
    ALERT.classList.toggle("hide");
}

//Simple click events; last event takes precedence over previous events
//CTA.onclick = reveal;
//CTA.onclick = console.log("The button was clicked");

//original event listener without passing in any additional arguments
//CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function(e){ reveal(e, this); }, false);
CTA.addEventListener("click", function(){console.log("The button was clicked!");}, false);