// get gio calendar events from tnris api
// inject next solutions group meeting into html; append html to template html
function retrieveNextSgm() {
  // query api endpoint for solutions group meetings only and limit 1 since we only need the next one in time
  var eventsUrl = 'https://api.tnris.org/api/v1/tnris_org/gio_calendar?solutions_group_meeting=True&limit=1';
  return fetch(eventsUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for GIO Calendar Events.');
    }
    return response.json();
  })
  .then(function(data) {
    // api calendar events return in chronological order by default
    // limit=1 query means we use the only object in response array
    var e = data.results[0];
    // if the next solutions group meeting is there, use it. otherwise, skip
    if (e) {
      var timeRange = e.pretty_time ? `<br>${e.pretty_time}` : '';
      // put next solutions group meeting details into placeholder div
      document.getElementById('gio-calendar-next-sgm').innerHTML =
        `<h3><small>Next Meeting</small><br>${e.pretty_date}${timeRange}</h3>`;
    }
  });
}

retrieveNextSgm();
