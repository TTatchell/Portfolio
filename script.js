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


//Code to receive the contact form
let contactInfo = {};

document.addEventListener("DOMContentLoaded", function(){
    contactInfo.firstName = (documentgetElementById('firstName'));
    contactInfo.lastName = (documentgetElementById('lastName'));
    contactInfo.company = (documentgetElementById('company'));
    contactInfo.email = (documentgetElementById('email'));
    contactInfo.message = (documentgetElementById('message'));
    })

function checkNotEmpty(string) {
    if (string == null || typeof value == 'undefined') return false;
    return (value.length > 0);
}

function checkEmail (email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(String(email).toLowerCase(0));
}

function contactInfoValidate(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }


function isValid() {
let valid = true;

valid &= contactInfoValidate(contactInfo.firstName, checkNotEmpty);
valid &= contactInfoValidate(contactInfo.lastName, checkNotEmpty);
valid &= contactInfoValidate(contactInfo.company, checkNotEmpty);
valid &= contactInfoValidate(contactInfo.email, checkEmail);
valid &= contactInfoValidate(contactInfo.question, checkNotEmpty);
return valid;
}

class User {
    constructor(firstName, lastName, company, email, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
    this.email = email;
    this.question = question;
    }
   }

function sendContact() {
    if (isValid()) {
        let usr = new User (firstName.value, lastName.value, company.value, email.value, message.value) 
    }
}