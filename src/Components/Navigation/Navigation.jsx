import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export const Navigation = () => {
    const [open, setOpen] = useState(false);
    
    function toggleClass() {
        setOpen(!open);
    }
    
    return (
        <>
            <div className={!open ? "menu-btn" : "menu-btn" + " menu-btn--active"} onClick={toggleClass}>
                <span className="lines"></span>
            </div>
            <nav className={!open ? "nav-top" : "nav-top" + " nav-top--active"}>
                <ul className="nav-top__list">
                    <li className="nav-top__list__item">
                        <NavLink to="catalog" className="nav-top__list__item--link" onClick={toggleClass}>
                            Каталог
                        </NavLink>
                    </li>
                    <li className="nav-top__list__item">
                        <NavLink to="about" className="nav-top__list__item--link" onClick={toggleClass}>
                            О компании
                        </NavLink>
                    </li>
                    <li className="nav-top__list__item">
                        <NavLink to="shops" className="nav-top__list__item--link" onClick={toggleClass}>
                            Магазины
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};