import React from 'react'

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faCog, faLock, faLockOpen, faUsers, faEye, faBookmark } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import "./Overview.css";

function HomePanel({ currentRecruiterId }) {

    const API_BASE_URL = 'http://localhost:8081/api';

    // USE STATES HOOK

    let [totalOffers, setTotalOffers] = useState(0);
    let [totalOpen, setTotalOpen] = useState(0);
    let [totalClosed, setTotalClosed] = useState(0);
    let [totalSubmissions, setTotalSubmissions] = useState(0);
    let [totalViews, setTotalViews] = useState(0);
    let [totalFavorites, setTotalFavorites] = useState(0);

    // USE EFFECT HOOK

    useEffect(() => {
        document.title = "School Overview"
    }, []);

    useEffect(() => {
        // requestOverviewData();
    }, [currentRecruiterId]);

    return (
        <div className="school-panel-container">
            <div className="school-panel-content">

                <img className="panel-school-logo" src="http://ensam-casa.ma/assets/images/logoENsam.png" alt="School Logo" />

                <h2 className="panel-title">School Panel</h2>

                <div className="panel-section school-overview">
                    <h2 className="section-title">Overview</h2>

                    <div className="overview-container">

                        <div className="overview-item">
                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faClipboardList}
                                />
                            </div>
                            <div className="content">
                                <h2 className="item-title">Total Classes</h2>
                                <p className="item-data">{totalOffers}</p>
                            </div>
                        </div>

                        <div className="overview-item">
                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faLockOpen}
                                />
                            </div>
                            <div className="content">
                                <h2 className="item-title">Total Students</h2>
                                <p className="item-data">{totalOpen}</p>
                            </div>
                        </div>

                        <div className="overview-item">
                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faLock}
                                />
                            </div>
                            <div className="content">
                                <h2 className="item-title">Total Subjects</h2>
                                <p className="item-data">{totalClosed}</p>
                            </div>
                        </div>

                        <div className="overview-item">
                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faUsers}
                                />
                            </div>
                            <div className="content">
                                <h2 className="item-title">Total Professors</h2>
                                <p className="item-data">{totalSubmissions}</p>
                            </div>
                        </div>

                        <div className="overview-item">
                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faEye}
                                />
                            </div>
                            <div className="content">
                                <h2 className="item-title">Total Filieres</h2>
                                <p className="item-data">{totalViews}</p>
                            </div>
                        </div>

                        <div className="overview-item">
                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faBookmark}
                                />
                            </div>
                            <div className="content">
                                <h2 className="item-title">Total Niveaux</h2>
                                <p className="item-data">{totalFavorites}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePanel
