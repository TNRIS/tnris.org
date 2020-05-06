// get a single 'registration open' training record from tnris api
// if there is at least one available, return the discount code copy html
function retrieveOpenTrainingLimited() {
  var trainingUrl = 'https://api.tnris.org/api/v1/tnris_org/training?registration_open=True&limit=1'

  return fetch(trainingUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for training events with open registration.');
    }
    return response.json();
  })
  .then(function(data) {
    var copy;
    // change this string when a new discount code is needed
    var discountValue = "TNRIS2020";

    if (data.count > 0) {
      copy =
        `
        <h3>TNRIS Training Discount Code</h3>
        <p>
          To recieve a discounted price on all TNRIS trainings provided through our service partners, copy the link below to use during the registration process.
        </p>

        <div class="input-group copy-url-container" style="width:100%;">
          <span class="input-group-btn">
            <button class="btn btn-tnris copy-url-btn" type="button" style="margin-top:0;">
              <i class="fa fa-clipboard"></i> Copy
            </button>
          </span>
          <input class="wms-url copy-url-input form-control" type="text" id="discount-value" readonly value="${discountValue}">
        </div>

        <hr class="clearfix">
        `;
    }
    else {
      copy = ``;
    }
    document.getElementById('training-discount-copy').innerHTML = copy;
  })
}

retrieveOpenTrainingLimited()
