// get a single 'registration open' training record from tnris api
// if there is at least one available, return the registration button
function retrieveOpenTrainingLimited() {
  var trainingUrl = 'https://api.tnris.org/api/v1/tnris_org/training?registration_open=True&limit=1'

  return fetch(trainingUrl).then(function(response) {
    if (!response.ok) {
      throw new Error('Could not retrieve TNRIS API response for training events with open registration.');
    }
    return response.json();
  })
  .then(function(data) {
    var button;
    if (data.count > 0) {
      button =
        `
        <a href="${process.env.TRAINING_REGISTRATION_LINK}" class="btn btn-success btn-lg btn-block">
          Register Online Today
        </a>
        `;
    }
    else {
      button =
        `
        <a href="#" class="btn btn-danger btn-lg btn-block disabled">
          <i class="glyphicon glyphicon-remove"></i> REGISTRATION CLOSED
        </a>
        `;
    }
    document.getElementById('training-registration-button').innerHTML = button;
  })
}

retrieveOpenTrainingLimited()
