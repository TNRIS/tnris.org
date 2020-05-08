---
title: 2015 Lidar Data Release for Middle Brazos-Palo Pinto FEMA Project
author: Joey Thomas, StratMap
layout: news-article.njk
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/fema_2015_60cm_middle_brazos_palo_pinto_th.jpg
thumbalt: A thumbnail for Middle Brazos Palo Pinto Lidar
mainimage: https://tnris-org-static.s3.amazonaws.com/images/fema_2015_60cm_middle_brazos_palo_pinto_overview.jpg
mainimagealt: 3-D Lidar rendering of Middle Brazos Palo Pinto
abstract:
    A FEMA initiative to capture high-quality Lidar data for parts of Palo Pinto, Stephens, Hood, Johnson, Erath, Eastland, and Somervell Counties
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of newly acquired FEMA high resolution Lidar data for 932 square miles of North Texas. Aerial collection took place during January 03, 2015 and February 09, 2015 during the leaf-off season. The Risk Assessment, Mapping, and Planning Partners performed data acquisition/processing  as well as the  quality assurance and quality control (QA/QC).

The primary purpose of this project was to develop a consistent and accurate surface elevation dataset derived from high-accuracy Light Detection and Ranging (Lidar) technology for the FEMA Middle Brazos-Palo Pinto, TX Lidar Project Area.

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

<!---## Coverage Area

View coverage areas in the interactive map below:

<iframe width="100%" height="520" frameborder="0" src="https://tnris.cartodb.com/viz/d698a32c-87b6-11e5-9eed-0ecfd53eb7d3/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe> --->

Please check our [Lidar status map](http://tnris.maps.arcgis.com/apps/Viewer/index.html?appid=3a5712b6cc36472f8036446e7b49c52d) for exact coverage.
## Products
- Classified all-return lidar tiles (US Grid)) in LAS 1.2 format
- Bare-earth digital elevation model (.img format)
- Lidar intensity images in GeoTIFF format
- Hydro-flattening breaklines (File GDB)
- File-level FGDC metadata in XML


<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/fema_2015_60cm_middle_brazos_palo_pinto_2.jpg">

## Product Specification
- Vertical accuracy (RMSEz) tested 9.6 cm in non-vegetation.
- Average first-return point density is  2.2 points per square meter (ppsm)
  * Class 1: Unclassified
  * Class 2: Ground
  * Class 7: Low Point (noise)
  * Class 9: Water
  * Class 10: Ignored Ground due to breakline proximity
  * Class 11: Withheld, Points, with scan angles exceeding +/- 20 degrees
- **Projection Specifications**
  + Horizontal projection is UTM NAD83  Zones 14
  + Vertical projection is NAVD88 Geoid 12A
  + Units are in meters denoting orthometric heights
