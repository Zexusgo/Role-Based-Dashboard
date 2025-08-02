import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import Usercontext from "./Components/Usercontext";

function Hello() {
  return (
    <div>
      <h1>Welcome User!</h1>
    </div>
  )
}

function MyForum() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("viewer")

  const {setUser} = useContext(Usercontext);
  const navigate = useNavigate()

  const handlesubmit = (event) => {
    event.preventDefault();
    if (email.includes("@gmail.com") && password.length>0) {
      setUser({email, password, role})

              navigate(`/${role}`)
        return setError("")
    } else {
        return setError("Email or Password is incorrect")
    }
  }



  return (
  <form onSubmit={handlesubmit} >
  <div>
  <label htmlFor="email">Email Address: </label>
  <br />
  <input type="email" id="email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
  </div>
  
  <div>
  <label htmlFor="password">Password: </label>
  <br />
  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>
  
    <div>
      <label htmlFor="role">Select Role:</label>
      <select id="role" value={role} onChange={(e) => setRole(e.target.value)}> 
        <option value="admin">Admin</option>
        <option value="editor">Editor</option>
        <option value="viewer">Viewer</option>
      </select>
    </div>

  <div>
  <input type="submit" />
  </div>

  <div>{error && <p>{error}</p>}</div>
    

  </form>
  )
}



function Home() {
    return (
        <div > 
            <Hello />
            <MyForum/>
        </div>
    )
}

export default Home
