import React from 'react';

import reactLogo from '../logo.svg';

export default function Header() {
    return (
        <nav>
            <img src={reactLogo} className="nav--logo" alt="logo" />
            <h2 className="nav--title">React Facts</h2>
            <h3 className="nav--text">React Course - Project 1</h3>
        </nav>
    );
}