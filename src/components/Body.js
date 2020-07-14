import React, { Component } from "react";
//import logo from "../mypic.jpg";
import logo from "../../public/mypic.jpg";

// /images/d1.jpg

class Body extends Component {
  render() {
    return (
      <div>
        <p>Lorem Ispum</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logo} alt="my-pic" />
      </div>
    );
  }
}

export default Body;
