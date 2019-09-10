---
title: 2017 Lidar Data Release for Central Texas
author: Joey Thomas, StratMap
layout: news-article.njk
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/stratmap_2017_50cm_central_texas_lidar_th.jpg
thumbalt: A thumbnail for Central Texas Lidar dataset
abstract: A collaborative initiative to capture high-quality Lidar data for Central Texas
---

<figure>
<div id="imageCompare1" class='twentytwenty-container new-old-lidar'>
  <img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/dt_austin_new.jpg" alt="New Lidar">
  <img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/dt_austin_old.jpg" alt="Old Lidar">
</div>
<figcaption>Comparison between <a href="/data-catalog/entry/stratmap-2017-50cm-central-texas-lidar">StratMap 2017 Lidar</a> (left) and <a href="/data-catalog/entry/capcog-2012-140cm">2012 CAPCOG Lidar</a> (Right)</figcaption>
</figure>

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of approximately 6,570 square miles of newly acquired high resolution lidar data for portions of Central Texas. This project was managed by the Texas Strategic Mapping ([StratMap](https://tnris.org/stratmap/)) Program and utilized the [StratMap Contracts](https://tnris.org/stratmap/stratmap-contracts/) held by the Department of Information Resources (DIR). Collection took place during the leaf-off season in Texas.

The StratMap contributing partners for this project were the Texas Water Development Board (TWDB), U.S. Geological Survey (USGS), Natural Resources Conservation Service (NRCS), U.S. Fish and Wildlife Service (USFWS), Williamson County, San Antonio River Authority, City of San Marcos and the City of Round Rock. Lidar acquired from this project will be used for floodplain management and planning, feature extraction, water quality modeling, stream restoration potential analysis, change detection, 9-1-1, wildfire mitigation, habitat identification/modeling for endangered species, and dam safety. The project Area of Interest covers areas where previous lidar acquisition did not meet USGS Quality level 2 data specifications.

Further details regarding these acquisitions can be found by downloading the Project Report(s) found in their DataHub entries.

## Data Access
<div class="media">
  <div class="media-body">
    <p>Lidar data and the associated geospatial products for this project are available for the cost of reproduction through the <a href="https://data.tnris.org">DataHub</a>.</p>
    <p>
      Browse, download, order, and inquire about data within the <a href="https://data.tnris.org">DataHub</a>.
    </p>
  </div>
</div>

## Coverage Area

View coverage areas in the interactive map below:

<iframe width="100%" height="520" frameborder="0" src="https://tnris-twdb.carto.com/u/tnris/builder/525a47fe-4e54-4a4a-a074-449aa3022c48/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Please see our [Lidar status map](https://tnris-twdb.carto.com/u/tnris-sm/viz/a5dfc759-9a90-4acd-a8d1-57d521c7e1fe/public_map) for statewide lidar coverage.

## PRODUCTS
- Classified all-return lidar in DO4Q tiles (1/64th of USGS Quad) or National Grid tiles in LAS 1.4 format
- Bare-earth digital elevation model (DEM) in USGS .dem or .img format (1-meter)
- Lidar intensity images in GeoTIFF format (1-meter)
- Hydro-flattening breaklines in SHP or Geodatabase
- File-level FGDC metadata in XML


<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/dt_austin_new.jpg" alt="detail image of Central Texas Lidar">

## PRODUCT SPECIFICATION
- Vertical NVA RMSEz tested ~3.37 cm for the San Antonio block and  ~5.35 cm in the La Grange/ Austin block. The tested accuracy in all areas exceeds the project specification for 10 cm.
- Average first-return point density is slightly over 4 points per square meter (ppsm) in all areas of interest, meeting the 4 ppsm  project specification.
- Point data is classified according to the following American Society for Photogrammetry and Remote Sensing (ASPRS) class schema:
  * Class 1:  Unclassified
  * Class 2:  Ground
  * Class 3:  Low vegetation
  * Class 4:  Medium vegetation
  * Class 5:  Tall vegetation
  * Class 6:  Buildings
  * Class 7:  Low Point (noise)
  * Class 9:  Water
  * Class 10: Ignored Ground
  * Class 13: Bridges
  * Class 14: Culverts

- **Projection Specifications**
  + Horizontal projection is UTM NAD83 (2011) Zone 14
  + Vertical projection is NAVD88 Geoid 12B
  + Units are in meters denoting orthometric heights
