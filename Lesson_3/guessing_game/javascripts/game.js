$(function() {
  var answer = Math.floor(Math.random() * 100) + 1,
      attempts = 0;

  $("form").submit(function(e) {
    var guess = +$("#guess").val(),
        message = "";

    e.preventDefault();
    attempts++;

    if (guess > answer) {
      message = "My number is lower than " + guess;
    }
    else if (guess < answer) {
      message = "My number is higher than " + guess;
    }
    else {
      message = "You guessed it! It took you " + attempts + " guesses.";
    }

    $("p").text(message);
  });

  $("a:contains('New game')").click(function(e) {
    e.preventDefault();
    attempts = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    $("p").text("Guess a number from 1 to 100");
    $("#guess").val('');
  });
});
