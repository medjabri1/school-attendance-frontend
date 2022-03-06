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
                        <p className="stats-label">Created at</p>
                        <p className="stats-data">10-11-2021</p>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default SubjectItem
