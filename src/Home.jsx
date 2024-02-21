import './Home.css'
import Navbar from './Navbar';
// icons
import mostatil from './Icons/mostatil.svg'
import Searchiconblack from './Icons/Searchiconblack.svg'
import locicon from './Icons/locicon.svg'
import pageicon from './Icons/pageinfoicon.svg'
import searchicon2 from './Icons/searchicon2.svg'
import expandleft from './Icons/expandleft.svg'
import expandright from './Icons/expandright.svg'
// images 
export const Homepage = () => {
    const Card = ((props)=>{
        return(
            <div className='cards'>
                    <div className='cards-info'>

                    </div>
                </div>
        )
    })
    
    
  return (
    <div>
      <Navbar></Navbar>
      <header>
      <div className="overlay">
        <div className='overlaynotrow'>
            <h1>با ما به دنبال فرصت های مشارکتی جدید باشید</h1>
            <h2>فقط <span>۳</span> مرحله تا پیدا کردن شرکت فاصله دارید</h2>      
        </div>
        <div className='overlaym'>
                <h1>ثبات‌داده</h1>
                <h2>پلتفرمی برای همه شرکت‌ها</h2>
        </div>
        <img src={mostatil} alt='nothing'/>
      </div>
      </header>
      <main>
        <div className='Searchbox-main'>
            <h1>جستجوی شرکت ها</h1>
            <div className='Searchbox-items'>
                <img src={Searchiconblack} alt="Search icon" />
                <input type="text" name="Search" placeholder='عنوان شرکت....'/>
                <img src={locicon} alt="Search icon" placeholder="شهر"/>
                <select name="city">
                <option value="تهران">تهران</option>
                <option value="مازندران">مازندران</option>
                <option value="خوزستان">خوزستان</option>
                <option value="کرمان">کرمان</option>
                </select>
                <img src={pageicon} alt="Search icon" />
                <select name="activity">
                <option value="سابقه فعالیت">سابقه فعالیت</option>
                <option value="مازندران">مازندران</option>
                <option value="خوزستان">خوزستان</option>
                <option value="کرمان">کرمان</option>
                </select>
                <img src={searchicon2} alt="Search icon" className='searchicon2'/>
                <button type="submit">جستجو</button>
            </div>
        </div>
        <div className='slider'>
            <h1>برترین شرکت‌ها</h1>
            <div className='card-box'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <div className='arrow-card'>
                    <img src={expandright} alt="right icon" className='arrow-card-right'/>
                    <img src={expandleft} alt="left icon" className='arrow-card-left'/>
                </div>
            </div>
        </div>
      </main>
	</div>
  )
}
export default Homepage;