import Lottie from "lottie-react";
import ap from '../lotties/Animation - 1714335733825.json'
import '../styles/Login.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASENAME } from "../constants";
export default function LoginCard (){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/')
    }
    return(
        <div className="login-card">
            <div className="title">
            <div className="lottie">
            <Lottie loop={true} animationData={ap} style={{height: 100}}/>
            </div>
            
            <h2>YOUR FAVOURITE <br></br><span className='airline'>AIRLINES</span></h2>
            
            </div>
            <div className='login-form'>
            <div className='wb'>Write together, anywhere, anytime<br/><span className='wb-t'> Collaborate seamlessly with our text editor!</span></div>
            <form>
            <label>Email:</label>
            <input 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input 
                name="password" 
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <a className='forgot'>forgot password?</a>
            <button className='login-btn' onClick={handleLogin}>Login</button>
            <Link className='forgot center' to='/register'>CREATE ACCOUNT!</Link>
            </form>
            </div>
        </div>
    )
}