import React, { Component } from 'react';
import './Adportfolio.css';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Iframe from 'react-iframe';

class Adportfolio extends Component{
    constructor(props) {
        super(props);
        this.introAnimation = this.introAnimation.bind(this);
    }

    introAnimation(){
        //whatsoever
    }

    componentDidMount() {
        //this.introAnimation();
    }


    render(){
        return(
            <div className="container hola">
                <h1 className="display-1 point">.</h1>
                <h1 className="display-5 text-left">Display Ads Portfolio</h1>

                <div className="row">
                    <div className="col-md-6">
                        <h2>Fitur</h2>
                        <h5>
                            <ul>
                                <li>Customer: IFEMA</li>
                                <li>Campaign: Fitur, International Tourism Fair in Madrid - Ifema</li>
                                <li>Agency: Making Science </li>
                                <li>Animation: Fernando Comet</li>
                                <li>Scratch code integrating SVG logo animation with GSAP library.</li>
                                <li>See case study</li>
                            </ul>
                        </h5>
                    </div>
                    <div className="col-md-6 advert">
                        <Iframe url="https://doc-0k-0s-adspreview.googleusercontent.com/preview/9o5bees06oeguhr10neq55qcti27eh7n/utb1rsanjd5sf9idas38adib93lqt6ag/1592568000000/61600178/previewuser/ads-richmedia-studio.61600178?render=blank&creativeId=ads-richmedia-studio.61600178&creativeId=ads-richmedia-studio.61600178&ewp=1&eroad=0&hiep=0&stdb=ENLM0Rw&hl=en-US&richmedia=true&zx=eyktmiaxexy&previewMode=blank&accessKey=4480d22e6bbe6144d57ba249f9b19e62"
                                                        width="300px"
                                                        height="600px"
                                                        id="myId"
                                                        frameborder="no"
                                                        scrolling="no"
                                                        className="myClassname"
                                                        display="initial"
                                                        position="absolute"/>
                    </div>
                    <h1 className="display-1 point">.</h1>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h2>Estampa</h2>
                        <h5>
                            <ul>
                                <li>Customer: IFEMA</li>
                                <li>Campaign: Contemporary art fair - Ifema</li>
                                <li>Agency: Making Science</li>
                                <li>Animation: Fernando Comet</li>
                                <li>Scratch code integrating svg turbulence filter, animated with GSAP library.</li>
                            </ul>
                        </h5>
                    </div>
                    <div className="col-md-6 advert">
                        <Iframe url="https://doc-0c-50-adspreview.googleusercontent.com/preview/9o5bees06oeguhr10neq55qcti27eh7n/8o0me93ujonsgjdl7u6otfi1ot51in7h/1592568000000/61599313/previewuser/ads-richmedia-studio.61599313?render=blank&creativeId=ads-richmedia-studio.61599313&creativeId=ads-richmedia-studio.61599313&ewp=1&eroad=0&hiep=0&stdb=ENLM0Rw&hl=en-US&richmedia=true&zx=bj6tcsfww09u&previewMode=blank&accessKey=73ad19e7324808093d1dd88de9a590fe"
                                                        width="300px"
                                                        height="600px"
                                                        id="myId2"
                                                        frameborder="no"
                                                        scrolling="no"
                                                        className="myClassname"
                                                        display="initial"
                                                        position="absolute"/>
                    </div>
                    <h1 className="display-1 point">.</h1>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h2>Branding IFEMA</h2>
                        <h5>
                            <ul>
                                <li>Customer: IFEMA</li>
                                <li>Campaign: Branding</li>
                                <li>Agency: Making Science</li> 
                                <li>Animation: Fernando Comet</li>
                                <li>Sequencing array elements while loop movements</li>
                            </ul>
                        </h5>
                    </div>
                    <div className="col-md-6 advert">
                        <Iframe url="https://doc-0s-68-adspreview.googleusercontent.com/preview/9o5bees06oeguhr10neq55qcti27eh7n/58iiso84qdu7anlgb59rn3hcbiagc4d8/1592568000000/61600181/previewuser/ads-richmedia-studio.61600181?render=blank&creativeId=ads-richmedia-studio.61600181&creativeId=ads-richmedia-studio.61600181&ewp=1&eroad=0&hiep=0&stdb=ENLM0Rw&hl=en-US&richmedia=true&zx=hfgitrg2i1g6&previewMode=blank&accessKey=a96cbee60207bcd426704c2fdd45ee07"
                                                        width="300px"
                                                        height="600px"
                                                        id="myId"
                                                        frameborder="no"
                                                        scrolling="no"
                                                        className="myClassname"
                                                        display="initial"
                                                        position="absolute"/>
                    </div>
                    <h1 className="display-1 point">.</h1>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h2>Madrid Games Week</h2>
                        <h5>
                            <ul>
                                <li>Customer: IFEMA</li>
                                <li>Campaign: Madrid Games Week</li>
                                <li>Agency: Making Science </li>
                                <li>Animation: Fernando Comet</li>
                                <li>Made with Google Web Designer</li>
                            </ul>
                        </h5>
                    </div>
                    <div className="col-md-6 advert">
                        <Iframe url="https://doc-14-7s-adspreview.googleusercontent.com/preview/9o5bees06oeguhr10neq55qcti27eh7n/md2p9nai4r62188a172t3j6ur7r5qaf3/1592568000000/61599325/previewuser/ads-richmedia-studio.61599325?render=blank&creativeId=ads-richmedia-studio.61599325&creativeId=ads-richmedia-studio.61599325&ewp=1&eroad=0&hiep=0&stdb=ENLM0Rw&hl=en-US&richmedia=true&zx=xlz00bi3reao&previewMode=blank&accessKey=07629f29b081dd04c07bc6828f14ac51"
                                                        width="300px"
                                                        height="600px"
                                                        id="myId"
                                                        frameborder="no"
                                                        scrolling="no"
                                                        className="myClassname"
                                                        display="initial"
                                                        position="absolute"/>
                    </div>
                    <h1 className="display-1 point">.</h1>
                </div>

                <div className="row">
                    <div className="col-md-6">                        
                        <h2>Semana de la Educación</h2>
                        <h5>
                            <ul>
                                <li>Customer: IFEMA</li>
                                <li>Campaign: Semana de la Educación</li>
                                <li>Agency: Making Science </li>
                                <li>Animation: Fernando Comet</li>
                                <li>Scale and bouncing effects using GSAP</li>
                            </ul>
                        </h5>
                    </div>
                    <div className="col-md-6 advert">
                        <Iframe url="https://doc-04-9k-adspreview.googleusercontent.com/preview/9o5bees06oeguhr10neq55qcti27eh7n/2ahudcs25oan588o1qs3r0tlr34bdtra/1592568000000/61600235/previewuser/ads-richmedia-studio.61600235?render=blank&creativeId=ads-richmedia-studio.61600235&creativeId=ads-richmedia-studio.61600235&ewp=1&eroad=0&hiep=0&stdb=ENLM0Rw&hl=en-US&richmedia=true&zx=2wn9bwroujta&previewMode=blank&accessKey=2bef30652366cb5f628f1abab0b479d7"
                                                        width="300px"
                                                        height="600px"
                                                        id="myId"
                                                        frameborder="no"
                                                        scrolling="no"
                                                        className="myClassname"
                                                        display="initial"
                                                        position="absolute"/>
                    </div>
                    <h1 className="display-1 point">.</h1>
                </div>
                
            </div>
        )
    }
}

export default Adportfolio;

