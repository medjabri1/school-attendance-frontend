import React from 'react'

import { useState, useEffect } from 'react'

import axios from 'axios';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlusCircle, faTh, faList } from '@fortawesome/free-solid-svg-icons'

import NewStudent from './Components/NewStudent/NewStudent'

import "./StudentsList.css";

import { API_BASE_URL } from '../../../../../../../../Constants/Global';

function StudentsList({ level_id }) {

    // USE STATE HOOK

    let [displayCreateStudent, setDisplayCreateStudent] = useState(false);

    let [toggledListStyle, setToggledListStyle] = useState(false);

    let [studentsList, setStudentsList] = useState([]);

    let [responseMessage, setResponseMessage] = useState("");

    // USE EFFECT HOOK 

    useEffect(() => {
        requestStudentsData();
    }, []);

    // CLOSE MODAL 

    let closeModal = () => {
        setDisplayCreateStudent(false);
    }

    let refresh = () => {
        requestStudentsData();
    }

    // REQUEST STUDENTS LIST DATA

    let requestStudentsData = () => {

        axios.get(`${API_BASE_URL}/students/level/${level_id}`)
            .then((res) => {
                setStudentsList(res.data);
            });

    }

    return (
        <div className="students-list">

            <h2 className="section-title">Students List</h2>


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
                    studentsList.map(student => (

                        <div className="student-item" key={student.id}>
                            <h2 className="student-name">{student.first_name} {student.last_name}</h2>
                            <p className="collapsible">-APG: {student.apogee}</p>
                            <p className="collapsible">-CIN: {student.cin}</p>
                            <p className="collapsible">-CNE: {student.cne}</p>
                        </div>

                    ))
                }

            </div>

            <div className="actions">
                <div className="action-item" onClick={() => { setDisplayCreateStudent(true) }}>
                    <FontAwesomeIcon icon={faPlusCircle} className="action-icon" />
                    <span>Add new Student</span>
                </div>

                {
                    responseMessage.length == 0 ?
                        null :

                        <p className="response-message" onClick={() => setResponseMessage("")} title="Click to remove">
                            {responseMessage}
                        </p>
                }
            </div>

            {/* Create Student */}

            {
                displayCreateStudent ?
                    <NewStudent level_id={level_id}
                        closeModal={closeModal}
                        setResponseMessage={setResponseMessage}
                        refresh={refresh} />
                    : null
            }

        </div>
    )
}

export default StudentsList