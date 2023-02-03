import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';
import Loginform from './Components/loginForm';
import {useState} from 'react';


import './App.css';

const App = () =>{
 if(!localStorage.getItem('username')) return <Loginform />

return(
    <ChatEngine 
    height="100vh"
    projectID="ea96479b-5e8d-4b3d-9499-6b59d5f11f1b"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
)
}

export default App;