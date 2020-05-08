import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    onRegister = () => {
        fetch('https://infinite-waters-16481.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        return (
            <article className='form mv7 center'>
                <main className='pa4 black-80'>
                    <div className='measure'>
                        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                        <legend className='f3 white fw6 ph0 mh0'>Register</legend>
                        <div className='mt3'>
                            <label className='db fw6 white lh-copy f6' htmlFor='name'>Name</label>
                            <input className='inputField pa2 input-reset ba white bg-transparent hover-white w-100' 
                            type='text' 
                            name='name'  
                            id='name' 
                            onChange={this.onNameChange}
                            />
                        </div>
                        <div className='mt3'>
                            <label className='db fw6 white lh-copy f6' htmlFor='email-address'>Email</label>
                            <input className='inputField pa2 input-reset ba white bg-transparent hover-white w-100' 
                            type='email' 
                            name='email-address'  
                            id='email-address' 
                            onChange={this.onEmailChange} 
                            />
                        </div>
                        <div className='mv3'>
                            <label className='db fw6 white lh-copy f6' htmlFor='password'>Password</label>
                            <input 
                            className='inputField b pa2 input-reset ba white bg-transparent hover-white w-100' 
                            type='password' 
                            name='password'  
                            id='password' 
                            onChange={this.onPasswordChange} 
                            />
                        </div>
                        </fieldset>
                        <div className=''>
                        <input 
                            onClick={this.onRegister}
                            className='formBtn b ph3 pv2 white input-reset ba b--white bg-transparent pointer f6 dib' 
                            type='submit' 
                            value='Register'  
                            style={{textTransform: 'lowercase'}} />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Register;