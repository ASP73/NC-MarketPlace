import axios from "axios";
import { useState, useEffect } from "react";
import getAllItems from "./api";
import ItemCard from "./ItemCard";

const Display = ({ filterBy }) => {
	const [allItems, setAllItems] = useState([]);
	useEffect(() => {
		getAllItems().then(({ data }) => {
			let itemsDisplayed = data.items;
			if (filterBy) {
				itemsDisplayed = data.items.filter((item) => {
					return item.category_name === filterBy;
				});
			}
			setAllItems(() => {
				return itemsDisplayed;
			});
		});
	}, [filterBy]);

	return (
		<div className="items-container">
			<p>List of all items</p>
			{allItems.map((item) => {
				return <ItemCard key={item.item_id} item={item} />;
			})}
		</div>
	);
};

export default Display;
