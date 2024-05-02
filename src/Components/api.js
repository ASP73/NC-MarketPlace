import axios from "axios";

function getAllItems() {
  return axios.get("https://nc-marketplace-sem-2.onrender.com/api/items");
}

export default getAllItems;
