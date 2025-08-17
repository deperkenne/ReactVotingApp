import Welcome from '../Welcome'
import AdminDropdownMenu from '../Admin';
import React, { useState, useEffect } from 'react';
import {
    ContainerWelcome ,Nav,ContenairSign,WelcomeMessage
} from "./sign.styled"

import Resetpassword from '../Resetpassword';



const logout =  () => {

    try{
        localStorage.removeItem("access_token");
      
    }catch(error){
        console.error("Error",error)
        alert("Failed to send message.")

        }
    }


const Sign = () => {
    const [signin, setSignin] = useState(false);
    const [signup, setSignup] = useState(false);
    const [home, setHome] = useState(true);
    const [newEvent, setNewEevent] = useState('');
    const [isSignOut,setSignOut] = useState(false);
    const [userData,setUserData] = useState({isLog:false,role:''})
    const [userInfo,setUserInfo] = useState(null)



    useEffect(() => {
        setUserInfo(userData) 
     }, [userData]);

    const onSignInSuccess = (userInfoFromChild) => {
        console.log("Data received from SIGNIN:", userInfoFromChild);
        setUserData(prevUserData => ({
        ...prevUserData,
        isLog: userInfoFromChild.isAuth, // Assuming userInfoFromChild has 'isAuthenticated'
        role: userInfoFromChild.role,

        }));
    };

    const handleClick = (newEvent) => {
        setNewEevent(newEvent)
        if (newEvent === 'signin') {
        setSignin(true)
        setSignOut(true);
        setSignup(false); // on désactive signup si on choisit signin
        setHome(false)
        }
        if (newEvent === 'signup') {
        setSignup(true);
        setSignin(false); 
        setHome(false)
        }
        if (newEvent === 'home') {
        setHome(true)
        setSignup(false);
        setSignin(false);
        }
        if (newEvent === 'signout') {
        logout()
        setNewEevent('signin')
        setHome(false)
        setSignup(false);
        setSignin(true);
        setSignOut(false)
        }
    };

 
    return (
            <ContainerWelcome>
                <Nav>
                    <div> 
                        <button onClick={() => handleClick('home')}>HOME</button>  
                        <AdminDropdownMenu isLogin={userInfo} />
                    </div>
                    <div>
                        {!isSignOut&&<button onClick={() => handleClick('signin')}>SIGNIN</button>}
                        {isSignOut && <button onClick={() => handleClick('signout')}>SIGNOUT</button>}
                        <button onClick={() => handleClick('signup')}>SIGNUP</button>  
                    </div>
                </Nav> 
                { home &&<WelcomeMessage>welcome to voting page</WelcomeMessage> 
                }
                <ContenairSign>
                    {signin && <Welcome newMessage={newEvent} onSignInSuccess={onSignInSuccess}/>}
                    {signup && <Welcome newMessage={newEvent} onSignInSuccess={onSignInSuccess}/>}
                </ContenairSign>


                
            </ContainerWelcome>
     

        );
};

export default Sign;