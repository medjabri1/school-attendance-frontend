import React from 'react'

import { useState, useEffect } from 'react';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import "./NewStudent.css";

import { API_BASE_URL } from '../../../../../../../../../../Constants/Global';


function NewStudent({ closeModal, level_id, refresh, setResponseMessage }) {

    // USE STATE HOOK
    let [studentFirstName, setStudentFirstName] = useState("");
    let [studentLastName, setStudentLastName] = useState("");
    let [studentApogee, setStudentApogee] = useState("");
    let [studentCIN, setStudentCIN] = useState("");
    let [studentCNE, setStudentCNE] = useState("");
    let [studentCarteID, setStudentCarteID] = useState("");

    // HANDLE SUBMIT

    let handleSubmit = (e) => {
        e.preventDefault();
        requestNewStudent();
    }

    // REQUEST NEW STUDENT DATA

    let requestNewStudent = () => {

        let student_data = {
            'first_name': studentFirstName,
            'last_name': studentLastName,
            'apogee': studentApogee,
            'cin': studentCIN,
            'cne': studentCNE,
            'carte_id': studentCarteID,
            'level_id': level_id
        }

        axios.post(`${API_BASE_URL}/students`, student_data)
            .then(res => {
                let { data } = res;
                setResponseMessage("Student added successfully");
                closeModal();
                refresh();
            });

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
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        className="form-input"
                        value={studentLastName}
                        onChange={(e) => { setStudentLastName(e.target.value) }}
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        className="form-input"
                        value={studentFirstName}
                        onChange={(e) => { setStudentFirstName(e.target.value) }}
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
