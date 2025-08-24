import React from 'react';
import './Positions.css';
import { motion } from "motion/react"

function Positions() {
    return (
        <main>
            <div className='positions'>
                <div className='positionsContent'>
                    <motion.img src='./positions.svg' className='positionImage'
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                    <p>You don't have any positions yet</p>
                    <motion.button className='btn btn-primary'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                    >Get Started
                    </motion.button>
                </div>
            </div>
        </main>
    );
}

export default Positions;