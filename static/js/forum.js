function goToConferenceTimeBlock(_now) {
  var now = _now || moment();

  var dayOne = moment(process.env.FORUM_DAY_ONE);
  var dayTwo = moment(process.env.FORUM_DAY_TWO);

  var dayPrefix;
  if (now.isSame(dayOne, 'day')) {
    dayPrefix = 'DayOne_';
  } else if (now.isSame(dayTwo, 'day')) {
    dayPrefix = 'DayTwo_';
  } else {
    return; //exit if not a conference day
  }

  var bestStart;
  var nowTime = parseInt(now.format('HHmm'), 10);
  $('.time-block').each(function () {
    var blockDayStart = $(this).attr('id').split('_');
    var blockDay = blockDayStart[0];
    var blockStart = blockDayStart[1];
    if (blockDay + '_' !== dayPrefix) {
      //only look at times for current day
      return;
    }
    if (!bestStart) {
      bestStart = blockStart;
    }
    if (nowTime >= parseInt(blockStart, 10)) {
      bestStart = blockStart;
    }
  });
  window.location.hash = '#' + dayPrefix + bestStart;
};

// checks if the browser supports localStorage and writing to it is enabled
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch(e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0);
  }
}

$(function() {
  var STARS_KEY = 'forum.agenda_stars';
  var CHECK_KEY = 'forum.star_check';

  //check if localStorage is supported by browser
  if (!storageAvailable('localStorage')) {
    $('.personalize-agenda').hide();
    $('.star-btn').hide();
    return; //return early
  }

  if (!JSON.parse(localStorage.getItem(STARS_KEY))) {
    localStorage.setItem(STARS_KEY, JSON.stringify({}));
  }

  function setStar(id) {
    var starred = JSON.parse(localStorage.getItem(STARS_KEY));
    starred[id] = true;
    localStorage.setItem(STARS_KEY, JSON.stringify(starred));
  }

  function removeStar(id) {
    var starred = JSON.parse(localStorage.getItem(STARS_KEY));
    delete starred[id];
    localStorage.setItem(STARS_KEY, JSON.stringify(starred));
  }

  function checkHasAnyStars() {
    var hasAnyStars = $('.agenda-track-item.starred').length > 0;
    if (hasAnyStars) {
      $('.agenda-track').addClass('has-stars');
      $('.show-starred-check').prop('disabled', false);
    }
    else {
      $('.agenda-track').removeClass('has-stars');
      $('.show-starred-check').prop('disabled', true)
        .prop('checked', false);
      localStorage.setItem(CHECK_KEY, JSON.stringify(false));
      showUnstarred();
    }
  }

  function hideUnstarred() {
    $('.agenda-track-item:not(.starred)').hide();
  }

  function showUnstarred() {
    $('.agenda-track-item').show();
  }

  function loadStars() {
    var starred = JSON.parse(localStorage.getItem(STARS_KEY));
    if (!starred) { return; }

    $('.agenda-track-item').each(function () {
      if (starred[this.id]) {
        $(this).addClass('starred');
      }
    });

    if (JSON.parse(localStorage.getItem(CHECK_KEY))) {
      $('.show-starred-check').prop('checked', true);
      hideUnstarred();
    }

    checkHasAnyStars();
  }

  function attachStarBehavior() {
    var $showStarredCheck = $('.show-starred-check');

    $('button.star-btn').on('click', function () {
      var agendaTrackItem = $(this).parents('.agenda-track-item')[0];
      var $agendaTrackItem = $(agendaTrackItem);
      if (!agendaTrackItem) { return; }

      $agendaTrackItem.toggleClass('starred');

      if ($agendaTrackItem.hasClass('starred')) {
        setStar(agendaTrackItem.id);
      }
      else {
        removeStar(agendaTrackItem.id);
        if ($showStarredCheck.prop('checked')) {
          $agendaTrackItem.hide();
        }
      }

      checkHasAnyStars();
    });

    $showStarredCheck.on('click', function () {
      var checked = $(this).prop('checked');

      if (checked) {
        hideUnstarred();
      }
      else {
        showUnstarred();
      }

      localStorage.setItem(CHECK_KEY, JSON.stringify(checked));
    });
  }

  if (location.href.indexOf("/texas-gis-forum/" + process.env.FORUM_YEAR + "/agenda") !== -1) {
      goToConferenceTimeBlock();
      loadStars();
      attachStarBehavior();
    }
});
