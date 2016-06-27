$(function() {

  var canvas = document.querySelector("#rect canvas"),
      ctx = canvas.getContext("2d"),
      colors = ["#000", "#003", "#006", "#009", "#00c", "#00f"];

  function draw_circle() {
    colors.forEach(function(color, i) {
      ctx.fillStyle = color;
      ctx.fillRect(i * 20, i * 20, canvas.width - i * 40, canvas.height - i * 40);
    });
    colors.unshift(colors.pop());
    setTimeout(draw_circle, 200);
  }

  draw_circle();

});

$(function() {

  var canvas = document.querySelector("#circle canvas"),
      ctx = canvas.getContext("2d"),
      x = canvas.width / 2,
      y = canvas.height / 2,
      radius = x;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.strokeStyle = "rgba(0, 102, 204, .7)";
  ctx.moveTo(x, y - 50);
  ctx.lineTo(x + 50, y);
  ctx.lineTo(x - 50, y);
  ctx.lineTo(x, y - 50);
  ctx.stroke();
  ctx.closePath();

});
