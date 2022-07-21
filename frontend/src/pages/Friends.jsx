import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../components/friends components";
import { Container, FriendsHeader, FriendsCardsContainer } from "../styles/friends";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/auth/userSlice";

function Friends() {
	const [users, setUsers] = useState([]);
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchUsers() {
			try {
				let users = await dispatch(getUsers()).unwrap();
				setUsers(users);
			} catch (error) {
				console.log(error);
			}
		}
		fetchUsers();
	}, [dispatch]);

	return (
		<Container>
			<FriendsHeader>
				<h1>People you may know</h1>
			</FriendsHeader>
			<FriendsCardsContainer>
				{users
					.filter(({ _id }) => _id !== user._id)
					.filter(({ _id }) => user.friends.every((friend) => friend._id !== _id))
					.filter(({ _id }) => user.friendRequests.every((friend) => friend._id !== _id))
					.map((cardUser) => (
						<Card
							key={`card${cardUser._id}`}
							currentuser={user}
							user={cardUser}
							setUsers={setUsers}
						/>
					))}
			</FriendsCardsContainer>
		</Container>
	);
}

export default Friends;
