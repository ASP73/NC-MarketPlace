import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, Link } from "react-router-dom";


const CreateAccountCard = () => {
    const [username, setUsername] = useState('');
    const [avatar_url, setavatar_url] = useState('');
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
      
    const handleAvatarUrl = (event) => {
        setavatar_url(event.target.value);
    }

    const handleAddMe = (e) => {
        e.preventDefault()
        setIsError(false)
        axios.post('https://nc-marketplace-sem-2.onrender.com/api/users', {
          username,
          avatar_url,
        })

        .then(({ data }) => {
           const newUser = data.user   
           const username = newUser.username

           navigate(`/users/${username}`) 
        })
        .catch((error) => {
       setIsError(true)
        });
      }

    return (
        <form method="post">
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
            <div className="input-field">
            <label htmlFor="image-url">Image URL:</label>
            <input
            type = "text"
            id = "image-url"
            value={avatar_url}
            onChange={handleAvatarUrl}
            placeholder="Enter the URL for your profile image"
            />
        
            </div>

            <button className="new-acc-button" onClick={handleAddMe}>Create Account</button>

                </div>
                </form>
            
    )
 
}

export default CreateAccountCard;