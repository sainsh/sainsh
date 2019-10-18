
fetch("/sainsh/navbar.html").then(res => res.text())
.then((data) => document.getElementById("nav").innerHTML = data);

