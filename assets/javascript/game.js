//   Variables
  var score =0;

//Getting a random values
  var random = Math.floor(Math.random() * 120) + 19; 
  var randomcrys1 = Math.floor(Math.random() * 12) + 1;
  var randomcrys2 = Math.floor(Math.random() * 12) + 1;
  var randomcrys3 = Math.floor(Math.random() * 12) + 1;
  var randomcrys4 = Math.floor(Math.random() * 12) + 1;

  //showing the selected number on  the HTML page
  $("#score").text(random);
  $("#total").text(score);

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-one").on("click", function() {
     // Clicking the button triggers an alert message.
    alert("You clicked a crystal!");
    score += (randomcrys1);
    $("#total").text(score);
    console.log(randomcrys1);
 });
 
   // Here we created an on-click event that responds to button clicks of the crystal image.
   $(".crystal-two").on("click", function() {
    // Clicking the button triggers an alert message.
   alert("You clicked a crystal!");
   score += (randomcrys2);
   $("#total").text(score);
   console.log(randomcrys2);
});

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-three").on("click", function() {
    // Clicking the button triggers an alert message.
   alert("You clicked a crystal!");
   score += (randomcrys3);
   $("#total").text(score);
   console.log(randomcrys3);
});

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-four").on("click", function() {
    // Clicking the button triggers an alert message.
   alert("You clicked a crystal!");
   score+= (randomcrys4 );
   $("#total").text(score);
   console.log(randomcrys4);
});

$(".card-img-top").on("click", function() {
if (score === random) {
    alert("You win!"); 
  }

  else if (score >= random) {
    alert("You lose!!");
  }
}); 