//this will ensure that jQuery functions won't fail due to unloaded pages.
$(document).ready(function () {

  //variables
  var wins = 0;
  var losses = 0;
  var counter = 0;

  //DOM manipulation
  $("#counter").text(counter);
  $("#wins").text(wins);
  $("#losses").text(losses);

  //getting a random number between 19- 120
  var targetNumber = getRndInteger(19, 120);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // DOM manipulation
  $("#number-to-guess").text(targetNumber);
  //Getting random number
  var randomcrys1 = Math.floor(Math.random() * 12) + 1;
  var randomcrys2 = Math.floor(Math.random() * 12) + 1;
  var randomcrys3 = Math.floor(Math.random() * 12) + 1;
  var randomcrys4 = Math.floor(Math.random() * 12) + 1;

  //Restarting the game function
  function restart() {
    targetNumber = getRndInteger(19, 120);

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    $('#number-to-guess').text(targetNumber);

    randomcrys1 = Math.floor(Math.random() * 12) + 1;
    randomcrys2 = Math.floor(Math.random() * 12) + 1;
    randomcrys3 = Math.floor(Math.random() * 12) + 1;
    randomcrys4 = Math.floor(Math.random() * 12) + 1;
    counter = 0;
    $("#counter").text(counter);
  }

  //Winning the game  function.
  function winning() {
    alert("You won!");
    wins++;
    $("#wins").text(wins);
    restart();
  }

  //Lossing the  game
  function lossing() {
    alert("You lose");
    losses++;
    $("#losses").text(losses);
    restart();
  }
  $(".crystal-one").on("click", function () {
    // Clicking the button triggers an alert message.
    counter = counter + (randomcrys1);
    $("#counter").text(counter);
    console.log(randomcrys1);
    //counter == targetNumber ? winning() : counter > targetNumber ? lossing() : console.log('score less than random');
    if (counter == targetNumber) {
      winning();
    }
    else if (counter > targetNumber) {
      lossing();
    }
  });

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-two").on("click", function () {
    // Clicking the button triggers an alert message.
    counter += (randomcrys2);
    $("#counter").text(counter);
    console.log(randomcrys2);
    //counter == targetNumber ? winning() : counter > targetNumber ? lossing() : console.log('score less than random');
    if (counter == targetNumber) {
      winning();
    }
    else if (counter > targetNumber) {
      lossing();
    }
  });

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-three").on("click", function () {
    // Clicking the button triggers an alert message.
    counter += (randomcrys3);
    $("#counter").text(counter);
    console.log(randomcrys3);
    //counter == targetNumber ? winning() : counter > targetNumber ? lossing() : console.log('score less than random');
    if (counter == targetNumber) {
      winning();
    }
    else if (counter > targetNumber) {
      lossing();
    }
  });

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-four").on("click", function () {
    // Clicking the button triggers an alert message.
    counter += (randomcrys4);
    $("#counter").text(counter);
    console.log(randomcrys4);
    //counter == targetNumber ? winning() : counter >  targetNumber ? lossing() : console.log('score less than random');
    if (counter == targetNumber) {
      winning();
    }
    else if (counter > targetNumber) {
      lossing();
    }
  });
});
