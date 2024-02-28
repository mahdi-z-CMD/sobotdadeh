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
import Madreseeghtesad from './Madreseeghtesad';
import Companies from './Companies';
export const Home = () => {
    
  return (
    <div>
      <Navbar></Navbar>
      <Routes >
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
        <Route path="/ghavanin" element={<Ghavanin></Ghavanin>}></Route>
        <Route path="/soalatmotadavel" element={<Soalatmotadavel></Soalatmotadavel>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/madreseeghtesad" element={<Madreseeghtesad></Madreseeghtesad>}></Route>
        <Route path="/companies" element={<Companies></Companies>}></Route>
      </Routes>
      <Footer></Footer>
	</div>
  )
}
export default Home;