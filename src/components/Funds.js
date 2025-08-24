import React from "react";
import { Link } from "react-router-dom";
import "./Funds.css";
import { motion } from "motion/react";

const Funds = () => {
    return (
        <div className="fundBox">
            <div className="funds" >
                <p style={{ marginRight: "1vw" }}>Instant, zero-cost fund transfers with UPI </p>

                <Link className="btn btn-success">Add funds</Link>
                <Link className="btn btn-primary">Withdraw</Link>
            </div>

            <div className="row">
                <div className="col">
                    <span>
                        <p style={{ fontSize: "large", fontDecoration: "bold" }} >
                            <motion.i class="fa-solid fa-money-bill-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, rotate: 360 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            ></motion.i>Equity</p>
                    </span>

                    <div className="table">
                        <div className="data">
                            <p>Available margin</p>
                            <p className="imp colored">4,043.10</p>
                        </div>
                        <div className="data">
                            <p>Used margin</p>
                            <p className="imp">3,757.30</p>
                        </div>
                        <div className="data">
                            <p>Available cash</p>
                            <p className="imp">4,043.10</p>
                        </div>
                        <hr />
                        <div className="data">
                            <p>Opening Balance</p>
                            <p>4,043.10</p>
                        </div>
                        <div className="data">
                            <p>Opening Balance</p>
                            <p>3736.40</p>
                        </div>
                        <div className="data">
                            <p>Payin</p>
                            <p>4064.00</p>
                        </div>
                        <div className="data">
                            <p>SPAN</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Delivery margin</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Exposure</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Options premium</p>
                            <p>0.00</p>
                        </div>
                        <hr />
                        <div className="data">
                            <p>Collateral (Liquid funds)</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Collateral (Equity)</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Total Collateral</p>
                            <p>0.00</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <span>
                        <p style={{ fontSize: "large", fontDecoration: "bold" }}>
                            <motion.i class="fa-solid fa-droplet"
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            ></motion.i>Commodity</p>
                    </span>
                    <div className="table">
                        <div className="data">
                            <p>Available margin</p>
                            <p className="imp colored">0.00</p>
                        </div>
                        <div className="data">
                            <p>Used margin</p>
                            <p className="imp">0.00</p>
                        </div>
                        <div className="data">
                            <p>Available cash</p>
                            <p className="imp">0.00</p>
                        </div>
                        <hr />
                        <div className="data">
                            <p>Opening Balance</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Opening Balance</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Payin</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>SPAN</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Delivery margin</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Exposure</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Options premium</p>
                            <p>0.00</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Funds;