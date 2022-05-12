import React from 'react';
import { registerUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [usernameValue, setUsernameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = React.useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPasswordValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getData = async () => {
      try {
        await registerUser({
          username: usernameValue,
          email: emailValue,
          password: passwordValue,
          password_confirmation: confirmPasswordValue,
        });
        navigate('/login');
      } catch (err) {
        console.log('Error', err);
      }
    };
    getData();
  };

  return (
    <div className='hero is-fullheight-with-navbar' id='register-background'>
      <body className='register-container'>
        <div>
          <form className='box' onSubmit={handleSubmit}>
            <div className='field'>
              <label htmlFor='username' className='label'>
                Username
              </label>
              <p className='control has-icons-left has-icons-right'>
                <input
                  className='input'
                  type='username'
                  placeholder='Username'
                  value={usernameValue}
                  onChange={handleUsernameChange}
                  id='username'
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-user'></i>
                </span>
                <span className='icon is-small is-right'>
                  <i className='fas fa-check'></i>
                </span>
              </p>
            </div>
            <div className='field'>
              <label htmlFor='email' className='label'>
                Email
              </label>
              <p className='control has-icons-left has-icons-right'>
                <input
                  className='input'
                  type='email'
                  placeholder='Email'
                  value={emailValue}
                  onChange={handleEmailChange}
                  id='email'
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-envelope'></i>
                </span>
                <span className='icon is-small is-right'>
                  <i className='fas fa-check'></i>
                </span>
              </p>
            </div>
            <div className='field'>
              <label htmlFor='password' className='label'>
                Password
              </label>
              <p className='control has-icons-left has-icons-right'>
                <input
                  className='input'
                  type='password'
                  placeholder='Password'
                  value={passwordValue}
                  onChange={handlePasswordChange}
                  id='password'
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-lock'></i>
                </span>
                <span className='icon is-small is-right'>
                  <i className='fas fa-check'></i>
                </span>
              </p>
            </div>
            <div className='field'>
              <label htmlFor='passwordConfirmation' className='label'>
                Password Confirmation
              </label>
              <p className='control has-icons-left has-icons-right'>
                <input
                  className='input'
                  type='password'
                  placeholder='Confirm Password'
                  value={confirmPasswordValue}
                  onChange={handleConfirmPasswordChange}
                  id='password-confirmation'
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-lock'></i>
                </span>
                <span className='icon is-small is-right'>
                  <i className='fas fa-check'></i>
                </span>
              </p>
            </div>

            <button
              className='button is-primary is-fullwidth'
              type='submit'
              value='Register'
            >
              <p>Register</p>
              <span className='icon'>
                <i className='fas fa-user'></i>
              </span>
            </button>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Register;