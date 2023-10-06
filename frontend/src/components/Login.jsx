import '../styles/Login.css'

const Login = (close) => {
    return (
        <form className='login-form'>
            <button onClick={close}>&times;</button>
            <label htmlFor='name'>Nombre</label>
            <br></br>
            <input type="text" name="name" placeholder="Nombre" />
            <br></br>
            <label htmlFor="email">Email</label>
            <br></br>
            <input type="email" name="email" placeholder="Email" />
        </form>
    )
}

export default Login