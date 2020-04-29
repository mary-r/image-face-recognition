import React from 'react';
import './InputForm.css'

const InputForm = () => {
    return (
        <div>
            <p className='f4'>
                {'Upload an image to see how face recognition works.'}
            </p>
            <div>
                <div className='form center pa4 br3 shadow'>
                    <input className='input-reset ba b--black-20 pa2 mb2 db w-100' type='text'></input>
                    <button className='f6 link dim ph3 pv2 mb2 dib white bg-navy' style={{textTransform: 'lowercase'}}>Upload</button>
                </div>
            </div>
        </div>
    );
}

export default InputForm;