---
title: 2017 Lidar Data Release for Jefferson and Liberty Counties
author: Joey Thomas, StratMap
layout: news-article.njk
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/stratmap_2017_50cm_jefferson_35cm_chambers_liberty_lidar_th.jpg
thumbalt: A thumbnail for Jefferson/Liberty Texas Lidar dataset
abstract: A collaborative initiative to capture high-quality Lidar data for portions of the Texas coast in Jefferson and Liberty Counties.
---

<figure>
<div id="imageCompare1" class='twentytwenty-container coastal-lidar'>
  <img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/stratMap_2017_coastal_image.jpg" alt="New Lidar">
  <img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/fema_2006_compare.jpg" alt="Old Lidar">
</div>
<figcaption>Comparison between <a href="/data-catalog/entry/stratmap-2017-50cm-jefferson-35cm-chambers-liberty-lidar">StratMap 2017 Lidar</a> (left) and <a href="/data-catalog/entry/fema-2006-140cm">Fema 2006</a> (Right)</figcaption>
</figure>


The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of approximately 1,136 square miles of newly acquired high resolution lidar data for a portions of the North East Texas coast. This project was managed by the Texas Strategic Mapping ([StratMap](https://tnris.org/stratmap/)) Program and utilized the [StratMap Contracts](https://tnris.org/stratmap/stratmap-contracts/) held by the Department of Information Resources (DIR). Collection took place during the leaf-off season in Texas.

The StratMap contributing partners for this project were the Texas Water Development Board (TWDB) and the Trinity River Authority(TRA). Lidar acquired from this project will be used for floodplain management and planning, feature extraction, water quality modeling, stream restoration potential analysis, change detection, 9-1-1, wildfire mitigation, habitat identification/modeling for endangered species, and dam safety. The project Area of Interest covers areas where previous lidar acquisition did not meet USGS Quality level 2 data specifications.

Further details regarding these acquisitions can be found by downloading the Project Report(s) found in their DataHub entries.

## Data Access
<div class="media">
  <div class="media-body">
    <p>Lidar data and the associated geospatial products for this project are available for the cost of reproduction through the TNRIS Research and Distribution Center (RDC) and the <a href="https://data.tnris.org">Data Download</a>.</p>
    <p>
      Browse, download, order, and inquire about data within the <a href="https://data.tnris.org">DataHub</a>.
    </p>
  </div>
</div>

## Coverage Area

View coverage areas in the interactive map below:

<iframe width="100%" height="520" frameborder="0" src="https://tnris-twdb.carto.com/u/tnris/builder/1f82d0b8-4936-4ea7-af1e-4086b9181422/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Please see our [Lidar status map](https://tnris-twdb.carto.com/u/tnris-sm/builder/a5dfc759-9a90-4acd-a8d1-57d521c7e1fe/public_map) for statewide lidar coverage.

## PRODUCTS
- Classified all-return lidar in DO4Q tiles (1/64th of USGS Quad) or National Grid tiles in LAS 1.4 format
- Bare-earth digital elevation model (DEM) in USGS .dem or .img format (1-meter)
- Lidar intensity images in GeoTIFF format (1-meter)
- Hydro-flattening breaklines in SHP or Geodatabase
- File-level FGDC metadata in XML


<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/stratmap_2017_50cm_jefferson_35cm_chambers_liberty_lidar_overview.jpg" alt="detail image of the Jefferson and Liberty County Lidar">

## PRODUCT SPECIFICATION
- Vertical NVA RMSEz tested 9.992 cm for the Eastern block and 8.246 cm in the Western block. The tested accuracy in all areas meets the project specification for 10 cm.
- Average first-return point density is 4 points per square meter (ppsm) in the Eastern Block and 8ppsm in the Western block, meeting the 4 ppsm & 8ppsm  project specification.
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
  + Horizontal projection is UTM NAD83 (2011) Zone 15
  + Vertical projection is NAVD88 Geoid 12B
  + Units are in meters denoting orthometric heights
