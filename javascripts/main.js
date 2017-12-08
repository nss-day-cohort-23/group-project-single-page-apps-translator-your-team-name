"use strict";

const french = require ('./french.js');
const german = require ('./german.js');
const spanish = require("./spanish.js");
const japanese = require("./japanese.js");


function chooseTrans() {
    let radios = document.getElementsByName("language");
    let selectedLang = "";

    for (let i=0;i<radios.length;i++) {
        if (radios[i].checked){
            selectedLang = radios[i].id;
        }

     }
    var EngPhrase = document.getElementById("language").value.toLowerCase();
    var userPhrase = EngPhrase.split(" ");

    if (selectedLang === "spanish") {
        spanish.translate(userPhrase);

        }  else if (selectedLang === "german"){
            german.translate(userPhrase);

            } else if (selectedLang === "french"){
                french.translate(userPhrase);

                }else if (selectedLang === "japanese"){
                    japanese.translate(userPhrase);
                }
}

let button = document.getElementById("translate");
button.addEventListener("click", chooseTrans);

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);


function clear () {
    document.getElementById("language").value = " ";
    document.getElementById ("translationPhrase").innerHTML = " ";
    document.getElementById("spanish").checked = false;
    document.getElementById("german").checked = false;
    document.getElementById("french").checked = false;
    document.getElementById("japanese").checked = false;
}