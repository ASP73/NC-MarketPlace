import axios from "axios";
import { useState } from "react"
import getAllItems from "./api";

const Display = () => {
    const [allItems, setAllItems] = useState({});
    getAllItems().then(({ data }) => {
      setAllItems(data);  
    })

    return (
        <p>List of all items</p>

    )


}

export default Display