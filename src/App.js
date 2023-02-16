import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Home from './Components/Home/Home';
import SignUp from './Components/Login/SignUp';
import Login from './Components/Login/Login';
import RequireAuth from './Components/Login/RequireAuth';
import Dashboard from './Components/Dashboard/Dashboard';
import AddProduct from './Components/Dashboard/AddProduct';
import Products from './Components/Dashboard/Products';
import AllProducts from './Components/Product/AllProducts';
import MyOrders from './Components/Dashboard/MyOrders';
import AllUser from './Components/Dashboard/ControlUser/AllUser';
import Payment from './Components/Payment/Payment';
import RequireAdmin from './Components/Login/RequireAdmin';
import OrderControl from './Components/Dashboard/OrderControl/OrderControl';
import Shipped from './Components/Dashboard/OrderControl/Shipped';
import Delivered from './Components/Dashboard/OrderControl/Delivered';
import HideOrders from './Components/Dashboard/HideOrders/HideOrders';
import Answer from './Components/Answer/Answer';

function App() {
  return (
    <div className="App">
      <Navbar> </Navbar>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/answers" element={<Answer />} ></Route> 
        <Route path="/products" element={ <RequireAuth><AllProducts /></RequireAuth> } ></Route>

        <Route path='/dashboard' element={<Dashboard></Dashboard>} >
          <Route index element={<MyOrders></MyOrders>} ></Route>
          <Route path='/dashboard/myOrders' element={<MyOrders></MyOrders>} ></Route>
          <Route path='/dashboard/myOrders/hidedOrders' element={<HideOrders></HideOrders>} ></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>} ></Route>

          <Route path='/dashboard/addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} ></Route>
          <Route path='/dashboard/products' element={<RequireAdmin><Products></Products></RequireAdmin>} ></Route> 
          <Route path='/dashboard/users' element={ <RequireAdmin>< AllUser/></RequireAdmin> } ></Route>
          <Route path='/dashboard/orderControl' element={ <RequireAdmin>< OrderControl/></RequireAdmin> } ></Route>

          <Route path='/dashboard/orderControl/shipped' element={ <RequireAdmin>< Shipped/></RequireAdmin> } ></Route>
          <Route path='/dashboard/orderControl/delivered' element={ <RequireAdmin>< Delivered/></RequireAdmin> } ></Route>
          
          <Route></Route>
        </Route>

        <Route path="/signup" element={<SignUp />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>

    </div>
  );
}

export default App;
