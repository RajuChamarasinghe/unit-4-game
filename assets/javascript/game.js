      
$(document).ready(function () {
    // Function-level strict mode syntax
    'use strict';

    $(".imageBc").css("padding", "10px");

    $(".heading").css({
        "position": "relative",
        "margin-bottom": "10px"
    });

    $("h1").css({
        "color": "#e6e6fa",
        "text-align": "center",
        "font-size": "150%",
        "padding-top": "25px"
    });

    $(".main").css({
        "padding": "15px",
        "text-align": "left",
        "margin-bottom": "10px"   
    });

    $(".main > p").css({
        "color": "#3cb371",
        "font-size": "125%",
        "margin-bottom": "10px"
    });

    $(".randomPc").css({
        "color": "#000000",
        "text-align": "center",
        "font-size": "165%",
        "padding-top": "15px",
        "margin-right": "10px"
    });

    $(".div-3 > .wins-loss-tracker").css({
        "text-align": "center",
        "padding": "5px"
    });

    $(".wins-loss-tracker > .winOrLoss").css({
        "margin-bottom": "5px"
    });

    $(".div-4").css({
        "margin-bottom": "10px",
        "margin-top": "10px"
    });

    $("img").css("margin-right", "10px");

    $(".div-5").css({
        "text-align": "left",
        "padding-top": "5px",
        "padding-left": "10px",
        "margin-bottom": "10px",
        "color": "#e6e6fa",
        "font-size": "100%"
    });

    $(".div-6").css({
        "text-align": "center",
        "padding-top": "25px",
        "color": "#ffffff",
        "font-size": "200%"
    
    });

});

var total = 0;
var current = 0;
var winCount = 0;
var loseCount = 0;

total = getRandomInt(19, 120);

$("#totalDiv").html(total);

// this function verifies if the game is won or lost.
function CheckWinLoose() {
    // Function-level strict mode syntax
    'use strict';

    current += getRandomInt(1, 12);
    $("#yourTotalDiv").html(current);

    if (total === current) {

        $("#winLose").html("You Won!");
        winCount++;
        $("#winDiv").html(winCount);

        reset();

    } else if (total < current) {

        $("#winLose").html("You Lose!");
        loseCount++;
        $("#loseDiv").html(loseCount);
        
        reset();
    
    }

};

function reset() {
    // Function-level strict mode syntax
    'use strict';
    
    current = 0;
    $("#yourTotalDiv").html(current);
    total = getRandomInt(19, 120);
    $("#totalDiv").html(total);

};

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {

    min = Math.ceil(min); //The number to be rounded to its nearest integer in upward rounding method.
    max = Math.floor(max); //The number to be rounded to its nearest integer in downward rounding method.
    return Math.floor(Math.random() * (max - min + 1)) + min;

};