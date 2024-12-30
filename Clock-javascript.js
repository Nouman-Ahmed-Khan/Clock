// Digital Clock

let hourHand = document.querySelector('.hour');
let minHand = document.querySelector('.minute');
let secHand = document.querySelector('.second');

// function

let ticking = function(){
    let currentDate = new Date();

    let gethour = currentDate.getHours();
    let getmin = currentDate.getMinutes();
    let getsec = currentDate.getSeconds();  
    
    //To display in HTML we will use textContent
    hourHand.textContent = gethour;
    minHand.textContent = getmin;
    secHand.textContent = getsec;
}

// To run the function again and again we will use (setInterval) 
// takay utne interval k badh function again again run hota rahay

setInterval(ticking, 1000);

