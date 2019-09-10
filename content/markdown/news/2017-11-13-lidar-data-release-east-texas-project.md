---
title: 2017 Lidar Data Release for East Texas
author: Joey Thomas, StratMap
layout: news-article.njk
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/stratmap_2017_50cm_east_texas_lidar_th.jpg
thumbalt: A thumbnail for East Texas Lidar dataset
mainimage: https://tnris-org-static.s3.amazonaws.com/images/stratmap_2017_50cm_east_texas_lidar_overview.jpg
mainimagealt: 3-D Lidar rendering of East Texas Lidar
abstract:
    A collaborative initiative to capture high-quality Lidar data for East Texas
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of approximately 3,501 square miles of newly acquired high resolution lidar data for portions of East Texas. This project was managed by the Texas Strategic Mapping (StratMap) Program and utilized the StratMap contracts held by the Department of Information Resources (DIR). Collection took place during the leaf-off season in Texas.

The StratMap contributing partners for this project were the TWDB and the Texas Commission on Environmental Quality (TCEQ). Lidar acquired from this project will be used for floodplain management and planning, feature extraction, water quality modeling, stream restoration potential analysis, change detection, 9-1-1, wildfire mitigation, habitat identification/modeling for endangered species, and dam safety. The project AOI covers areas where previously no lidar data existed.

Further details regarding these acquisitions can be found by downloading the Project Report(s) found in their DataHub entries.

## Data Access
<div class="media">
  <div class="media-body">
    <p>Lidar data and the associated geospatial products for this project are available for the cost of reproduction through the TNRIS Research and Distribution Center (RDC) and will become available via the website in the near future.</p>
    <p>
      Browse, download, order, and inquire about data within the <a href="https://data.tnris.org">DataHub</a>.
    </p>
  </div>
</div>

## Coverage Area

View coverage areas in the interactive map below:

<iframe width="100%" height="520" frameborder="0" src="https://tnris-twdb.carto.com/u/tnris/builder/bbedf274-2141-4b1c-a443-8d339e7a9e7c/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Please check our [Lidar status map](https://tnris-twdb.carto.com/u/tnris-sm/viz/a47e9bc6-2454-11e7-bcd5-0e3ebc282e83/public_map) for exact coverage.

## PRODUCTS
- Classified all-return lidar in DO4Q tiles (1/64th of USGS Quad) or National Grid tiles in LAS 1.4 format
- Bare-earth digital elevation model (DEM) in USGS .dem or .img format (1-meter)
- Lidar intensity images in GeoTIFF format (1-meter)
- Hydro-flattening breaklines in SHP or Geodatabase
- File-level FGDC metadata in XML


<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/stratmap_2017_50cm_east_texas_lidar_detail.jpg" alt="detail image of East Texas Lidar">

## PRODUCT SPECIFICATION
- Vertical NVA RMSEz tested ~4.7 cm for Southern block and 4.9-6.6 in northern block. The tested accuracy in all areas meets or exceeds the project specification for 10 cm.
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
  + Horizontal projection is UTM NAD83 (2011) Zone 14 & 15
  + Vertical projection is NAVD88 Geoid 12B
  + Units are in meters denoting orthometric heights