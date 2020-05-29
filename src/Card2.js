import React, { Component } from 'react';
import { ExternalLink } from 'react-external-link';
import './Card2.css';

class Card2 extends Component{

    render(){
        return(
            <div className="box gallery">
            <ExternalLink href={this.props.url}>
   
                    
            <div className="card">
              <div className="background">
                <img src={this.props.image} width='280px' alt={this.props.title} />
              </div>
              {/* <a href="#" className="overlay"></a> */}
              <div className="overlay"></div>
              {/* <a href="#"> */}
                <i className="fa fa-camera-retro"></i>
              {/* </a> */}
              <div className="thumb">
              {/* <a className="thumb" href="#"> */}
                <div className="info">
                  <h1 className="special">{this.props.title}</h1>
                  <h2>
                    {/* <a href="#"> */}
                    {this.props.description}
                    {/* </a> */}
                  </h2>
                  <div className="foot">
                    <i className="line"></i>
                    <span className="date">#{this.props.hashtag}</span>
                    <div className="social">
                    {/* <a href="#" target="_blank" className="social"> */}
                      > See more
                    </div>
                  </div>
                </div>
              </div>
            </div>
              </ExternalLink>
          </div>
        )
    }
}

export default Card2;