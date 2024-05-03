export default function NewItemAdder() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="body-container form-container">
			<form>
				<div className="form-row">
					<label htmlFor="">Item Name</label>
					<input type="text" name="item-name-input" id="item-name-input" />
				</div>
				<div className="form-row">
					<label>Description</label>
					<input type="text" name="description-input" id="description-input" />
				</div>

				<div className="form-row">
					<label>Category</label>
					<input type="text" name="category-input" id="category-input" />
				</div>
				<div className="form-row">
					<label>Price</label>
					<input type="text" name="price-input" id="price-input" />
				</div>
				<div className="form-row">
					<label>Image URL</label>
					<input type="text" name="image-url-input" id="image-url-input" />
				</div>
				<button id="add-new-item-btn" onClick={handleSubmit}>
					Add now
				</button>
			</form>
		</div>
	);
}
