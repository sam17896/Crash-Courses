 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCNDtsT-VAnItXnpUKQlPxg-e2KvzhA8EU",
    authDomain: "contact-app-e9479.firebaseapp.com",
    databaseURL: "https://contact-app-e9479.firebaseio.com",
    projectId: "contact-app-e9479",
    storageBucket: "",
    messagingSenderId: "292102094832"
  };
  firebase.initializeApp(config);


var messageRef = firebase.database().ref('messages');

document.getElementById('contact-form').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    var name = getInput('name').value;
    var company = getInput('company').value;
    var email = getInput('email').value;
    var phone = getInput('phone').value;
    var message = getInput('message').value;


    saveMessage(name,company,email,phone,message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';        
    },3000);

    getInput('contact-form').reset();
}

function saveMessage(name,company,email,phone,message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name : name,
        company : company,
        email : email,
        phone : phone,
        message : message
    });
}

function getInput(id){
    return document.getElementById(id);
}