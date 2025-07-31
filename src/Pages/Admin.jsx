import { useContext } from "react"
import Usercontext from "../Components/Usercontext"
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
     const{ user,setUser }= useContext(Usercontext);
     const navigate = useNavigate();

    const handlelogout = () => {
        setUser(null)
        navigate("/")
    }
   
     const handleEditorSwitch = () => {
                    setUser({...user, role: "editor"})


        navigate("/editor")
 }
    
    const handleViewerSwitch = () => {
                    setUser({...user, role: "viewer"})

          navigate("/viewer")

    }

    return (
    <div>
    <h1>Welcome, Admin.</h1>
    <h2>{user.email}</h2>
    <button onClick={handlelogout}>Logout</button>
     <button onClick={handleEditorSwitch} >Editor</button>
        <button onClick={handleViewerSwitch}>Viewer</button>

    </div>
    )
}