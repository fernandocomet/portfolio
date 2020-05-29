import React, { Component } from 'react';
import './Home.css';
import gsap from "gsap";

class Home extends Component{

    constructor(props) {
        super(props);
        this.introAnimation = this.introAnimation.bind(this);
    }

    introAnimation(){
    var tl = gsap.timeline();
        tl.to("#logo", { xPercent: -50, left: "50%", duration: 0 })
        .to("#star", { alpha: 1, duration: 1 })
        .to("#star", { rotation: 720, duration: 5 })
        .to("#rallasblancas", { delay: -5, alpha: 1, duration: 1 })
        .to("#rallasblancas", { alpha: 0, duration: 1 })
        .to("#star", { alpha: 0, duration: 1 })
        .to("#logo", { alpha: 1, ease: "sine", duration: 1 })
        .to("#logo", { y: -100, duration: 1 })
        .to("#fc", {xPercent: -50, left: "50%", alpha: 1, ease: "sine", duration: 1})
        .to("#uxengineer", {xPercent: -50,left: "50%",alpha: 1,ease: "sine",duration: 1})
        .to("#uxengineer", { delay: 1, left: "120%", alpha: 0, ease: "sine", duration: 1 })
        .to("#fullstack", {xPercent: -50,left: "50%",alpha: 1,ease: "sine",duration: 1})
        .to("#fullstack",  { delay: 1, left: "120%", alpha: 0, ease: "sine", duration: 1 })
        .to("#uxdesigner", {xPercent: -50,left: "50%",alpha: 1,ease: "sine",duration: 1})
        .to("#uxdesigner",  { delay: 1, left: "120%", alpha: 0, ease: "sine", duration: 1 })
        .to("#animator", {xPercent: -50,left: "50%",alpha: 1,ease: "sine",duration: 1})
        .to("#animator",  { delay: 1, left: "120%", alpha: 0, ease: "sine", duration: 1 })
        .to("#photographer", {xPercent: -50,left: "50%",alpha: 1,ease: "sine",duration: 1})
        .to("#photographer",  { delay: 1, left: "120%", alpha: 0, ease: "sine", duration: 1 });
    }

    componentDidMount() {
        this.introAnimation();
    }

    render() {
        return (
          <div className="App">
      
            <section className="intro">
              <h1 id="fc">Fernando Comet</h1>
              <h1 id="uxengineer">UX Engineer</h1>
              <h1 id="fullstack">Full Stack Developer</h1>
              <h1 id="uxdesigner">UX Designer & Researcher</h1>
              <h1 id="animator">Animator & Ad Specialist</h1>
              <h1 id="photographer">Photographer</h1>
    
              <p id="introp">
                UX Engineer, hybrid profile between Front-end development and UX
                design focused on all steps from research to interaction. Moving on
                for more than 15 years in the Digital industry. Looking for new
                opportunities and challenges.{" "}
              </p>
    
              <div id="intro">
                <img
                  src="https://www.fernandocomet.com/img/intro/rallasblancas2.svg"
                  id="rallasblancas"
                  alt="rallasblancas"
                />
                <img
                  src="https://www.fernandocomet.com/img/intro/rallasnegras2.svg"
                  id="rallasnegras"
                  alt="rallasnegras"
                />
                <img
                  src="https://www.fernandocomet.com/img/intro/star.svg"
                  id="star"
                  alt="star"
                />
                <img
                  src="https://www.fernandocomet.com/img/intro/bg.svg"
                  id="bg"
                  alt="bg"
                />
              </div>
    
              <img
                src="https://www.fernandocomet.com/img/intro/logo.png"
                id="logo"
                alt="logo"
              />
            </section>
          </div>
        );
      }
    

}

export default Home;
