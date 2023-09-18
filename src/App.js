// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/SideBar';
import Topbar from './components/topBar/TopBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NewProduct from './pages/newProduct/NewProduct';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import User from './pages/user/User';
import UserList from './pages/userList/UserList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>

    <Topbar />
    
    <div className="container">
      <Sidebar />
      <Routes>

      {/* <Route path="/login" element={<Login/>}/> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<UserList/>}/>
      <Route path="/user/:userId" element={<User/>}/>
      <Route path="/user/newUser" element={<NewUser/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/product/:productId" element={<Product/>}/>
      <Route path="/newProduct" element={<NewProduct/>}/>

      
      </Routes>
      {/* <UserList/> */}
    </div>
    </Router>
  );
}

export default App;
