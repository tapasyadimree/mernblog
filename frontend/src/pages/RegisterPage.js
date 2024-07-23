import { useState } from "react"

export default function RegisterPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(event){
        event.preventDefault()
        const response = await fetch('https://yapyapblog.onrender.com/register', {
            method : 'POST',
            body : JSON.stringify({username, password}),
            headers : {'Content-Type':'application/json'},
        })
        if(response.status === 200){
            alert('registration successfull');
        }else{
            alert('registration failed');
        }
    }

    return(
        <form className="register" onSubmit={register}>
            <h1>Glad to have you join us !!</h1>
            <input  text="username" 
                    placeholder="username"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    ></input>
            <input  text="password" 
                    placeholder="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    ></input>
            <button>Register</button>
        </form>
    )
}