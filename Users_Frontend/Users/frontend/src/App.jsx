import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import SingUpPage from "./Pages/SingUpPage"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/HomePage" element={<HomePage/>} />
        <Route path="/SignUp" element={<SingUpPage/>} />
      </Routes>
    </div>
  )
}

export default App
