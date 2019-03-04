import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';


const Header = () => (
    <div>
        <h1>Portfolio</h1>
        <div className="menu-bar">
            <ul className="menu">
                <li className="menu__item"><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
                <li className="menu__item"><NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink></li>
                <li className="menu__item"><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
            </ul>

        </div>
    </div>
);


export default Header;