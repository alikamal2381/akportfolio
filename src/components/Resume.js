import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div className="resume-body">
        <Grid className="resume-grid">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-9/105700817_10220537488700253_7275499227006437323_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_eui2=AeHB9olOoTuLOe26sEcVeTu65Bsv0J8yuDHkGy_QnzK4MZa5j5hrdny9Oz6HEfnU3kI&_nc_ohc=ojOFkgWtBVMAX9ArNpm&_nc_ht=scontent.fkhi17-1.fna&oh=dd8458128ba1601d9333af8db0d9d0d8&oe=5F331578"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Ali Kamal</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Abcdd ee 1 i 2333</p>
            <h5>Phone</h5>
            <p>+92 (300) 2465967</p>
            <h5>Email</h5>
            <p>some@example.com</p>
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
