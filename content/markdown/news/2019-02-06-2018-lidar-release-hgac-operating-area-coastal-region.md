---
title: 2018 Lidar Data Release for the H-GAC Operating Area & Coastal Region
author: Joey Thomas, StratMap
layout: news-article.njk
mainimage: https://cdn.tnris.org/images/2018_coastal_lidar_release_banner.jpg
thumbnail: https://cdn.tnris.org/images/2018_coastal_lidar_release_th.jpg
thumbalt: A thumbnail for H-GAC Operating Area & Coastal Region
abstract: A collaborative initiative to capture high-quality Lidar data for the H-GAC operating area and portions of the Texas coast.
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of approximately 9167 square miles of newly acquired high resolution lidar data for portions of the Texas coastal region. This project was managed by the Texas Strategic Mapping ([StratMap](https://tnris.org/stratmap/)) Program and utilized the [StratMap Contracts](https://tnris.org/stratmap/stratmap-contracts/) held by the Department of Information Resources (DIR). Collection took place during the leaf-off season in Texas.

The StratMap contributing partners for this project were the Texas Water Development Board(TWDB), the Houston-Galveston Area Council of Governments(H-GAC), and the United States Geological Survey(USGS) 3-D Elevation Program. Lidar acquired from this project will be used for floodplain management and planning, feature extraction, water quality modeling, stream restoration potential analysis, change detection, 9-1-1, wildfire mitigation, habitat identification/modeling for endangered species, and hurricane recovery projects. Data acquisition and processing was performed by [Fugro USA Land](https://www.fugro.com/our-services/asset-integrity/mapping-and-surveying) with third-party QA/QC being performed by [AECOM](https://www.aecom.com/). The project area of interest covers areas where previous lidar data were acquired a decade ago.

Further details regarding this acquisition can be found by downloading the [StratMap 2018 Upper Texas Coast Project Reports](https://s3.amazonaws.com/tnris-datadownload/datacatalog/supplemental_reports/stratmap_2018_50cm_upper_coast_supplementalreports.zip).



## Data Access





<div class="media">
  <div class="media-left">
    <a class="btn btn-lg btn-tnris" href="https://data.tnris.org/collection/b5bd2b96-8ba5-4dc6-ba88-d88133eb6643"><img style="width: 20px; margin-bottom: 0 !important;" src="https://cdn.tnris.org/images/baseline_view_comfy_white_36dp.png"> Launch DataHub</a>
  </div>
  <div class="media-body">
    <p>To download the Upper Coast lidar data products, please use the <a href="https://data.tnris.org/collection/b5bd2b96-8ba5-4dc6-ba88-d88133eb6643">DataHub</a>.</p>
  </div>
</div>

<div class="media">
  <div class="media-body">
    <p>Lidar data and the associated geospatial products for this project are available for the cost of reproduction through the TNRIS Research and Distribution Center (RDC) and the <a href="https://data.tnris.org">Data Download</a></p>
  </div>
</div>



## Coverage Area

View coverage areas in the interactive map below:

<iframe title="Coverage area" width="100%" height="520" frameborder="0" src="https://tnris-twdb.carto.com/u/tnris/builder/f4af476f-dae0-49a4-b3e9-a12399020c77/embed" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Please see our [Lidar status map](https://tnris-twdb.carto.com/u/tnris-sm/builder/a5dfc759-9a90-4acd-a8d1-57d521c7e1fe/public_map) for statewide lidar coverage.


## PRODUCTS
- Classified all-return lidar in DO4Q tiles (1/64th of USGS Quad)  LAS 1.4 format
- Bare-earth digital elevation model (DEM) in .img format (1-meter)
- Lidar intensity images in GeoTIFF format (1-meter)
- Hydro-flattening breaklines in SHP or Geodatabase
- File-level FGDC metadata in XML

## PRODUCT SPECIFICATION
- Vertical NVA RMSEz tested 4.910 cm. The tested accuracy in all areas meets the project specification for an NVA RMSEz of 10 cm.
- Average first-return point density is 4.37 points per square meter (ppsm) meeting the 4 ppsm project specification.
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
  * Class 14: Culverts
  * Class 17: Bridges

- **Projection Specifications**
  + Horizontal projection is UTM NAD83 (2011) Zone 14 & Zone 15
  + Vertical projection is NAVD88 Geoid 12B
  + Units are in meters denoting orthometric heights
