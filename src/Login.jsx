import './Login.css'
import { useState } from 'react'
// Icons 
import visibiliy from './Icons/Login_visibilityicon.svg'
import remember from './Icons/Login_remembericon.svg'
import googleicon from './Icons/Login_googleicon.svg'
const Login = () => {
    const [loginarea, setLoginarea] = useState(true)
    return ( 
        <div className="Login-content">
               {
                loginarea ?(
                    <div className="Login-items">
                         <div className="Login-items-button">
                    <button type="submit" className='Login-items-button-Login' onClick={() => setLoginarea(true)}>ورود</button>
                    <button type="submit" className='Login-items-button-Singup' onClick={() => setLoginarea(false)}>ثبت نام</button>
                    </div>
                    <div className="Login-items-inputs">
                        <label htmlFor="">نام کاربری</label>
                        <input type="text" name="" id="" placeholder='شماره موبایل یا آدرس ایمیل وارد کنید'/>
                        <label htmlFor="">رمز عبور</label>
                        <input type="text" name="" id="" /> <img src={visibiliy} alt="visibility icon" width="24px" height="24px"/>
                    </div>
                    <div className="Login-items-b-submit">
                        <button type="submit">ورود به سایت</button>
                    </div>
                    <div className="Login-items-faramoshi">
                        <span>فراموشی رمز عبور</span>
                        <span className='Login-items-faramoshi-remember'><img src={remember} alt="remember icon" />مرا به خاطر بسپار</span>
                    </div>
                    <div className="Login-items-faramoshi">
                        <span className='Login-items-faramoshi-last'>ورود با رمز یک بار مصرف</span>
                    </div>
                    <hr />
                    <div className="Login-items-google">
                        <button type="submit">ادامه با گوگل<img src={googleicon} alt="google icon" /></button>
                    </div>
                    </div>
                )
                : (
                    <div className="Login-items">
                         <div className="Login-items-button">
                        <button type="submit" className='Login-items-button-Login2' onClick={() => setLoginarea(true)}>ورود</button>
                        <button type="submit" className='Login-items-button-Singup2' onClick={() => setLoginarea(false)}>ثبت نام</button>
                    </div>
                    <div className="Login-items-inputs-singup">
                        <label htmlFor="">شماره موبایل</label>
                        <input type="text" name="" id="" placeholder='+۹۸ | '/>
                    </div>
                    <div className="Login-items-b-submit2">
                        <button type="submit">دریافت کد فعالسازی</button>
                    </div>
                    </div>
                )
               }
        </div>
     );
}
 
export default Login;