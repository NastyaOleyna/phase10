import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { infoBoard } from "../../slices/gameSlice";
import { addUser } from "../../slices/userSlice";
import { AddPlayerButton, AddPlayerButtonContainer, HeaderContainer, InfoButton,  Logo } from "../../styles/header";
import InfoPhaseBoard from "../infoPhaseBoard.js/index.js";

export default function Header() {
    const dispatch = useDispatch();
    const [disabledButton, setDisabledButton] = useState(false)
    const userCount = useSelector(state => state.users.length)
    const infoIsOpen = useSelector((state) => state.game.info)

    useEffect(() => {
        if (userCount === 6) {
            setDisabledButton(true)
        } else {
            setDisabledButton(false)
        }
    }, [userCount]);

    const addPlayer = async () => {
        dispatch(addUser())

    };
    const openInfoBoard = () => {
        dispatch(infoBoard(true))
    };

    return (
        <>
            <HeaderContainer>
                <Logo variant="h1">
                    Phase10
                    <Button>
                        <InfoButton onClick={openInfoBoard} />
                    </Button>
                </Logo>
                <AddPlayerButtonContainer>
                    <AddPlayerButton
                        disabled={disabledButton}
                        variant="contained"
                        onClick={addPlayer}>
                        Add player +
                    </AddPlayerButton>
                </AddPlayerButtonContainer>
            </HeaderContainer>
            {infoIsOpen &&
                <InfoPhaseBoard />
            }
        </>
    )
}