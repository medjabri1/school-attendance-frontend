import React from 'react'

import { Routes, Route, useNavigate } from "react-router-dom";

import { useState, useEffect } from 'react'

import axios from 'axios';

import Home from "./Components/Home/Home";
import FilieresControl from "./Components/FilieresControl/FilieresControl";
import Header from "../Header/Header";

import "./HomePage.css";
import FiliereNiveau from './Components/FilieresControl/Components/Filiere/FiliereNiveau';

function HomePage() {

    const API_BASE_URL = 'http://localhost:8081/api';
    let navigate = useNavigate();

    let [displayLoader, setDisplayLoader] = useState(true);
    let [loggedUserId, setLoggedUserId] = useState(0);
    let [loggedUserRole, setLoggedUserRole] = useState("worker");

    useEffect(() => {
        // checkLoginStatus();
        setTimeout(() => {
            setDisplayLoader(false);
        }, 1000);
    }, [])

    // Check login status

    let checkLoginStatus = () => {
        axios.get(`${API_BASE_URL}/user/log-status`, { withCredentials: true })
            .then(res => {
                let user_id = res.data.session_user_id;
                let user_role = res.data.role.toLowerCase();

                if (user_id != "null") {
                    // USER LOGGED IN
                    setTimeout(() => {
                        setDisplayLoader(false);
                        setLoggedUserId(user_id);
                        setLoggedUserRole(user_role);
                    }, 1000);
                } else {
                    navigate("/");
                }
            });
    }

    return (
        <div className="home-page">

            {/* LOADING */}
            {
                displayLoader ?
                    <div className="loader">
                        <span className="loader-square">
                            <span className="dot-1"></span>
                            <span className="dot-2"></span>
                        </span>
                    </div>
                    : null
            }

            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filieres" element={<FilieresControl />} />
                <Route path="/filieres/niveau/:id" element={<FiliereNiveau />} />
                {/* <Route path="/offer/:id" element={<Offer loggedUserId={loggedUserId} loggedUserRole={loggedUserRole} />} /> */}
                <Route path="/*" element={<h2>Default route for Home Page</h2>} />
            </Routes>
        </div>
    )
}

export default HomePage
