function $(id_selector) {
  return document.getElementById(id_selector);
}

window.onload = function() {
  $("calculator").onsubmit = function(e) {
    var value1 = +$("first").value,
        value2 = +$("second").value,
        operation = $("operator").value,
        result = 0;

    e.preventDefault();

    if (operation === "+") {
      result = value1 + value2;
    }
    else if (operation === "-") {
      result = value1 - value2;
    }
    else if (operation === "*") {
      result = value1 * value2;
    }
    else if (operation === "/") {
      result = value1 / value2;
    }

    $("result").innerHTML = result;
  };
};
