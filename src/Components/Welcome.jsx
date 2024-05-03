import Lottie from "lottie-react";
import Welcome_Animation from "../assets/Welcome_Animation - 1714652153813.json";
import { Link } from "react-router-dom";
const Welcome = () => {
	return (
		<div className="body-container">
			<Link to="/users">
				<button className="create-login-btn">Create Account / Login</button>
			</Link>
			<Lottie animationData={Welcome_Animation} loop={true} />
		</div>
	);
};

export default Welcome;
