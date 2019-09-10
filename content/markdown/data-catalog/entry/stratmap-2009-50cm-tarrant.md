---
name: StratMap 2009 50cm Tarrant Lidar
short_description: <p>Lidar data for Tarrant</p>
type: Raster
available_formats: LAS
source: TNRIS
coverage_extent: Tarrant
data_download_lvl:
statewide_coverage:
footprint: 1/4 USGS Quadrangle
download_size:
recommended_use: Basemap, Research, Analysis
date_created: 2009
tags: Tarrant, Lidar, Point Cloud, LAS, Elevation, County, Historical
known_issues: None
alternative_data: 5M Hydro-flattened DEM, 3D Breaklines
derivative_data: 5ft Contours
spatial_reference: <p><a href='https&#58;//epsg.io/26914'>EPSG 26914</a></p>
relationship_tag:
category: Lidar
download: T
download_link:
order: T
wms_category:
wms_link:
pop_link:
status_map_cartodb_id: d2bc8ae4-e2ba-11e4-8f0d-0e9d821ea90d
agency:
agency_web:
agency_gis_page:
date_added: 2014-02-01
license: CC0
tile_index: Lidar
supplemental_report: T
lidar_breaklines: T
urlized_name: stratmap-2009-50cm-tarrant
filename: data-catalog/entry/stratmap-2009-50cm-tarrant.md
layout: redirect.njk
title: StratMap 2009 50cm Tarrant
urlized_category: lidar
detail_image_url: images/data-catalog/entry/stratmap_2009_50cm_tarrant_detail.jpg
overview_image_url: images/data-catalog/entry/stratmap_2009_50cm_tarrant_overview.jpg
thumb_url: images/data-catalog/entry/stratmap_2009_50cm_tarrant_th.jpg
supplemental_report_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/supplemental_reports/stratmap_2009_50cm_tarrant_supplementalreports.zip
tile_index_url: https://tnris-datadownload.s3.amazonaws.com/d/tnris-lidar/state/tx/tnris-lidar_tx.zip
lidar_breaklines_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/lidar_breaklines/stratmap_2009_50cm_tarrant_breaklines.zip
license_text: Public Domain (Creative Commons CC0)
license_url: https://creativecommons.org/publicdomain/zero/1.0/
---

The project area is 322 tiles covering approximately 1285 square miles in the Ft. Worth region of Texas. The original project AOI was defined by new quarter-quarter-quadrangle, NQQQ, tiles. The outside tiles were buffered by 300m on all sides and the interior tiles were buffered by 50m on all sides. The project design of the Lidar data acquisition was developed to support a nominal post spacing of 1.0 meter.

Fugro EarthData, Inc. acquisition acquired 101 flights lines in 13 lifts from March 15, 2009 through March 29, 2009. Lidar data collection was performed with a Piper Navajo aircraft, utilizing a Leica ALS50-II MPiA sensor, collecting multiple return x, y, and z data as well as intensity data. Lidar data was processed to achieve a bare ground surface.

The purpose of this project is to collect and deliver topographic elevation point data derived from multiple return light detection and ranging (Lidar) measurements for Ft. Worth Region in Texas. The elevation data will be used as base data for Texas flood plain mapping.

This dataset was acquired through the High Priority Imagery and Data Sets (HPIDS) contract. The contract was created in 2009 to maximize spending power by coordinating geospatial data purchases to share costs and to ensure that acquired data meet high standards of quality. The successor to HPIDS is the StratMap contract, established in 2015.

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
