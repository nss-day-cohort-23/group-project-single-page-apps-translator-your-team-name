"use strict";


const japanese = {

    "merry" : "メリー",
    "christmas" : "クリスマス",
    "and" : "そして",
    "happy" : "ハッピー",
    "new" : "新しい",
    "year" : "年",

};

// let translatePhrase = "";
function translate(userPhrase) {
    
        let translatePhrase = "";
    
            for (let i=0; i<userPhrase.length; i++) {
                console.log(japanese[userPhrase[i]]);
                if (japanese[userPhrase[i]] !== undefined){
                    translatePhrase += `${japanese[userPhrase[i]]}` + " ";       
                } else {
                    alert("I'm too busy learning javascript to work on my Japanese");
                }    
            }  
    
            document.querySelector("#translationPhrase").innerHTML = translatePhrase;
        }
    

module.exports = {translate};
