import React from 'react'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faEye } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import "./Sessions.css";

import { API_BASE_URL } from '../../../../Constants/Global';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Sessions() {

    const line_chart_initial = {
        labels: ['00-00'],
        datasets: [
            {
                label: 'Session number this week',
                data: [0],
                borderColor: 'rgba(75, 192, 192, 0.5)',
                tension: 0.1
            }
        ]
    };

    const lineChartOptions = {
        'scales': {
            'y': {
                'ticks': {
                    'stepSize': 2,
                    'beginAtZero': true,
                },
            },
        },
    };

    // USE STATE HOOK

    let [sessionsList, setSessionsList] = useState([]);
    let [sessionsOverviewData, setSessionsOverviewData] = useState([]);
    let [lineChartData, setLineChartData] = useState(line_chart_initial);

    // USE EFFECT HOOK

    useEffect(() => {
        document.title = "Control Panel - Filieres"
    }, []);

    useEffect(() => {
        requestSessionsData();
        requestSessionsOverviewData();
    }, []);

    useEffect(() => {
        displayLineChartData();
    }, [sessionsOverviewData]);

    let requestSessionsData = () => {

        axios.get(`${API_BASE_URL}/sessions`)
            .then((res) => {
                setSessionsList(res.data);
            });

    };

    let requestSessionsOverviewData = () => {
        axios.get(`${API_BASE_URL}/overview/sessions`)
            .then((res) => {
                setSessionsOverviewData(res.data.sessions_stats);
            });
    }

    let displayLineChartData = () => {
        let data = {
            labels: sessionsOverviewData.map(session => session.date),
            datasets: [
                {
                    label: 'Session number this week',
                    data: sessionsOverviewData.map(session => session.nbr),
                    borderColor: 'rgba(24, 24, 24, 0.3)',
                    tension: 0.1
                }
            ],
        };
        setLineChartData(data);
    };

    return (
        <div className="control-container">

            <div className="control-panel-content">

                <div className="overview-graphs">
                    <Line data={lineChartData} options={lineChartOptions} />
                </div>

                <div className="control-panel-content">

                    <h2 className="panel-title">Sessions List</h2>

                    <div className="sessions-list-items">

                        {

                            sessionsList.map(session => (

                                <div className="session" key={session.session_data.id}>
                                    <h2 className="filiere-name">{session.filiere_data.name}</h2>
                                    <p className="salle">{session.subject_data.name}</p>
                                    <p className="date">{session.session_data.created_at.substr(0, 16).replace('T', ' ')}</p>

                                    <Link className="view-details" to="/home/sessions/session/10">
                                        <FontAwesomeIcon icon={faEye} className="icon" />
                                        <span>Details</span>
                                    </Link>
                                </div>

                            ))

                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Sessions;
