// get next community meeting gio calendar event from tnris api
// inject event into html; append html to template html
function retrieveNextCommunityMeeting() {
  var eventsUrl = 'https://api.tnris.org/api/v1/tnris_org/gio_calendar?community_meeting=True&limit=1';
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
    // if the next community meeting is there, use it. otherwise, skip
    if (e) {
      // create empty dom div element then populate with api response information
      var event = document.createElement('div');
      // check if various properties exist, and set variables if so
      var timeRange = e.pretty_time ? `<time><i class="glyphicon glyphicon-time"></i> ${e.pretty_time}</time><br>` : '';
      var shortDescription = e.short_description ? `<p>${e.short_description}</p>` : '';
      var generalLocation = e.location ? `<location><strong>Location:</strong><br>${e.location}</location><hr>` : '';
      var eventLink = e.event_url ? `<p><a href="${e.event_url}"><i class="glyphicon glyphicon-new-window"></i> Event Link</a></p>` : '';
      // fill dom list element with event details
      event.innerHTML =
        `
        <h3>
          <strong>${e.pretty_date} <i class="glyphicon glyphicon-star" style="color: #1e8dc1;"></i></strong>
          <br>
          ${e.title}
        </h3>
        ${timeRange}
        ${shortDescription}
        ${generalLocation}
        ${eventLink}
        `;
      // append div element contents into template html
      document.getElementById('gio-calendar-next-cm').appendChild(event);
      document.getElementById('gio-calendar-next-cm').setAttribute('class', 'col-md-3 meeting-box');
    }
  })
}

retrieveNextCommunityMeeting();
