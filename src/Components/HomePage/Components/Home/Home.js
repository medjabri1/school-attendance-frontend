import React from 'react'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import HomePanel from '../Overview/Overview';

import axios from 'axios';

import "./Home.css";

function Home() {
    // CONST AND VARS

    const API_BASE_URL = 'http://localhost:8081/api';

    // USE STATE HOOK

    let [offersKeys, setOffersKeys] = useState([]);
    let [offersValues, setOffersValues] = useState([]);
    let [categories, setCategories] = useState([]);

    // USE EFFECT HOOK

    useEffect(() => {
        document.title = "School Attendances";
        requestRecentOffers();
        requestCategories();
    }, []);

    // REQUEST RECENT OFFERS

    let requestRecentOffers = () => {

        axios.get(`${API_BASE_URL}/offer/all-offers-category`, { withCredentials: true })
            .then(res => {

                let status = res.data.status;
                let result = res.data.result;

                if (status == "1") {
                    setOffersKeys(Object.keys(result));
                    setOffersValues(Object.values(result));
                } else {
                    console.log(res.data.error);
                }
            });

    }

    // REQUEST CATEGORIES

    let requestCategories = () => {

        axios.get(`${API_BASE_URL}/category/all-categories`, { withCredentials: true })
            .then(res => {
                setCategories(res.data);
            });

    }

    // FORMAT TIME SINCE / AGO

    function timeSince(date) {

        date = Date.parse(date.replace('T', ''));

        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
            return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    return (
        <div className="home-container">
            <div className="home-content">
                <HomePanel />
            </div>
        </div>
    )
}

export default Home
