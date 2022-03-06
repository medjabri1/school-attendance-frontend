import React from 'react'

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight, faLockOpen, faClipboardList } from '@fortawesome/free-solid-svg-icons'

import "./FiliereNiveau.css";
import SubjectsList from './Components/SubjectsList/SubjectsList';

function FiliereNiveau({ filiereName, niveauLibelle }) {

    // CONST - VARS

    let navigate = useNavigate();
    let filiere_id = useParams().id;
    let niveau_id = 0;

    // USE STATE HOOK

    let [totalStudents, setTotalStudents] = useState(0);
    let [totalSubjects, setTotalSubjects] = useState(0);
    let [totalSessions, setTotalSessions] = useState(0);

    // USE EFFECT HOOK

    useEffect(() => {
        document.title = "Filiere - " + "Big Data";
    }, []);

    return (
        <div className="filiere-container">
            <div className="filiere-content">
                {/* <h2 className="filiere-name">{filiereName} - {niveauLibelle}</h2> */}
                <h2 className="filiere-name">Master Big Data & IoT <span>- 1er année</span></h2>

                <div className="overview-container">

                    <div className="overview-item">
                        <div className="icon">
                            <FontAwesomeIcon
                                icon={faClipboardList}
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
                                icon={faLockOpen}
                            />
                        </div>
                        <div className="content">
                            <h2 className="item-title">Total Subjects</h2>
                            <p className="item-data">{totalStudents}</p>
                        </div>
                    </div>

                    <div className="overview-item">
                        <div className="icon">
                            <FontAwesomeIcon
                                icon={faLockOpen}
                            />
                        </div>
                        <div className="content">
                            <h2 className="item-title">Total Sessions</h2>
                            <p className="item-data">{totalSessions}</p>
                        </div>
                    </div>

                </div>

                <SubjectsList filiereId={filiere_id} niveauId={niveau_id} />

            </div>
        </div>
    )
}

export default FiliereNiveau;
