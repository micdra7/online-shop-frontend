import React, { useState } from 'react';
import './LoginRegisterPage.scss';
import { login, register } from '../../../utils/ApiCalls';
import { localStorageJWTKey, localStorageRefreshTokenKey } from '../../../utils/Constants';

const LoginRegisterPage: React.FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [regUsername, setRegUsername] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const performLogin = async () => {
        const response = await login({
            username,
            password
        });

        localStorage.setItem(localStorageJWTKey, response.jwt);
        localStorage.setItem(localStorageRefreshTokenKey, response.refreshToken);
    };

    const performRegistration = async () => {
        const response = await register({
            username: regUsername,
            password: regPassword,
            email,
            name,
            surname
        });

        if (response === 200) {
            console.log('registartion successful');
        }
    };

    return (
        <div className='login-register-page'>
            <section className='login'>
                <p>
                    <label htmlFor='login-username'>Login</label>
                    <input type='text' value={username} onChange={(event) => setUsername(event.target.value)} name='login-username' />
                </p>
                <p>
                    <label htmlFor='login-password'>Password</label>
                    <input type='password' value={password} onChange={(event) => setPassword(event.target.value)} name='login-password' />
                </p>
                <button className='login' onClick={performLogin}>
                    Login
                </button>
            </section>

            <section className='register'>
                <p>
                    <label htmlFor='login-username'>Login</label>
                    <input type='text' value={regUsername} onChange={(event) => setRegUsername(event.target.value)}
                        name='register-username' />
                </p>
                <p>
                    <label htmlFor='login-password'>Password</label>
                    <input type='password' value={regPassword} onChange={(event) => setRegPassword(event.target.value)}
                        name='register-password' />
                </p>
                <p>
                    <label htmlFor='register-email'>Email</label>
                    <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} name='register-email' />
                </p>
                <p>
                    <label htmlFor='register-name'>Name</label>
                    <input type='text' value={name} onChange={(event) => setName(event.target.value)} name='register-name' />
                </p>
                <p>
                    <label htmlFor='register-surname'>Surname</label>
                    <input type='text' value={surname} onChange={(event) => setSurname(event.target.value)} name='register-surname' />
                </p>
                <button className='register' onClick={performRegistration}>
                    Register
                </button>
            </section>
        </div>
    );
};

export default LoginRegisterPage;
