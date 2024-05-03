import { useState, useEffect } from "react";
import getItems from "./api";
import ItemCard from "./ItemCard";
import Lottie from "lottie-react";
import NoDataFound_Animation from "../assets/NoDataFound_Animation - 1714682242871.json";

const Display = ({ searchParams }) => {
	const [allItems, setAllItems] = useState([]);
	const [isError, setIsError] = useState(false);
	useEffect(() => {
		setIsError(false);
		getItems(searchParams)
			.then(({ data }) => {
				let itemsDisplayed = data.items;
				setAllItems(() => {
					return itemsDisplayed;
				});
			})
			.catch(() => {
				setIsError(true);
			});
	}, [searchParams]);
	if (isError) {
		return (
			<>
				<h2>Sorry, it seems there is no items under this category</h2>
				<div className="animation-container" id="no-data-animation-container">
					<Lottie
						animationData={NoDataFound_Animation}
						loop={true}
						id="no-data-animation"
					/>
				</div>
			</>
		);
	} else {
		return (
			<div className="items-container">
				{allItems.map((item) => {
					return <ItemCard key={item.item_id} item={item} />;
				})}
			</div>
		);
	}
};

export default Display;
