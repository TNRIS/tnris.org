// get forum training records from tnris api
// inject training records into html; append html to forum template html
function retrieveForumTraining() {
  var forumTrainingUrl = 'https://api.tnris.org/api/v1/tnris_org/complete_forum_training';
  return fetch(forumTrainingUrl).then(function(response) {
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
      // urlize the title to be added after hash in url; regex replaces characters with one hyphen
      // first 8 characters of training id added just in case there is a url title conflict (same course more than once in same year)
      var urlTitle = t.training_id.slice(0,8) + "-" + t.title.replace(/[\s,:-]+/g , '-').toLowerCase();
      record.setAttribute('class', 'training-record');
      record.setAttribute('id', urlTitle);
      // create start and end date time arrays by splitting at spaces
      var startDateArray = t.start_date_time.split(' ');
      var endDateArray = t.end_date_time.split(' ');
      var month = startDateArray[1];
      // check to make sure start day and end day are not the same; if so, return just one day
      var day;
      startDateArray[2] === endDateArray[2] ? day = startDateArray[2] : day = `${startDateArray[2]}-${endDateArray[2]}`;
      // regex to remove preceding zero from start and end times; include AM/PM
      var start_time = startDateArray[3].replace(/^0+/, '') + ' ' + startDateArray[4];
      var end_time = endDateArray[3].replace(/^0+/, '') + ' ' + endDateArray[4];
      // if room, then display room variable
      var locationRoom;
      t.room ? locationRoom = t.location + ", " + t.room : locationRoom = t.location;
      // check registration_open prop for truthiness, then assign html button accordingly
      var status;
      t.registration_open ?
        status = `<a href="${process.env.FORUM_REGISTRATION_LINK}" class="btn btn-success btn-sm">
                    <i class="fa fa-pencil"></i> Register Here
                  </a>` :
        status = `<a href="#" class="btn btn-danger btn-sm disabled">
                    <i class="fa fa-remove"></i> CLOSED
                  </a>`;
      // convert instructor_info from string to array of json; set up variables for use in array loop
      var instructorInfoArray = JSON.parse('[' + t.instructor_info + ']');
      var instructorInfo;
      var company;
      var namesList = [];
      var image;
      var name;
      var bio;
      var instructorBioHeader;
      // loop over objects in instructor info array and for each object do this...
      instructorInfoArray.forEach(function(i) {
        namesList.push(" " + i.instructor_name);
        i.instructor_company && i.instructor_bio ? company = ", " + i.instructor_company : company = "";
        // if headshot image & bio exists, assign value to variables to use in html
        i.instructor_headshot ? image = `<img class="rounded-circle float-left keynote-portrait" src="${i.instructor_headshot}" alt="headshot of instructor ${i.instructor_name}"><br>` : image = "";
        i.instructor_bio ? bio = i.instructor_bio : bio = "";
        i.instructor_bio ? name = i.instructor_name : name = "";
        i.instructor_bio ? instructorBioHeader = "<h3>Instructor Bio(s)</h3>" : instructorBioHeader = "";
        // condition to add instructor bio to instrucotr bios (for multiple instructors)
        instructorInfo = instructorInfo ? instructorInfo +
          `<h4 style="margin-top:20px;">${name} ${company}</h4>
            <p class="col-12">
              ${image}
              ${bio}
            </p>` :
          `<h4 style="margin-top:20px;">${name} ${company}</h4>
            <p class="col-12">
              ${image}
              ${bio}
            </p>`;
      });

      // html for 'record' variable div element
      record.innerHTML =
        `<div class="row forum-training-header ">
          <div class="col-3 col-sm-2">
            <i class="fa fa-time"></i>
            ${start_time} - ${end_time} <br>
          </div>
          <div class="col-9 col-sm-6">
            <h3>${t.title}</h3>
          </div>
          <div class="col-6 col-sm-2 course-info">
            <strong>Taught by:</strong><br>${namesList}
          </div>
          <div class="col-3 col-sm-1 course-info">
            <strong>Cost:</strong><br>$${t.cost}
          </div>
        </div>
        <div class="row course-description forum-course">
          <div class="col-3 col-sm-2">
            <a id="${urlTitle}Click" data-toggle="collapse" aria-expanded="false" data-target="#Sheet${t.training_id}" href="#${urlTitle}">
              <button id="full-details-btn" class="btn btn-primary btn-sm" type="button" style="margin:7px;">
                <span class="fa fa-info-sign"></span>
                Expand Details
              </button>
            </a>
          </div>
          <div class="col-5 col-sm-6">${t.teaser}</div>
          <div class="col-2  col-sm-2">
            <strong>Location:</strong><br>${locationRoom}
          </div>
          <div class="col-sm-2" style="margin-bottom: 10px;">
            <strong>Status:</strong><br>${status}
          </div>
          <div id="Sheet${t.training_id}" class="col-12 collapse">
            <div class="col-sm-2"></div>
            <div class="col-12" style="margin:10px 0 10px 0; padding-left:0;">
              <h3 style="margin-top:10px;">Training Description</h3>
              <p style="margin-bottom:10px;">
                ${t.description}
              </p>
              ${instructorBioHeader}
              ${instructorInfo}
            </div>
          </div>
        </div>`;

      // function to insert forum records by year into template
      function forumByYear(one, two, rec) {
        t.training_day == 1 ? document.getElementById(one).appendChild(rec) : document.getElementById(two).appendChild(rec);
      }
      // check pathname for year and if api year matches, run forumByYear function to insert html by year & training day
      if (location.pathname.split("/")[2] == t.year) {
        var one = document.getElementById("insert-day-one-" + t.year);
        var two = document.getElementById("insert-day-two-" + t.year);
        one && two ? forumByYear("insert-day-one-" + t.year, "insert-day-two-" + t.year, record) : console.log('ERROR. Forum day element ids not found in template.');
      }
    });
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
      button.innerHTML = "<span class='fa fa-info-sign'></span> Close Details";
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
        button.innerHTML.includes('Expand') ? button.innerHTML = "<span class='fa fa-info-sign'></span> Close Details" : button.innerHTML = "<span class='fa fa-info-sign'></span> Expand Details";
      });
    }

    anchors.forEach(function(a) {
      a.id ? clicker(a) : '';
    })
  })
}

// run main retrieveForumTraining function when 'texas-gis-forum' included in path
if (location.pathname.includes('/texas-gis-forum')) {
  retrieveForumTraining();
}
