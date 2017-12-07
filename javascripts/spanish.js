'use strict';


const espanol = {
   "Merry":"Feliz",
   "Christmas": "Navidad",
   "and": "y",
   "happy": "contento",
   "new": "nuevo",
   "year": "año"
};

function translate(userPhrase) {
    
        let translatePhrase = "";
    
            for (let i=0; i<userPhrase.length; i++) {
                translatePhrase += `${spanish[userPhrase[i]]}`;
            }
            
            document.querySelector("#translationPhrase").innerHTML = translatePhrase;
        }


module.export = {translate};