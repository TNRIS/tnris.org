// get 'registration open' training records from tnris api
// inject training records into html; append html to template html
function retrieveOpenTraining() {
  var trainingUrl = 'https://api.tnris.org/api/v1/tnris_org/training?registration_open=True'

  return fetch(trainingUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for training events with open registration.');
    }
    return response.json();
  })
  .then(function(data) {
    var thisYear = new Date().getFullYear();
    if (data.count === 0) {
      var noRegistration =
      `
      <p>
        <strong>The ${thisYear} Training Season is now over.</strong> Let us know if you have suggestions for courses that can be added to our program, and check back for next year's schedule.
      </p>
      `;

      // document.getElementById('next-two-open-classes').innerHTML = noRegistration;
    }
    else {
      // sort api trainings response by date
      data.results = data.results.sort(function(a,b) {
        var dateA = new Date(a.start_date_time), dateB = new Date(b.start_date_time);
        return dateA - dateB;
      });
      // iterate over first 2 array of objects in response
      // these are the next 2 upcoming open classes
      data.results.slice(0, 2).forEach(function(t) {
        // create empty dom list element then populate with api response information
        var record = document.createElement('li');
        // create start and end date time arrays by splitting at spaces
        var startDateArray = t.start_date_time.split(' ');
        var endDateArray = t.end_date_time.split(' ');
        var month = startDateArray[1];
        // check to make sure start day and end day are not the same; if so, return just one day
        var day;
        startDateArray[2] === endDateArray[2] ? day = startDateArray[2] : day = `${startDateArray[2]}-${endDateArray[2]}`;
        // urlize the title to be added after hash in url; regex replaces characters with one hyphen
        // first 8 characters of training id added just in case there is a url title conflict (same course more than once in same month & yr)
        var urlTitle = month.toLowerCase() + "-" + t.year + "-" + t.title.replace(/[\s,:-]+/g , '-').toLowerCase();

        record.innerHTML =
          `
          <i class="glyphicon glyphicon-calendar extended"></i>
            <time> ${month} ${day}, ${t.year}</time>
            <h4>
              <a href="/education#${urlTitle}"> ${t.title}</a>
            </h4>
          `;

        document.getElementById('next-two-open-classes').appendChild(record);
      });
    }
    // update header in template to include this year
    document.getElementById('education-front-h3') ? document.getElementById('education-front-h3').innerHTML = `${thisYear} Training Courses` : '';
  })
}

retrieveOpenTraining()
