import React from 'react';
import './InputForm.css'

const InputForm = ({ onInputChange, onButtonClick }) => {
    return (
        <div>
            <p className='f4'>
                {'This app will detect faces in your pictures. Give it a try.'}
            </p>
            <div>
                <article className='form br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 v-mid center'>
                    <div className='pa4 black-80'>
                        <input className='input-reset ba b--black-20 pa2 mb2 db w-100 input' type='text' onChange={onInputChange} />
                        <button className='f6 link grow ph3 pv2 mb2 dib detect' style={{textTransform: 'lowercase'}} onClick={onButtonClick}>Detect</button>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default InputForm;