---
title: 2018 Lidar Data Release for Crockett County
author: Joey Thomas, StratMap
layout: news-article.njk
mainimage: https://tnris-org-static.s3.amazonaws.com/images/stratmap_2018_50cm_crockett_lidar_overview.jpg
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/stratmap_2018_50cm_crockett_lidar_th.jpg
thumbalt: A thumbnail for Crockett County Lidar
abstract: A collaborative initiative to capture high-quality Lidar data for portions of Crockett County.
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of approximately 484 square miles of newly acquired high resolution lidar data for portions of Crockett County. This project was managed by the Texas Strategic Mapping ([StratMap](https://tnris.org/stratmap/)) Program and utilized the [StratMap Contracts](https://tnris.org/stratmap/stratmap-contracts/) held by the Department of Information Resources (DIR). Collection took place during the leaf-off season in Texas.

The StratMap contributing partner for this project was the Texas Commission on Environmental Quality (TCEQ). Lidar acquired from this project will be used for floodplain management and planning, feature extraction, water quality modeling, stream restoration potential analysis, change detection, 9-1-1, wildfire mitigation, habitat identification/modeling for endangered species, and dam safety. Data acquisition and processing were performed by the [Sanborn Map Company](https://www.sanborn.com). The project area of interest covers a gap in Texas where no lidar data previously existed.

Further details regarding this acquisition can be found by downloading the Project Report(s) found in the DataHub entry.

## Data Access
<div class="media">
  <div class="media-body">
    <p>Lidar data and the associated geospatial products for this project are available for the cost of reproduction through the TNRIS Research and Distribution Center (RDC).</p>
    <p>
      Browse, download, order, and inquire about data within the <a href="https://data.tnris.org">DataHub</a>.
    </p>
  </div>
</div>



## Coverage Area

View coverage areas in the interactive map below:

<iframe width="100%" height="520" frameborder="0" src="https://tnris-twdb.carto.com/u/tnris/builder/1be7ada8-df6b-4df6-a7f4-42ed8901c704/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Please see our [Lidar status map](https://tnris-twdb.carto.com/u/tnris-sm/builder/a5dfc759-9a90-4acd-a8d1-57d521c7e1fe/public_map) for statewide lidar coverage.

## PRODUCTS
- Classified all-return lidar in DO4Q tiles (1/64th of USGS Quad) or National Grid tiles in LAS 1.4 format
- Bare-earth digital elevation model (DEM) in USGS .dem or .img format (1-meter)
- Lidar intensity images in GeoTIFF format (1-meter)
- Hydro-flattening breaklines in SHP or Geodatabase
- File-level FGDC metadata in XML


<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/stratmap_2018_50cm_crockett_lidar_detail.jpg" alt="detail image of the Crockett County Lidar">

## PRODUCT SPECIFICATION
- Vertical NVA RMSEz tested 8.138 cm. The tested accuracy in all areas meets the project specification for 10 cm.
- Average first-return point density is 4.97 points per square meter (ppsm) meeting the 4 ppsm project specification.
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
