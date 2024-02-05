var pintando = false;

document.addEventListener("DOMContentLoaded", function () {
  var div = document.getElementById("punto");
  var lienzo = document.getElementById("lienzo");
  var ctx = lienzo.getContext("2d");
  var pintando = false;
  var color = "black";

  resizeCanvas();

  document.addEventListener("mousemove", function (ev) {
    var x = ev.pageX;
    var y = ev.pageY;

    var posX = div.style.left = x - div.offsetWidth / 2 + "px";
    var poY = div.style.top = y - div.offsetHeight / 2 + "px";
    if (pintando) {
      var offsetX = lienzo.getBoundingClientRect().left;
      var offsetY = lienzo.getBoundingClientRect().top;
      ctx.lineTo(x - offsetX, y - offsetY);
      ctx.stroke();
    }
  });
  document.addEventListener("contextmenu", function (ev) {
    if (ev.button === 2) {
      color = "red";
    }
    ev.preventDefault();
      ctx.lineTo(posX, posY);
      ctx.stroke();
  });
  document.addEventListener("mousedown", function (ev) {
    ev.preventDefault();
    if (ev.button === 0) {
      color = "black";
    }else{
      color = "red";
      ev.preventDefault();
    }
    pintando = true;
    ctx.beginPath();
    var offsetX = lienzo.getBoundingClientRect().left;
    var offsetY = lienzo.getBoundingClientRect().top;
    ctx.moveTo(ev.pageX - offsetX, ev.pageY - offsetY);
    div.style.display = "none";
    ctx.strokeStyle = color;
  });
  document.addEventListener("mouseup", function (ev) {
    ev.preventDefault();
    pintando = false;
    div.style.display = "block";
  });

  window.addEventListener("resize", resizeCanvas);
  function resizeCanvas() {
    lienzo.width = window.innerWidth;
    lienzo.height = window.innerHeight;
  }
});
