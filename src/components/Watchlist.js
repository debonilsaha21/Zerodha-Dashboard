import React, { useState } from 'react';
import "./Watchlist.css";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data.js";
import WatchlistItem from './WatchlistItem.js';

function Watchlist() {
    let [value, setValue] = useState("");

    function handleInput(event) {
        setValue(event.target.value)
    };

    return (

        <div className="watchlist-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                    className="search"
                />
                <span className="counts" style={{ color: "gray" }}>&nbsp;{watchlist.length}/50</span>
            </div>
            <ul className='list'>
                {watchlist.map((stock, index) => (
                    <WatchlistItem stock={stock} key={index} />
                ))}
            </ul>
        </div>
    );
}

export default Watchlist;