import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (e) => {
        this.setState({signInEmail: e.target.value})
    }

    onPasswordChange = (e) => {
        this.setState({signInPassword: e.target.value})
    }

    onSignIn = () => {
        fetch('https://infinite-waters-16481.herokuapp.com/signIn', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
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
        const { onRouteChange } = this.props;
        return (
            <article className='form br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
                <main className='pa4 black-80'>
                    <div className='measure'>
                        <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                        <legend className='f3 white fw6 ph0 mh0'>Sign In</legend>
                        <div className='mt3'>
                            <label className='db fw6 white lh-copy f6' htmlFor='email-address'>Email</label>
                            <input 
                            className='inputField pa2 input-reset ba white bg-transparent hover-white w-100' 
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
                            onClick={this.onSignIn}
                            className='formBtn b ph3 pv2 white input-reset ba b--white bg-transparent pointer f6 dib' 
                            type='submit' 
                            value='Sign in'  
                            style={{textTransform: 'lowercase'}} />
                        </div>
                        <div className='lh-copy mt3'>
                        <p onClick={() => onRouteChange('register')} className='f6 link white dim black db pointer'>Register</p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }   
}

export default SignIn;