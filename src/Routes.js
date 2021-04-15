import React, { Component } from 'react'
import{ Switch, Route } from 'react-router-dom';
import Home from './Home';
import Adportfolio from './Adportfolio';
//import Text from './Text';
import Works from './Works';
import About from './About';
import Roll from './Roll';


import ReactGA from 'react-ga';
//import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


class Routes extends Component{

    render(){
        return(
            <div className="routes">
                <Switch history={history}>
                    <Route exact path='/' component={() => <Home />} />
                    <Route exact path='/home' component={() => <Home name='home'/>} />
                    <Route exact path='/adportfolio' component={() => <Adportfolio name='adportfolio'/>} />
                    <Route exact path='/works' component={() => <Works name='works' />} />
                    <Route exact path='/roll' component={() => <Roll name='roll' />} />
                    <Route exact path='/about' component={() => <About name='about' />} />
                    {/* <Route exact path='/text' component={() => <Text name='text' />} /> */}
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