var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // 40px fudged up so background does not even slightly show through sections
    document.getElementById("mission").style.top = "39px";
  } else {
    document.getElementById("mission").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}
