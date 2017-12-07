 "use strict";


 let deutsche = {
        Merry: "Fröhlich",
        Christmas: "Weihnachten",
        and: "und",
        happy: "glücklich",
        new: "neu",
        year: "jahr" };

function translate(userPhrase) {
  let translatePhrase = "";

  for (let i = 0; i < userPhrase.length; i++) {
    translatePhrase += `${deutsche[userPhrase[i]]}`;
  }

  document.querySelector("#translationPhrase").innerHTML = translatePhrase;
}

module.exports = { translate };
