import React, { Component } from 'react';
import Card from './Card';
import Card2 from './Card2';
import './Works.css';


class Works extends Component{

  constructor(props){
      super(props);
      this.state = {
        data:[]
      }
    }

  componentDidMount(){
      //fetch('https://raw.githubusercontent.com/fernandocomet/website/master/fernandocomet/src/data/portfolio.json')
      fetch('https://raw.githubusercontent.com/fernandocomet/portfolio/master/src/data/portfolio.json')
        .then(response => response.json())
        .then(data => this.setState({ data }))
  }
  
  render(){
    return(
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
      
        )
      }
      
    }
    
    export default Works;
    
