import React from 'react'

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faUsers, faUser, faCalendarAlt, faLayerGroup } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import { API_BASE_URL } from '../../../../Constants/Global';

import "./Overview.css";

function HomePanel({ }) {

    // USE STATES HOOK

    let [totalSessions, setTotalSessions] = useState(0);
    let [totalStudents, setTotalStudents] = useState(0);
    let [totalSubjects, setTotalSubjects] = useState(0);
    let [totalProfessors, setTotalProfessors] = useState(0);
    let [totalFilieres, setTotalFilieres] = useState(0);
    let [totalLevels, setTotalLevels] = useState(0);

    // USE EFFECT HOOK

    useEffect(() => {
        document.title = "School Overview"
    }, []);

    useEffect(() => {
        requestOverviewData();
    }, []);

    // REQUEST OVERVIEW DATA

    let requestOverviewData = () => {

        axios.get(`${API_BASE_URL}/overview`)
            .then((res) => {

                let data = res.data;
                setTotalStudents(data.total_students);
                setTotalSessions(data.total_sessions);
                setTotalLevels(data.total_levels);
                setTotalSubjects(data.total_subjects);
                setTotalFilieres(data.total_filieres);
                setTotalProfessors(data.total_professors);

            });

    }

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
                                    icon={faCalendarAlt}
                                />
                            </div>
                            <div className="content">
                                <h2 className="item-title">Total Sessions</h2>
                                <p className="item-data">{totalSessions}</p>
                            </div>
                        </div>

                        <div className="overview-item">
                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faUser}
                                />
                            </div>
                            <div className="content">
                                <h2 className="item-title">Total Students</h2>
                                <p className="item-data">{totalStudents}</p>
                            </div>
                        </div>

                        <div className="overview-item">
                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faClipboardList}
                                />
                            </div>
                            <div className="content">
                                <h2 className="item-title">Total Subjects</h2>
                                <p className="item-data">{totalSubjects}</p>
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
                                <p className="item-data">{totalProfessors}</p>
                            </div>
                        </div>

                        <div className="overview-item">
                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faClipboardList}
                                />
                            </div>
                            <div className="content">
                                <h2 className="item-title">Total Filieres</h2>
                                <p className="item-data">{totalFilieres}</p>
                            </div>
                        </div>

                        <div className="overview-item">
                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faLayerGroup}
                                />
                            </div>
                            <div className="content">
                                <h2 className="item-title">Total Levels</h2>
                                <p className="item-data">{totalLevels}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePanel
