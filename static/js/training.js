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
      var d2parts = t.end_date_time.split(" ");
      d2parts[2] = d2parts[2] + `, ${t.year}`;
      var d2 = new Date(d2parts.join(" ")).toString().split(' ');
      var today = d1[3]+(monthsArray.indexOf(d1[1])+1)+d1[2];
      var end = t.fiscal_year+(monthsArray.indexOf(d2[1])+1)+d2[2];
      // use today date compared to end date and registration_open status to determine button used in training record
      // NOTE: this is really meant to catch any courses that haven't been updated properly in the api, so the user doesn't
      // see innaccurate information on the education page.
      if (t.registration_open) {
        // if registration is open and today is prior to the training end date
        if (today < end) {
          // set to active enabled register button with proper link to external registration page
          status = `<a href="${t.training_link}" class="btn btn-success btn-sm">
                      <i class="fa fa-calendar-check-o" aria-hidden="true"></i> Register
                    </a>`;
        }
        else if (today >= end) {
          // set to disabled close/remove button if for some reason registration is set to True for a
          // training record that has past
          status = `<a href="#" class="btn btn-danger btn-sm disabled">
                      <i class="fa fa-remove"></i> Closed
                    </a>`;
        }
      }
      else if (!t.registration_open) {
        // if registration is closed, always set to close/remove icon button
        status = `<a href="#" class="btn btn-danger btn-sm disabled">
                    <i class="fa fa-remove"></i> Closed
                  </a>`;
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
        `<div class="p-0 row training-header">
          <div class="col-12 course-info-category">
            ${t.category}
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-8"><br>
                <h3><b>
                  ${t.title}</b>
                </h3>
              </div>
              <div class="col-4 classdate">
              <strong>
              <span class="far fa-calendar-alt"></span>
              ${month} ${day}, ${t.year}
            </strong><br>
            <i class="fa fa-time"></i>
            ${start_time} - ${end_time}
              </div>
              <div class="col-8 course-info2">
                <strong>Taught by:</strong> ${t.instructor}<br>
                <strong>Cost:</strong> $${t.cost}
              </div>
              <div class="col-2 course-info">
              <button class="btn btn-primary btn-sm full-details-btn" type="button" data-toggle="collapse" aria-expanded="false" data-target="#Sheet${t.training_id}">
              <span class="fa fa-caret-down"></span>
              Details
            </button>
            </div>
              <div class="col-2 course-info"> ${status}
              </div>
            </div>
          </div>
          <div id="Sheet${t.training_id}" class="course-description col-12 collapse" style="padding:20px;">
            <hr class="new1">
            <h5>Description</h5>
            ${t.description}
            <!-- if there are public registration_open records, insert discount copy content in each record html -->
            <!-- <div id="training-discount-copy-record" style="padding:25px 0 0 0;"></div> -->
            <div class="col-3 course-info">
                <strong>Share:</strong><br>
                <span class="input-group-btn">
                  <button class="btn btn-tnris btn-sm copy-url-btn" type="button" style="margin-top:0; width:95%;">
                    <i class="fa fa-clipboard"></i> Copy Link
                  </button>
                </span>
                <input class="form-control hidden-clipboard-input" type="text" readonly value="${location.origin}/education#${urlTitle}">
              </div>
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
    // check if hash exists; if so, smooth scroll to div id and open description
    // by simulating click on the great-grandchild button element
    // this is for sharing urls to training records
    var clickId = location.hash.replace("#", "");
    var element = clickId ? document.getElementById(clickId) : "";
    var button = element ? element.children[0].children[1].children[0].children[3].children[0] : '';
    if (location.hash) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      button.click();
      button.className = 'btn btn-warning btn-sm full-details-btn';
      button.innerHTML = "<span class='fa fa-caret-up'></span> Close";
    }
  })
  .then(function() {
    // add event listener to all anchor tags with ids so onclick (expand and close) runs function
    // to swap out button class/color
    var buttons = document.querySelectorAll('.full-details-btn');

    buttons.forEach(function(b) {
      b.addEventListener("click", function() {
        // if event is fired to expand description, scroll to course great-grandparent ".training-record"
        // if event is fired to collapse, no scrolling
        if (b.innerHTML.includes('Details')) {
          b.parentNode.parentNode.parentNode.scrollIntoView({
            behavior: 'smooth'
          });
        }
        if (location.hash) {
          window.history.pushState(null, "", window.location.href.replace(location.hash, ""));
        }
        b.classList.contains('btn-primary') ? b.className = 'btn btn-warning btn-sm full-details-btn' : b.className = 'btn btn-primary btn-sm full-details-btn';
        b.innerHTML.includes('Details') ? b.innerHTML = "<span class='fa fa-caret-up'></span> Close" : b.innerHTML = "<span class='fa fa-caret-down'></span> Details";
      });
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

// check to see if atleast one education record from the api is set to registration open
// if there is at least one available, return the discount code copy html at top right of page
function insertDiscountCopy() {
  // both public and registration_open have to be equal to true for discount copy html to be inserted
  var trainingUrl = 'https://api.tnris.org/api/v1/tnris_org/training?registration_open=True'

  return fetch(trainingUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for training events with open registration.');
    }
    return response.json();
  })
  .then(function(data) {
    // change this string when a new discount code is needed
    var discountValue = "TNRIS2022";

    // check if any education records are public and registration_open from api, if so insert html
    if (data.count > 0) {
      var copy =
        `
          <h3 style="margin-top:0;">Discount Code</h3>
          <p>
          To receive the TNRIS discounted price for courses provided by our training partners, TeachMeGIS and GeoSpatial Training Services, enter the coupon code below when registering.
          </p>
          <p>TNRIS discount code can be used for all scheduled courses listed on training partner's websites.</p>
          <div class="input-group copy-url-container">
            <span class="input-group-btn">
              <button class="btn btn-tnris copy-url-btn" type="button" style="margin-top:0;">
                <i class="fa fa-clipboard"></i> Copy
              </button>
            </span>
            <input class="wms-url copy-url-input form-control" type="text" readonly value="${discountValue}">
          </div>
          <div class="card card-body alert-warning" style="margin-top:1rem;">
            <p style="margin-block-end:-.1rem;"><b>*NOTE:</b> Payments must be received before students will be allowed to take courses.</p>
          </div>
          <div class="card card-body alert-warning" style="margin-top:1rem;">
            <p style="margin-block-end:-.1rem;">Registration for all courses must be completed <b>a minimum of one week</b> prior to the start date of the course. If an exception is warranted, please contact the training organization directly to discuss whether enrollment has met the minimum student number.</p>
          </div>
        `;
      // used to insert the discount copy code into the education-side template at top right of page
      // add the <hr> tag at the end for styling separation
      document.getElementById('training-discount-copy').innerHTML = copy + "<hr class='clearfix'>";
      // used to insert the discount copy code into each education record that comes from the api
      // do not include the <hr> tag
      // var records = document.querySelectorAll('#training-discount-copy-record');
      // records.forEach(function(r) {
      //   r.innerHTML = copy;
      // });
    }
  })
}

// run functions when on education page
if (location.pathname.includes('/education')) {
  retrieveTraining();
  retrieveTrainingCategories();
  insertDiscountCopy();
}
