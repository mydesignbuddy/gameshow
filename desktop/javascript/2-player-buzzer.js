var player1Box, player2Box;
player1Box = document.getElementById("player1");
player2Box = document.getElementById("player2");

document.addEventListener("keydown", function (e) {
    var keyCode = e.keyCode;
    var leftKey = 37;
    var rightKey = 39;
    if (keyCode == leftKey) {
        console.log("player1");
    } else if (keyCode == rightKey) {
        console.log("player2");
    } else {
        //alert("Oh no you didn't.");
    }
}, false);

