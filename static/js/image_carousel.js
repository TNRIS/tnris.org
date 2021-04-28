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

            //test for duplicates in carousel_order field (carousel_caption used as placeholder)
            const detectDuplicates = (arr, selector) => { 
                const table = new Set();
                for (const element of arr) { 
                    const discriminator = selector(element);
                    if (table.has(discriminator)) return true; 
                    table.add(discriminator); 
                } 
                return false; 
            }; 
            const duplicatesExist = detectDuplicates(data.results, x => x.carousel_caption);

            //if matching sort orders exist, sort by last_modified, otherwise sort by carousel_order (carousel_caption used as placeholder)
            if (duplicatesExist) data.results.sort((a, b) => 
            b.last_modified.localeCompare(a.last_modified));
            else data.results.sort((a, b) => a.image_name.localeCompare(b.image_name));

            data.results.forEach(function (t) {
                // use api values to create clean variables to use in html below
                var strCount = count.toString();
                $(document).ready(function () {

                    $('<div class="carousel-item"> <a href="' + t.image_url + '" target="_blank"> <img class="d-block img-fluid" src="' + t.image_url + '" alt="' + t.image_name + '"> </a> <div class="carousel-caption"><p>' + t.carousel_caption + '</p> </div>  </div>').appendTo('.carousel-inner');
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