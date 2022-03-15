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
                data: [1, 1],
                backgroundColor: [
                    'rgba(51, 97, 91, 0.5)',
                    'rgba(235, 73, 73,0.5)'
                ],
                hoverOffset: 4
            }
        ]
    };

    let navigate = useNavigate();
    let session_id = useParams().id;

    // USE STATE HOOK

    let [totalAttended, setTotalAttended] = useState(0);
    let [totalAbsent, setTotalAbsent] = useState(0);
    let [pieChartData, setPieChartData] = useState(pieChartInitial);

    let [attendedStudentsList, setAttendedStudentsList] = useState([]);
    let [absentStudentsList, setAbsentStudentsList] = useState([]);
    let [filiereData, setFiliereData] = useState({ name: '' });
    let [subjectData, setSubjectData] = useState({ name: '' });
    let [sessionData, setSessionData] = useState({ created_at: '' });

    // USE EFFECT HOOK

    useEffect(() => {
        requestSessionDetailsData();
    }, []);

    // REQUEST SESSION DETAILS DATA 

    let requestSessionDetailsData = () => {

        axios.get(`${API_BASE_URL}/sessions/${session_id}/result`)
            .then((res) => {
                let data = res.data;
                setTotalAbsent(data.total_absent);
                setTotalAttended(data.total_attended);
                setAbsentStudentsList(data.absent_students);
                setAttendedStudentsList(data.attended_students);
                setFiliereData(data.filiere);
                setSubjectData(data.subject);
                setSessionData(data.session);

                refreshPieChart(data.total_attended, data.total_absent);
            });

    };

    let refreshPieChart = (attendedNbr, absentNbr) => {
        let data = {
            labels: ['Attend', 'Absent'],
            datasets: [
                {
                    label: 'Attendances',
                    data: [attendedNbr, absentNbr],
                    backgroundColor: [
                        'rgba(51, 97, 91, 0.5)',
                        'rgba(235, 73, 73,0.5)'
                    ],
                    hoverOffset: 4
                }
            ]
        };

        setPieChartData(data);
    };

    let timeDifference = (start, end) => {

        start = start.substr(11, 5);
        end = end.substr(11, 5);

        start = start.split(":");
        end = end.split(":");
        var startDate = new Date(0, 0, 0, start[0], start[1], 0);
        var endDate = new Date(0, 0, 0, end[0], end[1], 0);
        var diff = endDate.getTime() - startDate.getTime();
        var hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        var minutes = Math.floor(diff / 1000 / 60);

        return hours + "h " + minutes + (minutes < 9 ? "0" : "") + "min";
        // return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
    }


    return (
        <div className="session-container">
            <div className="session-content">
                <h2 className="filiere-name content-title"><span>Filiere : </span>{filiereData.name}</h2>
                <h2 className="subject-name content-title"><span>Subject : </span>{subjectData.name}</h2>
                <h2 className="session-date content-title">Date : {sessionData.created_at.substr(0, 16).replace('T', ' ')}</h2>
                <h2 className="session-date content-title">Salle : {sessionData.salle}</h2>

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

                            {
                                attendedStudentsList.map(student => (

                                    <div className="student" key={student.studentData.id}>
                                        <h2 className="student-name">{student.studentData.first_name + " " + student.studentData.last_name}</h2>
                                        <p className="attended-at">{student.attendanceData.created_at.substr(11, 5)}</p>
                                        <p className="late-time">{timeDifference(sessionData.created_at, student.attendanceData.created_at)}</p>
                                    </div>

                                ))
                            }

                        </div>

                    </div>

                    <div className="absent-list">
                        <h2 className="list-title">Absent Students</h2>

                        <div className="list-content">


                            {

                                absentStudentsList.map(student => (

                                    <div className="student" key={student.id}>
                                        <h2 className="student-name">{student.first_name + " " + student.last_name}</h2>
                                    </div>

                                ))

                            }

                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default SessionDetails