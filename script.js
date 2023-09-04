
window.onscroll = function(){scrolldiv()};

function scrolldiv() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 50;
  document.getElementById("red").style.width = scrolled + "%";
}