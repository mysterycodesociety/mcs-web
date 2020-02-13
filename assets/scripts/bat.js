var stepHeight = 80;
var lastBatX = -80;

function bat() {
  if (document.getElementById('bat') != null) {
    var height = window.innerHeight;
    var width = window.innerWidth;
    var yOffset = window.pageYOffset;
    if (yOffset <= height) {
      var batsPerFrame = 10;
      var numBats = Math.floor(height / stepHeight) * batsPerFrame;
      var stepWidth = width / numBats;
      var batIndex = Math.floor((batsPerFrame * height - batsPerFrame * (height - yOffset)) / stepHeight);
      var batX = Math.floor(width - ((batIndex + 1) * width / numBats) - (stepWidth * batsPerFrame));

      if (batX !== lastBatX) {
        var batY = yOffset + (stepHeight / batsPerFrame);
        if (batY > (height - stepHeight)) {
          document.getElementById('bat').classList.add('fade-out');
        } else {
          document.getElementById('bat').style = `top: ${batY}px; left: ${batX}px`;
          document.getElementById('bat').classList.remove('fade-out');
        }
        lastBatX = batX;
      }
    }
  }
}

window.addEventListener('scroll', bat)
