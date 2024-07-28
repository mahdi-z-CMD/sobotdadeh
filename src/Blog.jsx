import './Blog.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams , Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Cookies from 'js-cookie';
import { t } from 'i18next'; // Assuming you're using i18next for translations
// Images
import blogimg1 from './image/aboutimg2.webp'
import blogimg2 from './image/aboutimg3.webp'

// Icons 
import leftarrow from './Icons/leftarrowslider.svg'
import leftkey from './Icons/expandleft.svg'
import rightkey from './Icons/expandright.svg'
const Blog = () => {
  const Blogcards = ({ img, title, id }) => (
    <Link to={`/blog/${id}`}>
      <div className="Blog-Cards-box">
        <img src={img} alt="Blog image" />
        <h1>{title}</h1>
        <span>
          <img src={leftarrow} alt="left arrow" />
          نمایش بیشتر
        </span>
      </div>
    </Link>
  );

  const { id } = useParams(); // Assuming you're using React Router for routing
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);
  const [otherArticles, setOtherArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingArticle, setLoadingArticle] = useState(true);
  const [loadingOtherArticles, setLoadingOtherArticles] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const apiKey = Cookies.get('api_key');
        const token = Cookies.get('token');
        const imei = Cookies.get('IMEI');

        const response = await axios.post(
          'https://api.sobotdadeh.com/v1/article/show',
          { id },
          {
            headers: {
              'Api-Token': apiKey,
              'Authorization': `Bearer ${token}`,
              'IMEI': imei,
            },
          }
        );

        setArticle(response.data.data);
        setLoadingArticle(false);
      } catch (error) {
        console.error('Error fetching article:', error);
        setLoadingArticle(false);
      }
    };

    const fetchOtherArticles = async () => {
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

        const filteredArticles = response.data.data.filter(
          (article) => article.id !== parseInt(id)
        );
        setOtherArticles(filteredArticles.reverse()); // Reverse to start from the last item
        setCurrentIndex(0); // Start index to show the last 4 articles
        setLoadingOtherArticles(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoadingOtherArticles(false);
      }
    };

    fetchArticle();
    fetchOtherArticles();
  }, [id]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < otherArticles.length - 4 ? prevIndex + 1 : prevIndex
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  return (
    <>
      <Helmet>
        <title>ثبات داده - مجله ثبات‌داده</title>
      </Helmet>
      <div className='header-about'>
        <h1>وبلاگ</h1>
      </div>
      <div className='Blog-content'>
        <div className="Blog-content-back">
          <div className='Blog-content-main'>
            <div className="Blog-Header">
              <h1 className={loadingArticle ? '' : ''}>
                {article ? article.title : 'در حال جستجو ...'}
              </h1>
              <p>
                {article ? article.excerpt : ''}
              </p>
              {article && <img src={article.image} alt="Blog image" />}
              <div dangerouslySetInnerHTML={{ __html: article ? article.content : '' }}></div>
            </div>
            {!loadingOtherArticles && (
              <>
               <h1 className='BlogCards-header'>مقالات مشابه</h1>
              <div className="Blog-Cards">
                <div className="Blog-Cards-arrows">
                  <img 
                    src={leftarrow} 
                    alt="left key" 
                    className='Blog-Cards-arrows-left' 
                    onClick={handlePrev} 
                    style={{ cursor: 'pointer' }} 
                  />
                  <img 
                    src={rightkey} 
                    alt="right key" 
                    className='Blog-Cards-arrows-right' 
                    onClick={handleNext} 
                    style={{ cursor: 'pointer' }} 
                  />
                </div>
                {otherArticles.slice(currentIndex, currentIndex + 4).map((article) => (
                  <Blogcards key={article.id} img={article.image} title={article.title} id={article.id} />
                ))}
                <div id="load-more-trigger" style={{ height: '1px' }}></div>
              </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;