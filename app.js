function run() {
    document.getElementById("paragraphs").innerHTML = "Hello, get trolled ;)";
    document.getElementById("paragraphs").style.backgroundColor = "green";
    document.getElementById("paragraphs").style.color = "#1f0";
    document.getElementById("paragraphs").style.padding = "20px"
running();
}

function running() {
    var ran = Math.floor(Math.random() * 10)
    document.getElementById("random").innerHTML = ran;
    document.getElementById("random").style.backgroundColor = "lime green";
    document.getElementById("random").style.color = "#7f00e0";
    document.getElementById("random").style.padding = "20px"
    document.getElementById("random").style.textAlign = "center"
}