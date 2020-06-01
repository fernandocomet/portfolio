import React, { Component } from 'react';
import './About.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExternalLink } from 'react-external-link';

class About extends Component{
   
    render(){
        return(           
                <div className="container hola">
                    <h1 className="display-1 point">.</h1>

                    <div className="row mb-5">
                            <div className="col-md-6 text-right"><img src="https://raw.githubusercontent.com/fernandocomet/portfolio/master/src/img/about/profile.jpg" className="img-fluid" id="fc_pic"  alt='profile'/></div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-12"><h1 className="display-5 text-left">Fernando Comet</h1></div>
                                </div>
                                <div className="row pl-3">
                                <p>Defining oneself is not easy. I am a curious and restless mind, very interested in everything to the web as we know it. For more than 15 years I have worked in digital and media agencies, in the tech area and as a freelance. I'm interested in design, animation and web programming, especially front. But I also have other concerns such as photography, writing, e-commerce, etc.</p>
                                <p>I spend a lot of time studying and researching, my live is like a lab, always looking for new things and trying them. I consider projects where I can carry out what I have learned and even take a walk or try new things. Right now looking for new opportunities and challenges!</p>
                                </div>
                            </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-6 text-right"><img src="https://raw.githubusercontent.com/fernandocomet/portfolio/master/src/img/about/github.jpg" className="img-fluid" id="fullstack_pic" alt='github' /></div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12"><h1 className="display-5">Full Stack Web Developer</h1></div>
                            </div>
                            <div className="row pl-3">
                            <p>Right now I focus on web development. I am doing a lot of React and its integrations, not only for UI libraries (Material, Bootstrap, etc) but also for APIs. I like very much JamStack.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-6 text-right"><img src="https://raw.githubusercontent.com/fernandocomet/portfolio/master/src/img/about/customerjourney.png" className="img-fluid" id="uxdesigner_pic" alt='research' /></div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12"><h1 className="display-5">UX Designer & Researcher</h1></div>
                            </div>
                            <div className="row pl-3">
                            <p>I studied philosophy so my first approach always comes from this area. I make a lot of research to understand product, customer and user better. I do a lot of sketching before jumping to UX methodologies. Can work with wireframes, user flows, prototyping, testing, usability and overall experience of the application works for the end-user. I have experience in facilitation and also in teaching, I was <ExternalLink href="https://www.ironhack.com/en" >Teacher Assistant at UX/UI Bootcamp at Ironhack.</ExternalLink></p> 
                            <p>I have worked in UX freelance projects on my own and as a part of a team. I have written more than 80 articles on Medium, many of them UX related, published by Prototypr and UXPlanet. <ExternalLink href="https://www.interaction-design.org/fernando-comet" >I am also a member of the Interaction Design Foundation.</ExternalLink></p>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-6 text-right"><img src="https://raw.githubusercontent.com/fernandocomet/portfolio/master/src/img/about/fitur1.jpg" className="img-fluid" id="animator_pic" alt='fitur' /></div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12"><h1 className="display-5">UI Animator & Ad Specialist</h1></div>
                            </div>
                            <div className="row pl-3">
                            <p>I come from Display Advertising where I worked in Digital Agencies such as Genetsis Partners and Comunica+A first, and then on Adserving as Ad Specialist. For more than eight at Weborama my work was giving technical support to creative and media agencies. This involved production, design, coding, support, trainings and workshops, documentation, creation of new Ad Formats and campaign coordination, giving support for the most known Advertisers and more than 200 agencies in Spain, Europe and Latam markets.</p>
                            <p>I can animate using tools as Principle or After Effects. And for Ads, I am an expert on Adobe AnimateCC, Google Web Designer and can animate also by code using libraries such as Gsap, Velocity, Anime or Pixi. <ExternalLink href="https://skillshop.exceedlms.com/profiles/7f05b62a10484d2783b02431d41dd896">I am certified by Google </ExternalLink> on Ads production and I am also using last trends on SVG animation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-6 text-right"><img src="https://raw.githubusercontent.com/fernandocomet/portfolio/master/src/img/about/puntapaloma.jpg" className="img-fluid" id="photographer_pic" alt='puntapaloma' /></div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-12"><h1 className="display-5">Photographer</h1></div>
                            </div>
                            <div className="row pl-3">
                            <p>After some years shooting with an old Olimpus of 2Mb, some years ago <ExternalLink href="https://controlpublicidad.com/campanas-publicitarias/ganadores-del-concurso-cuentanos-tu-historia/">I won the third price of National Geographic Spain and Ron Brugal with this photo.</ExternalLink> The award was a Sony Alpha 70, I bought a 70-300 and started shooting every sunday for four or five years. Then I decided to go one step further. I studied a Master at <ExternalLink href="https://www.workshopexperience.com/">WorkShopExperience</ExternalLink> in Madrid for one year, also bought a Canon EOS 5D Mark III with a fantastic 24-70mm.</p> 
                            <p>I am focused on travel photography, events and landscape. Actually I am selling my my photos online at <ExternalLink href="https://www.gettyimages.es/search/photographer?family=creative&photographer=fernando%20comet" >Getty Images</ExternalLink>, <ExternalLink href="https://www.shutterstock.com/g/fernandocomet?language=en" >Shuterstock</ExternalLink> and <ExternalLink href="https://www.dreamstime.com/fernandocomet_info">Dreamstime</ExternalLink>. <ExternalLink href="http://www.fernandocomet.com/prices/awards/superluna-y-supergaviota/">Here some awards I won</ExternalLink>. I have also some <ExternalLink href="http://www.fernandocomet.com/prices/uncategorized/secret-life-of-a-photographer/" >personal projects</ExternalLink> more experimental (steel wool, high speed photography). <ExternalLink href="https://www.instagram.com/fernandocomet/">Check my ig account!</ExternalLink></p>
                            </div>
                        </div>
                    </div>

                </div>
        )
    }

}

export default About;

