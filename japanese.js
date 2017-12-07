'use strict';


let japanese = {

    Merry : "メリー",
    Christmas : "クリスマス", 
    and : "そして",
    Happy : "ハッピー",
    New : "新しい",
    Year : "年"

};

let input = "Merry Christmas" 
let inputARR =input.split(" ")
console.log(inputARR)

let kanji = ""

// make input new area

for (let i=0; i<inputARR.length; i++){
   japanese += `${kanji[inputARR[i]]}`;
}

console.log(japanese)