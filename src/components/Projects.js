import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

// https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/en/e/e4/Visual_Basic_6.0_logo.png) center / cover",
              }}
            >
              VB Project # 1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions border>
              <button colored>Github</button>
              <button colored>Code pen</button>
              <button colored>LIVE DEMO</button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/en/e/e4/Visual_Basic_6.0_logo.png) center / cover",
              }}
            >
              VB Project # 2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions border>
              <button colored>Github</button>
              <button colored>Code pen</button>
              <button colored>LIVE DEMO</button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/en/e/e4/Visual_Basic_6.0_logo.png) center / cover",
              }}
            >
              VB Project # 3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions border>
              <button colored>Github</button>
              <button colored>Code pen</button>
              <button colored>LIVE DEMO</button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1 style={{ textAlign: "center", fontSize: "2em" }}>
            This is Dot Net
          </h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png) center / cover",
              }}
            >
              React Project # 1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions border>
              <button colored>Github</button>
              <button colored>Code pen</button>
              <button colored>LIVE DEMO</button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png) center / cover",
              }}
            >
              React Project # 2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions border>
              <button colored>Github</button>
              <button colored>Code pen</button>
              <button colored>LIVE DEMO</button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png) center / cover",
              }}
            >
              React Project # 3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions border>
              <button colored>Github</button>
              <button colored>Code pen</button>
              <button colored>LIVE DEMO</button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1 style={{ textAlign: "center", fontSize: "2em" }}>
            This is MongoDB
          </h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1 style={{ textAlign: "center", fontSize: "2em" }}>
            This is Bootcamp 2020
          </h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Visual Basic</Tab>
          <Tab>Dot Net</Tab>
          <Tab>React</Tab>
          <Tab>MongoDB</Tab>
          <Tab>Bootcamp 2020</Tab>
        </Tabs>

        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
