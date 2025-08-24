import React from 'react';
import "./Holdings.css";
import { holdings as holdingsData } from "../data/data.js";
import { motion } from "motion/react";

function Holdings() {
    let totalInvestment = holdingsData.reduce((sum, stock) => {
        return sum + (stock.qty * stock.avg)
    }, 0).toFixed(2);

    let currInvestmentValue = holdingsData.reduce((sum, stock) => {
        return sum + (stock.qty * stock.price)
    }, 0).toFixed(2);


    return (
        <main className='holdingsMain'>
            <motion.h4
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 150 }}
            >Holdings({holdingsData.length})</motion.h4>
            <div className='holdingsCalculation'>
                <div className='investment'>
                    <p style={{ fontSize: "12px" }}>Total Investment</p>
                    <p style={{ fontSize: "20px" }}>{totalInvestment}</p>
                </div>
                <div className='currentValue'>
                    <p style={{ fontSize: "12px" }}>Current Value</p>
                    <p style={{ fontSize: "20px" }} className='profit'>{currInvestmentValue}</p>
                </div>
                <div className='totalPnl'>
                    <p style={{ fontSize: "12px" }}>Total P&L</p>
                    <p style={{ fontSize: "20px" }} className='profit'>{(currInvestmentValue - totalInvestment).toFixed(2)}</p>
                </div>
            </div>
            <div className='holdings-table'>
                <table >
                    <tr>
                        <th style={{ width: "25%", textAlign: "left" }}>Instrument</th>
                        <th style={{ width: "10%" }}>Qty.</th>
                        <th style={{ width: "10%" }}>Avg Cost</th>
                        <th style={{ width: "10%" }}>LTP</th>
                        <th style={{ width: "15%" }}>Cur. Val</th>
                        <th style={{ width: "10%" }}>P&L</th>
                        <th style={{ width: "10%" }}>Net Chg.</th>
                        <th style={{ width: "10%", textAlign: "right" }}>Day Chg.</th>
                    </tr>

                    {holdingsData.map((stock, index) => {
                        let currValue = stock.price * stock.qty;
                        let isProfit = (stock.price - stock.avg) > 0.00;
                        let profitClass = isProfit ? "profit" : "loss";
                        let dayClass = "profit"
                        if (stock.day.startsWith("+")) {
                            dayClass = "profit"
                        } else {
                            dayClass = "loss"
                        }

                        return (
                            <motion.tr className='table-data' key={index}
                                whileHover={{
                                    backgroundColor: "whitesmoke",
                                    border: "1px solid gray",
                                    scale: 1.01
                                }}
                            >
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg}</td>
                                <td className={profitClass}>{stock.price}</td>
                                <td className={profitClass}>{currValue}</td>
                                <td className={profitClass}>{(currValue - (stock.qty * stock.avg)).toFixed(2)}</td>
                                <td className={profitClass}>{stock.net}</td>
                                <td className={dayClass} style={{ textAlign: "right" }}>{stock.day}</td>

                            </motion.tr>
                        )
                    })}

                </table>
            </div>


        </main>
    );
}

export default Holdings;