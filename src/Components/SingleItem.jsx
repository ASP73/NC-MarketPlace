import { useParams } from "react-router-dom";
import { getItemById } from "./api";
import { useState, useEffect } from "react";
export default function SingleItem() {
	const { item_id } = useParams();
	const [singleItem, setSingleItem] = useState({});
	useEffect(() => {
		getItemById(item_id).then(({ data }) => {
			setSingleItem(() => {
				return data.item;
			});
		});
	}, [item_id]);
	const { item_name, img_url, price, category_name } = singleItem;
	return (
		<div className="body-container">
			<img className="item-img" src={img_url} alt={`image of ${item_name}`} />
			<div className="item-info-text">
				<p>{item_name}</p>
				<p>Price: {price}</p>
				<p>Category: {category_name}</p>
				<button className="add-basket-btn">Add to Basket</button>
			</div>
		</div>
	);
}
