import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, FacebookButton } from "../styles/signin.signup.styled";
import { useLoginMutation } from "../features/auth/user-api-query";
import { useAuth } from "../App";
import { errorNotification } from "../helpers/notification";

const Signin = () => {
	const [userData, setUserData] = useState({});
	const [login, { isLoading, isSuccess }] = useLoginMutation();
	const { user } = useAuth();
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await login(userData).unwrap();
		} catch (error) {
			errorNotification(error.data.message, "logIn");
		}
	};
	const handleFacebooklogin = () => {
		//dispatch(facebookSignin());
	};
	const handleData = (e) => {
		setUserData({
			...userData,
			[e.target.id]: e.target.value,
		});
	};
	useEffect(() => {
		if (user || isSuccess) {
			navigate("/");
		}
	}, [user, isSuccess, navigate]);

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<label htmlFor='username'>Email</label>
				<input type='email' name='username' id='username' onChange={handleData} />
				<label htmlFor='password'>Password</label>
				<input type='password' name='password' id='password' onChange={handleData} />
				<button type='submit' disabled={isLoading}>
					Signin
				</button>
				<p>
					You don't have an account <Link to='/signup'>SignUp</Link>
				</p>
			</Form>
			<FacebookButton onClick={handleFacebooklogin}>Sign In with Facebook</FacebookButton>
		</Container>
	);
};

export default Signin;
