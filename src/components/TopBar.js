import { useState } from 'react';
import './TopBar.css';
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function TopBar() {
    const [menuIndex, setMenuIndex] = useState(0);
    const [boolUserDropDown, setBoolUserDropDown] = useState(false)

    function handleUserDropDown() {
        setBoolUserDropDown(!boolUserDropDown)
    }

    const handleIndex = (index) => {
        setMenuIndex(index)
    };
    return (
        <header>
            <div className='topbar'>
                <div className='indices'>
                    <div className='nifty'>
                        <span className='index1-name'>NIFTY</span>
                        &nbsp;
                        <span className='index1-value'>24631.30(<span className='index1-percent'>
                            +0.04%
                        </span>)</span>
                    </div>
                    <div className='sensex'>
                        <span>
                            <span className='index2-name'>SENSEX</span>
                            &nbsp;
                            <span className='index2-value'>80597.66(<span className='index2-percent'>
                                +0.05%
                            </span>)
                            </span>
                        </span>
                    </div>
                </div>
                <div className='panel'>
                    <div className='home-logo'><Link to={"/"} onClick={() => handleIndex(0)}><img src='/resources/kite.svg' alt="loading" /></Link></div>
                    <div className='panel-items'>
                        <div><Link to={"/"} className={menuIndex === 0 ? "linksActive" : "links"} onClick={() => handleIndex(0)}>
                            Dashboard</Link>
                        </div>
                        <div><Link to={"/orders"} className={menuIndex === 1 ? "linksActive" : "links"} onClick={() => handleIndex(1)}>
                            Orders</Link>
                        </div>
                        <div><Link to={"/holdings"} className={menuIndex === 2 ? "linksActive" : "links"} onClick={() => handleIndex(2)}>
                            Holdings</Link></div>
                        <div><Link to={"/positions"} className={menuIndex === 3 ? "linksActive" : "links"} onClick={() => handleIndex(3)}>
                            Positions</Link>
                        </div>
                        <div><Link to={"/funds"} className={menuIndex === 4 ? "linksActive" : "links"} onClick={() => handleIndex(4)}>
                            Funds</Link>
                        </div>
                        <div><Link to={"/apps"} className={menuIndex === 5 ? "linksActive" : "links"} onClick={() => handleIndex(5)}>
                            Apps</Link>
                        </div>
                        <div className='user'>
                            <div className='user-code'>DS</div>
                            <button className='userButton' onClick={handleUserDropDown}><div>Debonil</div></button>
                        </div>
                        {boolUserDropDown && <UserDropDown />}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TopBar;

export function UserDropDown() {
    return (
        <motion.div className='userDropDown'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className='userInformation'>
                <p className='dropDownName'>Debonil Saha</p>
                <p className='dropDownEmail'>debonil.saha21@gmail.com</p>
            </div>
            <div className='dropDownConsole'>Console</div>
            <div>Coin</div>
            <div>Support</div>
            <div>Invite Friends</div>
            <div>Keyboard Shortcuts</div>
            <div>User Manual</div>
            <div>Logout</div>
        </motion.div>
    )
}