import React from 'react';
import ReactDOM from 'react-dom';
import {  NavLink } from 'react-router-dom';

const ContactPage = () => (
    <div>
        <div><h3>Contact us</h3></div>
        <p>Let's talk about your project</p>
        <div>
            <form>
                <input type="text"></input>
                <button>Send!</button>
            </form>
        </div>
    </div>
);

export default ContactPage;
