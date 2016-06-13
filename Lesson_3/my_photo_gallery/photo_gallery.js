$(function() {
  var $slideshow = $("#slideshow"),
      $nav = $slideshow.find("ul");

  $nav.on("click", "a", function(e) {
    e.preventDefault();
    var $li = $(e.currentTarget).closest("li"),
        idx = $li.index();

    $slideshow.find("figure").stop().filter(":visible").fadeOut(200);
    $slideshow.find("figure").eq(idx).delay(200).fadeIn(200);
    $nav.find(".active").removeClass("active");
    $li.addClass("active");
  });
});
