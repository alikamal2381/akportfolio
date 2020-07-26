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

/* 
import VB from "../images/vb6.jpg";
import DOTNET from "../images/dotnet.jpg";
import REACT from "../images/reactjs.png";
import MONGODB from "../images/mongodb.jpg";
import BOOTCAMP from "../images/bootcamp.jpg"; 
*/

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
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
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
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
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
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              DotNet Project # 1
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
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
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              DotNet Project # 2
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
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
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              DotNet Project # 3
            </CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
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
              Todo App
            </CardTitle>
            <CardText>Todo App</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button
                colored
                onClick={function () {
                  console.log("add expense");
                }}
              >
                LIVE DEMO
              </Button>
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
              Budget Calculator
            </CardTitle>
            <CardText>Budget Calculator</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
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
              Shopping Cart Module
            </CardTitle>
            <CardText>Shopping Cart Module</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png) center / cover",
              }}
            >
              Receipe App Module
            </CardTitle>
            <CardText>Receipe App Module</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 5 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png) center / cover",
              }}
            >
              Router App Example
            </CardTitle>
            <CardText>Router App Example</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 6 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background:
                  "url(https://cdn.idevie.com/wp-content/uploads/2015/12/React.js_logo.svg_.png) center / cover",
              }}
            >
              Router App Example 2
            </CardTitle>
            <CardText>Router App Example 2</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
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
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              Expense Tracker App
            </CardTitle>
            <CardText>
              Project 1: Build an Expense Tracker App using React
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
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
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              COVID-19 Tracker App
            </CardTitle>
            <CardText>Project 2: COVID-19 Tracker App</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
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
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              Shoe Store
            </CardTitle>
            <CardText>Project 3: Shoe Store</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              Animated React Website
            </CardTitle>
            <CardText>
              Project 5: Build a Animated React Website (Animated Illustrations)
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 5 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(data:image/jpeg;base64,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) center / cover",
              }}
            >
              Quiz App
            </CardTitle>
            <CardText>Project 6: Quiz App with React and Typescript</CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Code pen</Button>
              <Button colored>LIVE DEMO</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
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
