import React from 'react';

import reactLogo from '../logo.svg';

export default function Header() {
    return (
        <nav>
            <img src={reactLogo} className="app-logo" alt="logo" />
            <h2 className='mr-auto'>React Facts</h2>

            <h3>React Course - Project 1</h3>
        </nav>
    );
}