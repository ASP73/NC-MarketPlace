import Lottie from "lottie-react";
import Welcome_Animation from "../assets/Welcome_Animation - 1714652153813.json";

const Welcome = () => {
	return (
		<div className="body-container">
			<button className="create-login-btn">Create Account / Login</button>
			<Lottie animationData={Welcome_Animation} loop={true} />
		</div>
	);
};

export default Welcome;
