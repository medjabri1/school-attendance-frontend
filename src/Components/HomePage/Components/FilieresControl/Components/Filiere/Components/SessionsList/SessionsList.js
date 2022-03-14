import React from 'react'

import { useState, useEffect } from 'react'

import axios from 'axios';

import { Link } from 'react-router-dom'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlusCircle, faTh, faList, faEye } from '@fortawesome/free-solid-svg-icons'

import "./SessionsList.css";

import { API_BASE_URL } from '../../../../../../../../Constants/Global';

function SessionsList({ level_id }) {

    // USE STATE HOOK

    let [sessionsList, setSessionsList] = useState([]);

    // USE EFFECT HOOK 

    useEffect(() => {
        requestSessionsData();
    }, []);

    // REQUEST SESSIONS LIST DATA

    let requestSessionsData = () => {

        axios.get(`${API_BASE_URL}/sessions/level/${level_id}`)
            .then((res) => {
                setSessionsList(res.data);
            });

    }

    return (
        <div className="sessions-list">

            <h2 className="section-title">Sessions List</h2>


            <div className="list-items">

                {

                    sessionsList.map(session => (

                        <div className="session-item" key={session.id}>
                            <h2 className="salle">{session.salle}</h2>
                            <p className="date">{session.created_at.substr(0, 16).replace('T', ' ')}</p>

                            <Link className="view-details" to={"/home/sessions/" + session.id} target="_blank">
                                <FontAwesomeIcon icon={faEye} className="icon" />
                                <span>Details</span>
                            </Link>
                        </div>

                    ))

                }

            </div >

        </div >
    )
}

export default SessionsList