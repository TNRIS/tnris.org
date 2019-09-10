---
name: StratMap 2014 50cm Fort Bend Lidar
short_description: <p>Lidar data for Fort Bend.</p>
type: Raster
available_formats: LAS
source: TNRIS
coverage_extent: Fort Bend
data_download_lvl:
statewide_coverage:
footprint: 1/64 USGS Quadrangle
download_size:
recommended_use: Basemap, Research, Analysis
date_created: 2014
tags: Fort Bend, Lidar, Point Cloud, LAS, Elevation, County, Historical
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
status_map_cartodb_id: 833da5f0-e2c1-11e4-b1d4-0e853d047bba
agency:
agency_web:
agency_gis_page:
date_added: 2015-05-12
license: CC0
tile_index: Lidar
supplemental_report: T
lidar_breaklines: T
urlized_name: stratmap-2014-50cm-fort-bend
filename: data-catalog/entry/stratmap-2014-50cm-fort-bend.md
layout: redirect.njk
title: StratMap 2014 50cm Fort Bend
urlized_category: lidar
overview_image_url: images/data-catalog/entry/stratmap_2014_50cm_fort_bend_overview.jpg
thumb_url: images/data-catalog/entry/stratmap_2014_50cm_fort_bend_th.jpg
supplemental_report_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/supplemental_reports/stratmap_2014_50cm_fort_bend_supplementalreports.zip
tile_index_url: https://tnris-datadownload.s3.amazonaws.com/d/tnris-lidar/state/tx/tnris-lidar_tx.zip
lidar_breaklines_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/lidar_breaklines/stratmap_2014_50cm_fort_bend_breaklines.zip
license_text: Public Domain (Creative Commons CC0)
license_url: https://creativecommons.org/publicdomain/zero/1.0/
---

This data has been acquired and developed by the Texas Natural Resources Information System (TNRIS) for collection and delivery of topographic elevation point data derived from multiple return light detection and ranging (Lidar) measurements for the 918 sq. mile project area encompassing Fort Bend County, Texas. Fugro EarthData, Inc. acquired 104 flight lines in 9 lifts from February 12, 2014 to February 27, 2014. Lidar data collection was performed with a Cessna 310 twin engine aircraft, utilizing a Riegl LMS-Q680i Lidar sensor; collecting multiple return x, y, and z as well as intensity data. The classified Lidar point cloud data are delivered in LAS 1.2 format: 1, unclassified, 2, bare-earth ground, 3, low vegetation, 4, medium vegetation, 5, high vegetation, 6, buildings, 7, low points(noise), 9, water, 13, bridges, and 14, culverts. Specialized in-house and commercial software processes the native Lidar data into 3-dimensional positions that can be imported into GIS software for visualization and further analysis. The horizontal datum for the data is in NAD1983 State Plane TX South Central FIPS 4204 in Feet and the vertical datum is the North American Vertical Datum of 1988 (NAVD88) in feet using GEIOD12A.

The data acquired will become part of an ongoing data collection by the State of Texas to support mapping and modeling of flood plains, hydrography, and terrain.The data are intended to exceed requirements for Federal Emergency Management Agency (FEMA) specifications for Floodplain Mapping as well as serve as an input to the U.S. Geological Survey refinements to the National Elevation Dataset. The project consists of high accuracy classified Lidar data in LAS format as well as raster digital elevation models and intensity images.

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
