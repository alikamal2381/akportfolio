import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import MyPic from "../images/final-ak2.png";

//src="https://www.shareicon.net/data/2015/09/24/106427_man_512x512.png"
//src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-9/105700817_10220537488700253_7275499227006437323_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_eui2=AeHB9olOoTuLOe26sEcVeTu65Bsv0J8yuDHkGy_QnzK4MZa5j5hrdny9Oz6HEfnU3kI&_nc_ohc=ojOFkgWtBVMAX9ArNpm&_nc_ht=scontent.fkhi17-1.fna&oh=dd8458128ba1601d9333af8db0d9d0d8&oe=5F331578"

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={MyPic} alt="avatar" className="avatar-img" />

            <div className="banner-text">
              <h1>ALI KAMAL</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | React | Facebook</p>
              <div className="social-links">
                {/* facebook */}
                <a
                  href="https://www.facebook.com/alikamal2381"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>

                {/* twitter */}
                <a
                  href="https://twitter.com/home"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ali-kamal-8436537"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* youtube */}
                <a
                  href="https://www.youtube.com/user/alikamal2381"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

                {/* github */}
                <a
                  href="https://github.com/alikamal2381"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
