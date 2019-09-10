---
layout: news-article.njk
title: "Lidar Data Release For Georgetown, Texas"
author: Joey Thomas, StratMap
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/courthouse_th.jpg
mainimage:
imagealt: A sample of collected Lidar data
abstract:
    TNRIS is releasing newly acquired high resolution Lidar data for 224 square miles of Central Texas in the City of Georgetown area.
tags: lidar, data
---
The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of newly acquired high resolution Lidar data for 224 square miles of Georgetown, Texas. Aerial collection took place on December 29, 2014 during the leaf-off season. Sanborn Map Company performed the data acquisition/processing while AECOM provided third-party quality assurance and quality control (QA/QC).

<figure>
<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/williamson_courthouse.jpg" alt="A point cloud of the Williamson County Courthouse">
<figcaption>A point cloud of the Williamson County Courthouse</figcaption>
</figure>

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
<iframe width="100%" height="520" frameborder="0" src="https://tnris.cartodb.com/viz/a3cf9e14-3a1d-11e5-9323-0e0c41326911/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

The map above shows the area of acquisition. The data is available in DO4Q tiles.

## Products

-	Classified all-return Lidar DO4Q tiles (1/64th of USGS Quad) in LAS 1.2 format
-	Bare-earth digital elevation model (DEM) in USGS .dem format (1-meter)
-	Lidar intensity images in GeoTIFF format (1-meter)
-	Hydro-flattening breaklines in SHP
-	File-level FGDC metadata in XML

<figure>
<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/southwestern_dem.jpg" alt="A point cloud of Southwestern University in Georgetown">
<figcaption>A point cloud of Southwestern University in Georgetown</figcaption>
</figure>

## Product Specification

- Vertical accuracy (RMSEz) of 5.8 cm  which exceeds the project specification of 10 cm.
- Average first-return point density is 4 points per square meter (ppsm).

- Point data are classified according to the following American Society for Photogrammetry and Remote Sensing (ASPRS) class schema:
  - Class 1: Unclassified
  - Class 2: Ground
  - Class 4: Vegetation
  - Class 6: Buildings
  - Class 7. Low Point (noise)
  - Class 9. Water
  - Class 10 Ignored Water
  - Class 11 Withheld
  - Class 13. Bridges
  - Class 14. Culverts
- Horizontal projection is UTM NAD83 (2011) Zones 14N

- Vertical projection is NAVD88 Geoid 12A
- Units are in meters denoting orthometric heights
- Structure for data  tiles conforms to 1/64th USGS 7.5-minute quadrangle
  Quarter-quarter-quarter quadrangle (DOQQQQ, or DO4Q)
