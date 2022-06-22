import { Card } from "../components/friends components";
import { Container, FriendsHeader, FriendsCardsContainer } from "../styles/friends";

function Friends() {
	return (
		<Container>
			<FriendsHeader>
				<h1>People you may know</h1>
			</FriendsHeader>
			<FriendsCardsContainer>
				<Card />
				<Card />
				<Card />
				<Card />
			</FriendsCardsContainer>
		</Container>
	);
}

export default Friends;
