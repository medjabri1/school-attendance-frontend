import React from 'react'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import AjouterFiliere from './Components/AjouterFiliere/AjouterFiliere';
import AjouterNiveau from './Components/AjouterNiveau/AjouterNiveau';

import "./FilieresControl.css";

function ControlPanel() {

    // USE STATE HOOK
    let [displayCreateNewFiliere, setDisplayCreateNewFiliere] = useState(false);
    let [displayCreateNewNiveau, setDisplayCreateNewNiveau] = useState(false);

    // Change page title

    useEffect(() => {
        document.title = "Control Panel - Filieres"
    }, []);

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

                    <div className="filiere">
                        <h2 className="filiere-name">Master Big Data & IoT</h2>
                        <ul className="filiere-niveaux">
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">1er année</li>
                            </Link>
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">2eme année</li>
                            </Link>
                        </ul>
                    </div>

                    <div className="filiere">
                        <Link className="offer-item" to="/home/filieres/niveau/10">
                            <h2 className="filiere-name">Génie Informatique</h2>
                        </Link>
                        <ul className="filiere-niveaux">
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">1er année</li>
                            </Link>
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">2eme année</li>
                            </Link>
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">3eme année</li>
                            </Link>
                        </ul>
                    </div>

                    <div className="filiere">
                        <Link className="offer-item" to="/home/filieres/niveau/10">
                            <h2 className="filiere-name">Génie Industriel</h2>
                        </Link>
                        <ul className="filiere-niveaux">
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">1er année</li>
                            </Link>
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">2eme année</li>
                            </Link>
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">3eme année</li>
                            </Link>
                        </ul>
                    </div>

                    <div className="filiere">
                        <Link className="offer-item" to="/home/filieres/niveau/10">
                            <h2 className="filiere-name">Génie Mécanique</h2>
                        </Link>
                        <ul className="filiere-niveaux">
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">1er année</li>
                            </Link>
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">2eme année</li>
                            </Link>
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">3eme année</li>
                            </Link>
                        </ul>
                    </div>

                    <div className="filiere">
                        <Link className="offer-item" to="/home/filieres/niveau/10">
                            <h2 className="filiere-name">Génie Electromécanique</h2>
                        </Link>
                        <ul className="filiere-niveaux">
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">1er année</li>
                            </Link>
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">2eme année</li>
                            </Link>
                            <Link className="offer-item" to="/home/filieres/niveau/10">
                                <li className="niveau-libele">3eme année</li>
                            </Link>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ControlPanel;
