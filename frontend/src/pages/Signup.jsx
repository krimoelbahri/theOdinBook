import { signup, reset } from "../features/auth/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [userData, setUserData] = useState({});
	let { user, isLoading, isError, isDone, message } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signup(userData));
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
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' id='name' onChange={handleData} />
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' id='email' onChange={handleData} />
				<label htmlFor='password'>Password</label>
				<input type='password' name='password' id='password' onChange={handleData} />
				<label htmlFor='confirmPassword'>Name</label>
				<input
					type='password'
					name='confirmPassword'
					id='confirmPassword'
					onChange={handleData}
				/>
				<button type='submit' disabled={isLoading}>
					Register
				</button>
			</form>
			<p>{isError && message}</p>
		</div>
	);
};

export default Signup;
