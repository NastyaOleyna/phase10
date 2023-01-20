import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextRound, modalWindowIsOpen, roundWinner } from "../../slices/gameSlice";
import { updatePhaseForNewRound } from "../../slices/userSlice";
import { FinishButton, NextRoundButton, NextRoundButtonContainer } from "../../styles/footer";

export default function Footer() {
    const dispatch = useDispatch();
    const finishGame = useSelector((state) => state.game.finishGame);
    const [finishGameButton, setFinishGameButton] = useState(false);

    useEffect(() => {
        if (finishGame === true) {
            setFinishGameButton(true)
        }
    }, [finishGame]);

    const startNextRound = () => {
        dispatch(nextRound());
        dispatch(updatePhaseForNewRound())
        dispatch(roundWinner(null))
    };

    const openModalWindow = () => {
        dispatch(modalWindowIsOpen(true))
    };

    return (
        <NextRoundButtonContainer>
            {!finishGameButton ?
                <NextRoundButton
                    variant="contained"
                    onClick={startNextRound}>
                    Next round
                </NextRoundButton>
                :
                <FinishButton
                    variant="contained"
                    onClick={openModalWindow}
                >
                    Finish game
                </FinishButton>
            }
        </NextRoundButtonContainer>
    )
}