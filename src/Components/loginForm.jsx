import { useState } from 'react';
import axios from 'axios';

const LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) =>{
       event.preventDefault();

       const authObj = {'Project-Id':"ea96479b-5e8d-4b3d-9499-6b59d5f11f1b",'User-Name': username,'User-Secret': password };
       try{

        await axios.get('https://api.chatengine.io/chats',{headers: authObj});

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.reload();

       } catch(error){
        setError('Oops incorrecty credentials ....!');

       }
       //username | passowrd - chatengine -login success
       //workout login
       //error
    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Apllication</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required/>
                    <div align="center">
                       <button type="submit" className="button"><span>Start chatting</span></button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>

            </div>

        </div>
    )
}


export default LoginForm;