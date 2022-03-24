import React from 'react'

import { useState, useEffect } from 'react';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios';

import "./AjouterProf.css";

import { API_BASE_URL } from '../../../../../../Constants/Global';

function AjouterProf({ closeModal, refresh }) {

    // USE STATE HOOK
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    // HANDLE SUBMIT

    let handleSubmit = (e) => {
        e.preventDefault();
        requestAddNewProf();
    }

    // REQUEST ADD NEW PROF

    let requestAddNewProf = () => {

        let prof_data = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": password
        };

        axios.post(`${API_BASE_URL}/professors`, prof_data)
            .then(res => {
                let { data } = res;
                closeModal();
                refresh();
            });

    };

    return (
        <div className="ajouter-prof-modal">

            <span className="modal-close-button" onClick={closeModal}>+</span>

            <form className="form-container" onSubmit={handleSubmit}>

                <h2 className="form-title">
                    <FontAwesomeIcon icon={faPlusCircle} className="icon" />
                    <span>Ajouter un professeur</span>
                </h2>

                <div className="form-item">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input
                        type="text"
                        id="first_name"
                        className="form-input"
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value) }}
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input
                        type="text"
                        id="last_name"
                        className="form-input"
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value) }}
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
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

export default AjouterProf
