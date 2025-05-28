import '../styles/Register.css'
import Lottie from "lottie-react";
import ap from '../lotties/Animation - 1714335733825.json'
import '../styles/Login.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASENAME } from '../constants';
export default function RegisterCard (){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate('/otp')
    }
    return(
        <div className="register-card">
             <div className="title">
            <div className="lottie">
            <Lottie loop={true} animationData={ap} style={{height: 100}}/>
            </div>
            <h2>YOUR FAVOURITE <br></br><span className='airline'>TEXTEDITOR</span></h2>
            </div>
            <div className='register-form'>
            <div className='h'>Hello,<br/><span className='ca'>Create Account</span></div>
          
            <form>
            <div className="scrollable-container" >
            <label>Username:</label>
            <input name="Username" className='reg-inputs'/>
            <label>Email:</label>
            <input name="email" className='reg-inputs'/>
            <label>Password:</label>
            <input name="password" type='password' className='reg-inputs'/>
            <label>Re-enter Password:</label>
            <input name="Re Password" type='password' className='reg-inputs'/>
            <label>Phone number:</label>
            <input name="phone number" className='reg-inputs'/>
           <div className='center'>
            <button className='login-btn' onClick={handleRegister}>Create Account</button>
            </div>
           <div className='sign'>
                <a className='have-acc'>I have an Account</a>
                <Link className='sign-in' to='/login'>SIGN IN</Link>
            </div>
            </div>
            </form>
           
            </div>
        </div>
    )
    
}