var texts = ["consentcoin","gameOfLife","onlineBattleship"];
var i;
var textFile;
var allText;

for (i = 0; i < texts.length; i++) {
    readFile(texts[i]);

}

function readFile(fileName) {

   fetch(`./text/${fileName}.txt`)
   .then(res => res.text())
   .then((data) =>
    document.getElementById(fileName).innerHTML = `<p>${data}</p>`);

       
   

}
