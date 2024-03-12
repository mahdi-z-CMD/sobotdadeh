import {Route, Routes, Navigate} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Login from './Login';
import Aboutus from './Aboutus';
function App() {
 
  return (
    <div className="App">
      <Navbar></Navbar>
    <div className="home">
      <Routes >
        <Route path="sobotdadeh" element={<Home></Home>}></Route>
        <Route path="sobotdadeh/login" element={<Login></Login>}></Route>
        <Route path="sobotdadeh/Aboutus" element={<Aboutus></Aboutus>}></Route>
      </Routes>
      </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
