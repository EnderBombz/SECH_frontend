import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData'
import '../css/NavBar.css';
import TopBar from "../components/Topbar"
import { Context } from "../context/AuthContext"

function NavBar() {
    const [sideBar, setSideBar] = useState(false)
    const ShowSideBar = () => setSideBar(!sideBar)
    const { userData } = useContext(Context)
    SideBarData[0].title = userData.username;


    return (
        <>
            <div className="topOut">
                <TopBar {...({ ShowSideBar })} />
            </div>

            {/*<div className="navbar" color="primary">
            <Link to="#" className="menu-bars">
                <MaterialUI.Menu onClick={ShowSideBar}/>
            </Link>  
        </div>*/}
            <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={ShowSideBar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">

                        </Link>
                    </li>
                    {

                        SideBarData.map((item, index) => (
                            userData.userlevel === "colaborador" && index < 3 ?

                                <>
                                    <li key={index} className={item.className}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>

                                    </li>
                                </>
                                : userData.userlevel === "tecnico" ? <>
                                    <li key={index} className={item.className}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>

                                    </li>
                                </> :
                                    <></>
                        ))

                    }

                </ul>
            </nav>
        </>
    );
}

export default NavBar