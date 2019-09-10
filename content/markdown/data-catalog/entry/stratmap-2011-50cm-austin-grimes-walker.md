---
name: StratMap 2011 50cm Austin, Grimes, Walker Lidar
short_description: <p>Lidar data for Austin, Grimes, Walker</p>
type: Raster
available_formats: LAS
source: TNRIS
coverage_extent: Austin, Waller, Grimes, Walker
data_download_lvl:
statewide_coverage:
footprint: 1/16 USGS Quadrangle
download_size:
recommended_use: Basemap, Research, Analysis
date_created: 2011
tags: Austin, Grimes, Walker, Lidar, Point Cloud, LAS, Elevation, County, Historical
known_issues: None
alternative_data: 1M Hydro-flattened DEM, 3D Breaklines
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
status_map_cartodb_id: 604fea76-e2bc-11e4-986c-0e018d66dc29
agency:
agency_web:
agency_gis_page:
date_added: 2014-02-01
license: CC0
tile_index: Lidar
supplemental_report: T
lidar_breaklines: T
urlized_name: stratmap-2011-50cm-austin-grimes-walker
filename: data-catalog/entry/stratmap-2011-50cm-austin-grimes-walker.md
layout: redirect.njk
title: StratMap 2011 50cm Austin, Grimes, Walker
urlized_category: lidar
overview_image_url: images/data-catalog/entry/stratmap_2011_50cm_austin_grimes_walker_overview.jpg
thumb_url: images/data-catalog/entry/stratmap_2011_50cm_austin_grimes_walker_th.jpg
supplemental_report_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/supplemental_reports/stratmap_2011_50cm_austin_grimes_walker_supplementalreports.zip
tile_index_url: https://tnris-datadownload.s3.amazonaws.com/d/tnris-lidar/state/tx/tnris-lidar_tx.zip
lidar_breaklines_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/lidar_breaklines/stratmap_2011_50cm_austin_grimes_walker_breaklines.zip
license_text: Public Domain (Creative Commons CC0)
license_url: https://creativecommons.org/publicdomain/zero/1.0/
---

The project area is 840 tiles covering approximately 3300 square miles in the Austin / Waller counties of Texas. The project design of the Lidar data acquisition was developed to support a nominal post spacing of 0.5 meter. The AeroMetric, Inc. acquisition covered 440 flights lines in 51 lifts from January 8, 2011 through February 3, 2011. Lidar data collection was performed with a Piper Navajo aircraft, utilizing an Optech Gemini sensor, Serial Number 07SEN201, collecting multiple return x, y, and z data as well as intensity data. Keystone Aerial Surveys was sub-contracted by AeroMetric, Inc. to complete a portion of the acquisition of this area. Keystone completed 26 of the 51 lifts, utilizing an Optech Gemini sensor, Serial Number 05SEN191, in a Cessna 310. the Lidar data was processed to achieve a bare ground surface.

The purpose of this project is to collect and deliver topographic elevation point data derived from multiple return light detection and ranging (Lidar) measurements for north region in Texas. The elevation data will be used as base data for Texas flood plain mapping.

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