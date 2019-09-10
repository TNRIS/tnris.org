---
title: "2014-2016 FEMA Lidar datasets for Texas "
author: Joey Thomas, StratMap
layout: news-article.njk
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/fema_2014_rio_grande_th.jpg
thumbalt:
mainimage: https://tnris-org-static.s3.amazonaws.com/images/fema_2014_rio_grande_overview.jpg
mainimagealt:
abstract:
    FEMA initiatives in Texas to capture high-quality lidar data for parts of the Rio Grande River, DeWitt County, and the Upper Clear
    Fork of the Brazos River.
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of 4,480 square miles of newly acquired high resolution Light Detection and Ranging (lidar) data from three FEMA Collections from 2014-2016. Aerial collection took place during the leaf-off season in Texas.

The primary purpose of these projects was to develop a consistent and accurate USGS Quality Level 2 (QL2) surface elevation datasets derived from high-accuracy lidar technology.

Details regarding these acquisitions can be found by downloading the Project Report(s) found in their DataHub entries.

## Data Access
<div class="media">
  <div class="media-body">
    <p>Lidar data and the associated geospatial products are available for the cost of reproduction through TNRIS.</p>
    <p>
      Browse, download, order, and inquire about data within the <a href="https://data.tnris.org">DataHub</a>.
    </p>
  </div>
</div>

Please check our [Lidar status map](https://tnris-twdb.carto.com/viz/a47e9bc6-2454-11e7-bcd5-0e3ebc282e83/public_map) for exact coverage.

## PRODUCTS
- Classified all-return lidar in DO4Q tiles (1/64th of USGS Quad) or National Grid tiles in LAS 1.2 format
- Bare-earth digital elevation model (DEM) in USGS .dem or .img format (1-meter)
- Lidar intensity images in GeoTIFF format (1-meter)
- Hydro-flattening breaklines in SHP or Geodatabase
- File-level FGDC metadata in XML


## PRODUCT SPECIFICATION
- Vertical accuracy (RMSEz) tested ~8.5 cm in Lampasas AOI, ~12 cm in Bandera AOI, and ~6 cm in Fort Bend for open areas. The tested accuracy in all areas meets or exceeds the project specification of 12 cm.
- Average first-return point density is slightly over 4 points per square meter (ppsm) in all areas of interest, meeting the 4 ppsm state standard identified in the project specification.
- Point data are classified according to the following American Society for Photogrammetry and Remote Sensing (ASPRS) class schema:
  * Class 1: Unclassified
  * Class 2: Ground
  * Class 7. Low Point (noise)
  * Class 9. Water
  * Class 10. Ignored Ground
  * Class 17. Overlap Default
  * Class 18. Overlap Bare-Earth Ground

<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/natural.jpg" alt="Some hill features captured by lidar">

**Rio Grande AOI**
- Horizontal projection is UTM NAD83 (2011) Zone 13
- Vertical projection is NAVD88 Geoid 12A
- Units are in meters denoting orthometric heights
- Structure for data listed above shall conform to the US National Grid


**Upper Clear Fork of the Brazos AOI**

- Horizontal projection is UTM NAD83 (2011) Zone 14
- Vertical projection is NAVD88 Geoid 12A
- Units are in meters denoting orthometric heights
- Structure for data listed above shall conform to US National Grid


**DeWitt County AOI**

- Horizontal projection NAD83 State Plane  TX South Central FIPS 4204
- Vertical projection is NAVD88 Geoid 12A
- Units are in meters denoting orthometric heights
- Structure for data listed above shall conform to 1/64th USGS 7.5-minute quadrangle
- Quarter-quarter-quarter quadrangle (DOQQQQ, or DO4Q)
