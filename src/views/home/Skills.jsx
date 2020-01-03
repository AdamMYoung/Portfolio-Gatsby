import React from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";

const SkillEntry = props => (
  <Row style={{ marginTop: 12 }}>
    <Col>
      <div style={{ display: "flex", alignItems: "center" }}>
        <i style={{ fontSize: 48, marginRight: 18 }} className={props.icon}></i>
        <h2>{props.title}</h2>
      </div>

      <h5>{props.content}</h5>
    </Col>
  </Row>
);

const Skills = () => (
  <Tabs defaultActiveKey="frontend">
    <Tab eventKey="frontend" title="Front-End">
      <SkillEntry
        icon="devicon-react-original colored"
        title="React"
        content="React is a JavaScript framework, used for creating interactive websites and applications. With it, I have developed various applications, such as ReQuestaPlan, the UK Planning Portal, and this very website to name a few."
      />
      <SkillEntry
        icon="devicon-javascript-plain colored"
        title="JavaScript"
        content="JavaScript is a programming language built for the web. React is built on JavaScript, and as such is used in the majority of my work. I have also utilized GIS frameworks such as OpenLayers and Leaflet to built interactive experiences for the public."
      />
      <SkillEntry
        icon="devicon-typescript-plain colored"
        title="TypeScript"
        content="TypeScript is a programming language built around JavaScript, providing type safety and inheritence similar to other OOP languages. I have also used this within react in projects such as Vocalia to improve safety when accessing variables."
      />
      <SkillEntry
        icon="devicon-html5-plain colored"
        title="HTML"
        content="HTML defines the layout of web pages, not neccisarily a programming language but as a markup language. This defines the general structure of web pages, and is one of the three key building blocks of the web. All of my web applications use HTML."
      />
      <SkillEntry
        icon="devicon-css3-plain colored"
        title="CSS"
        content="CSS defines the look and feel of webpages, and is used within my work to provide colours, fonts, styles and animations. The colour change animation of this site is a great example of the power of CSS."
      />
    </Tab>

    <Tab eventKey="backend" title="Back-End">
      <SkillEntry
        icon="devicon-java-plain colored"
        title="Java"
        content="I have worked on several Java projects during my time at university. It is the first language that taught me OOP, however I now much prefer C# due to the consise syntax and powerful libraries it provides."
      />
      <SkillEntry
        icon="devicon-csharp-plain colored"
        title="C#"
        content="C# is my current go-to OOP language, which I primarily use for API and server development. My focus currently is in .NET Core, with further work looking into Blazor development."
      />
      <SkillEntry
        icon="devicon-dot-net-plain colored"
        title=".NET Core"
        content=".NET Core is an open-source language developed my Microsoft and is curently the industry standard for web and server development. The Vocalia back-end was developed using this, with projects at work also migrating towards this powerful framework."
      />
    </Tab>

    <Tab eventKey="desktopandmobile" title="Desktop and Mobile">
      <SkillEntry
        icon="devicon-android-plain colored"
        title="Android"
        content="I have developed several Android applications both at university and for personal projects, incorporating the current best practises using Android Jetpack. You can find several of them on my GitHub page."
      />
      <SkillEntry
        icon="devicon-windows8-original colored"
        title="WPF"
        content="I have created numerous Windows applications using WPF utilizing the MVVM architecture, such as Groupr which can be found at my GitHub page."
      />
    </Tab>

    <Tab eventKey="devops" title="DevOps">
      <SkillEntry
        icon="devicon-docker-plain colored"
        title="Docker"
        content="Docker is a container platform used for deploying software, which has been used by the Vocalia back-end to provide scaling and redundancy when deploying to the cloud."
      />
      <SkillEntry
        icon="devicon-git-plain colored"
        title="Git"
        content="Git is a code version control system that is widely adopted across inducstry. My GitHub page demonstrates my use of Git, containing any projects I am currently working on."
      />
    </Tab>
  </Tabs>
);

export default Skills;
