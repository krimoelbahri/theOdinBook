import { signin, reset, facebookSignin } from "../features/auth/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, FacebookButton } from "../styles/signin.signup.styled";

const Signin = () => {
	const [userData, setUserData] = useState({});
	let { user, isLoading, isError, isDone, message } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signin(userData));
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
		if (user || isDone) {
			navigate("/");
		}

		dispatch(reset());
	}, [user, isDone, dispatch, navigate]);

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
			<p>{isError && message}</p>
		</Container>
	);
};

export default Signin;
