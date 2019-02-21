$(document).ready(function () {

  //variables
  var wins = 0;
  var losses = 0;
  var counter = 0;
  
  //Getting a random values
  var random = getRndInteger(19, 120);
  var randomcrys1 = Math.floor(Math.random() * 12) + 1;
  var randomcrys2 = Math.floor(Math.random() * 12) + 1;
  var randomcrys3 = Math.floor(Math.random() * 12) + 1;
  var randomcrys4 = Math.floor(Math.random() * 12) + 1;
  var randomcrys5 = getRndInteger(19, 120);


  //showing the selected number to guess.
  $("#score").text(random);
  //showing the total score during the game.
  $("#total").text(score);


  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-one").on("click", function () {
    // Clicking the button triggers an alert message.
    score += (randomcrys1);
    $("#total").text(score);
    console.log(randomcrys1);
  });

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-two").on("click", function () {
    // Clicking the button triggers an alert message.
    score += (randomcrys2);
    $("#total").text(score);
    console.log(randomcrys2);
  });

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-three").on("click", function () {
    // Clicking the button triggers an alert message.
    score += (randomcrys3);
    $("#total").text(score);
    console.log(randomcrys3);
  });

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-four").on("click", function () {
    // Clicking the button triggers an alert message.
    score += (randomcrys4);
    $("#total").text(score);
    console.log(randomcrys4);
  });

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  $(".card").on("click", function () {
    alert("New score: " + score);
    // (score === random) && alert("You win!") || (score >= random) && alert("You lose!!") ;
    //condition ? exprT : exprF 
    console.log('random: ', random);
    console.log('score: ', score);
    //score === random ? alert("You win!") : score >= random ? alert("You lose!!") : console.log('score less than random');
    if (score >= random) {
      $("#score").text(randomcrys5);
      alert("You lose!!");
      score = 0;
    }
    else if (score === random) {
      $("#score").text(randomcrys5);
      alert("You win!");
      score = 0;
    }
    else {
      console.log("test");
    }
  });
});
