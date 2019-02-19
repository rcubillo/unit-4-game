//   Variables
  var score =0;
 var numbers= [];
  var value= ["4","7","10","13"];

//Getting a random value from an array
  var random = numbers[Math.floor(Math.random() * numbers.length)];
  //showing the selected number on  the HTML page
  console.log(random);
  $("#score").text(random);
  $("#total").text(score);

 //Getting a random value from an array
 var randomvalue = value[Math.floor(Math.random() * value.length)];
 console.log(randomvalue);


  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-one").on("click", function() {
     // Clicking the button triggers an alert message.
    alert("You clicked a crystal!");
    console.log(score);
    score += 4;
    $("#total").text(score);
 });

   // Here we created an on-click event that responds to button clicks of the crystal image.
   $(".crystal-two").on("click", function() {
    // Clicking the button triggers an alert message.
   alert("You clicked a crystal!");
   console.log("hola2");
   score += 10;
   $("#total").text(score);
});

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-three").on("click", function() {
    // Clicking the button triggers an alert message.
   alert("You clicked a crystal!");
   console.log("hola3");
   score += 13;
   $("#total").text(score);
   ("#total").text(score);
});

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-four").on("click", function() {
    // Clicking the button triggers an alert message.
   alert("You clicked a crystal!");
   console.log("hola4");
   score+= 15;
   $("#total").text(score);
});

$(".card-img-top").on("click", function() {
if (score === random) {
    alert("You win!"); 
  }

  else if (score >= random) {
    alert("You lose!!");
  }
}); 