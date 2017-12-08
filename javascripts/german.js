 "use strict";


 let deutsche = {
        merry: "Fröhlich",
        christmas: "Weihnachten",
        and: "und",
        happy: "glücklich",
        new: "neu",
        year: "jahr" };

      function translate(userPhrase) {
          let translatePhrase = "";
           for (let i=0; i<userPhrase.length; i++) {
            console.log(deutsche[userPhrase[i]]);
            if (deutsche[userPhrase[i]] !== undefined){
                translatePhrase += `${deutsche[userPhrase[i]]}` + " ";       
            } else {
               alert("I'm too busy learning javascript to work on my German");
                      }    
                  }  
          
                  document.querySelector("#translationPhrase").innerHTML = translatePhrase;
              }

module.exports = { translate };
