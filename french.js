"use strict;"


const french = {
    "Merry": "Joyeux" ,
    "Christmas":"Noel" ,
    "and": "et" ,
    "Happy": "Content",
    "New": "Nouveau",
    "Year": "An",
}

var EngPhrase = document.getElementById.innerHTML;
var userPhrase= EngPhrase.split(" ")

let frenchphrase = ""

 for (i=0; i< userPhrase.length; i++){
    frenchphrase += `${french[userPhrase[i]]}`;
 }
    
    if (frenchphrase === undefined){
        alert("I'm too busy learning Javascript to work on my French. Ask me how to say Merry Christmas and Happy New Year");
    } else {
        console.log(frenchphrase)
    }
           

 //output phrase
 phraseOutput.innerHTML = event.target.value;

 

 
module.exports = {  };