// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <h1 className="header-1"> Call a Friend </h1>
            <span>your friendly contact app</span>
            <p className="bintang"> *********************************************************** </p>
        </>
    )
}

export default Header;