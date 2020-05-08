import React from 'react';
import faces from './faces.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='pt5'>
            <img className ='logo' src={faces} alt='logo' />
        </div>
    );
}

export default Logo;