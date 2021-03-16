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
        <td class="download-column"><a href="${d.url}"><i class="fa fa-download"></i> Download</a></td>
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
          <th style="width: 125px;">Link</th>
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
    <br>
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

      var thumbnail = m.thumbnail_link ? `<a href="${m.thumbnail_link}" data-toggle="lightbox" data-gallery="example-gallery" data-title="${m.name}"><img class="maps-thumbnail img-fluid" src="${m.thumbnail_link}" /><small><i class="fa fa-zoom-in"></i> Click to Preview</small></a>` : '';

      var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November","December"];
      var publishDate = new Date(m.publish_date);
      publishDate.setDate(publishDate.getDate()+1);

      var moreInfo = m.more_info_link ? `<a href="${m.more_info_link}" target="_blank" title="Open More Info on ${m.name} in New Window">More Info <i class="fa fa fa-external-link fa-xs" aria-hidden="true"></i></a>` : '';
      var downloadsList = buildDownloadsTable(m.map_downloads);
      var collectionsList = m.data_collections ? buildCollectionsList(m.data_collections) : '';

      record.innerHTML =
        `<div class="row maps-header">
          <div class="col-12 col-sm-3 left-sidebar">
            ${thumbnail}
          </div>
          <div class="col-12 col-sm-9 right-mainbar">
            <div class="row">
              <div class="col-12">
                <h3>
                  ${m.name}
                </h3>
                <p>
                 <i> ${monthNames[publishDate.getMonth()]} ${publishDate.getDate()}, ${publishDate.getFullYear()} </i>
                </p>
                <p class="maps-description">${m.description}</p>
                <p>${moreInfo}</p>
              </div>
            </div>
          </div>
          <div class="col-12">
            <a id="${urlName}ClickSheets" data-toggle="collapse" aria-expanded="false" data-target="#Sheets${m.collection_id}" href="#${urlName}">
              <button class="btn btn-map-expander btn-lg btn-block full-details-btn" type="button">
                <i class="fa fa-arrow-down"></i>
                Expand Available Maps
              </button>
            </a>
          </div>
          <div id="Sheets${m.collection_id}" class="available-sheets col-12 collapse" style="padding:20px;">
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
      button.className = 'btn btn-lg btn-block btn-tnris full-details-btn';
      button.innerHTML = "<i class='fa fa-arrow-up'></i> Close Avaliable Maps";
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
        button.classList.contains('btn-map-expander') ? button.className = 'btn btn-tnris btn-lg btn-block full-details-btn' : button.className = 'btn btn-map-expander btn-lg btn-block full-details-btn';
        button.innerHTML.includes('Available') ? button.innerHTML = "<i class='fa fa-arrow-up'></i> Close Avaliable Maps" : button.innerHTML = "<i class='fa fa-arrow-down'></i> Expand Available Maps";
      });
    }

    anchors.forEach(function(a) {
      a.id ? clicker(a) : '';
    })
  })
}

retrieveMaps();
