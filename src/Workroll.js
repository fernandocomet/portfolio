import React, { Component } from 'react'

import RollItem from './RollItem';

class Workroll extends Component{


    constructor(props){
        super(props);
        this.state = {
          data:[],
          works:[],
          counter:0
        }
        this.initialSet = this.initialSet.bind(this);
      }


    async componentDidMount(){
      //const response = await fetch(`https://raw.githubusercontent.com/fernandocomet/website/master/fernandocomet/src/data/portfolio.json`);
      const response = await fetch(`https://raw.githubusercontent.com/fernandocomet/portfolio/master/src/data/portfolio.json`);
      const json = await response.json();
      this.setState({ 
          data: json,
          counter: 0 
        });
      this.initialSet();
    }


    initialSet(){
        let worksArr = [];
        for (let i = 0; i < this.state.data.length ; i++){
          worksArr.push(this.state.data[i])
        }
        this.setState({
          works: worksArr
        })
    }

    
    render(){
        
        return(
            <div className="container">
                <h1 className="display-1 point">.</h1>
                {this.state.data.map((item, idx) => (
                <RollItem
                    key={idx}
                    image={item.imagedesktop}
                    title={item.title}
                    category={item.category}
                    description={item.description}
                    description2={item.description2}
                    thanksto={item.thanksto}
                    url={item.url}
                />
                ))}
                <h1 className="display-1 point">.</h1>
            </div>
        )
    }

}

export default Workroll;

