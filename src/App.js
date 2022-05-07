
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
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
import RequireAuth from './Pages/LoginSite/RequireAuth/RequireAuth'
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <Routes>
            <Route path='/' element={<Home></Home>}>Home</Route>
            <Route path='/home' element={<Home></Home>}>Home</Route>
            <Route path='/inventory' element={<Inventory></Inventory>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>

            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            
            <Route path='/manageItems/:productId' element={
              <RequireAuth>
                <ManageItems></ManageItems>
              </RequireAuth>
            }></Route>
            <Route path='/deleteItems' element={<RequireAuth>
              <DeleteItems></DeleteItems>
            </RequireAuth>}></Route>
            <Route path='/addItems' element={<RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>}></Route>
            <Route path='/myItems' element={<RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>}></Route>
            {/* <Route path='/myItems' element={}></Route> */}

            {/* <Route path='/load' element={<Loading></Loading>}>loading</Route> */}
            
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
