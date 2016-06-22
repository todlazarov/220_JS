$(function() {
  var posts = [{
    title: "The Jungle Book",
    published_date: "June 21 2016",
    body: "A book about a wolf boy and funny bear"
  }];
  
  posts.push(post);

  post.body = "<p>" + post.body + "</p>";
  post.tags = ["Food", "Cooking", "Vegetables"];

  Handlebars.registerPartial("tag", $("#tag").html());
  var post_template = Handlebars.compile($("#post").html());

  $("body").append(post_template({ posts: posts }));
});
