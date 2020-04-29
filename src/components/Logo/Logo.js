import React from 'react';
import faces from './faces.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='pt6'>
            <img src={faces} alt='logo'/>
        </div>
    );
}

export default Logo;