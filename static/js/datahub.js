// get data collection records from tnris api
// inject collections into html; append html to template html
function retrieveLatestDatasets() {
  var dataUrl = 'https://api.tnris.org/api/v1/collections';
  return fetch(dataUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for latest datasets.');
    }
    return response.json();
  })
  .then(function(data) {
    // sort api data collections response by date reversed (newest first)
    data.results = data.results.sort(function(a,b) {
      var dateA = new Date(a.publication_date), dateB = new Date(b.publication_date);
      return dateB - dateA;
    });
    // iterate over first 3 collections in the array of objects in the response
    data.results.slice(0, 3).forEach(function(d) {
      // create empty dom div element then populate with api response information
      var collection = document.createElement('div');
      collection.setAttribute('class', 'latest-data-item');
      var year = new Date(d.acquisition_date).getFullYear();
      // fill dom list element with collection details
      collection.innerHTML =
        `
          <a href="https://data.tnris.org/collection/?c=${d.collection_id}" title="View ${d.name} on the DataHub">
              <img class="" src="${d.thumbnail_image}" alt="Thumbnail image of ${d.name} data collection">
              <h3>
                <strong>${year} - ${d.source_abbreviation}</strong><br>
                ${d.name}
              </h3>
          </a>
        `;
      // append li element into template html
      document.getElementById('latest-data-frontpage').appendChild(collection);
    });
  })
}

retrieveLatestDatasets();
