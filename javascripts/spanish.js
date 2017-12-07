'use strict';


const spanish = {
   "Merry":"Feliz",
   "Christmas": "Navidad",
   "and": "y",
   "happy": "contento",
   "New": "nuevo",
   "Year": "año"
};

function translate(userPhrase) {

        let translatePhrase = "";

            for (let i=0; i<userPhrase.length; i++) {
                translatePhrase += `${spanish[userPhrase[i]]}` + " ";
            }

            document.querySelector("#translationPhrase").innerHTML = translatePhrase;
        }


module.exports = {translate};