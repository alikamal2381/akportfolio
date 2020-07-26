import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme-text">
        <h1 style={{ textAlign: "center", fontSize: "2em" }}>About Me</h1>

        <h5 style={{ paddingLeft: "30px", fontSize: "2em" }}>
          Career Objective:
        </h5>
        <p style={{ paddingLeft: "30px" }}>
          I intend to acquire vast experience in the area of{" "}
          <strong>Computer Software and Development Solutions,</strong> by
          utilizing my skills and Knowledge.
        </p>

        <h5 style={{ paddingLeft: "30px", fontSize: "2em" }}>
          Self-Appraisal Profile:
        </h5>
        <p style={{ paddingLeft: "30px" }}>
          <ol>
            <li>A self-motivated person who is diligent and ambitious</li>
            <li>Adaptable and willing to learn and take on new challenges.</li>
            <li>
              Highly professional, confidant, organized and possess a pleasing
              personality and have the ability to interact well with the people.
            </li>
          </ol>
        </p>

        <h5 style={{ paddingLeft: "30px", fontSize: "2em" }}>
          Exploring IT Skills:
        </h5>
        <p style={{ paddingLeft: "30px" }}>
          To meet the growing market challenges, I am continuously upgrading IT
          skills through instructor led training courses. Recently I have done
          new courses for widening knowledge, which are follows.
          <ol>
            <li>
              <strong>Certificate in Dot Net 3.5 (Windows Vista & WPF)</strong>
            </li>
          </ol>
        </p>

        <h5 style={{ paddingLeft: "30px", fontSize: "2em" }}>
          Technical Summary:
        </h5>
        <p
          style={{
            paddingLeft: "30px",
            justifyContent: "center",
            textAlign: "justify",
          }}
        >
          More than Ten years of IT region extensive work experience in the area
          of Software Designing, Development and Implementation in Visual Basic
          6.0. And I have also more than Four years of Dot Net working
          experience and Two years of PHP working experience. I have worked in
          different advanced software development projects with well-reputed
          companies of United Arab Emirates, Dubai and Pakistan. Past I am
          worked with one of the well-reputed private hospitals group, Dr.
          Ziauddin Hospital & Medical University, Clifton Campus, Karachi –
          Pakistan. And Now I am working with one of the well-reputed
          multi-national company / banking sector{" "}
          <strong>TELENOR MICROFINANCE BANK</strong> as{" "}
          <strong>APPLICATION SUPPORT ENGINEER</strong>.
        </p>
      </div>
    );
  }
}

export default AboutMe;
