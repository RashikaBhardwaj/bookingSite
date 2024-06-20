import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import Slidebar from "./Components/Slidebar"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Signin" element={<Signin/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Card" element={<Card/>}/>
          <Route path="/Navbar" element={<Navbar/>}/>
          <Route path="/Slidebar" element={<Slidebar/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
