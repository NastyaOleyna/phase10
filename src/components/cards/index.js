import { useSelector } from "react-redux";
import { CardsContainer } from "../../styles/cards"
import { PlayerCard } from "../playerCard";

export default function Cards() {
    const users = useSelector((state) => state.users);

    return (
        <CardsContainer container columns={{xs:2}}>
            {users && users.map((user, index) =>
                <PlayerCard  key={user.id} index={index} user={user} />
            )}
        </CardsContainer>
    )
}