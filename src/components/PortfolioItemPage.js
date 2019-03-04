import React from 'react';
import ReactDOM from 'react-dom';
import {  NavLink } from 'react-router-dom';


const PortfolioItemPage = (props)=>{
    console.log(props);
    return (
        <div>
            <h3>Project {props.match.params.id} </h3>
            <span><NavLink to="/portfolio">Back to portfolio</NavLink></span>
            <br></br>
            <br></br>
            <img width="400rem" src="https://assets3.domestika.org/project-items/002/191/193/03.top-10-lorem-ipsum-locos-big.jpg?1513511263"></img>
            <p>Lorem fistrum no puedor no te digo trigo por no llamarte Rodrigor jarl condemor está la.</p>
        </div>
    );
};

export default PortfolioItemPage;