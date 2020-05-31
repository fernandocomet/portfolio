import React, { Component } from 'react'
import{ Switch, Route } from 'react-router-dom';
import Home from './Home';
import Text from './Text';
import Works from './Works';
import About from './About';
import Roll from './Roll';


class Routes extends Component{

    render(){
        return(
            <div className="routes">
                <Switch>
                    <Route exact path='/' component={() => <Home />} />
                    <Route exact path='/home' component={() => <Home name='home'/>} />
                    <Route exact path='/text' component={() => <Text name='text' />} />
                    <Route exact path='/works' component={() => <Works name='works' />} />
                    <Route exact path='/roll' component={() => <Roll name='roll' />} />
                    <Route exact path='/about' component={() => <About name='about' />} />
                    {/* <Route render={() => <NotFound />} /> */}
                </Switch>
            </div>
        )
    }
}

export default Routes;

/*
                    <Route exact path='/' component={() => <Home />} />
                    <Route exact path='/home' component={() => <Home name='home'/>} />
                    <Route exact path='/text' component={() => <Text name='text' />} />
                    <Route exact path='/works' component={() => <Works name='works' />} />
                    <Route exact path='/roll' component={() => <Roll name='roll' />} />
                    <Route exact path='/about' component={() => <About name='about' />} />
*/