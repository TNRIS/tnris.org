// Home page carousel
// get carousel images from tnris api
function retrieveCarousel() {
    var carouselUrl = 'https://api.tnris.org/api/v1/tnris_org/carousel_image';

    return fetch(carouselUrl).then(function (response) {
        if (!response.ok) {
            throw new Error('Could not retrieve TNRIS API response for carousel images.');
        }
        return response.json();
    })
        .then(function (data) {
            var count = 0;

            data.results.forEach(function (t) {
                // use api values to create clean variables to use in html below
                var strCount = count.toString();
                $(document).ready(function () {

                    $('<div class="carousel-item"><img class="d-block img-fluid" src="' + t.image_url + '" alt="' + t.image_name + '"> <div class="carousel-caption"><p>' + t.carousel_caption + '</p> </div>  </div>').appendTo('.carousel-inner');
                    $('<li data-target="#tnris-carousel" data-slide-to="' + strCount + '"></li>').appendTo('.carousel-indicators')

                    $('.carousel-item').first().addClass('active');
                    $('.carousel-indicators > li').first().addClass('active');
                });
                count += 1;
            });

        })
}

$(document).ready(function () {
    retrieveCarousel();
});