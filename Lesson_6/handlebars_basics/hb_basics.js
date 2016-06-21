var post = {
  title: "The Jungle Book",
  published_date: "June 21 2016",
  body: "Lorem Ipsum"
};

var post_template = Handlebars.compile($("#post").html());

$("body").append(post_template(post));
