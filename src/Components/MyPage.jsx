import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "./api";
import Basket from "./Basket";

const MyPage = () => {
const {username} = useParams();
const [currentUser, setCurrentUser] = useState({username: 'Paul-R', avatar_url: 'https://images.prismic.io/northcoders/5ffa1ae0-0e83-47aa-a5f2-d4b6ef24af5a_Paul+R.jpg', kudos: 0, items_in_basket: 2, items_ordered: 1});


 useEffect(() =>{
    getUserByUsername(username)
    .then(({data}) => {
        console.log(data.user)
        setCurrentUser(data.user)
    })
    .catch((err) => {
        
    })
 }, [username])

    return(
        <>
        <div className="personal-info-container">
            <img className="avatar" src={`${currentUser.avatar_url}`} />
            <p>Username: {currentUser.username}</p>

            <p>Kudos: {currentUser.kudos}</p>
        </div>
        <div className="basket-order-container">
            <button>My Orders</button>
            <button>My Basket</button>
        </div>
        <Basket username = {username} />
        </>
    )

}

export default MyPage;