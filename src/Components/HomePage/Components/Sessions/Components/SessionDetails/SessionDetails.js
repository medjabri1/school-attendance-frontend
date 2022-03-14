import React from 'react'

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faClock, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import "./SessionDetails.css";

import { API_BASE_URL } from '../../../../../../Constants/Global';


import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function SessionDetails() {

    const pieChartInitial = {
        labels: ['Attend', 'Absent'],
        datasets: [
            {
                label: 'Attendances',
                data: [27, 2],
                backgroundColor: [
                    'rgba(51, 97, 91, 0.5)',
                    'rgba(235, 73, 73,0.5)'
                ],
                hoverOffset: 4
            }
        ]
    };

    // USE STATE HOOK

    let [totalAttended, setTotalAttended] = useState(21);
    let [totalAbsent, setTotalAbsent] = useState(5);
    let [pieChartData, setPieChartData] = useState(pieChartInitial);

    // USE EFFECT HOOK

    useEffect(() => {

    }, []);

    return (
        <div className="session-container">
            <div className="session-content">
                <h2 className="filiere-name content-title"><span>Filiere : </span>Master Big Data & IoT</h2>
                <h2 className="subject-name content-title"><span>Subject : </span>UML & Design Pattern</h2>
                <h2 className="session-date content-title">Date : 2022-03-13 16:00</h2>

                <div className="session-overview-container">

                    <div className="overview-item">
                        <div className="icon">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                            />
                        </div>
                        <div className="content">
                            <h2 className="item-title">Total attended</h2>
                            <p className="item-data">{totalAttended}</p>
                        </div>
                    </div>

                    <div className="overview-item">
                        <div className="icon">
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                            />
                        </div>
                        <div className="content">
                            <h2 className="item-title">Total Absent</h2>
                            <p className="item-data">{totalAbsent}</p>
                        </div>
                    </div>

                </div>

                <div className="session-graphs">
                    <Pie className="pie-chart" data={pieChartData} />
                </div>

                <div className="students-list">
                    <div className="attended-list">
                        <h2 className="list-title">Attended Students</h2>
                        <div className="labels">
                            <p className="student-name">Student name</p>
                            <p>Attended at</p>
                            <p>Late</p>
                        </div>

                        <div className="list-content">

                            <div className="student">
                                <h2 className="student-name">Mohammed JABRI</h2>
                                <p className="attended-at">18:19</p>
                                <p className="late-time">20min</p>
                            </div>

                            <div className="student">
                                <h2 className="student-name">Mohammed JABRI</h2>
                                <p className="attended-at">18:19</p>
                                <p className="late-time">20min</p>
                            </div>

                            <div className="student">
                                <h2 className="student-name">Mohammed JABRI</h2>
                                <p className="attended-at">18:19</p>
                                <p className="late-time">20min</p>
                            </div>

                        </div>

                    </div>

                    <div className="absent-list">
                        <h2 className="list-title">Absent Students</h2>

                        <div className="list-content">

                            <div className="student">
                                <h2 className="student-name">Mohammed JABRI</h2>
                            </div>

                            <div className="student">
                                <h2 className="student-name">Mohammed JABRI</h2>
                            </div>

                            <div className="student">
                                <h2 className="student-name">Mohammed JABRI</h2>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default SessionDetails