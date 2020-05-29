import React, { Component } from 'react'
import { ExternalLink } from 'react-external-link';
import './RollItem.css';

class RollItem extends Component{

    render(){
        
        return(
            <div className="mb-5">
                <div className="row">
                    <div className="col"><h1>{this.props.title}</h1></div>
                </div>
                <div className="row special px-0">
                    <svg version="1.1" width="0" height="0" className="filter-rot">
                        {/* <filter id="duotone" color-interpolation-filters="sRGB"> */}
                        <filter id="duotone" colorInterpolationFilters="sRGB">
                            <feColorMatrix type="matrix" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" result="gray"></feColorMatrix>
                        </filter>
                    </svg>
                    <img src={this.props.image} alt={this.props.title} className="img-fluid position-absolute" />
                    <img src={this.props.image} alt={this.props.title} className="img-fluid filtered" />
                </div>
                <div className="row">
                    <div className="col-md-9">{this.props.description}</div>
                    <div className="col-md-3 text-right">#{this.props.category}</div>
                </div>
                <div className="row">
                    <div className="col">{this.props.description2}</div>
                </div>
                <div className="row">
                    <div className="col-md-9">{this.props.thanksto}</div>
                    <div className="col-md-3 text-right"> 
                        <ExternalLink href={this.props.url}>
                            <button className="btn inverse">See more</button>
                        </ExternalLink>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default RollItem;

/*width='280px'
<div className="card-list">
{this.state.data.map((item, idx) => (
    <Card2 
    key={idx} 
    image={item.pic}
    title={item.title} 
    hashtag={item.category}
    description={item.description}
    description2={item.description2}
    thanksto={item.thanksto}
    url={item.url}
    />
))}
</div>   
*/