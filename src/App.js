import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Auth/Login/Login";
import Register from "./components/pages/Auth/Register/Register";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/pages/Shared/Footer/Footer";
import Header from "./components/pages/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
