import './Home.css'
import { useEffect } from 'react';
import {Route, Routes, useLocation, Navigate} from 'react-router-dom'
import Navbar from './Navbar';
import Homepage from './Homepage';
import Footer from './Footer';
import Login from './Login';
import Aboutus from './Aboutus';
import Ghavanin from './Ghavanin';
import Soalatmotadavel from './Soalatmotadavel';
import Contact from './Contact';
import Madreseeghtesad from './Madreseeghtesad';
import Companies from './Companies';
import Companie from './Companie';
import Profile from './Profile';
import Khareji from './Khareji';
import isAuthenticated from './PrivateRoute'; // Import the isAuthenticated function
import Shenakhtrisk from './Shenakhtrisk';
import Blog from './Blog';
export const Home = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <div>
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <Routes >
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
        <Route path="/shenakhtrisk" element={<Shenakhtrisk></Shenakhtrisk>}></Route>
        <Route path="/ghavanin" element={<Ghavanin></Ghavanin>}></Route>
        <Route path="/soalatmotadavel" element={<Soalatmotadavel></Soalatmotadavel>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/madreseeghtesad" element={<Madreseeghtesad></Madreseeghtesad>}></Route>
        <Route path="/companies" element={<Companies></Companies>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/companie/:companyid" element={<Companie></Companie>}></Route>
        <Route
          path="/profile"
          element={isAuthenticated() ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!isAuthenticated() ? <Login /> : <Navigate to="/profile" />}
        />
        <Route path="/khareji" element={<Khareji></Khareji>}></Route>
      </Routes>
      <Footer></Footer>
	</div>
  )
}
export default Home;