//Global Variables
var randomNo = "";
var win = 0;
var lose = 0;
var result = 0;



$(document).ready(function() {

    var startGame = function () {
        $(".crystals").empty(); 
        randomNo = Math.floor(Math.random() *101) + 20  
        $("#targetNo").html("Target: " + randomNo);

  
        for(var i = 0; i <4; i++) {
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(random)
        var crystal = $("<div>");
            crystal.attr({
                "class": "crystal",
                "crystal-value": random
            });
        $(".crystals").append(crystal);
        }
    }

startGame ();

$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("crystal-value"));
        result += num;
        $("#result").html("Total: " + result);
    
    if (result > randomNo) { 
        lose++;
        $("#lose").html("Lose: " + lose);
        result = 0;
        startGame ();
    }
    else if (result === randomNo) {
        win++;
        // document.getElementById("win").textContent = win;
        $("#win").html("Win: " + win);
        result = 0;
        startGame ();
    }
});

}); //.ready closing
   