// Home page carousel
// get carousel images from tnris api
function retrieveCarousel(queryField, queryValue) {
    var carouselUrl = 'https://api.tnris.org/api/v1/tnris_org/carousel_image';
    if (queryField) {
        carouselUrl = carouselUrl + "?" + queryField + "=" + queryValue;
    }
    return fetch(carouselUrl).then(function (response) {
        if (!response.ok) {
            throw new Error('Could not retrieve TNRIS API response for carousel images.');
        }
        return response.json();
    })
        .then(function (data) {
            data.results = data.results.sort(function (a, b) {
                return b.last_modified.localeCompare(a.last_modified)

            });
            data.results.forEach(function (t) {
                // use api values to create clean variables to use in html below
                $(document).ready(function () {
                    for (let j = 0; j < 1; j++) {
                        $('<div class="carousel-item"><img class="d-block img-fluid" src="' + t.image_url + '" alt="' + t.image_name + '"> <div class="carousel-caption"><p>' + t.carousel_caption + '</p> </div>  </div>').appendTo('.carousel-inner');

                    }
                    $('.carousel-item').first().addClass('active');
                });
            });

            data.results
            $(document).ready(function () {
                for (let i = 0; i < data.count; i++) {
                    $('<li data-target="#tnris-carousel" data-slide-to="' + i + '"></li>').appendTo('.carousel-indicators')

                }
                $('.carousel-indicators > li').first().addClass('active');
            });
        })
}

$(document).ready(function () {
    retrieveCarousel();
});