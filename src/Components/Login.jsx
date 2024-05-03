import { useEffect, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { getUserByUsername } from "./api";


const LoginCard = () => {
    const [username, setUsername] = useState('');

    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
      
    const handleLogin = (e) => {
        e.preventDefault()
        setIsError(false)
        getUserByUsername(username)
        .then(() =>{
            navigate(`/users/${username}`) 
        }
        )
        .catch((error) => {
            setIsError(true)
            setUsername('');
             });
        }
        if(isError){
            return <div>
                <p>This username does not exist</p>
            </div>
        }
    return (
        <form>
        <div className="create-acc-card">
        <div className="input-field">
            <label htmlFor="username">Username:</label>
            <input
            type = "text"
            id = "username"
            value={username}
            onChange={handleUsername}
            placeholder="Enter your preferred username"
            />
        </div>


            <button className="new-acc-button" onClick={handleLogin}>Login</button>

                </div>
                </form>
            
    )
 
}

export default LoginCard;