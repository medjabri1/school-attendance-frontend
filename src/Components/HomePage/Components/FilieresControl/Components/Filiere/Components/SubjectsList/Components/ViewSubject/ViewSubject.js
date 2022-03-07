import React from 'react'

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import "./ViewSubject.css";

function SubjectItem({ closeModal, subject_id }) {

    return (
        <div className="subject-item-modal">

            <span className="modal-close-button" onClick={closeModal}>+</span>

            <div className="subject-container">
                <div className="subject-title">
                    <FontAwesomeIcon icon={faEye} className="icon" />
                    <span>Advanced Databases</span>
                </div>

                <div className="subject-infos">
                    <div className="stats-item">
                        <p className="stats-label">Total Sessions</p>
                        <p className="stats-data">{subject_id}</p>
                    </div>

                    <div className="stats-item">
                        <p className="stats-label">Prof</p>
                        <p className="stats-data">Mohammed JABRI</p>
                    </div>

                    <div className="stats-item">
                        <p className="stats-label">Created at</p>
                        <p className="stats-data">10-11-2021</p>
                    </div>
                </div>

                <div className="subject-sessions-list">

                    <div className="list-header">
                        <span>Salle</span>
                        <span>Date</span>
                        <span></span>
                    </div>

                    <div className="list-data">

                        <div className="list-item">
                            <p className="salle">Amphi Al-Khawarizmi</p>
                            <p className="date">10-12-2020</p>
                            <Link className="view-details" to="/session/" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="list-item">
                            <p className="salle">Amphi Al-Khawarizmi</p>
                            <p className="date">10-12-2020</p>
                            <Link className="view-details" to="/session/" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="list-item">
                            <p className="salle">Amphi Al-Khawarizmi</p>
                            <p className="date">10-12-2020</p>
                            <Link className="view-details" to="/session/" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="list-item">
                            <p className="salle">Amphi Al-Khawarizmi</p>
                            <p className="date">10-12-2020</p>
                            <Link className="view-details" to="/session/" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="list-item">
                            <p className="salle">Amphi Al-Khawarizmi</p>
                            <p className="date">10-12-2020</p>
                            <Link className="view-details" to="/session/" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="list-item">
                            <p className="salle">Amphi Al-Khawarizmi</p>
                            <p className="date">10-12-2020</p>
                            <Link className="view-details" to="/session/" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="list-item">
                            <p className="salle">Amphi Al-Khawarizmi</p>
                            <p className="date">10-12-2020</p>
                            <Link className="view-details" to="/session/" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                        <div className="list-item">
                            <p className="salle">Amphi Al-Khawarizmi</p>
                            <p className="date">10-12-2020</p>
                            <Link className="view-details" to="/session/" target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                    </div>

                </div>

            </div>

        </div >
    )
}

export default SubjectItem
