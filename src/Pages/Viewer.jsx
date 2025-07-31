import { useContext } from "react"
import Usercontext from "../Components/Usercontext"
import { useNavigate } from "react-router-dom";


export default function ViewerPage () {
    const{ user,setUser }= useContext(Usercontext);
    const navigate = useNavigate();

    const handlelogout = () => {
        setUser(null)
        navigate("/")
        } 
    const handleAdminSwitch = () => {
                    setUser({...user, role: "admin"})


        navigate("/admin")
}
    
    const handleEditorSwitch = () => {
                    setUser({...user, role: "editor"})

          navigate("/editor")
    }

    return (
    <div>
        <div>
    <h1>Welcome, Viewer.</h1>
    <h2>{user.email}</h2>
    <button onClick={handlelogout}>Logout</button>
    
        <button onClick={handleAdminSwitch} >Admin</button>
        <button onClick={handleEditorSwitch}>Editor</button>
    </div>
    </div>
    
    )
} 