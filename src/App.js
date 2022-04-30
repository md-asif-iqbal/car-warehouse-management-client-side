
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Loading from './Pages/Home/Loading/Loading';
import NavBar from './Pages/Home/NavBar/NavBar';
import Login from './Pages/LoginSite/Login/Login';
import SignUp from './Pages/LoginSite/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
        <Routes>
            <Route path='/' element={<Home></Home>}>Home</Route>
            <Route path='/home' element={<Home></Home>}>Home</Route>
            <Route path='/login' element={<Login></Login>}>Login</Route>
            <Route path='/signup' element={<SignUp></SignUp>}>Login</Route>
            {/* <Route path='/load' element={<Loading></Loading>}>loading</Route> */}
            
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
