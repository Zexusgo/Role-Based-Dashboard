import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Usercontext from "./Usercontext";

export default function ProtectedRouter({ children}) {
    const {user} = useContext(Usercontext)
    const location = useLocation();

    

    if (!user) {

       return <Navigate to={"/"}/>
}
    const path = location.pathname;

     const allowed = {
        admin: ["/admin", "/editor", "/viewer"], // Admin can access all
        editor: ["/editor", "/viewer", "/admin"],         // Editor can access editor and viewer
        viewer: ["/viewer", "/admin", "/editor"]  // Allow viewer to switch roles
    };
    const isAllowded = allowed[user.role]?.includes(path)


    return isAllowded? children:<Navigate to="/"/>

}