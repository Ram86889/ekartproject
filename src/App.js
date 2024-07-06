import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Contact from "./pages/Contact";

const App = () => {
  return(
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/home"/>
        <Route path="/services"/>
        <Route path="/about" />
        <Route path="/Contact" element={<Contact/>} />

        
      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;
