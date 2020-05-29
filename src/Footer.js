import React, { Component } from 'react';
import { ExternalLink } from 'react-external-link';
import linkedin from "./img/social/white_linkedin.svg";
import github from "./img/social/white_github.svg";
import medium from "./img/social/white_medium.svg";
import twitter from "./img/social/white_twitter.svg";
import instagram from "./img/social/white_instagram.svg";
import devto from "./img/social/white_dev-dot-to.svg";
import pinterest from "./img/social/white_pinterest.svg";
import './Footer.css';



class Social extends Component{
    static defaultProps={       
        social:[
          {name: "Github", src: github, url:"https://github.com/fernandocomet"},
          {name: "Medium", src: medium, url:"https://medium.com/@fernandocomet"},
          {name: "Linkedin", src: linkedin, url:"https://www.linkedin.com/in/fernandocomet/"},
          {name: "Twitter", src: twitter, url:"https://twitter.com/fernandocomet"},
          {name: "DevTo", src: devto, url:"https://dev.to/fernandocomet"},
          {name: "Instagram", src: instagram, url:"https://www.instagram.com/fernandocomet/"},
          {name: "Pinterest", src: pinterest, url:"https://www.pinterest.es/fernandocomet/"}
        ]
      }

    render(){
        const socialLinks = this.props.social.map(item => (
            <div className="footer-item" key={item.name}>
                <ExternalLink href={item.url}>
                        <img src={item.src} alt={item.name} width='24px'/>
                </ExternalLink>
            </div>
        ))

        return(
            <div className="footer">
                {socialLinks}
            </div>
        )
    }
}

export default Social;
