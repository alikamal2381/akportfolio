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
          <Card
            shadow={5}
            style={{ minHeight: "350", minWidth: "450", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url(./images/projects/vb6_logo.png) center / cover",
              }}
            >
              EZ Accounts
            </CardTitle>
            <CardText
                style={{
                  height: "110px",
                }}            
            >
              <justify>
                EZ Accounts software is accounting software for small size
                organaztion, just like book keeping software in which keep track
                of all transactions and all list of all accounts with opening
                balance and date (Debit or Credit)...
              </justify>
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
          <Card
            shadow={5}
            style={{ minHeight: "350", minWidth: "450", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url(./images/projects/vb6_logo.png) center / cover",
              }}
            >
              Smart Office Suite (SOS)
            </CardTitle>
            <CardText
                style={{
                  height: "110px",
                }}              
            >
              Smart Office Suite (SOS) software is accounting software for large
              size organaztion, just like accounting firm software in which keep
              track of all transactions. (BR, CR, BP, CP, FT, JV).
              Complete Accounting package for large organaztion.
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
          <Card
            shadow={5}
            style={{ minHeight: "350", minWidth: "450", margin: "auto" }}
          >
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url(./images/projects/vb6_logo.png) center / cover",
              }}
            >
              Gen. & Maint. Billing Soft
            </CardTitle>
            <CardText
                style={{
                  height: "110px",
                }}               
            >
              Generator and Maintenance Billing specially for Dolmen Mall ,
              software includes six main modules Generator, KESC, Maintenace ,
              Rent, Other with sub-modules Invoice,Surchare,Receiving and Tax
              (if any).
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
                background: "url(./images/projects/visualstudio.png) center / cover",
              }}
            >
              HRMS Web Application
            </CardTitle>
            <CardText
                style={{
                  height: "110px",
                }}              
            >
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
                background: "url(./images/projects/visualstudio.png) center / cover",
              }}
            >
              School Management
            </CardTitle>
            <CardText
                style={{
                  height: "110px",
                }}              
            >
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
                background: "url(./images/projects/visualstudio.png) center / cover",
              }}
            >
              EZ ERP
            </CardTitle>
            <CardText
                style={{
                  height: "110px",
                }}              
            >
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
                color: "black",
                height: "176px",
                background: "url(./images/projects/React-icon.svg.png) center / cover",
              }}
            >
              Todo App
            </CardTitle>
            <CardText
                style={{
                  height: "110px",
                }}              
            >
              Our React todo list app is going to be simple, stylish, and
              user-friendly. Feast your eyes on the GIF of our finished todo
              list app above!
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/alikamal2381/todos.git"
                target="_blank"
                colored
              >
                Github
              </Button>
              <Button colored>Code pen</Button>
              <Button
                colored
                href="http://ez-todos-app.surge.sh/"
                target="_blank"
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
                color: "black",
                height: "176px",
                background: "url(./images/projects/React-icon.svg.png) center / cover",
              }}
            >
              Budget Calculator
            </CardTitle>
            <CardText
                style={{
                  height: "110px",
                }}                          
            >
              Budget Calculator App is easy to use. You may add your daily
              expenses with amounts or edit an existing and delete particular
              expenses.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/alikamal2381/budget-calc.git"
                target="_blank"
                colored
              >
                Github
              </Button>
              <Button colored>Code pen</Button>
              <Button
                href="http://ez-budgetcalc.surge.sh/"
                target="_blank"
                colored
              >
                LIVE DEMO
              </Button>
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
                background: "url(./images/projects/React-icon.svg.png) center / cover",
              }}
            >
              React Template Web
            </CardTitle>
            <CardText
                style={{
                  height: "110px",
                }}                          
            >
              React Template website using react Router. Six pages wonderful
              website with lots of functionality and lots of practice.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/alikamal2381/router-app2.git"
                target="_blank"
                colored
              >
                Github
              </Button>
              <Button colored>Code pen</Button>
              <Button
                href="http://ez-routerapptemplate.surge.sh/"
                target="_blank"
                colored
              >
                LIVE DEMO
              </Button>
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
                color: "white",
                height: "176px",
                background: "url(./images/projects/bootcamp2020.jpg) center / cover",
              }}
            >
              COVID19 Tracker App
            </CardTitle>
            <CardText
                style={{
                  height: "110px",
                }}                          
            >
              Most people in the world stay at home these days because of the
              lockdown. Most of you are frustrated about staying at home for a
              long time. Therefore, we will make a COVID-19 tracking
              application.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/alikamal2381/covid19-tracker-app.git"
                target="_blank"
                colored
              >
                Github
              </Button>
              <Button colored>Code pen</Button>
              <Button
                href="http://bootcamp-p2-covid19-tracker.surge.sh/"
                target="_blank"
                colored
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
                background: "url(./images/projects/bootcamp2020.jpg) center / cover",
              }}
            >
              Animated React Web App
            </CardTitle>
            <CardText
                style={{
                  height: "110px",
                }}                          
            >
              Create animated react web app using Web Animation API (WAAPI). In
              this website home page, services, about and contact pages simple.
              Also using React Hooks and React State.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/alikamal2381/animated-react-web.git"
                target="_blank"
                colored
              >
                Github
              </Button>
              <Button colored>Code pen</Button>
              <Button
                href="http://bootcamp-p5-animatedreactweb.surge.sh/"
                target="_blank"
                colored
              >
                LIVE DEMO
              </Button>
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
                background: "url(./images/projects/bootcamp2020.jpg) center / cover",
              }}
            >
              Quiz React App
            </CardTitle>
            <CardText
                style={{
                  height: "110px",
                }}                          
            >
              Create Quiz react App using axios for fetching data from API. In
              this project we used OPEN TRIVIA DATABASE for API. In this quiz
              app multiple choice questions along with some major categories and
              difficulty level.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/alikamal2381/quiz-app.git"
                target="_blank"
                colored
              >
                Github
              </Button>
              <Button colored>Code pen</Button>
              <Button
                href="http://bootcamp-p6-quizapp.surge.sh/"
                target="_blank"
                colored
              >
                LIVE DEMO
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  toggleCategories1() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          {/* <h1 style={{ textAlign: "center", fontSize: "2em" }}>
            This is MongoDB
          </h1> */}
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
                background: "url(./images/projects/visualstudio.png) center / cover",
              }}
            >
              Hospital Management
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
                background: "url(./images/projects/visualstudio.png) center / cover",
              }}
            >
              Shopping Mall
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
                background: "url(./images/projects/visualstudio.png) center / cover",
              }}
            >
              Tea Inventory
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
                color: "black",
                height: "176px",
                background: "url(./images/projects/React-icon.svg.png) center / cover",
              }}
            >
              Shopping Summary by React Redux
            </CardTitle>
            <CardText>
              Shopping Summary by React Redux is separate module which are use
              in shopping cart website, user-friendly. Feast your eyes on the
              GIF of our finished todo list app above!
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/alikamal2381/shopping-summary.git"
                target="_blank"
                colored
              >
                Github
              </Button>
              <Button colored>Code pen</Button>
              <Button
                colored
                href="http://ez-shopping-summary.surge.sh/"
                target="_blank"
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
                color: "black",
                height: "176px",
                background: "url(./images/projects/React-icon.svg.png) center / cover",
              }}
            >
              Learn Redux Counter
            </CardTitle>
            <CardText>Learn Redux Counter App is easy to use.</CardText>
            <CardActions border>
              <Button
                href="https://github.com/alikamal2381/learn-redux.git"
                target="_blank"
                colored
              >
                Github
              </Button>
              <Button colored>Code pen</Button>
              <Button
                href="http://ez-learn-redux.surge.sh/"
                target="_blank"
                colored
              >
                LIVE DEMO
              </Button>
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
                background: "url(./images/projects/React-icon.svg.png) center / cover",
              }}
            >
              EZ Contact Book
            </CardTitle>
            <CardText>EZ Contact Book using react Router.</CardText>
            <CardActions border>
              <Button
                href="https://github.com/alikamal2381/ez_contact_book.git"
                target="_blank"
                colored
              >
                Github
              </Button>
              <Button colored>Code pen</Button>
              <Button
                href="http://ez-contactbook-app.surge.sh/"
                target="_blank"
                colored
              >
                LIVE DEMO
              </Button>
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
          {/* <h1 style={{ textAlign: "center", fontSize: "2em" }}>
            This is MongoDB
          </h1> */}
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background: "url(./images/projects/bootcamp2020.jpg) center / cover",
              }}
            >
              Shoe Store
            </CardTitle>
            <CardText>
              Most people in the world stay at home these days because of the
              lockdown. Most of you are frustrated about staying at home for a
              long time. Therefore, we will make a COVID-19 tracking
              application.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/alikamal2381/kamal-online-store.git"
                target="_blank"
                colored
              >
                Github
              </Button>
              <Button colored>Code pen</Button>
              <Button
                href="http://bootcamp-p3-shoestore.surge.sh/"
                target="_blank"
                colored
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
                background: "url(./images/projects/bootcamp2020.jpg) center / cover",
              }}
            >
              Red Queen’s WAAPI and React Hooks
            </CardTitle>
            <CardText>
              Create animated react web app using Web Animation API (WAAPI). In
              this website home page, services, about and contact pages simple.
              Also using React Hooks and React State.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/alikamal2381/red-queen-race.git"
                target="_blank"
                colored
              >
                Github
              </Button>
              <Button colored>Code pen</Button>
              <Button
                href="http://bootcamp-p4a-redqueenrace.surge.sh/"
                target="_blank"
                colored
              >
                LIVE DEMO
              </Button>
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
                background: "url(./images/projects/bootcamp2020.jpg) center / cover",
              }}
            >
              Build a Animated React Web (Animated Illustrations)
            </CardTitle>
            <CardText>
              Create Quiz react App using axios for fetching data from API. In
              this project we used OPEN TRIVIA DATABASE for API. In this quiz
              app multiple choice questions along with some major categories and
              difficulty level.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/alikamal2381/animated-react-web.git"
                target="_blank"
                colored
              >
                Github
              </Button>
              <Button colored>Code pen</Button>
              <Button
                href="http://bootcamp-p5-animatedreactweb.surge.sh/"
                target="_blank"
                colored
              >
                LIVE DEMO
              </Button>
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

        <Grid
          className="projects-grid"
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={5}
        >
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>

          <Cell col={12}>
            <div className="content">{this.toggleCategories1()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
