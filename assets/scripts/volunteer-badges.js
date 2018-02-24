/* the old jquery
$(document).ready(function() {
  $('<div class="badge-container"><div class="gwc-badge instructor">{I}</div></div>').appendTo('.badges.badge-instructor');
  $('<div class="badge-container"><div class="gwc-badge ta">[TA]</div></div>').appendTo('.badges.badge-ta');
  $('<div class="badge-container"><div class="gwc-badge organizer">&lt;O&gt;</div></div>').appendTo('.badges.badge-organizer');
  $('<div class="badge-container"><div class="gwc-badge speaker">"S"</div></div>').appendTo('.badges.badge-speaker');
});
*/
function appendBadges(badgeName, badgeText) {
  // getElementsByClassName produces and HTMLCollection, which is an array like object
  // because it is not actually an Array, doesn't have forEach, but you can access its elements by index
  var collection = document.getElementsByClassName('badges badge-' + badgeName);
  for (var i = 0; i < collection.length; i++) {
    collection[i].innerHTML += '<div class="badge-container"><div class="gwc-badge ' + badgeName + '">' + badgeText + '</div></div>';
  }
}

appendBadges('instructor', '{I}');
appendBadges('ta', '[TA]');
appendBadges('organizer', '&lt;O&gt;');
appendBadges('speaker', '"S"');
