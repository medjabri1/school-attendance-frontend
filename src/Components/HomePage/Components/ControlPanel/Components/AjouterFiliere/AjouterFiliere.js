import React from 'react'

import { useState, useEffect } from 'react';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import "./AjouterFiliere.css";

function AjouterFiliere({ closeModal }) {

    // USE STATE HOOK
    let [filiereName, setFiliereName] = useState("");

    // HANDLE SUBMIT

    let handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="ajouter-filiere-modal">

            <span className="modal-close-button" onClick={closeModal}>+</span>

            <form className="form-container" onSubmit={handleSubmit}>

                <h2 className="form-title">
                    <FontAwesomeIcon icon={faPlusCircle} className="icon" />
                    <span>Ajouter une filiere</span>
                </h2>

                <div className="form-item">
                    <label htmlFor="filiere_name" className="form-label">Filiere name</label>
                    <input
                        type="text"
                        id="filiere_name"
                        className="form-input"
                        value={filiereName}
                        onChange={(e) => { setFiliereName(e.target.value) }}
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

export default AjouterFiliere
