---
title: 2015 Lidar Data Release for Brazos County
author: Joey Thomas, StratMap
layout: news-article.njk
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/brazos_lidar_th.jpg
thumbalt: A thumbnail for brazos lidar, showing a 3-D Stadium
mainimage: https://tnris-org-static.s3.amazonaws.com/images/brazos_lidar_main.jpg
mainimagealt: 3-D Lidar rendering of Texas A&M University
abstract:
    A collaborative initiative to capture high-quality Lidar data for Brazos County, Texas
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of newly acquired high resolution Lidar data for 286 square miles of Brazos County, Texas. Aerial collection took place February 9-10, 2015, during the leaf-off season. [Dewberry](http://www.dewberry.com/services/geospatial) performed data acquisition/processing while [Surveying and Mapping, LLC](http://www.sam.biz/) provided third-party quality assurance and quality control (QA/QC).

This project was administered by the TNRIS Strategic Mapping Program (StratMap) and the data were procured through the Council on Competitive Government’s (CCG) High Priority Imagery and Datasets (HPIDS) contract. Funding was provided by the [City of College Station](http://www.cstx.gov/), [City of Bryan](https://www.bryantx.gov/) and [Texas A&M University](http://www.tamu.edu/).

<img class="img-responsive" src=>

## Data Access
<div class="media">
  <div class="media-body">
    <p>Lidar data and the associated geospatial products are available for cost of reproduction through TNRIS.</p>
    <p>
      Browse, download, order, and inquire about data within the <a href="https://data.tnris.org">DataHub</a>.
    </p>
  </div>
</div>

## Coverage Area

View coverage areas in the interactive map below:

<iframe width="100%" height="520" frameborder="0" src="https://tnris.cartodb.com/viz/9214a5fa-63b4-11e5-9475-0e73ffd62169/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Please check our [Lidar status map](http://tnris.maps.arcgis.com/apps/Viewer/index.html?appid=3a5712b6cc36472f8036446e7b49c52d) for exact coverage.
## Products
- Classified all-return lidar DO4Q tiles (1/64th of USGS Quad) in LAS 1.2 format
- Bare-earth digital elevation model (DEM) in USGS .dem format (1-meter)
- Lidar intensity images in GeoTIFF format (1-meter)
- Hydro-flattening breaklines in SHP
- File-level FGDC metadata in XML


<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/brazos_lidar_overview.jpg">

## Product Specification
- Vertical accuracy (RMSEz) tested 4.4 cm in non-vegetation.
- Average first-return point density is slightly over 4 points per square meter (ppsm)
- Point data are classified according to the following American Society for Photogrammetry and Remote Sensing (ASPRS) class schema:
  * Class 1: Unclassified
  * Class 2: Ground
  * Class 3: Low Vegetation
  * Class 4: Medium Vegetation
  * Class 5: High Vegetation
  * Class 6: Buildings
  * Class 7: Low Point (noise)
  * Class 9: Water
  * Class 13: Bridges
  * Class 14: Culverts
- **Projection Specifications**
  + Horizontal projection is UTM NAD83 (NSRS 2007) Zones 14
  + Vertical projection is NAVD88 Geoid 12A
  + Units are in meters denoting orthometric heights
  + Structure for data listed above shall conform to 1/64th USGS 7.5-minute quadrangle
  + Quarter-quarter-quarter quadrangle (DOQQQQ, or DO4Q)
