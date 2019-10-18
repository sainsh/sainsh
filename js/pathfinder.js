var texts = ["world", "lasse", "stoffer", "marcus"];
var textRemains =["hp", "kath"];
var i;
var textFile;
var allText;

for (i = 0; i < texts.length; i++) {
    readFileFetch(texts[i]);

}

function readFileFetch(fileName){
    fetch(`/sainsh/text/${fileName}.txt`).then(res => res.text())
    .then((data) => document.getElementById(fileName).innerHTML = `<p>${data}</p>`);
}