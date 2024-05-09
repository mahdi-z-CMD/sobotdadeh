import './Login.css'
import { useState,useRef } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';
import { setCookie } from './AuthContext'; // Adjust the path as needed
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
    const [codenotcorrect, setCodenotcorrect] = useState()
    const [usernamelogin, setUsernamelogin] = useState()
    const [passwordlogin, setPasswordlogin] = useState()
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
            sendsingupcode()
            setNextpage(1)
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
    const generateRandomString = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$#!?';
        const charactersLength = characters.length;
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    const checksingupcode = async () => {
        try {
            // Generate a random string for the IMEI header
            const randomIMEI = generateRandomString(15); // Implement this function to generate a random string
            // Set the custom headers including the IMEI header
            const headers = {
                'IMEI': randomIMEI
            };
    
            // Send the POST request with custom headers
            const response = await axios.post('https://api.sobotdadeh.com/v1/auth/code/check', {
                phone: inputValue,
                code: confirmationCode
            }, {
                headers: headers
            });
    
            console.log('API response:', response);
    
            if (response.data.status === true) {
                // Save API key, token, and IMEI into cookies
                Cookies.set('api_key', response.data.data.api_key, { expires: 7 });
                Cookies.set('token', response.data.data.token, { expires: 7 });
                Cookies.set('IMEI', randomIMEI, { expires: 7 });
                Cookies.set('user', 'true', { expires: 7 });
                const encryptedValue = CryptoJS.AES.encrypt(inputValue, 'f2af0b0c9a27d7c893fa5d0ee2887c64').toString();
                Cookies.set('pn', encryptedValue, { expires: 7 });
                setCodenotcorrect();
                setNextpage(2);
            } else {
                setCodenotcorrect(false);
            }
        } catch (error) {
            console.error('Error sending API request:', error);
            return false;
        }
    };
    
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
    
            console.log('API response:', response);
    
            if (response.data.status) {
                // Check if status is true
                startTimer(180, () => {
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
            sendsingupcode()
            startTimer(180, () => {
                // Perform any action when the timer expires
              });
        }
    };
    // coldown end 
    // check if password is same
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const validatePassword = () => {
       // Check if passwords match
        if (password !== confirmPassword) {
            setErrorMessage('رمز عبور‌ها همخوانی ندارند');
            return false;
        }

        // Check if password length is at least 8 characters
        if (password.length < 8) {
            setErrorMessage('رمز عبور باید حداقل 8 کاراکتر داشته باشد');
            return false;
        }

        // Check if password contains at least one digit
        if (!/\d/.test(password)) {
            setErrorMessage('رمز عبور باید حداقل شامل یک عدد باشد');
            return false;
        }

        // Check if password contains at least one letter
        if (!/[a-zA-Z]/.test(password)) {
            setErrorMessage('رمز عبور باید حداقل شامل یک حرف باشد');
            return false;
        }

        // If all checks pass, return true
        setErrorMessage('');
        setuers()
        return true;

    };
    // check if password is same
    const setuers = async () => {
        try {
            const apiKey = Cookies.get('api_key');
            const token = Cookies.get('token');
            const imei = Cookies.get('IMEI');
    
            const response = await axios.post(
                'https://api.sobotdadeh.com/v1/auth/register',
                {
                    phone: inputValue,
                    password: password,
                    password_confirmation: password
                },
                {
                    headers: {
                        'Api-Token': apiKey,
                        'Authorization': `Bearer ${token}`,
                        'IMEI': imei
                    }
                }
            );
    
            if (response.data.status === true) {
                setErrorMessage('');
                window.location.href = '/sobotdadeh/#/';
                window.location.reload();
            }
        }  catch (error) {
            if (error.response && error.response.status === 422 && error.response.data && error.response.data.data && error.response.data.data.phone) {
                setErrorMessage('');
                window.location.href = '/sobotdadeh/#/';
                window.location.reload();
                // Handle the phone already taken error here
            } else {
                console.error('Error sending API request:', error);
                setErrorMessage('! خطا در ثبت نام');
                // Handle other errors
            }
            return false;
        }
    };
    // LOGIN API 
    const [loginloading, setLoginloading] = useState(false)
    const loginUser = async () => {
        try {
            setLoginloading(true)
            // Generate a random string for the IMEI header
            const randomIMEI = generateRandomString(15); // Implement this function to generate a random string
    
            // Set the custom headers including the IMEI header
            const headers = {
                'IMEI': randomIMEI
            };
    
            // Make the API request to login
            const response = await axios.post(
                'https://api.sobotdadeh.com/v1/auth/login',
                {
                    phone: usernamelogin,
                    password: passwordlogin
                },
                { headers: headers } // Pass the headers to the request
            );
    
            // Check if the login was successful
            if (response.status === 200) {
                // Store the received API key, token, IMEI, and user information in cookies
                Cookies.set('api_key', response.data.data.api_key, { expires: 7 });
                Cookies.set('token', response.data.data.token, { expires: 7 });
                Cookies.set('IMEI', randomIMEI, { expires: 7 });
                Cookies.set('user', 'true', { expires: 7 });
    
                // Encrypt and store the username in cookies
                const encryptedValue = CryptoJS.AES.encrypt(usernamelogin, 'f2af0b0c9a27d7c893fa5d0ee2887c64').toString();
                Cookies.set('pn', encryptedValue, { expires: 7 });
    
                // Return null if no error occurred
                setErrorMessage('');
                window.location.href = '/sobotdadeh/#/';
                window.location.reload();
            } else {
                // Return the error message if the login was not successful
                setErrorMessage('خطا در ورود به سایت')
                setLoginloading(false)
            }
        } catch (error) {
            // Handle any errors that occur during the API request
            setLoginloading(false)
            setErrorMessage('خطا در ورود به سایت')
        }
    };
    
    // LOGIN API 
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
                    <input
                        type="text"
                        placeholder="شماره موبایل یا آدرس ایمیل وارد کنید"
                        value={usernamelogin}
                        onChange={(e) => setUsernamelogin(e.target.value)}
                    />
                    <label htmlFor="">رمز عبور</label>
                    <input
                        type={showpass1 ? "text" : "password"}
                        value={passwordlogin}
                        onChange={(e) => setPasswordlogin(e.target.value)}
                    />
                    <img
                        src={visibiliy} // Add the visibility icon source
                        alt="visibility icon"
                        width="24px"
                        height="24px"
                        onClick={handleshow}
                    />
                </div>
                <span>{errorMessage}</span>
                <div className="Login-items-b-submit">
                    <button type="submit" onClick={loginloading ? null : loginUser}>{loginloading ? '... ورود به سایت' : 'ورود به سایت'}</button>
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
                    {
                        codenotcorrect === false ? (<span>کد وارد شده صحیح نیست</span>) : null
                    }
                    <button onClick={checksingupcode}>تایید</button>
                    <h4 className={coldowncode !== 0 ? 'singup-items-singup-off' : ''} onClick={coldownend}>ارسال مجدد کد {coldowncode}</h4>
               </div>) : (<div className='singup-items2'>
                        <h1>ثبت رمز عبور</h1>
                        <label htmlFor="">رمز عبور</label>
                        <div className="singup-items2-pass">
                            <input
                                type={showpass2 ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <img src={visibiliy} alt="" onClick={handleshow2}/>
                        </div>
                        <label htmlFor="">تکرار رمز عبور</label>
                        <div className="singup-items2-pass">
                            <input
                                type={showpass2 ? "text" : "password"}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                            />
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
                        <span>{errorMessage}</span>
                        <button onClick={validatePassword}>ایجاد حساب</button>
               </div>)
                )
               }
        </div>
     );
}
 
export default Login;