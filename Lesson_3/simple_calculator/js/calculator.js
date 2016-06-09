$(function() {
  $("form").submit(function(e) {
    var $form = $(e.target),
        $value1 = +$form.find("#first").val(),
        $value2 = +$form.find("#second").val(),
        $operation = $form.find("#operator").val();

    e.preventDefault();

    if ($operation === "+") {
      result = ($value1 + $value2);
    }
    else if ($operation === "-") {
      result = ($value1 - $value2);
    }
    else if ($operation === "*") {
      result = ($value1 * $value2);
    }
    else if ($operation === "/") {
      result = ($value1 / $value2);
    }

    $("#result").text(result);
  });
});
