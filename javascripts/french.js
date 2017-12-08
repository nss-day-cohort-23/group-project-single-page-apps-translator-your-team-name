"use strict";


const france = {
    "merry": "Joyeux" ,
    "christmas":"Noel" ,
    "and": "et" ,
    "happy": "Content",
    "new": "Nouveau",
    "year": "An",
};




function translate(userPhrase) {

    let translatePhrase = "";

        for (let i=0; i<userPhrase.length; i++) {
            console.log(france[userPhrase[i]]);
            if (france[userPhrase[i]] !== undefined){
                translatePhrase += `${france[userPhrase[i]]}` + " ";       
            } else {
                alert("I'm too busy learning javascript to work on my french");
            }    
        }  

        document.querySelector("#translationPhrase").innerHTML = translatePhrase;
    }







module.exports = {translate};