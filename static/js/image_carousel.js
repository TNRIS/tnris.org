// grabs images from the api and injects them in the carousel on the front page of tnris.org
// if the image record has the carousel value set to true (check box checked)

// function retrieveCarouselImages() {
//   var imagesUrl = 'https://api.tnris.org/api/v1/tnris_org/images?carousel_image=True'
//
//   return fetch(imagesUrl).then(function(response) {
//     if (!response.ok) {
//       throw new Error('Could not retrieve TNRIS API response for tnris.org carousel images.');
//     }
//     return response.json();
//   })
//   .then(function(data) {
//     var carouselWrapper = document.getElementById("carousel-wrapper");
//     var carouselIndicators = document.getElementById("indicators");
//     var dataCount = data.count;
//     var noCarouselImages =
//       `
//       <div class="item active">
//         <img class="image" src="https://tnris-org-static.s3.amazonaws.com/images/cactus1_21:9.jpg" alt="">
//       </div>
//       `;
//
//     if (dataCount === 0) {
//       carouselIndicators.appendChild('<li data-target="#tnris-carousel" data-slide-to="0" class="active"></li>')
//       carouselWrapper.appendChild(noCarouselImages);
//     }
//     else {
//       data.results.forEach(function(t) {
//         var indicatorCount = 0;
//         var record = document.createElement('div').classList.add("item");
//
//         if (indicatorCount === 0) {
//           record.classList.add("active")
//           carouselIndicators.appendChild(`<li data-target="#tnris-carousel" data-slide-to=${indicatorCount} class="active"></li>`);
//         }
//         else {
//           carouselIndicators.appendChild(`<li data-target="#tnris-carousel" data-slide-to=${indicatorCount}></li>`);
//         }
//
//         record.innerHTML = `<img class="image" src="https://tnris-org-static.s3.amazonaws.com/images/cactus2_21:9.jpg" alt="Cactus 2 21:9 Image">`;
//         carouselWrapper.appendChild(record);
//         indicatorCount += 1;
//       });
//     }
//   })
// }
//
// retrieveCarouselImages();
