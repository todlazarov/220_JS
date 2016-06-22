$(function() {

  var templates = {},
      photos;

  $("script[type='text/x-handlerbars']").each(function() {
    var $tmpl = $(this);
    templates[$tmpl.attr("id")] = Handlebars.compile($tmpl.html());
  });

  $.ajax({
    url: "/photos",
    success: function(json) {
      photos = json;
      $("#slides").html(templates.photos({ photos: photos }));
      $("section > header").html(templates.photo_information(photos[0]));
    }
  });

});
