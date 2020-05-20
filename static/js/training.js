// get training records from tnris api
// inject training records into html; append html to template html
function retrieveTraining(queryField, queryValue) {
  var trainingUrl = 'https://api.tnris.org/api/v1/tnris_org/training';
  if (queryField) {
    trainingUrl = trainingUrl + "?" + queryField + "=" + queryValue;
  }
  return fetch(trainingUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for training events.');
    }
    return response.json();
  })
  .then(function(data) {
    // sort api trainings response by date
    data.results = data.results.sort(function(a,b) {
      // split start_date_time string into array to add 'year'
      var aAry = a.start_date_time.split(" ");
      aAry[2] = aAry[2] + `, ${a.year}`;
      var bAry = b.start_date_time.split(" ");
      bAry[2] = bAry[2] + `, ${b.year}`;
      // convert to date object
      var dateA = new Date(aAry.join(" ")), dateB = new Date(bAry.join(" "));
      // return sorted relative positions
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
      // START - date time work to determine register button status
      // used for reference in building comparison dates
      var monthsArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
      // // re-format dates for comparison
      var d1 = new Date().toString().split(' ');
      var d2 = new Date(t.end_date_time).toString().split(' ');
      var today = d1[3]+(monthsArray.indexOf(d1[1])+1)+d1[2];
      var end = t.year+(monthsArray.indexOf(d2[1])+1)+d2[2];
      // use today date compared to end date and registration_open status to determine button used in training record
      // if registration is open and today is prior to the training end date
      if (t.registration_open && (today < end)) {
        // set to active enabled register button with proper link to external registration page
        status = `<a href="${t.training_link}" class="btn btn-success btn-sm">
                    <i class="glyphicon glyphicon-new-window"></i> Register
                  </a>`;
      }
      else if (t.registration_open && (today >= end)) {
        // set to disabled close/remove button if for some reason registration is set to True for a
        // training record that has past
        status = `<a href="#" class="btn btn-danger btn-sm disabled">
                    <i class="glyphicon glyphicon-remove"></i> Closed
                  </a>`;
      }
      else if (!t.registration_open) {
        // if registration is closed and today is prior to training end date
        if (today < end) {
          // set to disabled register icon button - could be set to 'pending' or similar if needed
          status = `<a href="#" class="btn btn-default btn-sm disabled">
                      <i class="glyphicon glyphicon-new-window"></i> Register
                    </a>`;
        }
        // if registration is closed and today is equal to or past the training end date
        else if (today >= end) {
          // set to disabled close/remove icon button
          status = `<a href="#" class="btn btn-danger btn-sm disabled">
                      <i class="glyphicon glyphicon-remove"></i> Closed
                    </a>`;
        }
      }
      // END - date time work to determine register button status
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
            <h3>Description</h3>
            ${t.description}
            <!-- if there are public registration_open records, insert discount copy content in each record html -->
            <!-- <div id="training-discount-copy-record" style="padding:25px 0 0 0;"></div> -->
          </div>
        </div>`;

      document.getElementById('insert-here').appendChild(record);
    });
    // update header in template to include "(year) Course Schedule" if there are any public records
    // otherwise input empty string in header tag
    var headerText = data.count > 0 ? `${data.results[0].year} Course Schedule` : ``;
    document.getElementById('education-schedule-h2').innerText = headerText;
  })
  .then(function(data) {
    // check if hash exists; if so, smooth scroll to div id and open description by click
    // this is for sharing urls to training records
    var clickId = location.hash.replace("#", "");
    var element = document.getElementById(clickId + "Click");
    var button = element ? element.children[0] : '';

    if (location.hash && document.getElementById(clickId)) {
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
    });
  });
}

// get training records from tnris api to create categories filter of courses
// inject category filter into html; append html to template html
// this action is performed in a separate function so that the retrieveTraining()
// function remains independent and can be re-used when filter applied
function retrieveTrainingCategories() {
  var trainingUrl = 'https://api.tnris.org/api/v1/tnris_org/training';
  return fetch(trainingUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for training events.');
    }
    return response.json();
  })
  .then(function(data) {
    // set aside categories array for creating unique list from courses
    var categories = [];
    // iterate over array of objects in response and do the stuff
    data.results.forEach(function(t) {
      // if course category not in array, add it
      if (!categories.includes(t.category)) {
        categories.push(t.category);
      }
    });

    // loop unique categories array to add options to filter dropdown
    categories.sort().forEach((c) => {
      var cat = document.createElement('li');
      cat.innerHTML = c;
      cat.setAttribute('class', 'category-dropdown-menu-item');
      document.getElementById('category-dropdown-menu').appendChild(cat);
    });
  })
  .then(function() {
    // add event listerner to all category-dropdown-menu-item li tags so onclick
    // filters displayed courses
    var menuItems = document.querySelectorAll(".category-dropdown-menu-item");

    menuItems.forEach(function(i) {
      i.addEventListener("click", function() {
        // update dropdown to display chosen filter
        document.getElementById("selected-category-filter").innerHTML = i.innerHTML;
        // clear all courses which were injected into the training-list
        document.getElementById("insert-here").innerHTML = "";
        // re-retrieve the trainings with chosen filter applied to api call as query
        i.innerHTML === 'All Courses' ? retrieveTraining() : retrieveTraining('category', i.innerHTML);
      });
    });
  })
}

// run main retrieveTraining function when on education page
if (location.pathname.includes('/education')) {
  retrieveTraining();
  retrieveTrainingCategories();
}
