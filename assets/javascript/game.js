//   Variables
  var counter =0;
  var numbers= ["100","200","300","400","500"];

//Getting a random value from an array
  var random = numbers[Math.floor(Math.random() * numbers.length)];
  console.log(random);
  $("#score").text(random);


  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-one").on("click", function() {
     // Clicking the button triggers an alert message.
    alert("You clicked a crystal!");
    console.log(counter);
    counter += 1;
 });

   // Here we created an on-click event that responds to button clicks of the crystal image.
   $(".crystal-two").on("click", function() {
    // Clicking the button triggers an alert message.
   alert("You clicked a crystal!");
   console.log("hola2");
});

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-three").on("click", function() {
    // Clicking the button triggers an alert message.
   alert("You clicked a crystal!");
   console.log("hola3");
});

  // Here we created an on-click event that responds to button clicks of the crystal image.
  $(".crystal-four").on("click", function() {
    // Clicking the button triggers an alert message.
   alert("You clicked a crystal!");
   console.log("hola4");
});