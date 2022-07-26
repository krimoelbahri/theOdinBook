import { useState } from "react";
import { Card, RequestCard } from "../components/friends components";
import { Container, FriendsHeader, FriendsCardsContainer } from "../styles/friends";
import { useGetUsersQuery } from "../features/auth/user-api-query";
import { useAuth } from "../App";

function Friends() {
	const { user } = useAuth();
	const { data = [] } = useGetUsersQuery();

	const [page, setPage] = useState("suggestions");
	const [users, setUsers] = useState(data);

	return (
		<Container>
			<FriendsHeader>
				<button
					onClick={() =>
						setPage((page) =>
							page === "suggestions" ? "Friend Requests" : "suggestions",
						)
					}
				>
					{page === "suggestions" ? "Friend Requests" : "Suggestions"}
				</button>
			</FriendsHeader>
			{page === "suggestions" && (
				<>
					<FriendsHeader>
						<h1>People you may know</h1>
					</FriendsHeader>
					<FriendsCardsContainer>
						{users
							.filter(({ _id }) => _id !== user._id)
							.filter(({ _id }) => user.friends.every((friend) => friend._id !== _id))
							.filter(({ _id }) =>
								user.friendRequests.every((friend) => friend._id !== _id),
							)
							.map((cardUser) => (
								<Card
									key={`card${cardUser._id}`}
									currentuser={user}
									user={cardUser}
									setUsers={setUsers}
								/>
							))}
					</FriendsCardsContainer>
				</>
			)}
			{page !== "suggestions" && (
				<>
					<FriendsCardsContainer>
						{user.friendRequests.map((cardUser) => (
							<RequestCard
								key={`card${cardUser._id}`}
								currentuser={user}
								user={cardUser}
							/>
						))}
					</FriendsCardsContainer>
				</>
			)}
		</Container>
	);
}

export default Friends;
