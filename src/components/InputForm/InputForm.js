import React from 'react';
import './InputForm.css'

const InputForm = ({ onInputChange, onButtonClick }) => {
    return (
        <div>
            <p className='f4'>
                {'This app will detect faces in your pictures. Give it a try.'}
            </p>
            <div>
                <div className='form center pa4 br3 shadow'>
                    <input className='input-reset ba b--black-20 pa2 mb2 db w-100 input' type='text' onChange={onInputChange} />
                    <button className='f6 link grow ph3 pv2 mb2 dib detect' style={{textTransform: 'lowercase'}} onClick={onButtonClick}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default InputForm;