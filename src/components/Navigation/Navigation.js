import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <header className='bg-black-90 fixed pv4 w-100'>
                <nav className='tr ph4'>
                    <a className='navi f4 link dim pointer'>Sign Out</a>
                </nav>
            </header>
        </div>
    );
}

export default Navigation;