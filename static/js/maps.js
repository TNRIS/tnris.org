// get map collection records from tnris api
// inject map collection records into html; append html to template html

// helper functions
function buildDownloadsTable(downloads) {
  var tableRows = '';
  var mapDownloads = JSON.parse('[' + downloads + ']');
  mapDownloads = mapDownloads.sort(function(a,b) {
    var aName = a.label.toUpperCase(), bName = b.label.toUpperCase();
    return aName.localeCompare(bName, undefined, { numeric: true, sensitivity: 'base' });
  });
  mapDownloads.forEach(function(d){
    var row = 
    `
      <tr>
        <td>${d.label}</td>
        <td class="size-column">${d.map_size}</td>
        <td>${d.width}"</td>
        <td>${d.length}"</td>
        <td>${d.ppi}</td>
        <td><a href="${d.url}">Download</a></td>
      </tr>
    `;
    tableRows += row;
  });
  var downloadsTable =
  `
    <h4>Available Sheets</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Sheet</th>
          <th>Size</th>
          <th>Width</th>
          <th>Length</th>
          <th>PPI</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody class="map-sheets-tbody">
        ${tableRows}
      </tbody>
    </table>
  `;
  return downloadsTable;
}

function buildCollectionsList(collections) {
  var listItems = '';
  var mapCollections = JSON.parse('[' + collections + ']');
  mapCollections.forEach(function(c){
    var uuid = Object.keys(c)[0];
    var item = 
    `
      <li><a href="https://data.tnris.org/collection/${uuid}">${c[uuid]}</a></li>
    `;
    listItems += item;
  });
  var collectionsList =
  `
    <h4><a href="https://data.tnris.org">DataHub</a> Layers In Map Collection</h4>
    <ul>
      ${listItems}
    </ul>
  `;
  return collectionsList;
}

// main function
function retrieveMaps() {
  var mapsUrl = 'https://api.tnris.org/api/v1/map/collections';
  return fetch(mapsUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for map collections.');
    }
    return response.json();
  })
  .then(function(data) {
    // sort api maps response by name
    data.results = data.results.sort(function(a,b) {
      var aName = a.name.toUpperCase(), bName = b.name.toUpperCase();
      if(aName < bName) {return -1;}
      if(aName > bName) {return 1;}
      return 0;
    });
    // iterate over array of objects in response and do the stuff
    data.results.forEach(function(m) {
      // use api values to create clean variables to use in html below
      var record = document.createElement('div');

      var urlName = m.name.replace(/[\s,:-]+/g , '-').toLowerCase();

      record.setAttribute('class', 'map-collection-record');
      record.setAttribute('id', urlName);

      var thumbnail = m.thumbnail_link ? `<img class="maps-thumbnail" src="${m.thumbnail_link}" /><br>` : '';

      var monthNames = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November","December"];
      var publishDate = new Date(m.publish_date);

      var moreInfo = m.more_info_link ? `&nbsp;<a href="${m.more_info_link}">More Info</a>` : '';
      var downloadsList = buildDownloadsTable(m.map_downloads);
      var collectionsList = m.data_collections ? buildCollectionsList(m.data_collections) : '';

      record.innerHTML =
        `<div class="row maps-header">
          <div class="col-xs-12 col-sm-3 left-sidebar">
            ${thumbnail}
            <span class="glyphicon glyphicon-calendar"></span>
            ${monthNames[publishDate.getMonth()]} ${publishDate.getDay()}, ${publishDate.getFullYear()}
            <br>
            <a id="${urlName}ClickSheets" data-toggle="collapse" aria-expanded="false" data-target="#${m.collection_id}Sheets" href="#${urlName}">
              <button id="full-details-btn" class="btn btn-primary btn-sm" type="button" style="margin:7px;">
                <span class="glyphicon glyphicon-download-alt"></span>
                Available Sheets
              </button>
            </a>
          </div>
          <div class="col-xs-12 col-sm-9 right-mainbar">
            <div class="row">
              <div class="col-xs-12">
                <h3>
                  ${m.name}
                </h3>
                <p class="maps-description">${m.description}${moreInfo}</p>
              </div>
            </div>
          </div>
          <div id="${m.collection_id}Sheets" class="available-sheets col-xs-12 collapse" style="padding:20px;">
            ${downloadsList}${collectionsList}
          </div>
        </div>`;

      document.getElementById('insert-maps').appendChild(record);
    });
  })
  .then(function() {
    // check if hash exists; if so, smooth scroll to div id and open sheets table by click
    // this is for sharing urls to map download tables
    var clickId = location.hash.replace("#", "");
    var element = document.getElementById(clickId + "ClickSheets");
    var button = element ? element.children[0] : '';
    if (location.hash) {
      element.click();
      button.className = 'btn btn-warning btn-sm';
      button.innerHTML = "<span class='glyphicon glyphicon-minus'></span> Close Sheets";
      element.scrollIntoView({
        behavior: 'smooth'
      });
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
        button.innerHTML.includes('Available') ? button.innerHTML = "<span class='glyphicon glyphicon-minus'></span> Close Sheets" : button.innerHTML = "<span class='glyphicon glyphicon-download-alt'></span> Available Sheets";
      });
    }

    anchors.forEach(function(a) {
      a.id ? clicker(a) : '';
    })
  })
}

retrieveMaps();