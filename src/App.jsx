import "./App.css";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import { Routes, Route } from "react-router-dom";
import ItemsList from "./Components/ItemsList";
import Create_Login from "./Components/Create_Login";
import NewItemAdder from "./Components/NewItemAdder";
import SingleItem from "./Components/SingleItem";
import { useState } from "react";

function App() {
	const [hasLogin, setHasLogin] = useState(false);
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/items" element={<ItemsList />} />
				<Route path="/items/:item_id" element={<SingleItem />} />
				<Route path="/users" element={<Create_Login />} />
				{/* <Route path="/users/:username" element={<MyPage />}/> */}
				<Route path="/items/list_item" element={<NewItemAdder />} />
			</Routes>
		</>
	);
}

export default App;
