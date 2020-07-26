import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import MyPic from "../images/final-ak2.png";

//src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.0-9/105700817_10220537488700253_7275499227006437323_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_eui2=AeHB9olOoTuLOe26sEcVeTu65Bsv0J8yuDHkGy_QnzK4MZa5j5hrdny9Oz6HEfnU3kI&_nc_ohc=ojOFkgWtBVMAX9ArNpm&_nc_ht=scontent.fkhi17-1.fna&oh=dd8458128ba1601d9333af8db0d9d0d8&oe=5F331578"

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ali Kamal</h2>
            <img src={MyPic} alt="avatar" style={{ height: "250px" }} />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I intend to acquire vast experience in the area of{" "}
              <strong>Computer Software and Development Solutions,</strong> by
              utilizing my skills and Knowledge.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +92 (300) 2465967
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-fax" aria-hidden="true" />
                    +92 (300) 2465967
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    alikamal2381@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    alikamal2381
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
