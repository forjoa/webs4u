
const Login = () => {
    return (
        <form>
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