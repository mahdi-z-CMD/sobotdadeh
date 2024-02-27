import './Home.css'
import {Route, Routes} from 'react-router-dom'
import Navbar from './Navbar';
import Homepage from './Homepage';
import Footer from './Footer';
import Login from './Login';
import Aboutus from './Aboutus';
import Ghavanin from './Ghavanin';
import Soalatmotadavel from './Soalatmotadavel';
import Contact from './Contact';
export const Home = () => {
    
  return (
    <div>
      <Navbar></Navbar>
      <Routes >
        <Route path="sobotdadeh" element={<Homepage></Homepage>}></Route>
        <Route path="sobotdadeh/login" element={<Login></Login>}></Route>
        <Route path="sobotdadeh/aboutus" element={<Aboutus></Aboutus>}></Route>
        <Route path="sobotdadeh/ghavanin" element={<Ghavanin></Ghavanin>}></Route>
        <Route path="sobotdadeh/soalatmotadavel" element={<Soalatmotadavel></Soalatmotadavel>}></Route>
        <Route path="sobotdadeh/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
	</div>
  )
}
export default Home;