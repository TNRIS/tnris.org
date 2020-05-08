---
layout: news-article.njk
title: "Digging Into the Augmented Reality Sandbox"
author: Miguel Pavon, Data & Mapping Solutions
mainimage: https://tnris-org-static.s3.amazonaws.com/images/32_web.jpg
mainimagealt: The Augmented Reality Sandbox, a rainbow spectrum projected onto sand
mainimagecaption: The topographic color map and contour lines are updated in real time as the real sand surface is manipulated, and virtual water flows over the sand. Over the course of the Forum, the sandbox grew trees and some dinosaurs moved in.
thumbnail: https://tnris-org-static.s3.amazonaws.com/images/sandbox_th.jpg
thumbalt: A thumbnail of the augmented reality sandbox, projected topography
abstract:
    Miguel Pavon tells how the interactive Sandbox made it to the 2015 forum, and highlights the original tutorials and open source software to make your own.
tags: forum
---


After the success of the [Google Liquid Galaxy](http://www.google.com/earth/explore/showcase/liquidgalaxy.html) display at the [2014 Texas GIS Forum](/texas-gis-forum/2014), it was clear to Richard Wade, Director of TNRIS, how much interactive exhibits enriched the forum experience. After discovering the **Augmented Reality Sandbox** though online sources, he knew that that this visually dynamic and tactile exhibit was exactly what we wanted to bring to the [**2015 Texas GIS Forum**](/texas-gis-forum/2015). With this goal, plans were set in to motion to develop our own Virtual Sandbox, made possible by the open source community who brought the original idea to life.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/UTB1roPJ4mc" frameborder="0" allowfullscreen></iframe>

I started my research by watching videos on how the AR sandbox works. I also found good documentation online written by University of California Davis’ Oliver Kreylos showing exactly how to build it. The components are very basic: all I needed to build a simple prototype is a Microsoft kinect sensor for a Xbox 360, LCD projector and decent desktop PC running linux OS.

Once I had everything, I cobbled all the components together at my office and began mapping a paper cone that I had taped to the wall.  It took a while to get everything working together as expected, but once I did, I was able to design and build the final structure that we used at the 2015 Texas GIS Forum.

<figure class="right-indent">
<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/05_web.jpg" alt="Atendees gather around the sandbox, playing with the sand and taking pictures">
<figcaption>Forum Attendees gathered at the sandbox during breaks between presentation sessions.</figcaption>
</figure>

The resulting AR sandbox allows users to simulate topography by creating physical features in the sand which is then augmented in real time by an elevation color map, topographic contour lines, and simulated water.  The system can be used to teach basic geographic, geologic, and hydrologic concepts like reading and understanding topographic maps, contour lines, watersheds, catchment areas, levees, etc.

But, aside from all that educational stuff, no matter how old you get, no one can resist the urge to play in the sand.

<hr class="clearfix">

<h2>Make Your Own</h2>

<figure class="right-indent">
<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/sandbox_structure.jpg" alt="A view of the Full Structure">
<figcaption>A view of the full structure.</figcaption>
<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/sandbox_guts.jpg" alt="The components on the top of the sandbox, labels for the PC, Projector, and Kinect">
  <figcaption>The guts inside the top portion of the Sandbox, projecting downward onto the sand.</figcaption>
</figure>

All the software and techniques for building the Augmented Reality Sandbox are free and open source. The primary costs to you are the components, materials and your time.

<!--- <a class="btn btn-md btn-danger btn-center" href="http://idav.ucdavis.edu/~okreylos/ResDev/SARndbox/">Visit the AR Sandbox Instructional Page</a> --->

In order to assist do-it-yourself efforts, Mr. Kreylos recently created a series of videos illustrating the core steps necessary to add the AR component to an already existing sandbox. These videos elaborate on steps described in the AR Sandbox software’s README file, but sometimes videos can be worth more than words.

### There are three main steps:
- Two include calibrating the Kinect 3D camera with respect to the sandbox
- Another one is needed to calibrate the data projector with respect to the Kinect 3D camera (and, by extension, the sandbox).

### Videos:

- Step 1 (optional, but recommended): [<i class="glyphicon glyphicon-facetime-video"></i> Internally calibrate the Kinect camera](http://www.youtube.com/watch?v=Qo05LVxdlfo) and then check the calibration result.
- Step 2: [<i class="glyphicon glyphicon-facetime-video"></i> Calculate sandbox base plane](http://www.youtube.com/watch?v=9Lt4J_BErs0)
- Step 3: [<i class="glyphicon glyphicon-facetime-video"></i> Measure 3D extents of sand surface](http://www.youtube.com/watch?v=RmE6tkXoSJw)
- Step 4: [<i class="glyphicon glyphicon-facetime-video"></i> Calibrate projector with respect to Kinect 3D camera](http://www.youtube.com/watch?v=vXkA9gUoSAc)

Basically, if you already own a fairly recent PC, a Kinect, a data projector, and some initiative, give it a try ! It should be possible to put together a working system in a matter of hours (add 30 minutes if you need to install Linux first).

We installed the sandbox as a mostly unsupervised hands-on exhibit at the Forum, allowing visitors to informally learn about geographical, geological, and hydrological principles by playing with the sand. We provided hand tools like shovels and rakes as an alternative for people who didn't want to get sand under their fingernails.

<hr class="clearfix">
<figure class="right-indent">
<img class="img-responsive" src="https://tnris-org-static.s3.amazonaws.com/images/15_web.jpg" alt="A smiling woman drops sand on top of a small pile of sand with topography projected">
</figure>
We hope this has been interesting and informative, especially to encourage you to build you own augmented reality sandbox. But if you're not the crafty type, don't fret, we'll be permanently installing the AR Sandbox at the TNRIS offices ([come visit us](/contact)) and you can probably expect it back next fall at the 2016 GIS Forum. We'll see you then!
