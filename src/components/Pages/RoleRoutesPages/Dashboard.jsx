import { useContext } from 'react'
import AuthContext from '../../context/Auth/AuthContext'

const Dashboard = () => {

    const { user, logOut } = useContext(AuthContext)

    return (
        <>
            <h1>Dashboard</h1>
            <p>Role: {user.role}</p>
            <button onClick={logOut}>Logout</button>
        </>
    )
}

export default Dashboard