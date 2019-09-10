---
name: FEMA 2016 DeWitt County Lidar
short_description: <p>FEMA Lidar for DeWitt County</p>
type: Raster
available_formats: LAS
source: FEMA
coverage_extent: DeWitt
data_download_lvl:
statewide_coverage:
footprint: 1/64 USGS Quadrangle
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
status_map_cartodb_id: b68b2e1e-bbf5-11e6-8d94-0e3ff518bd15
agency: FEMA
agency_web:
agency_gis_page:
date_added: 2017-4-20
license: CC0
tile_index: Lidar
supplemental_report: T
lidar_breaklines: T
urlized_name: fema-2016-dewitt
filename: data-catalog/entry/fema-2016-dewitt.md
layout: redirect.njk
title: FEMA 2016 DeWitt
urlized_category: lidar
detail_image_url: images/data-catalog/entry/fema_2016_dewitt_detail.jpg
overview_image_url: images/data-catalog/entry/fema_2016_dewitt_overview.jpg
thumb_url: images/data-catalog/entry/fema_2016_dewitt_th.jpg
supplemental_report_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/supplemental_reports/fema_2016_dewitt_supplementalreports.zip
tile_index_url: https://tnris-datadownload.s3.amazonaws.com/d/tnris-lidar/state/tx/tnris-lidar_tx.zip
lidar_breaklines_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/lidar_breaklines/fema_2016_dewitt_breaklines.zip
license_text: Public Domain (Creative Commons CC0)
license_url: https://creativecommons.org/publicdomain/zero/1.0/
---

Compass PTS JV was tasked by FEMA to plan, acquire, process, and produce derivative products of LiDAR data at a nominal pulse spacing (NPS) of 0.7 meters based on the “U.S. Geological Survey National Geospatial Program LiDAR Base Specification Version 1.2”. The project consists of approximately 604.3 square miles. Fugro acquired 55 flight lines in 3 lifts between March 2nd and March 4th, 2016. LiDAR data collection was performed with a twin engine aircraft, utilizing a Riegl, LMS-Q680i sensor.  The horizontal datum for the data is NAD83 State Plane South Central (4204) feet and the vertical datum is NAVD88.

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
