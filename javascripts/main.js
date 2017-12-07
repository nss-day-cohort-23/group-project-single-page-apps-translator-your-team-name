"use strict";

const french = require ('./french.js');
console.log(french);

function chooseTrans() {
    let radios = document.getElementsByName("language");
    let selectedLang = "";
    
    for (let i=0;i<radios.length;i++) {
        if (radios[i].checked){
            selectedLang = radios[i].id  
        }
    var EngPhrase = document.getElementById("language").value;
    var userPhrase= EngPhrase.split(" ")};

    if (selectedLang = "spanish") {
        spanish.translate(userPhrase);

        }  else if (selectedlang = "german"){
            german.translate(userPhrase);

            } else if (selectedlang = "french"){
                french.translate(userPhrase); 

                }else if (selectedlang = "japanese"){
                    japanese.translate(userPhrase);

}

let button = document.getElementById("translate");
button.addEventListener("click", chooseTrans);