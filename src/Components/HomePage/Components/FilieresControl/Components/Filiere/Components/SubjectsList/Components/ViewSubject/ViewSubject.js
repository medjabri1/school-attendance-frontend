import React from 'react'

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import { API_BASE_URL } from '../../../../../../../../../../Constants/Global';

import "./ViewSubject.css";

function SubjectItem({ closeModal, subject_id }) {

    // USE STATE HOOK 

    let [subjectData, setSubjectData] = useState({ "name": "", "created_at": "0000-00-00" });
    let [profData, setProfData] = useState({ "first_name": "NO", "last_name": "Professor" });
    let [sessionsList, setSessionsList] = useState([]);

    // USE EFFECT HOOK 

    useEffect(() => {
        requestSubjectData();
    }, []);

    // REQUEST SUBJECT DATA

    let requestSubjectData = () => {

        axios.get(`${API_BASE_URL}/overview/subject/${subject_id}`)
            .then((res) => {
                let data = res.data;
                setSubjectData(data.subject);
                if (data.professor != null) {
                    setProfData(data.professor);
                }
                setSessionsList(data.sessions);
            });

    }

    return (
        <div className="subject-item-modal">

            <span className="modal-close-button" onClick={closeModal}>+</span>

            <div className="subject-container">
                <div className="subject-title">
                    <FontAwesomeIcon icon={faEye} className="icon" />
                    <span>{subjectData.name}</span>
                </div>

                <div className="subject-infos">
                    <div className="stats-item">
                        <p className="stats-label">Total Sessions</p>
                        <p className="stats-data">{sessionsList.length}</p>
                    </div>

                    <div className="stats-item">
                        <p className="stats-label">Prof</p>
                        <p className="stats-data">{profData.first_name + " " + profData.last_name}</p>
                    </div>

                    <div className="stats-item">
                        <p className="stats-label">Created at</p>
                        <p className="stats-data">{subjectData.created_at.substr(0, 10)}</p>
                    </div>
                </div>

                <div className="subject-sessions-list">

                    <div className="list-header">
                        <span>Salle</span>
                        <span>Date</span>
                        <span></span>
                    </div>

                    <div className="list-data">

                        {
                            sessionsList.map(session => (

                                <div className="list-item" key={session.session.id}>
                                    <p className="salle">{session.classroom.libelle}</p>
                                    <p className="date">{session.session.created_at.substr(0, 16).replace('T', ' ')}</p>
                                    <Link className="view-details" to={"/home/sessions/session/" + session.session.id} target="_blank">
                                        <FontAwesomeIcon icon={faEye} className="icon" />
                                        <span>Details</span>
                                    </Link>
                                </div>

                            ))
                        }

                    </div>

                </div>

            </div>

        </div >
    )
}

export default SubjectItem
