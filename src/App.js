import React, { Component } from 'react';
import './App.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes";
import Navbar from "./Navbar";
import Footer from './Footer';

import home from "./img/navbar/white_home.svg";
import text from "./img/navbar/white_text.svg";
import works from "./img/navbar/white_works.svg";
import monster from "./img/navbar/white_monster.svg";
import workroll from "./img/navbar/white_workroll.svg";

class App extends Component{

  static defaultProps={
    menu:[
      {name: "home", icon: "home.svg", src: home}, 
      {name: "text", icon: "text.svg", src: text},
      {name: "works", icon: "works.svg", src: works},
      {name: "roll", icon: "workroll.svg", src: workroll},
      {name: "about", icon: "monster.svg", src: monster}
    ]
  }
  
  render(){
    return(
      <div className="App">
        <div className="navbar">
            <Navbar menu={this.props.menu} />
        </div>
        <div className="main">
            <Routes menu={this.props.menu} />
        </div>
        <div className="footer">
            <Footer menu={this.props.social} />
        </div>
      </div>
    )
  }
}

export default App;
