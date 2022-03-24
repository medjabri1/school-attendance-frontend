import React from 'react'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import "./ProfsControl.css";

import { API_BASE_URL } from '../../../../Constants/Global';
import AjouterProf from './Components/AjouterProf/AjouterProf';

function ProfsControl() {

    // USE STATE HOOK
    let [displayCreateNewProf, setDisplayCreateNewProf] = useState(false);

    let [profsList, setProfsList] = useState([]);

    // Change page title

    useEffect(() => {
        document.title = "Control Panel - Professors"
        requestProfsData();
    }, []);

    // REQUEST profs DATA

    let requestProfsData = () => {
        axios.get(`${API_BASE_URL}/professors`)
            .then((res) => {
                setProfsList(res.data);
            });
    }

    // LET REFRESH DATA

    let refresh = () => {
        requestProfsData();
    }

    return (
        <div className="control-container">

            {/* AJOUTER UN PROF COMPONENT */}
            {
                displayCreateNewProf ?
                    <AjouterProf
                        closeModal={() => { setDisplayCreateNewProf(false) }} refresh={refresh}
                    />
                    : null
            }

            <div className="control-panel-content">

                <h2 className="panel-title">Liste des professeurs</h2>

                <div className="quick-actions">
                    <div className="action-item" onClick={() => { setDisplayCreateNewProf(true) }}>
                        <FontAwesomeIcon icon={faPlusCircle} className="action-icon" />
                        <span>Ajouter un professeur</span>
                    </div>
                </div>

                <div className="liste-profs">

                    {
                        profsList.map(prof => (

                            <div className="prof">
                                <h2 className="prof-name">{prof.first_name + " " + prof.last_name.toUpperCase()}</h2>
                                <a href={"mailto:" + prof.email} className="prof-email">{prof.email}</a>
                                <p className="prof-created-at">{prof.created_at.substr(0, 10)}</p>
                            </div>

                        ))
                    }

                </div>

            </div>

        </div >
    )

}

export default ProfsControl