---
layout: events/texas-gis-forum/2023/agenda.njk
title: 2023 Full Agenda
subtitle: October 23-27, 2023 | Austin, Texas
mainimage: https://tnris-org-static.s3.amazonaws.com/images/2023-forum-graphic.png
mainimagesm: https://cdn.tnris.org/images/2023-forum-graphic-mobile.jpg
---
<section class="container-md hero">
  <div class="hero-content opaque-bg">
    <div class="hero-header">
      <div class="col">
        <h1>2023</h1>
        <div class="logo">
          <img src="https://tnris-org-static.s3.amazonaws.com/images/tx-gis-forum-dark.png" alt="Texas GIS Forum logo dark">
        </div>
        <h2>Full Agenda</h2>
      </div>
      <div class="forum-asset">
        <img class="forum-content" src="https://tnris-org-static.s3.amazonaws.com/images/2023-forum-asset-texas.png" alt="Shape of Texas with the words 'Keep Texas Elevated' inside.">
      </div>
    </div>
  </div>
  <div class="hero-content opaque-bg">
    <h2 class="forum-h2 dark-header">Workshops:<span>Mon & Tue</span></h2>
    <p>Our workshops provide access to in-depth training from industry leaders that help further your professional skills and networking opportunities. <strong>Registration for workshops is sold separately.</strong></p>
    <h2 class="forum-h2 green-header">Sessions & Exhibits:<span>Wed & Thu</span></h2>
    <p>Explore two days of talking sessions and exhibit booths to hear about the latest advancements in the private and public sector and connect with the geospatial community.</p>
    <h2 class="forum-h2 red-header">Texas GIS Community Meeting:<span>Fri</span></h2>
    <p>Free admission and open to the public! Join the conversation as Texas GIS community members give quarterly updates and open the floor to discussion.</p>
  </div>
</section>
<section class="intro agenda container-md">
<div style = "text-align: center; margin: 20px;" class="mobile-sponsor">
<p><strong>Mobile agenda sponsored by:</strong></p>
<a target="_blank" href="https://www.nearmap.com/"><img style = "width: 75%;"alt="Nearmap logo and link" src="https://cdn.tnris.org/images/nearmap-logo.png"></a>
</div>
  <div class="agenda-wrapper">
    <input class="tab-select" id="one" name="group" type="radio">
    <input class="tab-select" id="two" name="group" type="radio">
    <input class="tab-select" id="three" name="group" type="radio" checked>
    <input class="tab-select" id="four" name="group" type="radio">
    <input class="tab-select" id="five" name="group" type="radio">
    <div class="tab-wrapper">
      <label class="tab" id="one-tab" for="one">mon<br><span class="nav-date">23</span></label>
      <label class="tab" id="two-tab" for="two">tue<br><span class="nav-date">24</span></label>
      <label class="tab" id="three-tab" for="three">wed<br><span class="nav-date">25</span></label>
      <label class="tab" id="four-tab" for="four">thu<br><span class="nav-date">26</span></label>
      <label class="tab" id="five-tab" for="five">fri<br><span class="nav-date">27</span></label>
    </div>
    <div class="panels">
      <div class="panel" id="one-panel">
        <h2 class="forum-h2 dark-header">Workshops:<span>Mon & Tue</span></h2>
        <div id="insert-day-one-2023"></div>
        <small class="disclaimer">*Information subject to change.</small>
      </div>
      <div class="panel" id="two-panel">
        <h2 class="forum-h2 dark-header">Workshops:<span>Mon & Tue</span></h2>
        <div id="insert-day-two-2023"></div>
        <small class="disclaimer">*Information subject to change.</small>
      </div>
      <div class="panel" id="three-panel">
        <h2 class="forum-h2 green-header">Sessions & Exhibits:<span>Wed & Thu</span></h2>
        {% include "events/texas-gis-forum/2023/agenda-wednesday.njk" %}
      </div>
      <div class="panel" id="four-panel">
        <h2 class="forum-h2 green-header">Sessions & Exhibits:<span>Wed & Thu</span></h2>
        {% include "events/texas-gis-forum/2023/agenda-thursday.njk" %}
      </div>
      <div class="panel" id="five-panel">
        <h2 class="forum-h2 red-header">Texas GIS Community Meeting:<span>Fri</span></h2>
        <p>Free admission! Everyone is welcome to attend.</p>
        {% include "events/texas-gis-forum/2023/agenda-friday.njk" %}
      </div>
    </div>
  </div>
</section>


