import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home/Home';
import SignUp from './Components/Login/SignUp';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth'; 
import ProductsForOrder from './Components/Product/ProductsForOrder';
import Dashboard from './Components/Dashboard/Dashboard';
import AddProduct from './Components/Dashboard/AddProduct';
import Products from './Components/Dashboard/Products';

function App() {
  return (
    <div className="App">
      <Navbar> </Navbar>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/products" element={<RequireAuth><ProductsForOrder /></RequireAuth>} ></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>} >
        <Route path='/dashboard/addProduct' element={<AddProduct></AddProduct>} ></Route>
        <Route path='/dashboard/products' element={<Products></Products>} ></Route>
            {/* <Route index element={<MyOrders></MyOrders>} ></Route>
            <Route path='/dashboard/myOrders' element={<MyOrders></MyOrders>} ></Route>
            
           
            <Route path='/dashboard/payment/:id' element={<Payment></Payment>} ></Route>
            <Route path='/dashboard/users' element={<RequireAdmin><AllUser></AllUser></RequireAdmin>} ></Route> */}
            <Route></Route> 
          </Route>
        <Route path="/signup" element={<SignUp />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>

    </div>
  );
}

export default App;
