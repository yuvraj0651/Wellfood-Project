import { useContext } from 'react'
import AuthContext from '../../context/Auth/AuthContext'
import { Navigate } from 'react-router-dom';

const RoleRoutes = ({ allowedRoles, children }) => {

    const { user } = useContext(AuthContext);
    console.log(user)

    if (!user) return <Navigate to="/login" />

    if (!allowedRoles.includes(user?.role)) {
        return <Navigate to="/dashboard" />
    }

    return (
        <>
            {children}
        </>
    )
}

export default RoleRoutes