import axios from "axios";

function getItems(searchParams) {
  const categoryQuery = searchParams.get("category_name");
  if (categoryQuery) {
    return axios.get(
      `https://nc-marketplace-sem-2.onrender.com/api/items?category_name=${categoryQuery}`
    );
  } else {
    return axios.get("https://nc-marketplace-sem-2.onrender.com/api/items");
  }
}

export function getItemById(item_id) {
  return axios.get(
    `https://nc-marketplace-sem-2.onrender.com/api/items/${item_id}`
  );
}

export function postUser(user) {
  return axios.post(`https://nc-marketplace-sem-2.onrender.com/api/users`, {
    username,
    avatar_url,
  });
}

export function getUserByUsername(username) {
  return axios.get(
    `https://nc-marketplace-sem-2.onrender.com/api/users/${username}`
  );
}

export function getBasketByUsername(username) {
  return axios.get(
    `https://nc-marketplace-sem-2.onrender.com/api/users/${username}/basket`
  );
}
export default getItems;
