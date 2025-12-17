import { useContext, useState } from 'react'
import AuthContext from '../../context/Auth/AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {

    const [email, setEmail] = useState("");
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email);
        navigate("/dashboard");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button>Login</button>
        </form>
    )
}

export default Login