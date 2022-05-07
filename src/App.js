
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Home/Inventory/Inventory';
import Loading from './Pages/Home/Loading/Loading';
import ManageItems from './Pages/Home/ManageItems/ManageItems';
import NavBar from './Pages/Home/NavBar/NavBar';
import AddItems from './Pages/Home/pages/AddItems/AddItems';
import DeleteItems from './Pages/Home/pages/DeleteItems/DeleteItems';
import MyItems from './Pages/Home/pages/MyItems/MyItems';
import Login from './Pages/LoginSite/Login/Login';
import SignUp from './Pages/LoginSite/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <Routes>
            <Route path='/' element={<Home></Home>}>Home</Route>
            <Route path='/home' element={<Home></Home>}>Home</Route>
            <Route path='/inventory' element={<Inventory></Inventory>}></Route>
            
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            
            <Route path='/manageItems/:productId' element={<ManageItems></ManageItems>}></Route>
            <Route path='/deleteItems' element={<DeleteItems></DeleteItems>}></Route>
            <Route path='/addItems' element={<AddItems></AddItems>}></Route>
            <Route path='/myItems' element={<MyItems></MyItems>}></Route>
            {/* <Route path='/myItems' element={}></Route> */}

            {/* <Route path='/load' element={<Loading></Loading>}>loading</Route> */}
            
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
