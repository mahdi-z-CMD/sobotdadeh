import './Home.css'
import { useEffect,useState } from 'react';
import {Route, Routes, useLocation, Navigate} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';
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
import { Helmet } from 'react-helmet';

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
  // api last blog
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = Cookies.get('api_key');
        const token = Cookies.get('token');
        const imei = Cookies.get('IMEI');

        const response = await axios.post(
          'https://api.sobotdadeh.com/v1/article',
          {},
          {
            headers: {
              'Api-Token': apiKey,
              'Authorization': `Bearer ${token}`,
              'IMEI': imei,
            },
          }
        );

        const lastThreeArticles = response.data.data.slice(-3).reverse();
        setArticles(lastThreeArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchData();
  }, []);

  const defaultArticleId = articles.length > 0 ? articles[0].id : null;
  // api last blog
  return (
    <div>
       <Helmet>
        <title>ثبات داده - صفحه اصلی</title>
        <link rel="icon" href="https://sobotdadeh.com/bestco/logost.png" />
      </Helmet>
      {
        alertshow ? (<h1 className='alert-demo' onClick={()=>setAlertshow(false)}>{t('وبسایت نسخه آزمایشی هست')}<img src={closeicon} alt="close icon"/></h1>) : null
      }
      
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <Routes >
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/درباره-ما" element={<Aboutus></Aboutus>}></Route>
        <Route path="/تخمین-ریسک" element={<Shenakhtrisk></Shenakhtrisk>}></Route>
        <Route path="/قوانین-و-مقررات" element={<Ghavanin></Ghavanin>}></Route>
        <Route path="/سوالات-متداول" element={<Soalatmotadavel></Soalatmotadavel>}></Route>
        <Route path="/تماس-با-ما" element={<Contact></Contact>}></Route>
        <Route path="/کسب-و-کار" element={<Madreseeghtesad></Madreseeghtesad>}></Route>
        <Route path="/استعلام-شرکت" element={<Companies></Companies>}></Route>
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blog" element={<Navigate to={`/blog/${defaultArticleId}`} />} />
        <Route path="/طرف-قرارداد-تو-بشناس" element={<Tarafeto></Tarafeto>}></Route>
        <Route path="/companie/:companyid/:type" element={<Companie></Companie>}></Route>
        <Route
          path="/profile"
          element={isAuthenticated() ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!isAuthenticated() ? <Login /> : <Navigate to="/profile" />}
        />
        <Route path="/استعلام-شرکت-خارجی" element={<Khareji></Khareji>}></Route>
      </Routes>
      <Footer></Footer>
	</div>
  )
}
export default Home;