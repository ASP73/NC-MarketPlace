import CreateAccountCard from "./CreateAccount";
import LoginCard from "./Login";

const Create_Login = () => {
	return (
		<>
			<div className="body-container">
				<div className="toggle-div">
					Here is the toggle create and login section
					<button>Create Account</button>
					<button>Login</button>
				</div>
				<CreateAccountCard />
				<LoginCard />
			</div>
		</>
	);
};

export default Create_Login;
