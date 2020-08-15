import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/Main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <div className="demo-big-content">
              <Layout>
                <Header
                  className="header-color"
                  title={
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/"
                    >
                      My Portfolio
                    </Link>
                  }
                  scroll
                >
                  <Navigation>
                    <Link to="/Resume">Resume</Link>
                    <Link to="/AboutMe">About Me</Link>
                    <Link to="/Projects" className="notification">
                      <span>Special</span>
                      <span className="badge">3</span>
                    </Link>
                    <Link to="/Listing">Listing</Link>
                    <Link to="/Contact">Contact</Link>
                  </Navigation>
                </Header>
                <Drawer
                  title={
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/"
                    >
                      My Portfolio
                    </Link>
                  }
                >
                  <Navigation>
                    <Link to="/Resume">Resume</Link>
                    <Link to="/AboutMe">About Me</Link>
                    <Link to="/Projects">Special</Link>
                    <Link to="/Listing">Projects</Link>
                    <Link to="/Contact">Contact</Link>
                  </Navigation>
                </Drawer>
                <Content>
                  <div className="page-content" />
                  <Main />
                </Content>
              </Layout>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
