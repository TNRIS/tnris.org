---
title: 2019 StratMap Lidar Releases for Brown County and Missouri City
author: Joey Thomas, StratMap
layout: news-article.njk
mainimage: https://s3.amazonaws.com/data.tnris.org/46b000dd-83b2-4701-b5c6-3f6e18cedccf/assets/34a0cde1-d679-411c-8ced-973143b93d26.jpg
thumbnail: https://cdn.tnris.org/images/brown_missouri_th.jpg
thumbalt: A thumbnail for StratMap 2019 Lidar Projects
abstract: A collaborative initiative to capture high-quality Lidar data for portions of Brown County and Missouri City, Texas.
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of approximately 228 square miles of newly acquired high resolution lidar data for portions of Brown County and Fort Bend County. This project was managed by the Texas Strategic Mapping ([StratMap](https://tnris.org/stratmap/)) Program and utilized the [StratMap Contracts](https://tnris.org/stratmap/stratmap-contracts/) held by the Department of Information Resources (DIR). Collection took place during the leaf-off season in Texas.

The StratMap contributing partner for this project was the Texas Commission on Environmental Quality (TCEQ) and Missouri City, Texas. Lidar acquired from this project will be used for floodplain management and planning, feature extraction, water quality modeling, stream restoration potential analysis, change detection, 9-1-1, wildfire mitigation, habitat identification/modeling for endangered species, and dam safety. Data acquisition and processing were performed by the [Sanborn Map Company](https://www.sanborn.com).

Further details regarding this acquisition can be found by downloading the Project Report(s) found in the data catalog entry.

## Data Access

<p>To download the StratMap 2019 lidar data products, please use the <a href="https://data.tnris.org/catalog/%7B%22search%22%3A%22StratMap%20Lidar%202019%22%7D">DataHub</a>.</p>

<a class="btn btn-lg btn-tnris" href="https://data.tnris.org/catalog/%7B%22search%22%3A%22StratMap%20Lidar%202019%22%7D"><img style="width: 20px; margin-bottom: 0 !important;" src="https://cdn.tnris.org/images/baseline_view_comfy_white_36dp.png"> Launch DataHub</a>

## Data coverage
<img src="https://cdn.tnris.org/images/brown_missouri_city.jpg" class="img-responsive" alt="Map showing StratMap 2019 Lidar Projects">

Please see our [Lidar status map](https://tnris-twdb.carto.com/u/tnris-sm/builder/a5dfc759-9a90-4acd-a8d1-57d521c7e1fe/public_map) for statewide lidar coverage.

## Products
- Classified all-return lidar in DO4Q tiles (1/64th of USGS Quad) or National Grid tiles in LAS 1.4 format
- Bare-earth digital elevation model (DEM) in USGS .dem or .img format (1-meter)
- Lidar intensity images in GeoTIFF format (1-meter)
- Hydro-flattening breaklines in SHP or Geodatabase
- File-level FGDC metadata in XML

#### 3-D Image of Brown County Lidar

<img class="img-responsive" src="https://s3.amazonaws.com/data.tnris.org/46b000dd-83b2-4701-b5c6-3f6e18cedccf/assets/d213837e-d966-4291-bcf0-078da17d9e13.jpg" alt="detail image of the Brown County Lidar">

#### 3-D Image of Missouri City Lidar

<img class="img-responsive" src="https://s3.amazonaws.com/data.tnris.org/66d886a6-13b9-46a9-936a-bf2ce4f71aaf/assets/2abdf2da-60d1-43d8-bca3-1627da2c337d.jpg" alt="detail image of the Missouri City Lidar">

## Product Specification
- Vertical NVA RMSEz tested 7.85 cm (Brown County) and  6.2 cm(Missouri City). The tested accuracy in all areas meets the project specification for 10 cm.
- Average first-return point density meets the 4 ppsm project specification.
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
