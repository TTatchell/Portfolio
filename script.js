//Creating elements block
//const h2 = document.createElement('h2');
//h2.textContent = "This content added by JavaScript";
//document.querySelector('body').appendChild(h2);

//THINGS I'D LIKE TO HAVE:
// "isMobile" "resize of rwindow"  

//THINGS I NEED
//"sticky nav for desktop"
//Link highlighting for nav menu because I'm using div buttons through JS
//Event handlers for the buttons

function highlightNavButton(button) {
    document.getElementById(button).style.backgroundColor = "whitesmoke";
    document.getElementById(button).style.color = "#21252b";
}

function mouseoutNavButton(button) {
    document.getElementById(button).style.backgroundColor = "#21252b";
    document.getElementById(button).style.color = "whitesmoke";
}