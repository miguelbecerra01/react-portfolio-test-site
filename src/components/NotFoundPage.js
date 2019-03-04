import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';


const NotFoundPage = () => (
    <div>
       <NavLink to="/"> Back home</NavLink>
        <img width="400rem" src="https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg"></img>
    </div>
);

export default NotFoundPage;