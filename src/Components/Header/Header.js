import React from 'react'

import { Link, Navigate, useNavigate } from "react-router-dom";

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSchool, faUserTie, faCog, faSignOutAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'

import "./Header.css";

function Navbar() {

    let navigate = useNavigate();
    let API_BASE_URL = 'http://localhost:8081/api';

    let request_logout = () => {

        axios.post(`${API_BASE_URL}/user/logout`, {}, { withCredentials: true })
            .then(res => {
                console.log(res.data);
            });

        setTimeout(() => {
            navigate("/");
        }, 1000);

    };

    return (
        <div className="header">
            <div className="header-container">
                <div className="header-logo">Attendances</div>
                <ul className="header-nav">

                    {/* Overview Link */}
                    <Link className="header-nav-link" to="/home/">
                        <FontAwesomeIcon icon={faSchool} className="link-icon" />
                        <span>Overview</span>
                    </Link>

                    {/* Filiere Link */}
                    <Link className="header-nav-link" to="/home/filieres">
                        <FontAwesomeIcon icon={faCog} className="link-icon" />
                        <span>Filieres</span>
                    </Link>

                    {/* Sessions Link */}
                    <Link className="header-nav-link" to="/home/sessions">
                        <FontAwesomeIcon icon={faCalendarAlt} className="link-icon" />
                        <span>Sessions</span>
                    </Link>

                    {/* Profs Link */}
                    <Link className="header-nav-link" to="/home/profs">
                        <FontAwesomeIcon icon={faUserTie} className="link-icon" />
                        <span>Profs</span>
                    </Link>

                    {/* Profile Link */}
                    {/* <Link className="header-nav-link" to="/profile/">
                        <FontAwesomeIcon icon={faUser} className="link-icon" />
                        <span>Profile</span>
                    </Link> */}

                    {/* Log Out Link */}
                    <li className="header-nav-link" onClick={request_logout}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="link-icon" />
                        {/* <span>Log out</span> */}
                    </li>

                    {/* <Link className="header-nav-link" to="/home/">Profile</Link>
                    <Link className="header-nav-link" to="/home/">Home</Link>
                    <Link className="header-nav-link" to="/home/search">Search</Link>
                    <Link className="header-nav-link" to="/profile/settings">Settings</Link>
                    <li className="header-nav-link" onClick={request_logout}>Log out</li> */}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
