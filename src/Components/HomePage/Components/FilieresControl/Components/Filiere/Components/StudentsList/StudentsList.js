import React from 'react'

import { useState } from 'react'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faPlusCircle, faTh, faList } from '@fortawesome/free-solid-svg-icons'

import NewStudent from './Components/NewStudent/NewStudent'

import "./StudentsList.css";

function StudentsList({ filiereId, niveauId }) {

    // USE STATE HOOK

    let [displayCreateStudent, setDisplayCreateStudent] = useState(false);

    let [toggledListStyle, setToggledListStyle] = useState(false);

    // CLOSE MODAL 

    let closeModal = () => {
        setDisplayCreateStudent(false);
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

                <div className="student-item">
                    <h2 className="student-name">Mohammed JABRI</h2>
                    <p className="collapsible">-102909</p>
                    <p className="collapsible">-CIN: F653602</p>
                    <p className="collapsible">-CNE: H130385779</p>
                </div>

                <div className="student-item">
                    <h2 className="student-name">Wiam LOUAH</h2>
                    <p className="collapsible">-102909</p>
                    <p className="collapsible">-CIN: C676723</p>
                    <p className="collapsible">-CNE: F7678676</p>
                </div>

                <div className="student-item">
                    <h2 className="student-name">Soukayna CHATRY</h2>
                    <p className="collapsible">-908789</p>
                    <p className="collapsible">-CIN: E178788</p>
                    <p className="collapsible">-CNE: H130385779</p>
                </div>

                <div className="student-item">
                    <h2 className="student-name">Ilham LAZAR</h2>
                    <p className="collapsible">-167567</p>
                    <p className="collapsible">-CIN: F697888</p>
                    <p className="collapsible">-CNE: H13037787</p>
                </div>

            </div>

            <div className="actions">
                <div className="action-item" onClick={() => { setDisplayCreateStudent(true) }}>
                    <FontAwesomeIcon icon={faPlusCircle} className="action-icon" />
                    <span>Add new Student</span>
                </div>
            </div>

            {/* Create Student */}

            {
                displayCreateStudent ?
                    <NewStudent closeModal={closeModal} niveau_id={niveauId} />
                    : null
            }

        </div>
    )
}

export default StudentsList