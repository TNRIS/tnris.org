---
title: Land Parcels
layout: stratmap/ap-lp-page.njk
progress_1: 86
progress_2: 228
youtube_url: https://www.youtube.com/embed/d9Le5oqu4wc
---

<div class="container">
  <div class="row">
    <div class="col-md-6">
      <p class="lead">Land parcels are boundaries that have associated information such as property owner, land use, value, and location attributes. This property information is recorded and maintained at the county level in Texas at local appraisal districts. It is then used by public entities to make informed decisions on community planning, development, or emergency preparation and response.</p>
      <p class="lead">
      In collaboration with stakeholders from across Texas, TNRIS created a statewide standardized <a href="https://cdn.tnris.org/documents/tnris-land-parcel-schema.pdf">GIS land parcel schema</a>. This format of land parcel data consists of the most commonly utilized information as determined by the land parcel  committee. The data contributed from county appraisal districts or their service providers were translated into this common schema and are now available on the <a href="https://data.tnris.org/collection/2679b514-bb7b-409f-97f3-ee3879f34448">TNRIS DataHub</a>.</p>
      <p class="lead">In August 2019, an extension of the <a href="https://cdn.tnris.org/documents/update-on-digital-parcel-data-in-texas-20190903.pdf">statewide parcel study was published</a> to evaluate the existence of GIS parcel data and barriers to conversion. The report found that nearly all Texas appraisal districts now maintain a GIS parcel layer or are in the process of converting. It includes recommendations of 1) how TNRIS can facilitate local GIS  conversion and 2) how to continue success of the land parcel program.</p>
    </div>
    <div class="col-md-6">
      <h2 style="margin-top: 0">Available Datasets</h2>
      <ul class="list-clean data-progress">
        <li class="status">
          <progress class="level-orange" max="100" value="{{progress_1}}">
          </progress>
          <h3 class="amount"><strong>{{progress_2}}</strong></h3>
        </li>
      </ul>
      <p><strong font-size: 20px;">of 254 land parcel GIS datasets are now available in a common schema.</strong></p>
      <p>See available datasets in the map below:</p>
      <iframe width="100%" height="520" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Land Parcels Map" src="https://tnris.maps.arcgis.com/apps/Embed/index.html?webmap=7f5626b267a042a7869926b3d379f5b9&extent=-116.3038,22.8609,-83.8502,39.082&home=true&zoom=true&previewImage=false&scale=true&legend=true&disable_scroll=true&theme=light">
      </iframe>
      <h2>Download</h2>
      <p>Use the DataHub to download the Land Parcels dataset:</p>
      <a class="btn btn-lg btn-tnris mx-auto d-block" href="https://data.tnris.org/collection/2679b514-bb7b-409f-97f3-ee3879f34448" target="_blank"><img style="width: 20px; margin-bottom: 0 !important;" src="https://cdn.tnris.org/images/baseline_view_comfy_white_36dp.png"> Launch DataHub</a>
    </div>
  </div>
</div>
<section id="parcel-numbers">
  <div class="container">
    <h2>Program Timeline</h2>
    <p class="lead">This timeline documents past events and estimates future milestones. As milestones are met, this timeline will be updated. Please check each county for the most recent version of data.</p>
    <div class="timeline-stratmap">
      <div class="bar-stratmap d-none"></div>
      <div class="bar-vertical-stratmap"></div>
      <div class="phase-top phase-1"><strong>Texas GIO Report 2016</strong> identifies parcels as most requested dataset</div>
      <div class="phase phase-2"><strong>Texas Parcel Study 2017</strong> evaluated parcels in Texas and five states across USA
      </div>
      <div class="phase-top phase-3"><strong>April 2018</strong><br>Program initiation, Geographic Data Coordinator hired
      </div>
      <div class="phase phase-4"><strong>November 2018</strong><br> Program announcement letter sent to all 253 Chief Appraisers
      </div>
      <div class="phase-top phase-5"> <strong>January 2019</strong><br>
        94 Counties of parcel data collected and posted online
      </div>
      <div class="phase phase-6"><strong>Spring 2019</strong><br>150 counties of parcel data posted
      </div>
      <div class="phase-top phase-7"><strong>Summer 2019</strong><br>200 counties of parcel data posted
      </div>
      <div class="phase phase-8"><strong>Fall 2019</strong><br>Over 200 counties of parcel data posted in a standardized schema
      </div>
      <div class="phase-top  phase-9"><strong>Summer 2020</strong><br> Data available as a service in a standardized schema
      </div>
      <div class="phase phase-10"><strong>Ongoing annual refresh</strong> of statewide geographic parcel data
      </div>
    </div>
</section>

<div class="container">
  <div class="row">
    <div id="agency-parcel-uses" class="col-md-6">
      <h2>Program Flow</h2>
      <p>This iterative program flow will occur throughout the year. At no one time will there be a completed or final version of data as each data source has varying update schedules. Please check each county for the most recent version of data.</p>
      <img src="https://cdn.tnris.org/images/data-circle.jpg" class="img-fluid">
      <h2>Agency Parcel Uses</h2>
      <p class="lead">Texas State Agencies make extensive use of Land Parcel data for all types of operations and applications.</p>
      <hr class="clearfix">
      <div class="row">
        <div class="col-md-6">
          <img src="https://cdn.tnris.org/images/tx_glo_logo.jpg" class="mx-auto d-block">
          <p><strong>General Land Office (GLO)</strong></p>
          <ul>
            <li>Management of state landscoastal land permitting</li>
            <li>Community development/revitalization</li>
            <li>Veteran’s benefits issue management</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="https://cdn.tnris.org/images/tdem_logo.jpg" class="mx-auto d-block">
          <p><strong>Texas Division of Emergency Management (TDEM)</strong></p>
          <ul>
            <li>Mitigate emergency situations by accurately modeling and mapping areas to predict flooding along high-risk areas</li>
            <li>Planning and early evacuation procedure</li>
          </ul>
        </div>
        <hr class="clearfix d-none d-sm-none">
        <div class="row">
          <div class="col-md-6">
            <img src="https://cdn.tnris.org/images/txdot_logo.jpg" class="mx-auto d-block">
            <p><strong>Texas Department of Transportation (TXDOT)</strong></p>
            <ul>
              <li>Right of Way management for private or state-owned lands</li>
              <li>Transportation planning</li>
            </ul>
            </p>
          </div>
          <div class="col-md-6">
            <img src="https://cdn.tnris.org/images/hhs_logo.jpg" class="mx-auto d-block img-fluid">
            <p><strong>Health and Human Services Commission (HHSC)</strong></p>
            <ul>
              <li>Determine structures in the path or vicinity of disease outbreak</li>
              <li>Analyze economic conditions for services</li>
            </ul>
          </div>
        </div>
        <hr class="clearfix d-none d-sm-none">
        <div class="row">
          <div class="col-md-6">
            <img src="https://cdn.tnris.org/images/twdb_web_med.jpg" class="mx-auto d-block">
            <p><strong>Texas Water Development Board (TWDB)</strong></p>
            <ul>
              <li>Determine if structures will be affected by flood conditions for early evacuation</li>
              <li>Determine properties that will be affected with the build of a new dam.</li>
            </ul>
          </div>
          <div class="col-md-6">
            <img src="https://cdn.tnris.org/images/tahc_logo.jpg" class="mx-auto d-block">
            <p><strong>Texas Animal Health Commission (TAHC)</strong></p>
            <ul>
              <li>Locate farms, ranches, feedlots, etc in the event of animal disease outbreak</li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="clearfix d-none d-sm-none">
      <div class="row">
        <div class="col-md-6">
          <img src="https://cdn.tnris.org/images/tceq_logo_sm.jpg" class="mx-auto d-block">
          <p><strong>Texas Commission on Environmental Quality (TCEQ)</strong></p>
          <ul>
            <li>Air permitting and air quality monitoring/analysis</li>
            <li>Determining water rights for landowners</li>
            <li>Water quality planning based on growth.</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="https://cdn.tnris.org/images/tpwd_logo.jpg" class="mx-auto d-block">
          <p><strong>Texas Parks and Wildlife Department (TPWD)</strong></p>
          <ul>
            <li>Land ownership notification</li>
            <li>Property transactions, planning, and management</li>
            <li>Emergency management and response.</li>
          </ul>
        </div>
      </div>
      <hr class="clearfix d-none d-sm-none">
      <div class="row">
        <div class="col-md-6">
          <img src="https://cdn.tnris.org/images/csec_logo_sm.jpg" class="mx-auto d-block">
          <p><strong>Commission on State Emergency Communications (CSEC)</strong></p>
          <ul>
            <li>Statewide emergency communications.</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="https://cdn.tnris.org/images/tx_dps_logo.jpg" class="mx-auto d-block">
          <p><strong>Department of Public Safety (DPS)</strong></p>
          <ul>
            <li>Emergency management and response.</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h2>FAQ - Frequently Asked Questions</h2>
      <h3>What is a geographic land parcel?</h3>
      <p>A geographic land parcel is a spatial reference to tabular information of a property regarding ownership, land use, legal description, ownership, etc. from the Computer Assisted Mass Appraisal (CAMA) software of an appraisal district.</p>
      <h3>What format and files are provided?</h3>
      <p>
        The land parcels are in shapefile and geodatabase format and require a geographic information system (GIS) software for viewing. Software to view this data is not provided by TNRIS. Other files provided include metadata and conversion file.
      </p>
      <h3>What schema are the data provided?</h3>
      <p>
        The data were transformed into the <a href="https://cdn.tnris.org/documents/tnris-land-parcel-schema.pdf">TNRIS land parcel schema</a>. TNRIS facilitated a land parcel committee to discuss the data needs of stakeholders across Texas. Land parcels have a large quantity of data stored in Computer Assisted Mass Appraisal (CAMA) and a lowest common denominator of details were agreed upon for the TNRIS land parcel schema.
      </p>
      <h3>Why are some of the attributes missing or null?</h3>
      <p>
        TNRIS received the data from the appraisal districts or their vendors “as-is.” If data are missing, the data were not shared with the request for information. Over time, we hope to get as many of the <a href="https://cdn.tnris.org/documents/tnris-land-parcel-schema.pdf">TNRIS land parcel schema</a> attributes as possible. If additional information is needed, please contact the appraisal district. A directory of appraisal districts is located on the <a href="https://comptroller.texas.gov/taxes/property-tax/county-directory/">Texas Comptroller of Public Accounts website</a>.
      </p>
      <h3>Who created these geographic land parcels?</h3>
      <p>These geographic land parcel data are created by county appraisal districts or their third party vendor. TNRIS compiles and transforms these data for statewide distribution and does not edit the geometry of this data. A directory of appraisal districts is located on the <a href="https://comptroller.texas.gov/taxes/property-tax/county-directory/">Texas Comptroller of Public Accounts website</a>.
      </p>
      <h3>What is the purpose of these geographic land parcels?</h3>
      <p>TNRIS collects these data to allow end users to acquire statewide land parcel data in one location at no cost. These geographic land parcel data are created by appraisal districts or their third party vendor to supplement the appraisal process with a visual representation of property. They are not survey grade and should not be used for legal purposes.</p>
      <h3>How frequently does TNRIS acquire geographic land parcel data?</h3>
      <p>TNRIS will attempt to refresh annually from each appraisal district or their third party vendor. The refresh rate will vary across the state. Some counties may refresh multiple times within one year. The year and month of the land parcel dataset is included in the file name as YYYYMM.</p>
      <h3>Is this data available at other locations?</h3>
      <p>The purpose of this initiative is to provide statewide land parcel data in one location at no cost. Yes, this data may sometimes be acquired through appraisal districts, their 3rd party vendor, or commercial vendors. More current data and greater volume of information may be available from them as compared to the no cost TNRIS statewide version. A directory of appraisal districts is located on the <a href="https://comptroller.texas.gov/taxes/property-tax/county-directory/">Texas Comptroller of Public Accounts website</a>.</p>
      <h3>How many appraisal districts exist in Texas?</h3>
      <p>There are 254 counties and 253 appraisal districts in Texas (Potter and Randall counties have a joint office).</p>
      <h3>Why does each land parcel file have different attributes, codes, and definitions?</h3>
      <p>There is no state mandate for a standardized land parcel schema in Texas. Therefore, the individual appraisal district attributes are dictated by their business needs or based on their third party standards.</p>
      <h3>How do I report a “problem” with the land parcel data?</h3>
      <p>These geographic land parcel data are created by county appraisal districts or their third party vendor. TNRIS compiles these data for statewide distribution and does not edit the geometry of this data. A directory of appraisal districts is located on the <a href="https://comptroller.texas.gov/taxes/property-tax/county-directory/">Texas Comptroller of Public Accounts website</a>.</p>
      <h3>What if the county land parcel dataset that I need is not available for download?</h3>
      <p>Not all counties are available for download from TNRIS. We continue to work with appraisal districts to provide as many county land parcel datasets as possible. As they are available, they will be posted online for download and the availability map updated. A directory of appraisal districts is located on the <a href="https://comptroller.texas.gov/taxes/property-tax/county-directory/">Texas Comptroller of Public Accounts website</a>.</p>
      <hr>
      <p>Contact TNRIS with any further questions regarding this program and someone from StratMap will get in touch with you.</p>
      <a class="btn btn-lg btn-primary" href="/contact"><i class="glyphicon glyphicon-document"></i>Contact Us</a>
    </div>
  </div>
</div>
