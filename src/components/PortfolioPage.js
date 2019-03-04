import React from 'react';
import ReactDOM from 'react-dom';
import {  NavLink } from 'react-router-dom';

const PortfolioPage = (props) => {
    return (
        <div>
            <h3>Here are some of my projects:</h3>
            <div>
                <ul>
                    <li><NavLink to={`${props.match.path}1 `}>Project 1</NavLink></li>
                    <li><NavLink to={`${props.match.path}2 `}>Project 2</NavLink></li>
                    <li><NavLink to={`${props.match.path}3 `}>Project 3</NavLink></li>
                </ul>
            </div>
        </div>
    )
};

export default PortfolioPage;