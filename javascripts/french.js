"use strict";


const france = {
    "Merry": "Joyeux" ,
    "Christmas":"Noel" ,
    "and": "et" ,
    "happy": "Content",
    "New": "Nouveau",
    "Year": "An",
};




function translate(userPhrase) {

    let translatePhrase = "";

        for (let i=0; i<userPhrase.length; i++) {
            translatePhrase += `${france[userPhrase[i]]}` + " ";
        }

        document.querySelector("#translationPhrase").innerHTML = translatePhrase;
    }







module.exports = {translate};