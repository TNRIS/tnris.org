---
name: StratMap 2010 50cm Bexar Lidar
short_description: <p>Lidar data for Bexar County.</p>
type: Raster
available_formats: LAS
source: TNRIS
coverage_extent: Wise, Montague, Cooke, Grayson
data_download_lvl:
statewide_coverage:
footprint: 1/16 USGS Quadrangle
download_size:
recommended_use: Basemap, Research, Analysis
date_created: 2010
tags: Wise, Montague, Cooke, Grayson, Lidar, Point Cloud, LAS, Elevation, County, Historical
known_issues:
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
status_map_cartodb_id: add7c7d8-e2bb-11e4-a3e6-0e853d047bba
agency:
agency_web:
agency_gis_page:
date_added: 2014-02-01
license: CC0
tile_index: Lidar
supplemental_report: T
lidar_breaklines: T
urlized_name: stratmap-2010-50cm-bexar
filename: data-catalog/entry/stratmap-2010-50cm-bexar.md
layout: redirect.njk
title: StratMap 2010 50cm Bexar
urlized_category: lidar
overview_image_url: images/data-catalog/entry/stratmap_2010_50cm_bexar_overview.jpg
thumb_url: images/data-catalog/entry/stratmap_2010_50cm_bexar_th.jpg
supplemental_report_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/supplemental_reports/stratmap_2010_50cm_bexar_supplementalreports.zip
tile_index_url: https://tnris-datadownload.s3.amazonaws.com/d/tnris-lidar/state/tx/tnris-lidar_tx.zip
lidar_breaklines_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/lidar_breaklines/stratmap_2010_50cm_bexar_breaklines.zip
license_text: Public Domain (Creative Commons CC0)
license_url: https://creativecommons.org/publicdomain/zero/1.0/
---

This project contains 50cm LAS tiles and 1m DEM tiles for areas in Bexar County Texas. The project AOI was defined by new quarter-quarter-quadrangle, NQQQ, tiles. The outside tiles were buffered by 300m on all sides and the interior tiles were buffered by 50m on all sides. The project design of the Lidar data acquisition was developed to support a nominal post spacing of 4pts /meter.

Data was acquired by Terrapoint from May 20 through August 4th, 2010. Lidar data collection was performed with a Cessna 375 aircraft, utilizing a Leica ALS50-II MPiA sensor and a Cessna 210 aircraft, utilizing a Optech Sensor collecting multiple return x, y, and z data as well as intensity data. Lidar data was processed to achieve a bare ground surface.

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
