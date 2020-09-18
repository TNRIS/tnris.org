---
title: New USGS Lower Colorado San Bernard 2018 Lidar Data Release
author: Joey Thomas, StratMap
layout: news-article.njk
mainimage: https://s3.amazonaws.com/data.tnris.org/b246f8f7-9c79-4c89-91f7-9c7f44955fca/assets/2207731f-4d4c-494e-b9a3-cdadecb331b3.jpg
thumbnail: https://cdn.tnris.org/images/sanbernard_th.jpg
thumbalt: A thumbnail for USGS 2018 Lidar Projects
abstract: A collaborative initiative to capture high-quality Lidar data for portions of Western areas of South Central Texas.
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of about 17,942 square miles of recently acquired, high resolution lidar data over 26 counties in south central Texas. Aerial collection took place during the 2018 leaf-off season in Texas.

The project was funded by a federal consortium of partners to support the 3DEP mission, the Federal Emergency Management Agency (FEMA) Risk Mapping, Assessment, and Planning(MAP) program and the Natural Resources Conservation Service (NRCS) high resolution elevation enterprise program

Further details regarding this acquisition can be found by downloading the Project Report(s) found in the data catalog entry.

## Data Access

<p>To download the 2018 USGS Lower Colorado San Bernard lidar data products, please use the <a href="https://data.tnris.org/collection/b246f8f7-9c79-4c89-91f7-9c7f44955fca">DataHub</a>.</p>

<a class="btn btn-lg btn-tnris" href="https://data.tnris.org/collection/b246f8f7-9c79-4c89-91f7-9c7f44955fca"><img style="width: 20px; margin-bottom: 0 !important;" src="https://cdn.tnris.org/images/baseline_view_comfy_white_36dp.png"> Launch DataHub</a>

## Data coverage

<img src="https://cdn.tnris.org/images/lcb_coveragemap.jpg" class="img-fluid" alt="Map showing coverage of the USGS 2018 Lower Colorado San Bernard lidar project">

Please see our [Lidar status map](https://tnris-twdb.carto.com/u/tnris-sm/builder/a5dfc759-9a90-4acd-a8d1-57d521c7e1fe/public_map) for statewide lidar coverage.

## Products

-   Classified all-return lidar  in LAS 1.4 format
-   Bare-earth digital elevation model (DEM) in .img format (1-meter)
-   Lidar intensity images in GeoTIFF format (1-meter)
-   Hydro-flattening breaklines in SHP or Geodatabase
-   Project-level FGDC metadata in XML

#### Bare Earth Digital Elevation Model of Lower Colorado San Bernard Lidar

<img class="img-fluid" src="https://s3.amazonaws.com/data.tnris.org/b246f8f7-9c79-4c89-91f7-9c7f44955fca/assets/587cf3fe-c28f-4d2e-82c3-ee4d1586f10c.jpg" alt="detail image of the Lower Colorado San Bernard Lidar">

## Product Specification

-   Vertical NVA RMSEz tested 4.9 cm . The tested accuracy in all areas meets the project specification for 10 cm.
-   Average first-return point density meets the 2 ppsm project specification.
-   Point data is classified according to the following American Society for Photogrammetry and Remote Sensing (ASPRS) class schema:

    -   Class 1:  Unclassified
    -   Class 2:  Ground
    -   Class 7:  Low Point (noise)
    -   Class 9:  Water
    -   Class 10: Ignored Ground
    -   Class 14: Culverts
    -   Class 17: Bridges

-   **Projection Specifications**
    -   Horizontal projection is UTM NAD83 (2011) Zone 14
    -   Vertical projection is NAVD88 Geoid 12B
    -   Units are in meters denoting orthometric heights
