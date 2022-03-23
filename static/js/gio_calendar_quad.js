// get gio calendar events from tnris api
// inject events into html; append html to template html
function retrieveNextFourEvents() {
  var eventsUrl = 'https://api.tnris.org/api/v1/tnris_org/gio_calendar';
  return fetch(eventsUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for GIO Calendar Events.');
    }
    return response.json();
  })
  .then(function(data) {
    // api calendar events return in chronological order by default
    // iterate over first 4 events in the array of objects in the response
    data.results.slice(0, 4).forEach(function(e) {
      // create empty dom div element then populate with api response information
      var event = document.createElement('div');
      // if a community meeting, apply meeting-box to classname
      var classname = e.community_meeting ? 'col-lg-3 meeting-box' : 'col-lg-3';
      var communityMeetingStar = e.community_meeting ? ` <i class="fa fa-star" style="color: #1e8dc1;"></i>` : '';
      var communityMeetingAgenda = e.community_meeting_agenda_url ? ` <a class="btn btn-tnris btn-md" href="${e.community_meeting_agenda_url}">Download Agenda</a>` : '';
      event.setAttribute('class', classname);
      // check if various properties exist, and set variables if so
      var timeRange = e.pretty_time ? `<time>${e.pretty_time}</time><br>` : '';
      var shortDescription = e.short_description ? `<p>${e.short_description}</p>` : '';
      var generalLocation = e.location ? `<location><strong>Location:</strong><br>${e.location}</location>` : '';
      var eventLink = e.event_url ? `<hr><button class="event-link">
      <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
      </span>
     <span class="button-text"><p><a href="${e.event_url}" target="_blank"><i class="fa fa-new-window"></i> <span class="button-text">Event Link</span></button></a></p>` : '';
      // fill dom list element with event details
      event.innerHTML =
        `
        <div class="eventBox d-flex flex-column">
        <div>
          <h3>
            <strong>${e.title}</strong>
            <br>
          </h3>
          <h5>  
          ${e.pretty_date}${communityMeetingStar}
          </h5>
          ${timeRange}
          <br>
          </div>
          ${shortDescription}
          ${generalLocation}
          <div class="justify-content-between">
            ${communityMeetingAgenda}
            ${eventLink}
          </div>
        </div>
          `;
        // append div element contents into template html
        document.getElementById('gio-calendar-quad').appendChild(event);
    });
  })
}

retrieveNextFourEvents();

