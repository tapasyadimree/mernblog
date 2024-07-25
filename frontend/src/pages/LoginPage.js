import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../UserContext"

export default function LoginPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState('')
    const {setUserInfo} = useContext(UserContext)

    async function login(event){
        event.preventDefault()
        const response = await fetch('http://localhost:4000/login', {
            method : 'POST',
            body : JSON.stringify({username, password}),
            headers : {'Content-Type':'application/json'},
            credentials :'include',
        })
        if(response.ok){
            response.json().then(userInfo =>{
                setUserInfo(userInfo);
                setRedirect(true);
            })
        }else{
            alert('wrong credentials')
        }
    }

    if(redirect){
        return <Navigate to={'/'} />
    }
    return(
        <form className="login" onSubmit={login}>
            <h1>Welcome back user !!</h1>
            <input text="username" 
            placeholder="username"
            value={username}
            onChange={event =>setUsername(event.target.value)}
            ></input>
            <input text="password" 
            placeholder="password"
            type="password"
            value={password}
            onChange={event =>setPassword(event.target.value)}
            ></input>
            <button>Login</button>
        </form>
    )
}