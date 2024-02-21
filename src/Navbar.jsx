import './Navbar.css'
import Searchicon from './Icons/search-13-512.png'
import logo from './Icons/logo.svg'
import loginicon from './Icons/loginicon.svg'
import locationicon from './Icons/locationicon.svg'
import expandmoreicon from './Icons/expandmoreicon.svg'
export const Navbar = () => {
    return (
      <nav>
        <div className="Navbar-items1">
            <a href="#">تهران<img src={locationicon} alt="Logo" width="24px" height="24px"/></a>
            <a href="#">ورود/ثبت نام<img src={loginicon} alt="Logo" width="24px" height="24px"/></a>
        </div>
        <div className="Navbar-items2">
            <a href="#">درباره ثبات‌داده<img src={expandmoreicon} alt="Logo" width="24px" height="24px"/></a>
            <a href="#">خدمات ما<img src={expandmoreicon} alt="Logo" width="24px" height="24px"/></a>
            <div className='Search-nav'>
                <img src={Searchicon} alt="Search icon" />
                <input type="text" placeholder='جست‌وجو در ثبات‌داده....'/>
            </div>
        </div>
        <img src={logo} alt="Logo" width="61px" height="62px"/>
      </nav>
    )
  }

export default Navbar;