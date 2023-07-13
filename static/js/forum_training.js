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
        status = `<a href="${process.env.FORUM_REGISTRATION_LINK}">
                <button id="full-details-btn" class="button-primary register" type="button" >
                register
                </button>
              </a>` :
        status = `<a href="#" >
                <button id="full-details-btn" class="disabled" type="button" >
                register
                </button>
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
        i.instructor_headshot ? image = `<img class="rounded-circle keynote-portrait" src="${i.instructor_headshot}" alt="headshot of instructor ${i.instructor_name}"><br>` : image = "";
        i.instructor_bio ? bio = i.instructor_bio : bio = "";
        i.instructor_bio ? name = i.instructor_name : name = "";
        // condition to add instructor bio to instrucotr bios (for multiple instructors)
        instructorInfo = instructorInfo ? instructorInfo +
          `<div class="speaker-bio">
            <div class="bio-header">
              ${image}
              <forum-h5>${name} ${company}</h5>
            </div>
            ${bio}
          </div>` :
          `<div class="speaker-bio">
            <div class="bio-header">
              ${image}
              <forum-h5>${name} ${company}</h5>
            </div>
            ${bio}
          </div>`;
      });

      // html for 'record' variable div element
      record.innerHTML =
`
<div class="session-card-container">
  <div class="session-card">
    <div class="session-card-details column">
      <div class="session-card-header">
        <p>${start_time} - ${end_time}</p>
        <h3 class="forum-h3">${t.title}</h3>
        <p>${name}${company}</p>
      </div>
      <div class="session-location">
        <p><b>Location:</b> ${t.room}</p>
      </div>
    </div>
    <div class="session-button-container">
      ${status}
      <a id="${urlTitle}Click" data-toggle="collapse" aria-expanded="false" data-target="#Sheet${t.training_id}" href="#${urlTitle}">
        <button id="full-details-btn" class="button-secondary" type="button" >
          more info
        </button>
      </a>
    </div>
  </div>
  <div id="Sheet${t.training_id}" class="collapse session-expanded">
    <hr>
    <h4 class="forum-h4">Overview:</h4>
    <p>${t.description}</p>
    <h4 class="forum-h4">Learning Objectives:</h4>
    <p>${t.teaser}</p>
    <h4 class="forum-h4">About the Speaker:</h4>
    ${instructorInfo}
  </div>
</div>
`;

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
    // add event listener to all anchor tags with ids so onclick (expand and close) runs function
    // to swap out button class/color
    var anchors = document.querySelectorAll('a');
    var containers = document.querySelectorAll('.full-details-btn');
  
    function clickerAnchor(element) {
      element.addEventListener("click", function() {
        var button = element.children[0];
        var isExpanded = button.getAttribute('data-expanded') === 'true';
  
        // Toggle button state
        isExpanded = !isExpanded;
        button.setAttribute('data-expanded', isExpanded);
  
        // Update button class and HTML content
        button.innerHTML = isExpanded ? "less info" : "more info";
      });
    }
  
    function clickerContainer(element) {
      element.addEventListener("click", function() {
        var button = element.children[0];
        var isExpanded = button.getAttribute('data-expanded') === 'true';
    
        // Toggle button state
        isExpanded = !isExpanded;
        button.setAttribute('data-expanded', isExpanded);
    
        // Update button class and HTML content
        button.className = isExpanded ? 'button-secondary' : 'button-primary';
        button.innerHTML = isExpanded ? "less info" : "more info";
    
      });
    }
  
    anchors.forEach(function(a) {
      a.id ? clickerAnchor(a) : '';
    });
  
    containers.forEach(function(container) {
      clickerContainer(container);
    });
  });
  
}

// run main retrieveForumTraining function when 'texas-gis-forum' included in path
if (location.pathname.includes('/texas-gis-forum')) {
  retrieveForumTraining();
}
