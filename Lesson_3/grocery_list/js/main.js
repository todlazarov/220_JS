$(function() {

  $ul = $("ul");

  function addToList(name, qty) {
    $ul.append("<li>" + qty + " " + name + "</li>");
  }

  $("form").submit(function(e) {
    e.preventDefault();
    var $form = $(e.target),
        $name = $form.find("#name").val(),
        $qty = +$form.find("#qty").val() || 1;

    addToList($name, $qty);
    $form.get(0).reset();
  });

});
