import React from 'react';
import './InputForm.css'

const InputForm = ({ onInputChange, onButtonClick }) => {
    return (
        <div>
            <p className='f4'>
                {'This app will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <article className='form pa4 br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 center'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button className='f6 link grow ph3 pv2 mb2 dib detect' style={{textTransform: 'lowercase'}} onClick={onButtonClick}>Detect</button>
                </article>
            </div>
        </div>
    );
}

export default InputForm;