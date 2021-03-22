//Highlights the navigation buttons when the mouse hovers over 
//and returns them to normal afterwards
function highlightNavButton(button) {
    document.getElementById(button).style.backgroundColor = "whitesmoke";
    document.getElementById(button).style.color = "#21252b";
}

function mouseoutNavButton(button) {
    document.getElementById(button).style.backgroundColor = "#21252b";
    document.getElementById(button).style.color = "whitesmoke";
}


//Code to receive the contact form and export into text file
let contactInfo = {};


function sendContact() {
    contactInfo.firstName = document.getElementById('firstName').value;
    contactInfo.lastName = document.getElementById('lastName').value;
    contactInfo.company = document.getElementById('company').value;
    contactInfo.email = document.getElementById('email').value;
    contactInfo.message = document.getElementById('message').value;

    console.log(contactInfo)
    
    alert(`Hi ${contactInfo.firstName}, thanks for submitting!`);  

    //export contactInfo here
    //exportData(contactInfo);
    
    //Reset the input field
    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('company').value = ''
    document.getElementById('email').value = ''
    document.getElementById('message').value = ''

 
    
}