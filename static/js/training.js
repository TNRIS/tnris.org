// get training records from tnris api
// inject training records into html; append html to template html
function retrieveTraining() {
  var trainingUrl = 'https://api.tnris.org/api/v1/tnris_org/training';
  return fetch(trainingUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for training events.');
    }
    return response.json();
  })
  .then(function(data) {
    // sort api trainings response by date
    data.results = data.results.sort(function(a,b) {
      var dateA = new Date(a.start_date_time), dateB = new Date(b.start_date_time);
      return dateA - dateB;
    });
    // iterate over array of objects in response and do the stuff
    data.results.forEach(function(t) {
      // use api values to create clean variables to use in html below
      var record = document.createElement('div');
      // create start and end date time arrays by splitting at spaces
      var startDateArray = t.start_date_time.split(' ');
      var endDateArray = t.end_date_time.split(' ');
      var month = startDateArray[1];
      var status;
      ////////////////////////////////////////////////
      // start - date time work to determine register button status
      // build custom training date for comparison to today date
      var monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]
      var endCompare = t.year + "-" + (monthsArray.indexOf(endDateArray[1])+1) + "-" + endDateArray[2];
      // build custom formatted today date for comparison to end date
      var d = new Date();
      var today = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
      // use today date/time compared to end date/time and registration_open status to determine button used in training record
      if ((t.registration_open) && (today < endCompare)) {
        status = `<a href="${process.env.TRAINING_REGISTRATION_LINK}" class="btn btn-success btn-sm">
                    <i class="glyphicon glyphicon-new-window"></i> Register
                  </a>`;
      }
      else if (!t.registration_open) {
        if (today < endCompare) {
          console.log('disabled register here button')
          status = `<a href="${process.env.TRAINING_REGISTRATION_LINK}" class="btn btn-default btn-sm disabled">
                      <i class="glyphicon glyphicon-new-window"></i> Register
                    </a>`;
        }
        else if (today >= endCompare) {
          status = `<a href="#" class="btn btn-danger btn-sm disabled">
                      <i class="glyphicon glyphicon-remove"></i> Closed
                    </a>`;
        }
      }
      // end - date time work to determine register button status
      ////////////////////////////////////////////////

      // check to make sure start day and end day are not the same; if so, return just one day
      var day;
      startDateArray[2] === endDateArray[2] ? day = startDateArray[2] : day = `${startDateArray[2]}-${endDateArray[2]}`;
      // regex to remove preceding zero from start and end times; include AM/PM
      var start_time = startDateArray[3].replace(/^0+/, '') + ' ' + startDateArray[4];
      var end_time = endDateArray[3].replace(/^0+/, '') + ' ' + endDateArray[4];
      // urlize the title to be added after hash in url; regex replaces characters with one hyphen
      // first 8 characters of training id added just in case there is a url title conflict (same course more than once in same month & yr)
      var urlTitle = month.toLowerCase() + "-" + t.year + "-" + t.title.replace(/[\s,:-]+/g , '-').toLowerCase();
      record.setAttribute('class', 'training-record');
      record.setAttribute('id', urlTitle);

      record.innerHTML =
        `<div class="row training-header">
          <div class="col-xs-12 col-sm-3">
            <strong>
              <span class="glyphicon glyphicon-calendar"></span>
              ${month} ${day}, ${t.year}
            </strong><br>
            <i class="glyphicon glyphicon-time"></i>
            ${start_time} - ${end_time} <br>
            <a id="${urlTitle}Click" data-toggle="collapse" aria-expanded="false" data-target="#${t.training_id}" href="#${urlTitle}">
              <button id="full-details-btn" class="btn btn-primary btn-sm" type="button" style="margin:7px;">
                <span class="glyphicon glyphicon-info-sign"></span>
                Expand Details
              </button>
            </a>
          </div>
          <div class="col-xs-12 col-sm-9">
            <div class="row">
              <div class="col-xs-12">
                <h3>
                  ${t.title}
                </h3>
              </div>
              <div class="col-xs-4 course-info">
                <strong>Taught by:</strong>
                <br> ${t.instructor}
              </div>
              <div class="col-xs-4 course-info">
                <strong>Cost:</strong><br> $${t.cost}
              </div>
              <div class="col-xs-4 course-info">
                <strong>Status:</strong><br> ${status}
              </div>
            </div>
          </div>
          <div id="${t.training_id}" class="course-description col-xs-12 collapse" style="padding:20px;">
          <h3>Training Description</h3>
            ${t.description}
          </div>
        </div>`;

      document.getElementById('insert-here').appendChild(record);
    });

    // update header in template to include this year
    var thisYear = data.results[0].year;
    document.getElementById('education-schedule-h2').innerHTML = `${thisYear} Course Schedule`;
  })
  .then(function() {
    // check if hash exists; if so, smooth scroll to div id and open description by click
    // this is for sharing urls to training records
    var clickId = location.hash.replace("#", "");
    var element = document.getElementById(clickId + "Click");
    var button = element ? element.children[0] : '';

    if (location.hash) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      element.click();
      button.className = 'btn btn-warning btn-sm';
      button.innerHTML = "<span class='glyphicon glyphicon-info-sign'></span> Close Details";
    }
  })
  .then(function() {
    // add event listener to all anchor tags with ids so onclick (expand and close) runs function
    // to swap out button class/color
    var anchors = document.querySelectorAll('a');

    function clicker(x) {
      x.addEventListener("click", function() {
        var button = x.children[0];
        button.classList.contains('btn-primary') ? button.className = 'btn btn-warning btn-sm' : button.className = 'btn btn-primary btn-sm';
        button.innerHTML.includes('Expand') ? button.innerHTML = "<span class='glyphicon glyphicon-info-sign'></span> Close Details" : button.innerHTML = "<span class='glyphicon glyphicon-info-sign'></span> Expand Details";
      });
    }

    anchors.forEach(function(a) {
      a.id ? clicker(a) : '';
    })
  })
}

// run main retrieveTraining function when on education page
if (location.pathname.includes('/education')) {
  retrieveTraining();
}
