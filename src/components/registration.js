import React, { useState } from 'react';
import '../App.css'
import logo from '../assets/startupaccelorator.png'
import {auth} from '../fire';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
export default function RegistrationPage() {
    const [flipper, setFlipper] = useState('flip-card');
    const [innerTransform, setInnerTransform] = useState('flip-card-inner');

    // create states to collect user input;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword]= useState('');

    function HandleFlip() {
        if (flipper === "flip-card") {
            setFlipper('flip-card-transform')
            setInnerTransform('flip-card-inner-transform');
        }
        if (flipper === 'flip-card-transform') {
            setFlipper('flip-card');
            setInnerTransform('flip-card-inner');
        }
    }

    //create login function
    function HandleLogin() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            }).then(alert('success'));
    }
    function HandleRegister(){
        createUserWithEmailAndPassword(auth, email, confirmPassword)
        .then(()=>alert("success"))
        .catch((err=> console.log(err.message)))
    }
    return (
        <div className={flipper}>
            <div className={innerTransform}>
                <div className="flip-card-front">
                    <img src={logo} alt="Avatar" className='logo' />
                    <input type={"text"} 
                    placeholder="Email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    className='textInput' /><br />

                    <input type={"text"} 
                    placeholder="Password" 
                    className='textInput'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} /><br />
                    <section className='btnContainer'>
                        <button className='flip' onClick={() => HandleFlip()}>Register</button>
                        <button onClick={()=>HandleLogin()}>Login</button>
                    </section>
                </div>

                <div className="flip-card-back">
                    <img src={logo} alt="Avatar" className='logo-back' />
                    <input type={"text"} 
                    placeholder="Email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    className='textInput' /><br />

                    <input type={"text"} 
                    placeholder="Password" 
                    className='textInput'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} /><br />
                    <input type={"text"} 
                    placeholder="Confirm Password" 
                    className='textInput'
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    /><br />
                    <section className='btnContainer'>
                        <button className='flip' onClick={() => HandleFlip()}>Back</button>
                        <button onClick={()=>HandleRegister()}>Register</button>
                    </section>
                </div>
            </div>
        </div>
    )
}
