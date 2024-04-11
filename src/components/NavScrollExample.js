// import React from "react";
import logo from '../logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Aboutme from "./components/Aboutme";

function NavScrollExample() {
    return (

        <nav className="navbar sticky-top z-10 navbar-expand-md navbar-light bg-light pt-7">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="react-router-breadcrumb" width="32" height="32" />
                    HomeWork
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        {/* <li className="nav-item">
                            <Link className="nav-link activ " to="/">
                                Home
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/AboutMe">
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Message">
                                Message
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">
                                Login
                            </Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="/electronics"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Electronics
                            </Link>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <Link className="dropdown-item" to="/electronics/mobile">
                                    Mobile Phone
                                </Link>
                                <Link className="dropdown-item" to="/electronics/desktop">
                                    Desktop PC
                                </Link>
                                <Link className="dropdown-item" to="/electronics/laptop">
                                    Laptop
                                </Link>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default NavScrollExample;