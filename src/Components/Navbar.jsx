import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<nav className="nav-bar">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/items">All Items</Link>
					</li>
					<li>
						<Link to="/users">My Page</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
