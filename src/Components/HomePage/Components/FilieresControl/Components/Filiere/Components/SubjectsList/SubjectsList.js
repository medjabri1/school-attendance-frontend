import React from 'react'

import { useState } from 'react'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlusCircle, faTh, faList } from '@fortawesome/free-solid-svg-icons'

import "./SubjectsList.css";
import ViewSubject from './Components/ViewSubject/ViewSubject'
import NewSubject from './Components/NewSubject/NewSubject'

function SubjectsList({ filiereId, niveauId }) {

    // USE STATE HOOK

    let [displaySubjectModal, setDisplaySubjectModal] = useState(false);
    let [displaySubjectId, setDisplaySubjectid] = useState(10);

    let [displayCreateSubject, setDisplayCreateSubject] = useState(false);

    let [toggledListStyle, setToggledListStyle] = useState(false);

    // SUBJECT ITEM HANDLE CLICK

    let subjectItemClick = (id) => {
        setDisplaySubjectid(id);
        setDisplaySubjectModal(true);
    }

    // CLOSE MODAL 

    let closeModal = () => {
        setDisplaySubjectModal(false);
        setDisplayCreateSubject(false);
    }

    return (
        <div className="subjects-list">

            <h2 className="section-title">Subjects List</h2>


            <div className={toggledListStyle ? "list-items inline" : "list-items"}>

                <div className="toggle-list-icon" onClick={() => setToggledListStyle(!toggledListStyle)}>
                    {
                        !toggledListStyle ?
                            <FontAwesomeIcon icon={faList} />
                            :
                            <FontAwesomeIcon icon={faTh} />
                    }
                </div>

                <div className="subject-item" onClick={() => subjectItemClick(11)}>
                    <h2 className="subject-title">Big Data</h2>
                </div>
                <div className="subject-item" onClick={() => subjectItemClick(12)}>
                    <h2 className="subject-title">Cloud Computing</h2>
                </div>
                <div className="subject-item" onClick={() => subjectItemClick(13)}>
                    <h2 className="subject-title">Data Analysis</h2>
                </div>
                <div className="subject-item" onClick={() => subjectItemClick(14)}>
                    <h2 className="subject-title">Statistics</h2>
                </div>
                <div className="subject-item" onClick={() => subjectItemClick(15)}>
                    <h2 className="subject-title">Embedded Systems</h2>
                </div>
                <div className="subject-item" onClick={() => subjectItemClick(16)}>
                    <h2 className="subject-title">OO Programming</h2>
                </div>
                <div className="subject-item" onClick={() => subjectItemClick(17)}>
                    <h2 className="subject-title">UML & Design Patterns</h2>
                </div>
                <div className="subject-item" onClick={() => subjectItemClick(19)}>
                    <h2 className="subject-title">Business English</h2>
                </div>
                <div className="subject-item" onClick={() => subjectItemClick(119)}>
                    <h2 className="subject-title">Advanced Databases</h2>
                </div>
            </div>

            <div className="actions">
                <div className="action-item" onClick={() => { setDisplayCreateSubject(true) }}>
                    <FontAwesomeIcon icon={faPlusCircle} className="action-icon" />
                    <span>Add new Subject</span>
                </div>
            </div>

            {/* View Subject Item */}

            {
                displaySubjectModal ?
                    <ViewSubject closeModal={closeModal} subject_id={displaySubjectId} />
                    : null
            }

            {/* Create Subject */}

            {
                displayCreateSubject ?
                    <NewSubject closeModal={closeModal} />
                    : null
            }

        </div>
    )
}

export default SubjectsList