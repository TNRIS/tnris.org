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
//         `<h3><small>Next Meeting</small><br>${e.pretty_date}${timeRange}</h3>`;
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
    // sort results from api based on file name (file names should always start like YYYY-MM-DD-) which should
    // put the docs in order from most recent to oldest
    data.results.sort(function (a,b) {
      return a.document_name.localeCompare(b.name);
    });

    var count = 0;
    var list = document.getElementById('gio-sgm-notes');

    data.results.forEach(function(i) {
      // add one to the count
      count++;
      if (count <= 12) {
        var item = document.createElement('li');
        item.innerHTML = `<a href="${i.document_url}"><br><i class="glyphicon glyphicon-file"></i> ${i.document_name}</a>`;
        list.appendChild(item);
      }
    });
  });
}

// retrieveNextSgmEvent();
retrieveSgmNotes();
