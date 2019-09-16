var texts = ["world", "lasse", "stoffer", "hp", "kath", "marcus"];
var i;
var textFile;
var allText;

for (i = 0; i < texts.length; i++) {
    readFile(texts[i]);

}

function readFile(fileName) {

    var textFile = new XMLHttpRequest();
    var allText = "";
    textFile.onreadystatechange = function () {
        if (textFile.readyState === XMLHttpRequest.DONE && textFile.status == 200) {
            allText = textFile.responseText;
            allText = allText.split("\n").join("<br>");
        }

        document.getElementById(fileName).innerHTML = "<p>" + allText + "</p>";


    }
    textFile.open("GET", "text/" + fileName + ".txt", true);
    textFile.send(null);

}
