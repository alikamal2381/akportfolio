import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import MyPic from "../images/final-ak2.png";

class Resume extends Component {
  render() {
    return (
      <div className="resume-body">
        <Grid className="resume-grid">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={MyPic} alt="avatar" style={{ height: "200px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Ali Kamal</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I intend to acquire vast experience in the area of{" "}
              <strong>Computer Software and Development Solutions,</strong> by
              utilizing my skills and Knowledge.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>
              G-2, Fareed Appartment Phase-1 Block-7 F.B.Area Post Office
              Karachi
            </p>
            <h5>Phone</h5>
            <p>+92 (300) 2465967</p>
            <h5>Email</h5>
            <p>alikamal2381@gmail.com</p>
            <h5>Web</h5>
            <p>www.ezsystemspk.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <div>
              <h2>Education</h2>
              <Education
                startYear={2013}
                endYear={2015}
                schoolName={"KASB Institute of Technology"}
                schoolDescription="Master of Business Administration"
              />

              <Education
                startYear={2001}
                endYear={2003}
                schoolName={"Karachi University (Private)"}
                schoolDescription="Becholor of Commerce"
              />

              <Education
                startYear={1998}
                endYear={2000}
                schoolName={"Govt. Dehli College"}
                schoolDescription="F. Sc. Intermidiate"
              />

              <Education
                startYear={1997}
                endYear={1998}
                schoolName={"B.N. Grammer School"}
                schoolDescription="S. Sc. Matriculation"
              />

              <hr style={{ borderTop: "3px solid #e22947" }} />

              <h2>Experience</h2>

              <Experience
                startYear={2018}
                endYear={2020}
                jobName={"Telenor Microfinance Bank"}
                jobDescription="Banking Industry"
              />

              <Experience
                startYear={2017}
                endYear={2017}
                jobName={"Viftech Solutions"}
                jobDescription="IT Software House"
              />

              <Experience
                startYear={2015}
                endYear={2016}
                jobName={"MAAKEDOOR"}
                jobDescription="IT Software House"
              />

              <Experience
                startYear={2012}
                endYear={2014}
                jobName={"Dr. Ziauddin Hospital"}
                jobDescription="Hospital Industry"
              />

              <Experience
                startYear={2008}
                endYear={2009}
                jobName={"Dotme Tech"}
                jobDescription="Software House in Dubai, United Arab Emirates"
              />

              <Experience
                startYear={2003}
                endYear={2007}
                jobName={"PNT Global"}
                jobDescription="PNT Software House"
              />

              <hr style={{ borderTop: "3px solid #e22947" }} />

              <h2>Skills</h2>
              <Skills skillName={"Visual Basic"} progress={100} />
              <Skills skillName={"Dot Net"} progress={70} />
              <Skills skillName={"React"} progress={40} />
              <Skills skillName={"javaScript"} progress={30} />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
