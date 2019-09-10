---
title: "Landsat in the Cloud: Amazon Web Services Now Hosting Imagery"
layout: news-article.njk
author: StratMap
mainimage: https://tnris-org-static.s3.amazonaws.com/images/landsat_batholith.jpg
mainimagealt: A highly saturated satellite image with bright yellows and blues, showing a geologic formation.
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/landsat_bath_th.jpg
thumbalt: A cloud with landsate imagery in it
abstract:
   ESRI, MapBox and others are making Landsat satellite imagery available via Amazon S3. 
---

Although Landsat data have been freely available since 2008, [Amazon Web Services (AWS)](http://aws.amazon.com/public-data-sets/landsat) has made Landsat 8 data available from their on-demand computing resources, making a big leap forward to eliminate storage costs and time required to download Landsat data. 

Esri, Mapbox, and others are harnessing <abbr title="Amazon Web Services">AWS</abbr> to serve the latest and recently archived Landsat data to users. You can view imagery and try out a live demo at [Unlock Earth's Secrets](http://www.esri.com/landing-pages/software/landsat/unlock-earths-secrets).

From the [ArcGIS blog](http://blogs.esri.com/esri/arcgis/2015/03/19/making-landsat-on-aws-accessible/):

> “Esri has created a set of publicly accessible Web Services based that is updated on a daily basis.  Each day the latest Landsat 8 scenes are added and made directly accessible along, with the previous scenes. These services are multispectral and temporal providing not only the latest pretty picture, but the full information content from Landsat. For more details check out [Unlock Earth’s Secrets](http://www.esri.com/landing-pages/software/landsat/unlock-earths-secrets). This also includes a live web application that provides access to the imagery with different band combinations as well as temporal and spectral profiles. The natural color imagery is pansharpened to 15m providing – even more details.” 

<figure>
  <a href="http://www.esri.com/landing-pages/software/landsat/unlock-earths-secrets">
    <img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/landsat_animation.gif" alt="A rotating image of satellite imagery">
  </a>
<figcaption style="font-style: italic; color: #666; padding: 0 10px; margin-bottom: 15px;">From <a href="http://www.esri.com/landing-pages/software/landsat/unlock-earths-secrets">Unlock Earth's Secret's</a>: Different spectral bands yield insight about our precious and continually changing earth. Scientists and GIS analysts use Landsat to keep an eye on places like the Cambridge Gulf in Australia (above), where mangroves are threatened by cyclones and industrialization.</figcaption>
</figure>

And more from [Mapbox](https://www.mapbox.com/blog/landsat-live-live): 
> “Today we’re releasing the first edition of Landsat-live, a map that is constantly refreshed with the latest satellite imagery from NASA’s Landsat 8 satellite. Landsat 8 data is now publicly available on Amazon S3 via the new [Landsat on AWS Public Data Set](https://aws.amazon.com/blogs/aws/start-using-landsat-on-aws/), making our live pipeline possible. We’re ingesting the data directly from Amazon S3, which is how we’re able to go from satellite to Mapbox map faster than ever. With every pixel captured within the past 32 days, Landsat-live features the freshest imagery possible around the entire planet.”

The Landsat program is a joint effort between the U.S. Geological Survey and NASA. Landsat satellites have been collecting moderate resolution imagery of the planet since 1972. Launched in early 2013, Landsat 8 is the latest satellite in the series and captures data based on visible, infrared, near-infrared, and thermal-infrared light.
