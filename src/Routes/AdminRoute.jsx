import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    let location = useLocation();

    if(loading || isAdminLoading){
        return <span className="loading loading-spinner loading-lg text-info"></span>
    }

    if (user && isAdmin) {
        return children
    }   

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;

