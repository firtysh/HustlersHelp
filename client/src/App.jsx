import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentor">
            <Route path="signin" element={<SignIn role={'mentor'} />} />
            <Route path="signup" element={<SignUp role={'mentor'} />} />
          </Route>
          <Route path="/student">
            <Route path="signin" element={<SignIn role={'student'} />} />
            <Route path="signup" element={<SignUp role={'student'} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
