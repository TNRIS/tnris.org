/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// SOLUTIONS GROUP MEETINGS/EVENTS REMOVED FROM FRONTEND - AS OF 01/27/20 - REQUESTED BY FELICIA ////////

// get gio calendar events from tnris api
// inject next solutions group meeting into html; append html to template html
// function retrieveNextSgmEvent() {
//   // query api endpoint for solutions group meetings only and limit 1 since we only need the next one in time
//   var eventsUrl = 'https://api.tnris.org/api/v1/tnris_org/gio_calendar?solutions_group_meeting=True&limit=1';
//   return fetch(eventsUrl).then(function(response) {
//     if (!response.ok) {
//       throw new Error('Could not retrieve TNRIS API response for GIO Calendar Events.');
//     }
//     return response.json();
//   })
//   .then(function(data) {
//     // api calendar events return in chronological order by default
//     // limit=1 query means we use the only object in response array
//     var e = data.results[0];
//     // if the next solutions group meeting is there, use it. otherwise, skip
//     if (e) {
//       var timeRange = e.pretty_time ? `<br>${e.pretty_time}` : '';
//       // put next solutions group meeting details into placeholder div
//       document.getElementById('gio-calendar-next-sgm').innerHTML =
//         `<h3><small class="text-muted">Next Meeting</small><br>${e.pretty_date}${timeRange}</h3>`;
//     }
//   });
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// get gio solution group meeting notes from tnris api - https://api.tnris.org/api/v1/tnris_org/sgm_note
// inject unordered list item with sgm notes doc for up to 12 (most recent) meetings
function retrieveSgmNotes() {
  // query api endpoint for solutions group meeting notes
  var sgmNotesUrl = 'https://api.tnris.org/api/v1/tnris_org/sgm_note';
  return fetch(sgmNotesUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for Solutions Group Meeting Notes.');
    }
    return response.json();
  })
  .then(function(data) {
    var notesList = document.getElementById('gio-sgm-notes');
    // if there are any sgm_note items at api endpoint, grab last 12 items and insert list element anchor for each
    if (data.results) {
      data.results.slice(-12).forEach(function (i) {
        var noteItem = document.createElement('li');
        noteItem.innerHTML = `<a href="${i.document_url}"><br><i class="fa fa-file"></i> ${i.document_name}</a>`;
        notesList.appendChild(noteItem);
      });
    }
  });
}

function retrieveCommunitySlides() {
  // query api endpoint for gis community meeting presentation documents
  var commSlidesUrl = 'https://api.tnris.org/api/v1/tnris_org/comm_note';
  return fetch(commSlidesUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for GIS Community Meeting Slides.');
    }
    return response.json();
  })
  .then(function(data) {
    var slideList = document.getElementById('community-meeting-slides');
    // if there are any comm_note items at api endpoint, grab last 4 items and insert list element anchor for each
    if (data.results) {
      data.results.slice(-4).forEach(function(i) {
        var slideItem = document.createElement('li');
        slideItem.innerHTML = `<a href="${i.document_url}"><br><i class="fa fa-file"></i> ${i.document_name}</a>`;
        slideList.appendChild(slideItem);
      });
    }
  });
}

// run functions based on pathname
if (location.pathname.includes('/gis-solutions-group')) {
  retrieveSgmNotes();
}
if (location.pathname.includes('/geographic-information-office') && !location.pathname.includes('/gis-solutions-group')) {
  retrieveCommunitySlides();
}
