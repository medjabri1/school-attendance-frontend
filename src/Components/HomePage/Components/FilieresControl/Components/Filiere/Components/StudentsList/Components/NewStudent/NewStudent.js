import React from 'react'

import { useState, useEffect } from 'react';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import "./NewStudent.css";

function NewStudent({ closeModal, niveau_id }) {

    // USE STATE HOOK
    let [studentName, setStudentName] = useState("");
    let [studentApogee, setStudentApogee] = useState("");
    let [studentCIN, setStudentCIN] = useState("");
    let [studentCNE, setStudentCNE] = useState("");
    let [studentCarteID, setStudentCarteID] = useState("");

    // HANDLE SUBMIT

    let handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="add-subject-modal">

            <span className="modal-close-button" onClick={closeModal}>+</span>

            <form className="form-container" onSubmit={handleSubmit}>

                <h2 className="form-title">
                    <FontAwesomeIcon icon={faPlusCircle} className="icon" />
                    <span>Add New Student</span>
                </h2>

                <div className="form-item">
                    <label htmlFor="student_name" className="form-label">Student Name</label>
                    <input
                        type="text"
                        id="student_name"
                        className="form-input"
                        value={studentName}
                        onChange={(e) => { setStudentName(e.target.value) }}
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="student_apogee" className="form-label">Apogee</label>
                    <input
                        type="text"
                        id="student_apogee"
                        className="form-input"
                        value={studentApogee}
                        onChange={(e) => { setStudentApogee(e.target.value) }}
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="student_cin" className="form-label">CIN</label>
                    <input
                        type="text"
                        id="student_cin"
                        className="form-input"
                        value={studentCIN}
                        onChange={(e) => { setStudentCIN(e.target.value) }}
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="subject_title" className="form-label">CNE</label>
                    <input
                        type="text"
                        id="student_cne"
                        className="form-input"
                        value={studentCNE}
                        onChange={(e) => { setStudentCNE(e.target.value) }}
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="student_carte_id" className="form-label">Carte ID</label>
                    <input
                        type="text"
                        id="student_carte_id"
                        className="form-input"
                        value={studentCarteID}
                        onChange={(e) => { setStudentCarteID(e.target.value) }}
                        required
                    />
                </div>

                <div className="form-item">
                    <input type="submit" className="form-input submit" value="Submit" required />
                </div>

            </form >
        </div >
    )
}

export default NewStudent
