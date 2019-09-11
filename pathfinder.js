
    var worldTxtFile = new XMLHttpRequest();
    var worldText = "";
    worldTxtFile.onreadystatechange = function () {
        if (worldTxtFile.readyState === XMLHttpRequest.DONE && worldTxtFile.status == 200) {
            worldText = worldTxtFile.responseText;
            worldText = worldText.split("\n").join("<br>");
        }

        document.getElementById('world').innerHTML = "<p>" + worldText + "</p>";

    }
    worldTxtFile.open("GET", 'world.txt', true);
    worldTxtFile.send(null);



    var txtFile = new XMLHttpRequest();
    var allText = "";
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
            allText = txtFile.responseText;
            allText = allText.split("\n").join("<br>");
        }

        document.getElementById('lasse').innerHTML = "<p>" + allText + "</p>";

    }
    txtFile.open("GET", 'lasse.txt', true);
    txtFile.send(null);


