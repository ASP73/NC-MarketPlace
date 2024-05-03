import Filter from "./Filter";
import Display from "./Display";

import { useSearchParams } from "react-router-dom";

const ItemsList = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<div className="body-container">
			<Filter searchParams={searchParams} setSearchParams={setSearchParams} />

			<Display searchParams={searchParams} />
		</div>
	);
};

export default ItemsList;
