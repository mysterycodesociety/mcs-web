var stepHeight = 80;
var lastFootprintX = -80;

function footprint() {
  var height = window.innerHeight;
  var width = window.innerWidth;
  var yOffset = window.pageYOffset;
  if (yOffset <= height) {
    var numFootprints = Math.floor(height / stepHeight) * 2;
    var stepWidth = width / numFootprints;
    var footprintIndex = Math.floor((2 * height - 2 * (height - yOffset)) / stepHeight);
    var footprintX = Math.floor(((footprintIndex + 1) * width / numFootprints) - stepWidth);
    
    if (footprintX !== lastFootprintX) {
      var footprintY = yOffset + (stepHeight / 2);
      if (footprintY > (height - stepHeight)) {
        document.getElementById('footprint').style = 'display: none';
      } else {
        // left or right foot?
        var scaleX = footprintIndex % 2 == 0 ? 1 : -1;
        document.getElementById('footprint').style = `top: ${footprintY}px; left: ${footprintX}px; transform: rotate(115deg) scaleX(${scaleX})`;
      }
      lastFootprintX = footprintX;
    }
  }
}

window.addEventListener('scroll', footprint)
