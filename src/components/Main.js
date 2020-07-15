import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

const Main = () => (
  <Switch>
    <Route exact path="/" Component={LandingPage} />

    <Route path="/AboutMe" Component={AboutMe} />
    <Route path="/Contact" Component={Contact} />
    <Route path="/Projects" Component={Projects} />
    <Route path="/Resume" Component={Resume} />
  </Switch>
);

export default Main;
