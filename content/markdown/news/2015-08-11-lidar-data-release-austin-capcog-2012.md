---
layout: news-article.njk
title: "Lidar Data Release For Austin, CAPCOG 2012"
author: Joey Thomas, StratMap
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/darrell_k_royal_th.jpg
mainimage: https://tnris-org-static.s3.amazonaws.com/images/darrell_k_royal_stadium.jpg
maingimagealt: A point cloud of Darrell K. Royal Stadium
imagealt: A sample of collected Lidar data
abstract:
    TNRIS is releasing newly acquired high resolution Lidar data for 1,085 square miles of Central Texas for the City of Austin region.
tags: lidar, data
---
The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of newly acquired high resolution Lidar data for 1,085 square miles of Austin, Texas, and surrounding areas. Aerial collection took place January 12, 2012 through January 28, 2012 during the leaf-off season. Sanborn Map Company performed the data acquisition/processing.

## Data Access
<div class="media">
  <div class="media-body">
    <p>Lidar data and the associated geospatial products are available for cost of reproduction through TNRIS.</p>
    <p>
      Browse, download, order, and inquire about data within the <a href="https://data.tnris.org">DataHub</a>.
    </p>
  </div>
</div>
## Interactive AOI (Area of Interest) Map
<iframe width="100%" height="520" frameborder="0" src="https://tnris.cartodb.com/viz/01a1b8ba-3abe-11e5-bfd3-0e018d66dc29/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

The map above shows the area of acquisition. The data is available in DO4Q tiles.

## Products

-	Classified all-return Lidar DO4Q tiles (1/64th of USGS Quad) in LAS 1.2 format
-	Bare-earth digital elevation model (DEM) in USGS .dem format (3-meter)
-	Hydro-flattening breaklines in SHP
-	File-level FGDC metadata in XML

<figure>
<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/mansfield_dam.jpg" alt="A point cloud of Mansfield Dam at Lake Travis">
<figcaption>A point cloud of Mansfield Dam at Lake Travis</figcaption>
</figure>

## Product Specification

- Vertical accuracy (RMSEz) of 15 cm

- Point data are classified according to the following American Society for Photogrammetry and Remote Sensing (ASPRS) class schema:
  - Class 1: Unclassified
  - Class 2: Ground
  - Class 4: Vegetation
  - Class 6: Buildings
  - Class 7. Low Point (noise)
  - Class 9. Water
  - Class 11 Withheld
  - Class 15. Bridges
  - Class 17. Culverts
- Horizontal projection is NAD 83 State Plane Texas Central(EPSG 2277)

- Vertical projection is NAVD88
- Units are in feet denoting orthometric heights
- Structure for data  tiles conforms to 1/64th USGS 7.5-minute quadrangle
  Quarter-quarter-quarter quadrangle (DOQQQQ, or DO4Q)
