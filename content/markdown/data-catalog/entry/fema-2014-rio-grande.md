---
name: FEMA 2014 Rio Grande River Lidar
short_description: <p>FEMA Lidar for portions of the Rio Grande River</p>
type: Raster
available_formats: LAS
source: FEMA
coverage_extent: El Paso, Hudspeth
data_download_lvl:
statewide_coverage:
footprint: US National Grid
download_size:
recommended_use: Basemap, Research, Analysis
date_created:
tags:
known_issues:
alternative_data: 1M Hydro-flattened DEM, 3D Breaklines
derivative_data: 5ft Contours
spatial_reference:
relationship_tag:
category: Lidar
download: T
download_link:
order: T
wms_category:
wms_link:
pop_link:
status_map_cartodb_id: d7929da2-bbde-11e6-bc2b-0e3ff518bd15
agency: FEMA
agency_web:
agency_gis_page:
date_added: 2017-4-20
license: CC0
tile_index: Lidar
supplemental_report: T
lidar_breaklines: T
urlized_name: fema-2014-rio-grande
filename: data-catalog/entry/fema-2014-rio-grande.md
layout: redirect.njk
title: FEMA 2014 Rio Grande
urlized_category: lidar
detail_image_url: images/data-catalog/entry/fema_2014_rio_grande_detail.jpg
overview_image_url: images/data-catalog/entry/fema_2014_rio_grande_overview.jpg
thumb_url: images/data-catalog/entry/fema_2014_rio_grande_th.jpg
supplemental_report_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/supplemental_reports/fema_2014_rio_grande_supplementalreports.zip
tile_index_url: https://tnris-datadownload.s3.amazonaws.com/d/tnris-lidar/state/tx/tnris-lidar_tx.zip
lidar_breaklines_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/lidar_breaklines/fema_2014_rio_grande_breaklines.zip
license_text: Public Domain (Creative Commons CC0)
license_url: https://creativecommons.org/publicdomain/zero/1.0/
---

FEMA Region 6 TX - Rio Grande and Fort Whitman Watershed QL2 LiDAR project called for the Planning, Acquisition, processing and derivative products of LIDAR data to be collected  at a nominal pulse spacing (NPS) of 0.7 meter.  Project specifications are based on the U.S. Geological Survey National Geospatial Program Base LIDAR Specification, Version 1.  The data was developed based on a horizontal projection/datum of NAD83, UTM Zone 13, Meters and vertical datum of NAVD1988 (GEOID12A), Meters.  LiDAR data was delivered in RAW flight line swath format, processed to create Classified LAS 1.2 Files formatted to 6 individual 1500m x 1500m tiles for the pilot (995 individual 1500m x 1500m tiles), and corresponding Intensity Images and Bare Earth DEMs tiled to the same 1500m x 1500m schema, and Breaklines in Esri shapefile format.

Ground Conditions: LiDAR was collected in Fall 2014, while no snow was on the ground and rivers were at or below normal levels.  In order to post process the LiDAR data to meet task order specifications, Photo Science established a total of 30 QA calibration control points and 80 Land Cover control points that were used to calibrate the LIDAR to known ground locations established throughout the Rio Grande and Fort Whitman Watershed project area.


Lidar data for Texas is made available online through the use of data compression using [LASTools](https://rapidlasso.com/lastools/). LASTools is an open-source collection of tools for lidar data viewing and manipulation. TNRIS uses the LASzip portion of LASTools for compression\decompression. LASTools provides a lossless compression of the data from las to laz formats.

- Software with native LAZ support
- ERDAS IMAGINE (14.1 and up) by Hexagon Geospatial
- Global Mapper (13.1 and up) by Blue Marble Geo
- ENVI LiDAR (5.1 and up) by Exelis VIS
- FME (2012 and up) by Safe Software
- LAStools by rapidlasso
- plas.io 3D Web Viewer by Hobu Inc.
- FUSION (3.40 and up) by Bob McGaughey of the USDA
- Voyager (1.3 and up) by Voyager GIS
- GRASS GIS (7.0 and up) by Open Source Geospatial Foundation (OSGeo)
