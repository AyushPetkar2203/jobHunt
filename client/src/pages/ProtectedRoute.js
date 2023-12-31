import { useAppContext } from "../context/appContext"
import { Navigate } from "react-router-dom"
import Loading from "../Components/Loading.js"

const ProtectedRoute = ({ children }) => {
    const { user, userLoading } = useAppContext()

    if (userLoading) {
        return <Loading center/>;
    }
    if (!user) {
        return <Navigate to="/landing" />
    }
    return (
        children
    )
}
export default ProtectedRoute