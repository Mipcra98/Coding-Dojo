import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/users" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
