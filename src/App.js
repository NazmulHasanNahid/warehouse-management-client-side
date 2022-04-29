import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
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
       <Route path="*" element={<NotFound/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
