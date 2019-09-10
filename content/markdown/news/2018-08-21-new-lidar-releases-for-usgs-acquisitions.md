---
title: "New Lidar Releases for USGS Acquisitions"
author: Joey Thomas, StratMap
layout: news-article.njk
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/usgs_2014_70cm_archer_jack_th.jpg
mainimage: https://tnris-org-static.s3.amazonaws.com/images/usgs_2014_70cm_archer_jack_overview.jpg
abstract:
  We now have USGS initiatives to capture high-quality lidar data for parts of the Neches River Basin, Jack & Archer County, Lake Amistad, and the Middle Brazos Lake Whitney Watershed available.
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of ~18,580 square miles of recently acquired high resolution Light Detection and Ranging Lidar data from five federal agency collections from 2014-2017. Aerial collection took place during the leaf-off season in Texas.

The primary purpose of these projects was to develop consistent and accurate USGS Quality Level 2 (QL2) elevation datasets from high-accuracy lidar.

Details regarding these acquisitions can be found by downloading the supplemental reports found in their DataHub entries.

## Data Access
<div class="media">
  <div class="media-body">
    <p>Lidar data and the associated geospatial products are available for the cost of reproduction through TNRIS.</p>
    <p>
      Browse, download, order, and inquire about data within the <a href="https://data.tnris.org">DataHub</a>.
    </p>
  </div>
</div>

## Coverage Areas

View coverage areas in the interactive maps below:

<div class="row">
  <div class="col-md-6"><h4>USGS 2014 70cm Archer Jack Lidar</h4><br>
    <iframe width="100%" height="350" frameborder="0" src="https://tnris-twdb.carto.com/u/tnris/builder/6281454c-02b3-44d2-a070-0739abb13a34/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe></div>
  <div class="col-md-6"><h4>USGS 2017 70cm Amistad National Recreation Area Lidar</h4>
    <iframe width="100%" height="350" frameborder="0" src="https://tnris-twdb.carto.com/u/tnris/builder/5de4831e-ad42-4d17-8574-0965c052b367/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe></div>
</div>

<div class="row">
  <div class="col-md-6"><h4>USGS 2016 70cm Neches River Basin Lidar</h4><br>
    <iframe width="100%" height="350" frameborder="0" src="https://tnris-twdb.carto.com/u/tnris/builder/6f19d035-4c89-4f86-b758-ab25745081eb/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe></div>
  <div class="col-md-6"><h4>USGS 2016 Middle Brazos and Lake Whitney 70cm Lidar</h4>
    <iframe width="100%" height="350" frameborder="0" src="https://tnris-twdb.carto.com/u/tnris/builder/28b3244e-cac1-4694-b156-3a4a72895959/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe></div>
</div>

Please see our [Lidar status map](https://tnris-twdb.carto.com/u/tnris-sm/builder/a5dfc759-9a90-4acd-a8d1-57d521c7e1fe/public_map) for statewide lidar coverage.

## PRODUCTS
- Classified all-return lidar in National Grid tiles in LAS 1.4 format
- Bare-earth digital elevation model (DEM) in an .img format (1-meter)
- Hydro-flattening breaklines in SHP or Geodatabase
- File-level FGDC metadata in XML

<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/usgs_2014_70cm_archer_jack_detail.jpg" alt="Preview of Archer Jack lidar">
<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/usgs_2017_70cm_amistad_nra_overview.jpg" alt="Preview of Lake Amistad lidar">
<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/usgs_2016_70cm_neches_river_basin_overview.jpg" alt="Preview of Neches River Basin lidar">
<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/usgs_2016_middle_brazos_lake_whitney_overview.jpg" alt="Preview of Lake Whitney lidar">

## PRODUCT SPECIFICATION
- Vertical accuracy (RMSEz) standard for these projects were produced to meet 10cm. Exact project details can be found in the supplemental reports of the respective projects
- Average first-return point density for these projects were produced to meet 2 points per square meter.
- Point data are classified according to the following American Society for Photogrammetry and Remote Sensing (ASPRS) class schema:
  * Class 1: Unclassified, used for all other features that do not fit into the Classes 2, 7, 9, 10,17, or 18, including vegetation, buildings, etc.
  * Class 2: Bare-Earth Ground
  * Class 7. Low Noise
  * Class 9. Water, points located within collected breaklines
  * Class 10. Ignored Ground due to breakline proximity
  * Class 17. Bridge Decks
  * Class 18. High Noise



**Projection and Tiling**
- Horizontal projection is UTM NAD83(2011) Zones 14-15
- Vertical projection is NAVD88 Geoid 12A-12B
- Units are in meters denoting orthometric heights
- Structure for data listed above shall conform to the US National Grid
