import { useContext } from "react";
import { userContext } from "../Firebase/LoginContext";
import { Navigate } from "react-router-dom";


const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(userContext)

    if (loading) {
        return <><div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-ring loading-lg" ></span>
        </div></>
    }

    if (user) {
        return children;
    }
    return (
        <Navigate to={"/login"} ></Navigate>
    );
};

export default PrivetRout;