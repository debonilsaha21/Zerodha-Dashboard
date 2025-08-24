import { useState } from "react";
import "./WatchlistItem.css";
import { Tooltip, Grow } from "@mui/material";
import BuySellWindow from "./BuySellWindow";

function WatchlistItem({ stock, key }) {
    const [watchlistItemActionBool, setWatchlistItemActionBool] = useState(false);

    function handleMouseHover(event) {
        setWatchlistItemActionBool(true)
    };
    function handleMouseHoverLeave(event) {
        setWatchlistItemActionBool(false)
    };

    return (
        <li onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHoverLeave}
            key={key}
        >
            <div className={`watchlistItem ${ stock.isDown ? "down" : "up" }`}>
                <div className="stockName">
                    {stock.name}
                </div>
                <div className="dayChangePercent">
                    {stock.percent}
                </div>
                <div className="stockValue">
                    {stock.price}
                </div>
                <Grow in={watchlistItemActionBool} timeout={200} mountOnEnter unmountOnExit>
                    <div className="watchlistItemActions">
                        <WatchlistItemAction stock={stock} />
                    </div>
                </Grow>

            </div>

        </li>
    );
}

export default WatchlistItem;

function WatchlistItemAction({ stock }) {

    return (
        <span className="actions">
            <span>
                <Tooltip
                    title="Buy"
                    placement="top"
                >
                    <button className="buyButton" >&nbsp;B&nbsp;</button>

                </Tooltip>

                <Tooltip
                    title="Sell"
                    placement="top"
                >
                    <button className="sellButton" >&nbsp;S&nbsp;</button>

                </Tooltip>

                <Tooltip
                    title="Delete"
                    placement="top"
                >
                    <button className="deleteButton"><i class="fa-solid fa-trash"></i></button>
                </Tooltip>
                <Tooltip
                    title="Chart"
                    placement="top"
                >
                    <button className="chartButton"><i class="fa-solid fa-chart-line"></i></button>
                </Tooltip>
            </span>
        </span>
    )
};