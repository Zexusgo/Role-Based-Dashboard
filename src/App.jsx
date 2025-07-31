import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Home"
import Admin from "./Pages/Admin"
import Viewer from "./Pages/Viewer"
import Editor from "./Pages/Editor"
import ProtectedRouter from "./Components/ProtectedRoute"

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/admin" element = {<ProtectedRouter><Admin/></ProtectedRouter>}/>
      <Route path="/viewer" element = {<ProtectedRouter><Viewer/></ProtectedRouter>}/>
      <Route path="/editor" element = {<ProtectedRouter><Editor/></ProtectedRouter>}/>
    </Routes>
    </Router>
  )
}

export default App