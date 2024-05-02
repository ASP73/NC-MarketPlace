import Filter from "./Filter";
import Display from "./Display";
import { useState } from "react";

const ItemsList = () => {
	const [filterBy, setFilterBy] = useState("");
	return (
		<div className="body-container">
			<Filter setFilterBy={setFilterBy} />
			<button>List new item</button>
			<Display filterBy={filterBy} />
		</div>
	);
};

export default ItemsList;
