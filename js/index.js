
    fetch(`./text/about.txt`).then(res => res.text())
    .then((data) => document.getElementById("text").innerHTML = `<p>${data}</p>`);


