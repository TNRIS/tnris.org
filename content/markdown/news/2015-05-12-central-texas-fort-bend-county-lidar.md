---
title: 2014 Central Texas and Fort Bend County LiDAR
author: Joey Thomas, StratMap
layout: news-article.njk
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/central_tx_lidar_th.jpg
thumbalt: Thumb for Central Texas Lidar Article
mainimage: https://tnris-org-static.s3.amazonaws.com/images/house.jpg
mainimagealt: Houses captured by Lidar
abstract:
    A collaborative initiative to capture high-quality Lidar data for parts of Bandera, Fort Bend, Lampasas, Mills and Uvalde County, Texas
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of newly acquired high resolution Lidar data for 3242 square miles of parts of Bandera, Fort Bend, Lampasas, Mills and Uvalde County, Texas. Aerial collection took place from January to March 2013 during the leaf-off season. Fugro performed data acquisition/processing while URS Corporation provided third-party quality assurance and quality control (QA/QC).

This project was administered by the TNRIS Strategic Mapping Program (StratMap) and the data were procured through the Council on Competitive Government’s (CCG) High Priority Imagery and Datasets (HPIDS) contract. Funding was provided by the U.S. Department of Agriculture Natural Resources Conservation Service (NRCS), Texas Parks & Wildlife Department (TPWD), Central Texas Council of Governments (CTCOG) and Bandera County River Authority and Groundwater District (BCRAGD) working in coordination with the San Antonio River Authority (SARA).

<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/DEM.jpg" alt="A DEM of Central Texas Lidar">

## Data Access
<div class="media">
  <div class="media-body">
    <p>Lidar data and the associated geospatial products are available for cost of reproduction through TNRIS.</p>
    <p>
      Browse, download, order, and inquire about data within the <a href="https://data.tnris.org">DataHub</a>.
    </p>
  </div>
</div>

Please check our [Lidar status map](http://tnris.maps.arcgis.com/apps/Viewer/index.html?appid=3a5712b6cc36472f8036446e7b49c52d) for exact coverage.


##PRODUCTS
- Classified all-return lidar DO4Q tiles (1/64th of USGS Quad) in LAS 1.2 format
- Bare-earth digital elevation model (DEM) in USGS .dem format (1-meter)
- Lidar intensity images in GeoTIFF format (1-meter)
- Hydro-flattening breaklines in SHP
- File-level FGDC metadata in XML
- 1ft contours for Fort Bend County AOI

## PRODUCT SPECIFICATION
- Vertical accuracy (RMSEz) tested ~8.5 cm in Lampasas AOI, ~12 cm in Bandera AOI, and ~6 cm in Fort Bend for open areas. The tested accuracy in all areas meets or exceeds the project specification of 12 cm.
- Average first-return point density is slightly over 4 points per square meter (ppsm) in all areas of interest, meeting the 4 ppsm state standard identified in the project specification.
- Point data are classified according to the following American Society for Photogrammetry and Remote Sensing (ASPRS) class schema:
  * Class 1: Unclassified
  * Class 2: Ground
  * Class 4: Vegetation
  * Class 6: Buildings
  * Class 7. Low Point (noise)
  * Class 9. Water
  * Class 13. Bridges and Culverts

<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/natural.jpg" alt="Some hill features captured by Lidar">

**Bandera and Lampasas AOI’s**
- Horizontal projection is UTM NAD83 (NSRS 2007) Zones 14
- Vertical projection is NAVD88 Geoid 12A
- Units are in meters denoting orthometric heights
- Structure for data listed above shall conform to 1/64th USGS 7.5-minute quadrangle
- Quarter-quarter-quarter quadrangle (DOQQQQ, or DO4Q)

**Fort Bend AOI**

- Horizontal projection NAD83 State Plane  TX South Central FIPS 4204
- Vertical projection is NAVD88 Geoid 12A
- Units are in feet denoting orthometric heights
- Structure for data listed above shall conform to 1/64th USGS 7.5-minute quadrangle
- Quarter-quarter-quarter quadrangle (DOQQQQ, or DO4Q)
