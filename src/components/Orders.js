import React from 'react';
import './Orders.css';
import { motion } from "motion/react"

function Orders() {
    return (
        <main>
            <div className='orders'>
                <div className='ordersContent'>
                    <motion.img src='./positions.svg' className='ordersImage'
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                    <p>You don't have any Orders yet...</p>
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

export default Orders;