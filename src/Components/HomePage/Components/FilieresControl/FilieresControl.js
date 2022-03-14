import React from 'react'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import AjouterFiliere from './Components/AjouterFiliere/AjouterFiliere';
import AjouterNiveau from './Components/AjouterNiveau/AjouterNiveau';

import { API_BASE_URL } from '../../../../Constants/Global';

import "./FilieresControl.css";

function FilieresControl() {

    // USE STATE HOOK
    let [displayCreateNewFiliere, setDisplayCreateNewFiliere] = useState(false);
    let [displayCreateNewNiveau, setDisplayCreateNewNiveau] = useState(false);

    let [filieresList, setFilieresList] = useState([]);
    let [levelsList, setLevelsList] = useState([]);

    // Change page title

    useEffect(() => {
        document.title = "Control Panel - Filieres"
        requestFilieresData();
        requestLevelsData();
    }, []);

    // REQUEST FILIERES DATA

    let requestFilieresData = () => {
        axios.get(`${API_BASE_URL}/filieres`)
            .then((res) => {
                setFilieresList(res.data);
            });
    }

    // REQUEST FILIERES DATA

    let requestLevelsData = () => {
        axios.get(`${API_BASE_URL}/levels`)
            .then((res) => {
                setLevelsList(res.data);
                console.log(res.data);
            });
    }

    return (
        <div className="control-container">

            {/* AJOUTER UNE FILIERE COMPONENT */}
            {
                displayCreateNewFiliere ?
                    <AjouterFiliere
                        closeModal={() => { setDisplayCreateNewFiliere(false) }}
                    />
                    : null
            }

            {/* AJOUTER UN NIVEAU COMPONENT */}
            {
                displayCreateNewNiveau ?
                    <AjouterNiveau
                        closeModal={() => { setDisplayCreateNewNiveau(false) }}
                    />
                    : null
            }

            <div className="control-panel-content">

                <h2 className="panel-title">Liste des filieres</h2>

                <div className="quick-actions">
                    <div className="action-item" onClick={() => { setDisplayCreateNewFiliere(true) }}>
                        <FontAwesomeIcon icon={faPlusCircle} className="action-icon" />
                        <span>Ajouter une Filiere</span>
                    </div>
                    <div className="action-item" onClick={() => { setDisplayCreateNewNiveau(true) }}>
                        <FontAwesomeIcon icon={faPlusCircle} className="action-icon" />
                        <span>Ajouter un niveau</span>
                    </div>
                </div>

                <div className="liste-filieres">

                    {
                        filieresList.map(filiere => (

                            <div className="filiere">
                                <h2 className="filiere-name">{filiere.name}</h2>
                                <ul className="filiere-niveaux">

                                    {
                                        levelsList.filter(level => level.filiere_id == filiere.id).map(level => (

                                            <Link className="offer-item" to={"/home/filieres/niveau/" + level.id}>
                                                <li className="niveau-libele">{level.libelle}</li>
                                            </Link>

                                        ))
                                    }

                                </ul>
                            </div>

                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default FilieresControl;
