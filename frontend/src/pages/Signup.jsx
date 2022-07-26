import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, FacebookButton } from "../styles/signin.signup.styled";
import { useAuth } from "../App";
import { useSignupMutation } from "../features/auth/user-api-query";

const Signup = () => {
	const [userData, setUserData] = useState({});
	const [signup, { isError, isLoading, isSuccess, error }] = useSignupMutation();
	const { user } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(userData).unwrap();
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
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' id='name' onChange={handleData} />
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' id='email' onChange={handleData} />
				<label htmlFor='password'>Password</label>
				<input type='password' name='password' id='password' onChange={handleData} />
				<label htmlFor='confirmPassword'>Confirm Password</label>
				<input
					type='password'
					name='confirmPassword'
					id='confirmPassword'
					onChange={handleData}
				/>
				<button type='submit' disabled={isLoading}>
					Register
				</button>
				<p>
					Already have an account <Link to='/signin'>Log in</Link>
				</p>
			</Form>
			<FacebookButton onClick={handleFacebooklogin}>Sign In with Facebook</FacebookButton>
			<p>{isError && error.data.message}</p>
		</Container>
	);
};

export default Signup;
