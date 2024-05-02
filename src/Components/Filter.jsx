import { useState } from "react";

const Filter = ({ setFilterBy }) => {
	const [hasElectricBtnClicked, setHasElectricBtnClicked] = useState(false);
	const [hasRelicsBtnClicked, setHasRelicsBtnClicked] = useState(false);
	const [hasHouseBtnClicked, setHasHouseBtnClicked] = useState(false);
	const [hasClothingBtnClicked, setHasClothingBtnClicked] = useState(false);
	const handleElectricClick = (e) => {
		if (hasElectricBtnClicked) {
			e.target.classList.remove("filter-chosen-btn");
			setFilterBy(() => {
				return "";
			});
		} else {
			e.target.classList.add("filter-chosen-btn");
			setFilterBy(() => {
				return e.target.value;
			});
		}
		setHasElectricBtnClicked((currentState) => {
			return !currentState;
		});
		setHasRelicsBtnClicked(false);
		setHasHouseBtnClicked(false);
		setHasClothingBtnClicked(false);
	};

	const handleRelicsClick = (e) => {
		if (hasRelicsBtnClicked) {
			e.target.classList.remove("filter-chosen-btn");
			setFilterBy(() => {
				return "";
			});
		} else {
			e.target.classList.add("filter-chosen-btn");
			setFilterBy(() => {
				return e.target.value;
			});
		}
		setHasRelicsBtnClicked((currentState) => {
			return !currentState;
		});
		setHasElectricBtnClicked(false);
		setHasHouseBtnClicked(false);
		setHasClothingBtnClicked(false);
	};
	const handleHouseholdClick = (e) => {
		if (hasHouseBtnClicked) {
			e.target.classList.remove("filter-chosen-btn");
			setFilterBy(() => {
				return "";
			});
		} else {
			e.target.classList.add("filter-chosen-btn");
			setFilterBy(() => {
				return e.target.value;
			});
		}
		setHasHouseBtnClicked((currentState) => {
			return !currentState;
		});
		setHasRelicsBtnClicked(false);
		setHasElectricBtnClicked(false);

		setHasClothingBtnClicked(false);
	};
	const handleClothingClick = (e) => {
		if (hasClothingBtnClicked) {
			e.target.classList.remove("filter-chosen-btn");
			setFilterBy(() => {
				return "";
			});
		} else {
			e.target.classList.add("filter-chosen-btn");
			setFilterBy(() => {
				return e.target.value;
			});
		}
		setHasClothingBtnClicked((currentState) => {
			return !currentState;
		});
		setHasRelicsBtnClicked(false);
		setHasElectricBtnClicked(false);
		setHasHouseBtnClicked(false);
	};
	return (
		<div className="filter-by-container">
			<p>Filter by Category:</p>
			<button
				className="filter-by-btn"
				value="Electronics"
				onClick={handleElectricClick}
			>
				Electronics
			</button>
			<button
				className="filter-by-btn"
				value="Relics"
				onClick={handleRelicsClick}
			>
				Relics
			</button>
			<button
				className="filter-by-btn"
				value="Household"
				onClick={handleHouseholdClick}
			>
				Household
			</button>
			<button
				className="filter-by-btn"
				value="Clothing"
				onClick={handleClothingClick}
			>
				Clothing
			</button>
		</div>
	);
};

export default Filter;
