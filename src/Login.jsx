import './Login.css'
import { useState,useRef } from 'react'
import axios from 'axios';
// Icons 
import visibiliy from './Icons/Login_visibilityicon.svg'
import remember from './Icons/Login_remembericon.svg'
import googleicon from './Icons/Login_googleicon.svg'
import singupBack from './Icons/singup_back.svg'
import warrningicon from './Icons/Login_warrning.svg'
const Login = () => {
    const [loginarea, setLoginarea] = useState(true)
    const [showpass1, setShowpass1] = useState(false)
    const [showpass2, setShowpass2] = useState(false)
    const [getcode, setGetcode] = useState(0)
    const [nextpage, setNextpage] = useState(0)
    const [coldowncode, setColdowncode] = useState(0)
    // check the code 
    const checkNumberDigits = (number) => {
        const numberString = number.toString();
    
        // Check if the number starts with "09"
        if (numberString.startsWith('09')) {
            // Proceed with length and digit check
            if (numberString.length === 11 && /^\d+$/.test(numberString)) {
                setGetcode(1);
            } else {
                setGetcode(0); // Reset getcode if the input is not valid
            }
        } else {
            setGetcode(0); // Reset getcode if the number doesn't start with "09"
        }
    };
    // check the code
    // State to hold the input value
    const [inputValue, setInputValue] = useState('');

    // Handler for input change
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        checkNumberDigits(newValue); // Call checkNumberDigits when input value changes
    };
    const checktosendcode = () => {
        if (getcode === 0) {
            setNextpage(0)
        }else{
            // sendsingupcode()
            setNextpage(1)
            startTimer(10, () => {
                console.log('Timer expired!');
                // Perform any action when the timer expires
              });
        }
    };
    // input code 
    const [confirmationCode, setConfirmationCode] = useState('');
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        const newCode = confirmationCode.split('');
        newCode[index] = value;
        setConfirmationCode(newCode.join(''));
        // Move focus to the next input
        if (value !== '' && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && index > 0 && confirmationCode[index] === '') {
            // Move focus to the previous input on backspace
            inputRefs.current[index - 1].focus();
        }
    };
    // input code
    const okbodcode = ()=>{
        if (confirmationCode === "verificationCode") {
            setNextpage(2)
        }else{
            console.log('code is not correct')
        }
    }
    // show password function
    const handleshow = ()=>{
        if (showpass1 === false) {
            setShowpass1(true)
        }else{
            setShowpass1(false)
        }
    }
    // show password function
    // show password function
    const handleshow2 = ()=>{
        if (showpass2 === false) {
            setShowpass2(true)
        }else{
            setShowpass2(false)
        }
    }
    // show password function
    // api send singup code
    const sendsingupcode = async () => {

        try {
            const response = await axios.post('https://api.sobotdadeh.com/v1/auth/code/send', {
                phone: inputValue,
            });

            if (response.data.success) {
                startTimer(180, () => {
                    console.log('Timer expired!');
                    // Perform any action when the timer expires
                  });
            } else {
                console.error('API request failed:', response.data.error);
            }
        } catch (error) {
            console.error('Error sending API request:', error);
        }
    };
    // api send singup code
    // api check user code
    const checksendedcode = async () => {

        try {
            const response = await axios.post('https://api.sobotdadeh.com/v1/auth/code/check', {
                phone:inputValue,
                code:confirmationCode
            });

            if (response.data.success) {
                
            } else {
                console.error('API request failed:', response.data.error);
            }
        } catch (error) {
            console.error('Error sending API request:', error);
        }
    };
    // api send singup code
    // timer 
    const startTimer = (durationInSeconds, callback) => {
        let timer = durationInSeconds;
        const interval = setInterval(() => {
            timer--;
            setColdowncode(timer)
          if (timer <= 0) {
            clearInterval(interval);
            if (callback) {
              callback();
            }
          }
        }, 1000);
      };
    // timer
    // coldown end 
    const coldownend = () => {
        if (coldowncode === 0) {
            // sendsingupcode()
            startTimer(10, () => {
                console.log('Timer expired!');
                // Perform any action when the timer expires
              });
        }
    };
    // coldown end 
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
                        <input type="text" placeholder='شماره موبایل یا آدرس ایمیل وارد کنید'/>
                        <label htmlFor="">رمز عبور</label>
                        <input type={showpass1 === true ? "text" : "password"}/> <img src={visibiliy} alt="visibility icon" width="24px" height="24px"  onClick={handleshow}/>
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
                    
                    nextpage === 0 ? (<div className="Login-items">
                    <div className="Login-items-button">
                   <button type="submit" className='Login-items-button-Login2' onClick={() => setLoginarea(true)}>ورود</button>
                   <button type="submit" className='Login-items-button-Singup2' onClick={() => setLoginarea(false)}>ثبت نام</button>
               </div>
               <div className="Login-items-inputs-singup">
                   <label htmlFor="">شماره موبایل</label>
                   <input type="text" name="" id="" placeholder='+۹۸ | ' value={inputValue} onChange={handleInputChange}/>
               </div>
               <div className={getcode !== 0 ? "Login-items-b-submit2" : "Login-items-b-submit2 not-correct-format-singup"}>
                   <button type="submit" onClick={checktosendcode}>دریافت کد فعالسازی</button>
               </div>
               </div>) : nextpage === 1 ? (<div className='singup-items'>
                    <div className="singup-items-singup-gettingcode">
                        <h2 onClick={()=>setNextpage(0)}>بازگست</h2>
                        <img src={singupBack} alt="Back icon"  onClick={()=>setNextpage(0)}/>
                    </div>
                    <h3>فعالسازی حساب</h3>
                    <div className="singup-items-singup-gettingcode-header">
                        <h2>{inputValue}</h2>
                        <h2>کد ارسال شده را وارد کنید</h2>
                    </div>
                    <div className="singup-items-singup-gettingcode-inputcode">
                    {[...Array(5)].map((_, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            maxLength={1}
                            value={confirmationCode[index] || ''}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))}
                    </div>
                    <button onClick={okbodcode}>تایید</button>
                    <h4 className={coldowncode !== 0 ? 'singup-items-singup-off' : ''} onClick={coldownend}>ارسال مجدد کد {coldowncode}</h4>
               </div>) : (<div className='singup-items2'>
                        <h1>ثبت رمز عبور</h1>
                        <label htmlFor="">رمز عبور</label>
                        <div className="singup-items2-pass">
                            <input type={showpass2 === true ? "text" : "password"} />
                            <img src={visibiliy} alt="" onClick={handleshow2}/>
                        </div>
                        <label htmlFor="">تکرار رمز عبور</label>
                        <div className="singup-items2-pass">
                            <input type={showpass2 === true ? "text" : "password"} />
                            <img src={visibiliy} alt="" onClick={handleshow2}/>
                        </div>
                        <div className="singup-items2-pass2">
                            <h2>حداقل ۸ کاراکتر</h2>
                            <img src={warrningicon} alt="warrning icon" width="24px" height="24px"/>
                        </div>
                        <div className="singup-items2-pass2">
                            <h2>شامل حروف و اعداد</h2>
                            <img src={warrningicon} alt="warrning icon" width="24px" height="24px"/>
                        </div>
                        <button>ایجاد حساب</button>
               </div>)
                )
               }
        </div>
     );
}
 
export default Login;