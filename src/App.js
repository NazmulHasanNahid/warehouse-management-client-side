import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/Auth/Login/Login";
import Register from "./components/pages/Auth/Register/Register";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/pages/Shared/Footer/Footer";
import Header from "./components/pages/Shared/Header/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Products from "./components/pages/Products/Products";
import Inventory from "./components/pages/Inventory/Inventory";
import RequireAuth from "./components/pages/Auth/RequireAuth/RequireAuth";
import AllProducts from "./components/pages/AllProducts/AllProducts";
import AddProduct from "./components/pages/Inventory/AddProduct";
import MyItem from "./components/pages/ManageItem/MyItem";
import ManageItem from "./components/pages/ManageItem/ManageItem";
import Blog from "./components/pages/Blog/Blog";

function App() {
  return (
    <div>
      <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/addItem" element={<AddProduct/>}/>
       <Route path="/manageItem" element={<ManageItem/>}/>
       <Route path="/myItem" element={<MyItem/>}/>
       <Route path="/blog" element={<Blog/>}/>
       <Route path="/inventory/:id" element={<RequireAuth><Inventory/></RequireAuth>}/>
       <Route path="/allProducts" element={<AllProducts/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
     <Footer/>
     <ToastContainer />
  </div>
  );
}

export default App;
