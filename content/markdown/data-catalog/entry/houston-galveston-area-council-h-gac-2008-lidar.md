---
name: Houston-Galveston Area Council (H-GAC) 2008 Lidar
short_description: <p>Lidar for Harris County, Texas and surrounding areas. </p>
type: Raster
available_formats: LAS,Shapefile,DEM
source: HGAC (Vendord - Merrick & Company)
coverage_extent: All of Harris county and portions of Brazoria, Chambers, Fort Bend, Galveston, Grimes, Montgomery and Waller.
data_download_lvl:
statewide_coverage:
footprint: 1/4 USGS Quadrangle
download_size:
recommended_use: Research, Analysis
date_created: 2008
tags: Lidar, Point Cloud, LAS, Elevation, County, Harris, Galveston, Brazoria, Fort Bend, Waller, Grimes, Montgomery, Liberty, Chambers
known_issues:
alternative_data: 5ft Hydro-flattened DEM, 3D Breaklines
derivative_data: 1ft and 5ft Contours
spatial_reference: <p><a href='https&#58;//epsg.io/2919'>EPSG 2919</a></p>
relationship_tag:
category: Lidar
download: T
download_link:
order: T
wms_category:
wms_link:
pop_link:
status_map_cartodb_id: 48b8dec2-f053-11e5-888b-0ef7f98ade21
agency: Houston-Galveston Area Council
agency_web: http://www.h-gac.com/home/residents.aspx
agency_gis_page:
date_added: 2016*04-04
license: CC0
tile_index: Lidar
supplemental_report: T
lidar_breaklines: T
urlized_name: houston-galveston-area-council-h-gac-2008-lidar
filename: data-catalog/entry/houston-galveston-area-council-h-gac-2008-lidar.md
layout: redirect.njk
title: Houston-Galveston Area Council (H-GAC) 2008 Lidar
urlized_category: lidar
detail_image_url: images/data-catalog/entry/houston_galveston_area_council_h_gac_2008_lidar_detail.jpg
overview_image_url: images/data-catalog/entry/houston_galveston_area_council_h_gac_2008_lidar_overview.jpg
thumb_url: images/data-catalog/entry/houston_galveston_area_council_h_gac_2008_lidar_th.jpg
supplemental_report_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/supplemental_reports/houston_galveston_area_council_h_gac_2008_lidar_supplementalreports.zip
tile_index_url: https://tnris-datadownload.s3.amazonaws.com/d/tnris-lidar/state/tx/tnris-lidar_tx.zip
lidar_breaklines_url: https://tnris-datadownload.s3.amazonaws.com/datacatalog/lidar_breaklines/houston_galveston_area_council_h_gac_2008_lidar_breaklines.zip
license_text: Public Domain (Creative Commons CC0)
license_url: https://creativecommons.org/publicdomain/zero/1.0/
---

 The Houston-Galveston Area Council contracted with Merrick & Company to fly 3,695 square mile project area. The purpose of the data was for numerous GIS applications including flood modeling and prevention.  Lidar  was collected using Merrick's ALS50 Phase 2 sensor. The  The raw data was verified in MARS software for complete coverage of the project area, and boresighted to align the flightlines. These tiles were then processed through automated filtering that separates the data into different classification groups: unclassified points, ground points and water.  The data was next taken into MARS to reclassify the erroneous points that may remain in the LIDAR point cloud after auto filter.

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
