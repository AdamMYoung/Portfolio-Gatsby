import React from "react";

import laptop from "../../static/code-laptop.png";
import office from "../../static/office.jpg";
import university from "../../static/teesside-uni.jpg";
import quayside from "../../static/quayside.jpg";
import Timeline from "../components/timeline/Timeline";
import InfoCard from "../components/cards/InfoCard";

const TimelineView = () => (
  <Timeline>
    <Timeline.Entry>
      <InfoCard
        title="Terraquest Solutions"
        image={quayside}
        subtitle="2019-Present"
        description="My first graduate role is at Terraquest Solutions, where I work primarily as a front-end 
        React developer on a variety of internal and external applications."
      />
    </Timeline.Entry>
    <Timeline.Entry side="right">
      <InfoCard
        title="Teesside University (Final Year)"
        image={laptop}
        subtitle="2018-2019"
        description="I started my final year at university, where I developed Vocalia, a web-based podcast consumption and creation platform built with .NET Core and React.
           This won the British Computer Society award during ExpoTees, the university's project exhibition day."
      />
    </Timeline.Entry>
    <Timeline.Entry>
      <InfoCard
        title="DuPont Teijin Films"
        image={office}
        subtitle="2017-2018"
        description="My first development role was a placement year at DuPont Teijin Films, where I worked on a variety of internal C# plotting and management
           applications, managed and maintained database, and provided support across the business."
      />
    </Timeline.Entry>
    <Timeline.Entry side="right">
      <InfoCard
        title="Teesside University (1st & 2nd Year)"
        image={university}
        subtitle="2015 - 2017"
        description="I began my BSc in Computer Science at Teesside University, located in Middlesbrough, UK."
      />
    </Timeline.Entry>
  </Timeline>
);

export default TimelineView;
