import { Link } from "react-router-dom";
const ItemCard = ({ item }) => {
	const { item_id, item_name, img_url, price, category_name } = item;
	return (
		<Link to={`/items/${item_id}`} params={item_id}>
			<div className="item-card">
				<img className="item-img" src={img_url} alt={`image of ${item_name}`} />
				<div className="item-info-text">
					<p>{item_name}</p>
					<p>Price: {price}</p>
					<p>Category: {category_name}</p>
					<button className="add-basket-btn">Add to Basket</button>
				</div>
			</div>
		</Link>
	);
};

export default ItemCard;
