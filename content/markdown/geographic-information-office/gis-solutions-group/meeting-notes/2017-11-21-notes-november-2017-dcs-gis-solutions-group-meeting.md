---
layout: gio/gio-sub-dcs.njk
title: "Notes: September 2017 DCS GIS Solutions Group Meeting"
author: Felicia Retiz, Deputy GIO
bodyClass: dcs-meeting-notes
abstract:
    The GIS Solutions Group meeting notes from November 2017
tags: GIO, Data Sharing, GIS, Geospatial, DIR, DCS
---

# {{title}}

### Date: September 19, 2017  ● 2:30 pm – 4:00 pm 

**Location:** DIR Conference Room #4, W. P. Clements Building, 13th floor

**Meeting Chair:** Ed Kelly, DIR – Co-chair (R. Wade  - Chair, absent)

**Participants:**  Raj Nadkarni, TCEQ; Paul Buschow, TCEQ;  Scot Friedman, GLO; Monica Watt, CSEC; Felicia Retiz, TWDB/TNRIS; Gayla Mullins, TWDB/TNRIS; Travis Scruggs, Jeremy Rogers – TxDOT; Beth ?? - Capgemini

## Welcome and Introductions

## Charter Review and Discussion
Ed introduces a new idea for membership based on the unprecedented Solutions Group model involving regional and local participants. Core membership would remain based on not only financial contributions, but as an agency using GIS for their business needs. 19 regional and 99 local participants in the Texas Imagery Service and should have representation in the group to help with decision-making from their perspective. Ed put together a proposal for a committee structure that would include members and partners, including high-level roles and responsibilities (Attachment A). Having local partners would be helpful in getting feedback regarding other dataset initiatives such as parcels and addresses.

What is the selection criteria? Ed says we could reach out and request a representative, there are several large cities participating. We need new ideas and input to the group. 

CSEC has customer focus group and they have been beneficial in contributing input.

This is a new idea that Ed thought up after reviewing the spreadsheets. Raj suggests we also reach out to higher education for a rep. One rep from higher ed would need to communicate to the other institutes.

Raj is concerned about consensus method the group employs. As the group grows, consensus will become a problem. Ed says adding these partners doesn’t mean they get a vote. The partners are “at the table” to provide suggestions. 
Do we want one rep per local and regional entity? Too many. We should have one rep with a back-up that they select. The selected person should be one with a true interest in representing their group. Brooks suggests finding someone who has experience and perspective, and give them the responsibility of hosting a meeting with their group periodically. Ed, Richard, or Felicia could sit in on the meeting to support and give guidance. Local, Regional, and Higher Ed, would not have decision-making authority.

Action Item: Ed will work this model into the charter, adding the chart to define the roles and responsibilities. 

## Texas Imagery Participation Update
New round of imagery coming in from fall 2017 flights. Lots of flight blocks have been flown but not processed into the service. Much of the new imagery is over West Texas. Gayla asked Kyle what he knows about what will be flown during this leaf-off season. Kyle may have a better idea after the Thanksgiving holiday. Gayla created a “watchlist” that contains all imagery aged 3 years for Google to review. 

Participation update – a few more participants have signed contracts. Still waiting on payment from a few agencies. Once those payments are made, we will have a little extra that the group will need to decide how to spend. Likely additional storage will need to be purchased.

Michael Terner (AppGeo) presented on current storage numbers for imagery service and tile buckets. The numbers are increasing due to additional imagery being flown. The idea we should consider is moving some of the older tiles into “deep storage” that costs 25-30% of the current storage costs. Hosting data in deep storage means no download access to the tiles but they are still available for streaming/display in the WMTS/WMS. Went from 2Tb/mo. to 3Tb/mo. from September to October. Could be due to Harvey and a frenzy to download prior to losing access. Big query requests for analytics count towards bandwidth. Each statewide capture adds another 50-70 Tb of data. 

We need to discuss the option of moving the older imagery (>3 years old) into deep storage. There are some redundancies that can be reduced, according to Michael. At the current rate, we can be looking at $80,000 worth of storage services, annually. 

Raj brings up the issue that we only have 6 years worth of archiving and TCEQ needs access to the historical imagery at any time. What about just moving the jpeg2000 (jp2) tiles (pixels) into deep storage, keeping the tile pyramids at the higher storage costs. Need to test performance on tile pyramids if the jp2 tiles get moved. Michael says the downloading of tiles is relatively small and limited to the latest imagery. Ed moves to outline the options, with pros and cons. Then we can look at what we can save per option. Raj is concerned about the time it takes to get to the deep storage data. Raj does not download the imagery.

Action items: Options will be laid out before the next meeting for the group to consider – Michael and Felicia will put something together. Will also find out the amount of time it would take to access the imagery from deep storage. AppGeo will test the performance of the tile pyramid services and report back.
Michael mentions working with TNRIS to prototype a similar service using Lidar and the storage amounts we will need to consider. Accessing Lidar from the cloud is something we all need to consider, as well as how we would use this service in an application.

## GIS Skills Inventory List
A GIS Task Force was brought up in light of the limited number of GIS professionals available to assist at the SOC during Harvey. The idea is that state agency GIS personnel would voluntarily sign up to assist the SOC during an emergency event. The GIS Skills Inventory List asks what specific skills a GIS professional has experience with and whether they agree to be called on for assistance. The concept was brought to Mike Ouimet’s attention at a meeting in September. Since then, Texas Department of Emergency Management held a meeting in San Marcos to go over Harvey response and lessons learned. The Skills Inventory questionnaire has since been created and will need to be vetted by TDEM. The inventory list will reside with TNRIS unless TDEM requests ownership.

Raj asks if this list is made up based on personal volunteers or as professionals. The list will contain agency personnel with support from management. There is a possibility that the agency could be reimbursed for staff time from FEMA. Will need to work it out with Mike. Ed states we would add a cover letter or a debrief report along with the questionnaire and submit it to TDEM. Raj requests a letter to give to management that would outline the objective of the inventory (Attachment B). Ed will draft something up and have it signed by Richard and Ed as Chair and Co-Chair of the GIS Solutions Group. 
Scot mentions that we should also add in equipment availability. TDEM lacks the machine power needed to run GIS software. Other equipment such as plotters could be inventories as well. He also suggests that we ask TDEM to consider a video link for meetings so we can know who is working/attending meetings because we often don’t know who is at the State Operations Center.

Action Item: Email the questionnaire link to the GIS Solutions group and get feedback. Get Mike’s input. Felicia to share Google Form questionnaire.

## General Discussion Topics
Raj reminds us that we need to add the past Texas Imagery Service new tiers vote into the notes. Consensus was reached. Ed motioned and the motion was seconded by Felicia.

Monica asks about the St. Edwards Hackathon and their interest in tackling the 3D mapping solution requested by CSEC. Ed says the structure is already in place to take on the hackathon. Ed proposed two ways to proceed with the hackathon: 
- Use open government data to create an application.
- Ask state agencies what problem they need to solve and get the hackathon participants to address those problems.
Ed plans to meet with the ATX Hack for Change group to discuss how the hackathon would work and CSEC's problem. Ed invites other agencies to join the meeting and add an issue they are trying to solve if they have one. If there are any programmers from the state agencies that would like to participate on a team, or on their own, they are welcome to sign up with management approval. CSEC is looking for an application to display Z-value on a map from 9-1-1 incoming calls. DIR Hackathon is scheduled for first weekend in June. The planning meeting to discuss the hackathon is scheduled for some time in January- Ed will send out an invitation to the group.

The 2018 1st Quarter GIS Community is scheduled for Tuesday, January 16, 2018.

Last Item – TWDB has finalized the job description for the GIS Data Coordinator. The job description was passed out for review and feedback. Agencies are asked to assist in funding the position to demonstrate support for the address and parcel statewide dataset initiatives.

### NEXT GIS Solutions Group Meeting: January 18, 2018

## Attachment A - Proposed Committee Structure – GIS Solutions Group

### Members
- TXDOT
- CSEC
- TCEQ
- GLO
- TPWD
- TWDB
- DIR
- (1) Regional Representative
- (1) Local Representative

### Members
- TXDOT
- CSEC
- TCEQ
- GLO
- TPWD
- TWDB
- DIR
- (1) Regional Representative
- (1) Local Representative

### Regional Partners
- Water Districts
- River Authorities
- Conservation Authorities
- Etc.

### Regional Partners
- Water Districts
- River Authorities
- Conservation Authorities
- Etc.

### Local Partners
- Counties
- Cities
- ISDs
- Municipal Districts
- Etc.

### Local Partners
- Counties
- Cities
- ISDs
- Municipal Districts
- Etc.

### Responsibilities/Roles

<table class="table">
<thead>
  <td><strong>Members</strong></td>
  <td><strong>Partners</strong></td>
</thead>
<tr>
  <td>Chair/Co-Chair – TWDB/DIR</td>
  <td>No chair/co-chair</td>
</tr>
<tr>
<td>Member role, participate and contribute at monthly meetings</td>
<td>Listen in on monthly meetings </td>
</tr>
<tr>
<td>Establish overall goals of the group</td>
<td>Contribute through designated representatives</td>
</tr>
<tr>
<td>
Identify geospatial data initiatives and opportunities</td>
<td>Contribute through designated representatives</td>
</tr>
<tr>
<td>Consensus decision-making authority</td>
<td>No decision-making authority</td>
</tr>
</table>

## Attachment B - Draft Letter to Agency Management*

On Friday August 25, 2017, Hurricane Harvey made its initial landfall in Rockport, Texas as a category 4 storm. Rain topped 50 inches in some areas. By the time Harvey was downgraded to a tropical depression (Wednesday, August 30, 2017), it had already created some of the worst flooding in U.S. History.
To address the catastrophic impact, and initiative response and recovery efforts, the State Operations Center (SOC) was activated. The Texas Water Development Board (TWDB) and Texas Natural Resources Information System (TNRIS), as well as many the other states agencies, came together to utilize their geospatial information system (GIS) expertise and knowledge. Using skilled GIS professionals from many different agencies, maps of the flooded areas were created and provided to emergency response and rescue teams. In the end, the GIS mapping capabilities aided in saving many lives and protecting valuable property.

Members of the GIS Solutions Group, which represents the agencies that provided GIS support throughout the event, conducted ongoing event status discussions, a post mortem review and identified lessons learned. One item identified was the coordination of GIS resources. During the peak activity at the SOC, many agencies had representatives capable of working on mapping requests. At times, there were too many resources and other times too few. This led to confusion of roles, as well as, resources being over and/or underutilized.

To address this item, the GIS Solutions Group members have agreed to contribute their input to a report that will be submitted to the Texas Department of Emergency Management (TDEM). This report, coupled with others’ input currently being collected by TDEM, will address future emergency situations, and ultimately improve the state’s response.

As chair of the GIS Solutions Group, I would ask for your help and support in allowing your agency’s GIS management the opportunity to work with us in developing a GIS skills inventory. This inventory would identify resources, their skills, knowledge, and experience working with the variety of GIS hardware and software products. This list, when completed, will allow for better coordination and staffing to meet the needs of the SOC.

Our goal would be to document the skills inventory, and the other lessons learned in the next month and provide the report to the TDEM coordinator for review.  A copy of the report will be made available to all input contributing agencies.  Thank you in advance for your continued support of GIS activities within your agency. If you should have any questions, please contact me at (512) 463-4010 or through email at  Richard.wade@twdb.texas.gov

Sincerely,
Richard Wade
TNRIS GIO
GIS Solutions Group Chairman  

*Letter wil require a formal name to address and will be printed on TWDB letterhead.       
