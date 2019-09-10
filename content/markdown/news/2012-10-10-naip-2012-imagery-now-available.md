---
layout: news-article.njk
title: NAIP 2012 Aerial Imagery Now Available
author: StratMap
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/NAIP2012_Hidalgo_County_thumb.jpg
abstract:
    The National Agriculture Imagery Program (NAIP) aerial image data for 2012 are now available.
tags: orthoimagery, data release, hpids, naip
---

The National Agriculture Imagery Program (NAIP) aerial image data are now available. The 1 meter statewide orthoimagery are currently available for the Texas counties listed below and displayed in the NAIP 2012 Status Map. NAIP is administered by the United States Department of Agriculture (USDA) Farm Service Agency (FSA) Aerial Photography Field Office (APFO) in Salt Lake City.

The primary goal of NAIP is to acquire digital orthoimagery of the continental U.S. during the agricultural growing season. The image products are made available to governmental agencies and the public within one year of acquisition. This “leaf-on” imagery is used as a base layer for GIS programs in FSA’s County Service Centers and used to maintain the Common Land Unit (CLU) boundaries. NAIP data are also used widely across the state for a variety of purposes including natural resource assessment, asset management, and disaster response.

## Products

- Compressed County Mosaics (CCMs)
  - 3-band natural color
  - Compressed SIDs (MrSID Gen 3), 15:1 target ratio
  - Seamline shapefiles: Contain date and start/end times of image acquisition within each polygon
  - Metadata per CCM
  - **Entire state available**
- Digital Orthophoto Quarter-Quads (DOQQs) – coming early 2013
  - Uncompressed GeoTIFFs
  - Compressed JPEG2000s, 6:1 target ratio
  - 3.75 x 3.75 minute quarter quadrangles
  - 300 meter buffer
  - Index shapefile
  - Metadata per DOQQ
  - **Entire state available**

## Specifications

- 1 meter pixel resolution
- Digital capture with Leica Geosystem’s ADS80/SH82 sensors
- Spatial reference: UTM NAD83 - zones 13, 14, & 15
- Horizontal accuracy: Compiled to meet +/- 6 meters to true ground at 95% confidence
- 0-10% cloud cover per DOQQ tile size

## Data Access
<div class="media">
  <div class="media-body">
    <p>NAIP 2012 CCMs and DOQQs are available for free download within the <a href="https://data.tnris.org">DataHub</a>.
    </p>
  </div>
</div>

Search using the county and quad fields to find 2012 NAIP for your desired area.

The imagery are also available through a GIS Service hosted by the USDA-APFO. Copy and paste the following server link into your GIS software:


<div class="input-group copy-url-container">
  <span class="input-group-btn">
    <button class="btn btn-tnris copy-url-btn" type="button">
      <i class="fa fa-clipboard"></i> Copy URL
    </button>
  </span>
  <input class="wms-url copy-url-input form-control" type="text" readonly value="http://gis.apfo.usda.gov/arcgis/services">
</div>
