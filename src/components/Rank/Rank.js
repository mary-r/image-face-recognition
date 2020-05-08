import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='f3 pt5'>
                {`Hello, ${name}! Your image count is ${entries}.`}
            </div>
        </div>
    );
}

export default Rank;