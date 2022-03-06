import React from 'react'

import { useState, useEffect } from 'react';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import "./AjouterNiveau.css";

function AjouterNiveau({ closeModal }) {

    // USE STATE HOOK
    let [niveauFiliere, setNiveauFiliere] = useState("Big Data");
    let [niveauLibelle, setNiveauLibelle] = useState("1er année");

    // HANDLE SUBMIT

    let handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="ajouter-niveau-modal">

            <span className="modal-close-button" onClick={closeModal}>+</span>

            <form className="form-container" onSubmit={handleSubmit}>

                <h2 className="form-title">
                    <FontAwesomeIcon icon={faPlusCircle} className="icon" />
                    <span>Ajouter un niveau</span>
                </h2>

                <div className="form-item">
                    <label htmlFor="niveau_filiere" className="form-label">Filiere</label>
                    <select
                        id="niveau_filiere"
                        className="form-input"
                        value={niveauFiliere}
                        onChange={(e) => { setNiveauFiliere(e.target.value) }}
                        required
                    >
                        <option value="1">Big Data</option>
                        <option value="2">Génie Informatique</option>
                        <option value="3">Génie Industriel</option>
                    </select>
                </div>

                <div className="form-item">
                    <label htmlFor="niveau_libelle" className="form-label">Niveau Libelle</label>
                    <select
                        id="niveau_libelle"
                        className="form-input"
                        value={niveauLibelle}
                        onChange={(e) => { setNiveauLibelle(e.target.value) }}
                        required
                    >
                        <option value="1">1er année</option>
                        <option value="2">2eme année</option>
                        <option value="3">3eme année</option>
                    </select>
                </div>

                <div className="form-item">
                    <input type="submit" className="form-input submit" value="Submit" required />
                </div>

            </form >
        </div >
    )
}

export default AjouterNiveau
