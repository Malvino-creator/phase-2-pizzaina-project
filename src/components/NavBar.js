import React, {useState} from "react";
import Logo from "./AutomativeLogo.jpg";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return(
        <div className="navbar">
            <div className="navbar">
                <div className="leftSide" id={openLinks ? "open" :"close"}>
                    <div className="image">
                    <img src= {Logo} alt="logo" />
                    </div>
                    <div className = "hiddenLinks">
                        <Link to = "/"> Home </Link>
                        <Link to = "/menu"> Menu </Link>
                        <Link to = "/about"> About </Link>
                        <Link to = "/contact"> Contact </Link>
                    </div>
                    <div className = "rightSide">
                    <Link to="/"> Home </Link>
                    <Link to="/menu"> Menu </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                    </div>
                    </div>
                </div>
            </div>
    )
}