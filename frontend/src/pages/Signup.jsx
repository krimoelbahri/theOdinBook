import { signup, reset, facebookSignin } from "../features/auth/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, FacebookButton } from "../styles/signin.signup.styled";

const Signup = () => {
	const [userData, setUserData] = useState({});
	let { user, isLoading, isError, isDone, message } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signup(userData));
	};
	const handleFacebooklogin = () => {
		dispatch(facebookSignin());
	};
	const handleData = (e) => {
		setUserData({
			...userData,
			[e.target.id]: e.target.value,
		});
	};
	useEffect(() => {
		if (user || isDone) {
			navigate("/");
		}

		dispatch(reset());
	}, [user, isDone, dispatch, navigate]);

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
			<p>{isError && message}</p>
		</Container>
	);
};

export default Signup;
