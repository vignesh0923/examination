import Examination from "../src/Examination/Examination"
import Login from "./Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Examination" element={<Examination />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App