import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Filter = ({ searchParams, setSearchParams }) => {
	const [btnSwitch, setBtnSwitch] = useState([1, 0, 0, 0, 0]);
	const unHighlight = "filter-by-btn";
	const highlight = "filter-by-btn filter-chosen-btn";

	const handleCategoryFilter = (e) => {
		let newBtnSwitch = [0, 0, 0, 0, 0];
		newBtnSwitch[e.target.id] = 1;
		setBtnSwitch(newBtnSwitch);
		const newParams = new URLSearchParams(searchParams);
		newParams.set("category_name", e.target.value);
		setSearchParams(newParams);
	};

	return (
		<div className="row">
			<div className="filter-by-container">
				<button className="category-name-btn">Category: </button>
				<Link to="/items">
					<button
						id={0}
						className={btnSwitch[0] === 1 ? highlight : unHighlight}
						value="all"
						onClick={handleCategoryFilter}
					>
						All items
					</button>
				</Link>
				<Link to="/items?category_name=Electronics">
					<button
						id={1}
						className={btnSwitch[1] === 1 ? highlight : unHighlight}
						value="Electronics"
						onClick={handleCategoryFilter}
					>
						Electronics
					</button>
				</Link>
				<Link to="/items?category_name=Relics">
					<button
						id={2}
						className={btnSwitch[2] === 1 ? highlight : unHighlight}
						value="Relics"
						onClick={handleCategoryFilter}
					>
						Relics
					</button>
				</Link>
				<Link to="/items?category_name=Household">
					<button
						id={3}
						className={btnSwitch[3] === 1 ? highlight : unHighlight}
						value="Household"
						onClick={handleCategoryFilter}
					>
						Household
					</button>
				</Link>
				<Link to="/items?category_name=Clothing">
					<button
						id={4}
						className={btnSwitch[4] === 1 ? highlight : unHighlight}
						value="Clothing"
						onClick={handleCategoryFilter}
					>
						Clothing
					</button>
				</Link>
			</div>
			<Link to="/items/list_item">
				<button className="list-new-item-btn">List new item</button>
			</Link>
		</div>
	);
};

export default Filter;
