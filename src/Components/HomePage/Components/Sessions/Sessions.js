import React from 'react'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faEye } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import "./Sessions.css";

function Sessions() {

    // Change page title

    useEffect(() => {
        document.title = "Control Panel - Filieres"
    }, []);

    return (
        <div className="control-container">

            <div className="control-panel-content">

                <div className="control-panel-content">

                    <h2 className="panel-title">Sessions List</h2>

                    <div className="sessions-list-items">

                        <div className="session">
                            <h2 className="filiere-name">Master Big Data & IoT</h2>
                            <p className="salle">Data Analysis</p>
                            <p className="date">02-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="session">
                            <h2 className="filiere-name">Master Big Data & IoT</h2>
                            <p className="salle">Cloud Computing</p>
                            <p className="date">08-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="session">
                            <h2 className="filiere-name">Génie Informatique</h2>
                            <p className="salle">UMl & Design Pattern</p>
                            <p className="date">08-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="session">
                            <h2 className="filiere-name">Master Big Data & IoT</h2>
                            <p className="salle">Advanced Databases</p>
                            <p className="date">10-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="session">
                            <h2 className="filiere-name">Master Big Data & IoT</h2>
                            <p className="salle">Advanced Databases</p>
                            <p className="date">10-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="session">
                            <h2 className="filiere-name">Master Big Data & IoT</h2>
                            <p className="salle">Advanced Databases</p>
                            <p className="date">10-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="session">
                            <h2 className="filiere-name">Master Big Data & IoT</h2>
                            <p className="salle">Advanced Databases</p>
                            <p className="date">10-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="session">
                            <h2 className="filiere-name">Master Big Data & IoT</h2>
                            <p className="salle">Advanced Databases</p>
                            <p className="date">10-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="session">
                            <h2 className="filiere-name">Master Big Data & IoT</h2>
                            <p className="salle">Advanced Databases</p>
                            <p className="date">10-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="session">
                            <h2 className="filiere-name">Master Big Data & IoT</h2>
                            <p className="salle">Advanced Databases</p>
                            <p className="date">10-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="session">
                            <h2 className="filiere-name">Master Big Data & IoT</h2>
                            <p className="salle">Advanced Databases</p>
                            <p className="date">10-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="session">
                            <h2 className="filiere-name">Master Big Data & IoT</h2>
                            <p className="salle">Advanced Databases</p>
                            <p className="date">10-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="session">
                            <h2 className="filiere-name">Master Big Data & IoT</h2>
                            <p className="salle">Advanced Databases</p>
                            <p className="date">10-03-2022</p>

                            <Link className="view-details" to="/home/sessions/10" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Sessions;
