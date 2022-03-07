import React from 'react'

import { useState, useEffect } from 'react';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import "./NewSubject.css";

function NewSubject({ closeModal }) {

    // USE STATE HOOK
    let [subjectTitle, setSubjectTitle] = useState("");

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
                    <span>Add New Subject</span>
                </h2>

                <div className="form-item">
                    <label htmlFor="subject_title" className="form-label">Subject title</label>
                    <input
                        type="text"
                        id="subject_title"
                        className="form-input"
                        value={subjectTitle}
                        onChange={(e) => { setSubjectTitle(e.target.value) }}
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

export default NewSubject
