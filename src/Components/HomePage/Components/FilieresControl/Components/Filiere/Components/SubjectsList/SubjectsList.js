import React from 'react'

import { useState, useEffect } from 'react'

import axios from 'axios';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlusCircle, faTh, faList } from '@fortawesome/free-solid-svg-icons'

import "./SubjectsList.css";
import ViewSubject from './Components/ViewSubject/ViewSubject'
import NewSubject from './Components/NewSubject/NewSubject'

import { API_BASE_URL } from '../../../../../../../../Constants/Global';

function SubjectsList({ level_id }) {

    // USE STATE HOOK

    let [displaySubjectModal, setDisplaySubjectModal] = useState(false);
    let [displaySubjectId, setDisplaySubjectid] = useState(10);

    let [displayCreateSubject, setDisplayCreateSubject] = useState(false);

    let [toggledListStyle, setToggledListStyle] = useState(false);

    let [subjectsList, setSubjectsList] = useState([]);

    let [responseMessage, setResponseMessage] = useState("");

    // USE EFFECT HOOK 

    useEffect(() => {
        requestSubjectsData();
    }, []);

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

    let refresh = () => {
        requestSubjectsData();
    }

    // REQUEST SUBJECTS LIST DATA

    let requestSubjectsData = () => {

        axios.get(`${API_BASE_URL}/subjects/level/${level_id}`)
            .then((res) => {
                setSubjectsList(res.data);
            });

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

                {
                    subjectsList.map(subject => (

                        <div className="subject-item" onClick={() => subjectItemClick(subject.id)} key={subject.id}>
                            <h2 className="subject-title">{subject.name}</h2>
                        </div>

                    ))
                }

            </div>

            <div className="actions">
                <div className="action-item" onClick={() => { setDisplayCreateSubject(true) }}>
                    <FontAwesomeIcon icon={faPlusCircle} className="action-icon" />
                    <span>Add new Subject</span>
                </div>

                {
                    responseMessage.length == 0 ?
                        null :

                        <p className="response-message" onClick={() => setResponseMessage("")} title="Click to remove">
                            {responseMessage}
                        </p>
                }
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
                    <NewSubject level_id={level_id}
                        closeModal={closeModal}
                        setResponseMessage={setResponseMessage}
                        refresh={refresh} />

                    : null
            }

        </div>
    )
}

export default SubjectsList