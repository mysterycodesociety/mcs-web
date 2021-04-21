var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if (document.getElementById("mission") != null) {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      // 40px fudged up so background does not even slightly show through sections
      document.getElementById("mission").style.top = "120px";
    } else if (currentScrollPos > 40) {
      document.getElementById("mission").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  }
}