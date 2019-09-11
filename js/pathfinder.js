//verdens beskrivelse
    var worldTxtFile = new XMLHttpRequest();
    var worldText = "";
    worldTxtFile.onreadystatechange = function () {
        if (worldTxtFile.readyState === XMLHttpRequest.DONE && worldTxtFile.status == 200) {
            worldText = worldTxtFile.responseText;
            worldText = worldText.split("\n").join("<br>");
        }

        document.getElementById('world').innerHTML = "<p>" + worldText + "</p>";

    }
    worldTxtFile.open("GET", 'text/world.txt', true);
    worldTxtFile.send(null);


//lasse
    var lasseFile = new XMLHttpRequest();
    var lasseText = "";
    lasseFile.onreadystatechange = function () {
        if (lasseFile.readyState === XMLHttpRequest.DONE && lasseFile.status == 200) {
            lasseText = lasseFile.responseText;
            lasseText = lasseText.split("\n").join("<br>");
        }

        document.getElementById('lasse').innerHTML = "<p>" + lasseText + "</p>";

    }
    lasseFile.open("GET", 'text/lasse.txt', true);
    lasseFile.send(null);

//marcus
    var txtFile = new XMLHttpRequest();
    var allText = "";
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
            allText = txtFile.responseText;
            allText = allText.split("\n").join("<br>");
        }

        document.getElementById('marcus').innerHTML = "<p>" + allText + "</p>";

    }
    txtFile.open("GET", 'text/marcus.txt', true);
    txtFile.send(null);


