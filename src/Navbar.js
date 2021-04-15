import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    render(){
        const menuLinks = this.props.menu.map(item => (
            <div className="navbar-item" key={item.name}>
                <NavLink className="Nav_link" exact to={`/${item.name}`}>
                    <img className="imgsvg" src={item.src} alt={item.name} width='24px' margin-right='5px'/> 
                     {/* {item.name}  */}
                </NavLink>
            </div>
        ))

        return(
            <div className="navbar">
                {/* <h1>This is menu</h1> */}
                    {menuLinks}
            </div>
        )
    }
}

export default Navbar;
