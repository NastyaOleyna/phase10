import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserName, deleteUserCard, finishPhaseForUser, updateScore } from "../../slices/userSlice";
import { finishGame, modalWindowIsOpen, roundWinner, winnerUser } from "../../slices/gameSlice";
import { CardsButtons, CheckMarkContainer, DeleteIcon, EditIconContainer, EditNameContainer, InputEdit, Name, NameContainer, PlayerContainer, ScoreValue } from "../../styles/cards";
import { CloseScoreBoardButton, Losers, ModalWindowBox, ModalWindowContainer, ScoreBoard, WinnerBox } from "../../styles/modal";
import { Box } from "@mui/system";

export function PlayerCard({ user }) {
    const [name, setName] = useState("");
    const [edit, setEdit] = useState(true);
    const [score, setScore] = useState(0);
    const [editScore, setEditScore] = useState(false);

    const winnerId = useSelector((state) => state.game.roundWinner);
    const round = useSelector((state) => state.game.round);
    const modalWindow = useSelector((state) => state.game.modalWindow);
    const userCount = useSelector((state) => state.users.length);
    const winner = useSelector((state) => state.game.winner);
    const users = useSelector((state) => state.users)

    const sortedUsers = users.filter(u => u.id !== winner.id).sort((a, b) => a.score - b.score)

    const dispatch = useDispatch();

    const ifPlayerIsWinner = (winnerId && winnerId !== user.id);


    useEffect(() => {
        setEditScore(false);
    }, [round]);

    const changeName = (id) => {
        dispatch(addUserName({
            name: name,
            id: id
        }));
        setEdit(false);
    };

    const inputName = (event) => {
        const userName = event.target.value;
        return setName(userName)
    };

    const editName = () => {
        setEdit(true);
    };

    const deleteUser = (id) => {
        if (userCount > 2) {
            dispatch(deleteUserCard(id));
        }
    };

    const roundWon = (id) => {
        dispatch(roundWinner(id));
    };


    const changeScoreForRound = (event) => {
        setScore(parseInt(event.target.value))
    };

    const updateScoreInStore = (id) => {
        dispatch(updateScore({
            id: id,
            score: score
        }))
    };

    const finishPhase = (id) => {
        dispatch(finishPhaseForUser(id));
        if (user.phase === 10) {
            dispatch(finishGame())
            dispatch(winnerUser(user))
            console.log(user);

        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateScoreInStore(user.id);
        setEditScore(true)
    };

    const closeModalWindow = () => {
        dispatch(modalWindowIsOpen(false))
    };

    return (
        <>
            <PlayerContainer >
                {edit ?
                    <EditNameContainer>
                        <Button>
                            <DeleteIcon onClick={() => deleteUser(user.id)} />
                        </Button>
                        <InputEdit
                            variant="standard"
                            size="small"
                            onChange={(event) => inputName(event)} value={name}
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                        <Button onClick={() => changeName(user.id)}>
                            <CheckMarkContainer />
                        </Button>
                    </EditNameContainer>
                    :
                    <NameContainer>
                        <Name sx={{ fontSize: 40 }}>
                            {name}
                        </Name>
                        <Button onClick={() => editName()}>
                            <EditIconContainer />
                        </Button>
                    </NameContainer>
                }
                <ScoreValue>
                    {user.score}
                </ScoreValue>

                {ifPlayerIsWinner ?
                    <form onSubmit={handleSubmit}>
                        <InputEdit
                            variant="standard"
                            size="small"
                            disabled={editScore}
                            onChange={(event) => changeScoreForRound(event)}
                            InputProps={{
                                disableUnderline: true,
                            }}
                        >
                        </InputEdit>
                        <Button type="submit" disabled={editScore}>
                            <CheckMarkContainer />
                        </Button>
                    </form>
                    :
                    <CardsButtons
                        onClick={() => roundWon(user.id)}
                        variant={"contained"}
                    >
                        Win
                    </CardsButtons>
                }
                <CardsButtons
                    onClick={() => finishPhase(user.id)}
                    disabled={user.finishedPhase}
                    variant={"contained"}>
                    Finished phase
                </CardsButtons>
                <Typography>Phase {user.phase}</Typography>
            </PlayerContainer>
            <ModalWindowContainer
                open={modalWindow}
                onClose={closeModalWindow}
                hideBackdrop
                disableAutoFocus
            >
                <ModalWindowBox>
                    <WinnerBox>Winner:<br />{winner.name}</WinnerBox>
                    <ScoreBoard>
                        <Losers>Losers: </Losers>
                        {sortedUsers && sortedUsers.map(user =>
                            <Box>{user.name}: {user.score}</Box>
                        )}
                    </ScoreBoard>
                    <CloseScoreBoardButton onClick={closeModalWindow}>Close</CloseScoreBoardButton>
                </ModalWindowBox>
            </ModalWindowContainer>
        </>
    )
}