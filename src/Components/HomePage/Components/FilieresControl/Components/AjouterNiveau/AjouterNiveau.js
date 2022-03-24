import React from 'react'

import { useState, useEffect } from 'react';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import "./AjouterNiveau.css";

import { API_BASE_URL } from '../../../../../../Constants/Global';

function AjouterNiveau({ closeModal, refresh }) {

    // USE STATE HOOK
    let [niveauFiliere, setNiveauFiliere] = useState(0);
    let [niveauLibelle, setNiveauLibelle] = useState("1er année");

    let [filieresList, setFilieresList] = useState([]);

    // USE EFFECT HOOK

    useEffect(() => {
        requestFilieresData();
    }, []);

    // HANDLE SUBMIT

    let handleSubmit = (e) => {
        e.preventDefault();
        requestCreateNewLevel();
    }

    // REQUEST FILIERES DATA

    let requestFilieresData = () => {
        axios.get(`${API_BASE_URL}/filieres`)
            .then((res) => {
                setFilieresList(res.data);
                setNiveauFiliere(res.data[0].id);
                console.log(res.data[0].id);
            });
    }

    // REQUEST CREATE NEW LEVEL



    // REQUEST ADD NEW PROF

    let requestCreateNewLevel = () => {

        let level_data = {
            "filiere_id": niveauFiliere,
            "libelle": niveauLibelle
        };

        console.log(level_data);

        axios.post(`${API_BASE_URL}/levels`, level_data)
            .then(res => {
                let { data } = res;
                closeModal();
                refresh();
            });

    };

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
                        {
                            filieresList.map((filiere, index) => (
                                <option key={index} value={filiere.id}>{filiere.name}</option>
                            ))
                        }
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
                        <option value="1er année">1er année</option>
                        <option value="2eme année">2eme année</option>
                        <option value="3eme année">3eme année</option>
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
