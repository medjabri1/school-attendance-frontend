import React from 'react'

import { useState } from 'react'

import { Link } from 'react-router-dom'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlusCircle, faTh, faList, faEye } from '@fortawesome/free-solid-svg-icons'

import "./SessionsList.css";

function SessionsList({ filiereId, niveauId }) {

    return (
        <div className="sessions-list">

            <h2 className="section-title">Sessions List</h2>


            <div className="list-items">

                <div className="session-item">
                    <h2 className="salle">Amphi Al-Khawarizmi</h2>
                    <p className="date">02-10-2021</p>

                    <Link className="view-details" to="/home/sessions/10" target="_blank">
                        <FontAwesomeIcon icon={faEye} className="icon" />
                        <span>Details</span>
                    </Link>
                </div>

                <div className="session-item">
                    <h2 className="salle">Labo Master</h2>
                    <p className="date">09-10-2021</p>

                    <Link className="view-details" to="/home/sessions/10" target="_blank">
                        <FontAwesomeIcon icon={faEye} className="icon" />
                        <span>Details</span>
                    </Link>
                </div>

                <div className="session-item">
                    <h2 className="salle">Salle 2-2</h2>
                    <p className="date">16-10-2021</p>

                    <Link className="view-details" to="/home/sessions/10" target="_blank">
                        <FontAwesomeIcon icon={faEye} className="icon" />
                        <span>Details</span>
                    </Link>
                </div>

                <div className="session-item">
                    <h2 className="salle">Labo Master</h2>
                    <p className="date">06-11-2021</p>

                    <Link className="view-details" to="/home/sessions/10" target="_blank">
                        <FontAwesomeIcon icon={faEye} className="icon" />
                        <span>Details</span>
                    </Link>
                </div>

            </div >

        </div >
    )
}

export default SessionsList