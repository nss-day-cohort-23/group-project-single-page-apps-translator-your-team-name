'use strict';


const spanish = {
   "merry":"Feliz",
   "christmas": "Navidad",
   "and": "y",
   "happy": "contento",
   "new": "nuevo",
   "year": "año"
};

function translate(userPhrase) {
    
        let translatePhrase = "";
    
            for (let i=0; i<userPhrase.length; i++) {
                console.log(spanish[userPhrase[i]]);
                if (spanish[userPhrase[i]] !== undefined){
                    translatePhrase += `${spanish[userPhrase[i]]}` + " ";       
                } else {
                    alert("I'm too busy learning javascript to work on my Spanish");
                }    
            }  
    
            document.querySelector("#translationPhrase").innerHTML = translatePhrase;
        }


module.exports = {translate};