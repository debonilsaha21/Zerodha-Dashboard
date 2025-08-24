import React from 'react';
import "./Summary.css";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { holdings as holdingsData } from "../data/data.js";

function Summary() {
    let totalInvestment = holdingsData.reduce((sum, stock) => {
        return sum + (stock.qty * stock.avg)
    }, 0).toFixed(2);

    let currInvestmentValue = holdingsData.reduce((sum, stock) => {
        return sum + (stock.qty * stock.price)
    }, 0).toFixed(2);

    let profit = (currInvestmentValue - totalInvestment).toFixed(2)
    let profitPercentage = ((profit / totalInvestment) * 100).toFixed(2)

    return (
        <div className='summary'>
            <div className='userInfo'>
                <motion.p
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >Hi, Debonil
                </motion.p>
            </div>
            <div className='equitySummary'>
                <p><i class="fa-solid fa-money-bill-1"></i>&nbsp;&nbsp;Equity</p>
                <div className='equitySummaryValues'>
                    <div className='margin'>


                        <p style={{ fontSize: "50px" }}>37.8k</p>
                        <p style={{ fontSize: "12px", color: "gray" }}>(Margin Available)</p>
                    </div>
                    <div className='balance'>
                        <p style={{ fontSize: "15px", color: "gray" }}>Margin used: &nbsp;&nbsp;
                            <span style={{ color: "black" }}>0.00</span>
                        </p>
                        <p style={{ fontSize: "15px", color: "gray" }}>Opening Balance: &nbsp;&nbsp;
                            <span style={{ color: "black" }}>538.5</span>
                        </p>
                        <p><Link>View Statement</Link></p>
                    </div>
                </div>


            </div>
            <div className='holdingSummary'>
                <p><i class="fa-solid fa-briefcase"></i>&nbsp;&nbsp;Holdings</p>
                <div className='holdingSummaryValues'>
                    <div className='pnl'>
                        <p style={{ fontSize: "40px", color: "green" }}>
                            {profit} &nbsp;
                            <span style={{ fontSize: "20px", color: "green" }}>+{profitPercentage}%</span>
                        </p>
                        <p style={{ fontSize: "12px", color: "gray" }}>P&L</p>
                    </div>
                    <div className='currentValue'>
                        <p style={{ fontSize: "15px", color: "gray" }}>Current Value&nbsp;&nbsp;
                            <span style={{ color: "black" }}>{currInvestmentValue}</span>
                        </p>
                        <p style={{ fontSize: "15px", color: "gray" }}>Investment Value&nbsp;&nbsp;
                            <span style={{ color: "black" }}>{totalInvestment}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Summary;