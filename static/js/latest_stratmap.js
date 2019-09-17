// get stratmap data collection records from tnris api
// inject collections into html; append html to template html
function retrieveStratmapDatasets() {
  var dataUrl = 'https://api.tnris.org/api/v1/collections?source_abbreviation=StratMap';
  return fetch(dataUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for latest stratmap datasets.');
    }
    return response.json();
  })
  .then(function(data) {
    // sort api data collections response by date reversed (newest first)
    data.results = data.results.sort(function(a,b) {
      var dateA = new Date(a.acquisition_date), dateB = new Date(b.acquisition_date);
      return dateB - dateA;
    });
    // iterate over first 4 collections in the array of objects in the response
    data.results.slice(0, 4).forEach(function(d) {
      // create empty dom div element then populate with api response information
      var collection = document.createElement('div');
      collection.setAttribute('class', 'media');
      var year = new Date(d.acquisition_date).getFullYear();
      // fill dom list element with collection details
      collection.innerHTML =
        `
          <div class="media-left">
            <a href="https://data.tnris.org/collection/${d.collection_id}">
                <img class="media-object" src="${d.thumbnail_image}" alt="${d.name} Thumbnail">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">
              <a href="https://data.tnris.org/collection/${d.collection_id}">
                ${d.name}
              </a>
              <br>
              <small>${year}</small>
            </h4>
          </div>
          <hr>
        `;
      // append li element into template html
      document.getElementById('latest-stratmap-datasets').appendChild(collection);
    });
  })
}

retrieveStratmapDatasets();
