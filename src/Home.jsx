import './Home.css'
import { useEffect,useState } from 'react';
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
import Tarafeto from './tarafeto';
import Blog from './Blog';
import { useTranslation } from 'react-i18next';

import closeicon from './Icons/closeicon.svg'
export const Home = () => {
  const { t } = useTranslation();
  const [alertshow, setAlertshow] = useState(true) 
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  return (
    <div>
      {
        alertshow ? (<h1 className='alert-demo' onClick={()=>setAlertshow(false)}>{t('وبسایت نسخه آزمایشی هست')}<img src={closeicon} alt="close icon"/></h1>) : null
      }
      
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
        <Route path="/tarafeto" element={<Tarafeto></Tarafeto>}></Route>
        <Route path="/companie/:companyid/:type" element={<Companie></Companie>}></Route>
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