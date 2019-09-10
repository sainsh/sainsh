var txtFile = new XMLHttpRequest();
var allText = "";
txtFile.onreadystatechange = function () {
    if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
        allText = txtFile.responseText;
        allText = allText.split("\n").join("<br>");
    }

    document.getElementById('text').innerHTML = "<p>" + allText + "</p>";

}
txtFile.open("GET", 'about.txt', true);
txtFile.send(null);


