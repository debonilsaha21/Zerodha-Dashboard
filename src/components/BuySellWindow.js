import "./BuySellWindow.css";
import { useState } from "react";

function BuySellWindow({ stock, type }) {
    return (
        <div className="window">
            <div>{stock.name}</div>
            <div>{type}</div>
        </div>
    );
}

export default BuySellWindow;