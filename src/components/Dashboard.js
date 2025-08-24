import React from 'react';
import "./Dashboard.css";
import { Routes, Route } from "react-router-dom";
import Watchlist from './Watchlist.js';
import Summary from "./Summary.js";
import Orders from "./Orders.js";
import Holdings from './Holdings.js';
import Positions from './Positions.js';
import Funds from './Funds.js';
import Apps from "./Apps.js";

function Dashboard() {
    return (
        <main>
            <div className='dashboard'>
                <Watchlist />
                <div className='dashboard-content'>
                    <Routes>
                        <Route exact path="/" element={<Summary />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/holdings' element={<Holdings />} />
                        <Route path='/positions' element={<Positions />} />
                        <Route path='/funds' element={<Funds />} />
                        <Route path='/apps' element={<Apps />} />
                    </Routes>
                </div>
            </div>
        </main>
    );
}

export default Dashboard;