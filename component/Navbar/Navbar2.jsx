import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar2 = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClickButton = () => {
        setShowMenu(!showMenu);
    };

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <header>
            <div className="container">
                <div className="grid navbar-menu">
                    <div className="logo">
                        <a href="#">Things to do</a>
                    </div>
                    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li className="dropdown">
                                <a href="#" onClick={handleDropdown} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                    Service <IoMdArrowDropdown />
                                </a>
                                {showDropdown && (
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Web Development</a></li>
                                        <li><a href="#">Facebook Ads</a></li>
                                        <li><a href="#">SEO</a></li>
                                    </ul>
                                )}
                            </li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="toggle-button">
                        <button onClick={handleClickButton}><GiHamburgerMenu /></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar2;
