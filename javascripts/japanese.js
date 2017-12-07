"use strict";


const japanese = {

    "Merry" : "メリー",
    "Christmas" : "クリスマス",
    "and" : "そして",
    "happy" : "ハッピー",
    "New" : "新しい",
    "Year" : "年",

};


function translate(userPhrase) {

        let translatePhrase = "";

            for (let i=0; i<userPhrase.length; i++) {
                translatePhrase += `${japanese[userPhrase[i]]}` + " ";
            }

            document.querySelector("#translationPhrase").innerHTML = translatePhrase;
        }


module.exports = {translate};
