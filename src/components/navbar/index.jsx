import React from "react";
import './nav.css'
import { NavLink } from "react-router-dom";
import { router } from "../../routes/routes";

const Navbar = () => {
    return(
        <div className="nav-container">
            <div className="logo">logo</div>
            <ul>
                <li><NavLink to={router.dashBoard}>Dashboard</NavLink></li>
                <li><NavLink to={router.quiz}>Take A Quiz</NavLink></li>
                <li><NavLink to={router.about}>About Me</NavLink></li>
                <li><NavLink to={router.contact}>Contact Us</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar