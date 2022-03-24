import React from 'react'

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faUsers, faClipboardList } from '@fortawesome/free-solid-svg-icons'

import "./FiliereNiveau.css";

import SubjectsList from './Components/SubjectsList/SubjectsList';
import StudentsList from './Components/StudentsList/StudentsList';
import SessionsList from './Components/SessionsList/SessionsList';

import { API_BASE_URL } from '../../../.././../../Constants/Global';

function FiliereNiveau() {

    // CONST - VARS

    let navigate = useNavigate();
    let level_id = useParams().id;

    // USE STATE HOOK

    let [totalStudents, setTotalStudents] = useState(0);
    let [totalSubjects, setTotalSubjects] = useState(0);
    let [totalSessions, setTotalSessions] = useState(0);

    let [levelData, setLevelData] = useState({ libelle: "" });
    let [filiereData, setFiliereData] = useState({ name: "" });

    // USE EFFECT HOOK

    useEffect(() => {
        document.title = "Filiere - " + "Level";
    }, []);

    useEffect(() => {
        requestLevelOverviewData();
    }, []);

    // REQUEST LEVEL OVERVIEW DATA

    let requestLevelOverviewData = () => {

        axios.get(`${API_BASE_URL}/overview/level/${level_id}`)
            .then((res) => {

                let data = res.data;

                setTotalStudents(data.total_students);
                setTotalSessions(data.total_sessions);
                setTotalSubjects(data.total_subjects);
                setLevelData(data.level);
                setFiliereData(data.filiere)
            });

    }

    return (
        <div className="filiere-container">
            <div className="filiere-content">
                <h2 className="filiere-name">{filiereData.name} <span>- {levelData.libelle}</span></h2>

                <div className="overview-container">

                    <div className="overview-item">
                        <div className="icon">
                            <FontAwesomeIcon
                                icon={faUsers}
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
                                icon={faCalendarAlt}
                            />
                        </div>
                        <div className="content">
                            <h2 className="item-title">Total Sessions</h2>
                            <p className="item-data">{totalSessions}</p>
                        </div>
                    </div>

                </div>

                <SubjectsList level_id={level_id} />
                <StudentsList level_id={level_id} />
                <SessionsList level_id={level_id} />

            </div>
        </div>
    )
}

export default FiliereNiveau;
