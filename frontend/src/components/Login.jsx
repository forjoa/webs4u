import '../styles/Login.css'

import loginIcon from '../icons/loginIcon.svg'

const Login = (close) => {
    return (
        <form className='login-form'>
            <button onClick={close} className='close'>&times;</button>
            <div className="login-title">
                <img src={loginIcon} className='login-icon' />
                <h2>Login</h2>
            </div>
            <label htmlFor='name'>Nombre</label>
            <input type="text" name="name" placeholder="Nombre" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" />
            <input type='submit' className='submit-login'/>
        </form>
    )
}

export default Login