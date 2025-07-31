import { useContext } from "react"
import Usercontext from "../Components/Usercontext"
import { useNavigate } from "react-router-dom";


export default function EditorPage() {
     const{ user,setUser }= useContext(Usercontext);
     const navigate = useNavigate();

    const handlelogout = () => {
        setUser(null)
        navigate("/")
    }
     const handleAdminSwitch = () => {
         setUser({ ...user, role: "admin" });

        navigate("/admin")
}
    
    const handleViewerSwitch = () => {
                    setUser({...user, role: "viewer"})

          navigate("/viewer")
    }

    return (
    <div>
    <h1>Welcome, Editor.</h1>
    <h2>{user.email}</h2>
        <button onClick={handlelogout}>Logout</button>
         <button onClick={handleAdminSwitch} >Admin</button>
        <button onClick={handleViewerSwitch}>Viewer</button>

    </div>
    )
}