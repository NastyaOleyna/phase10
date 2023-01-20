import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { infoBoard } from "../../slices/gameSlice";
import { CloseInfoBoardButton, InfoBoard, InfoBox, InfoContainer } from "../../styles/header";

export default function InfoPhaseBoard() {
    const infoIsOpen = useSelector((state) => state.game.info)
    const dispatch = useDispatch();

    const phases = [
        "Phase 1: 2 sets of 3 ",
        "Phase 2: set of 3 + run of 4",
        "Phase 3: set of 4 + run of 4 ",
        "Phase 4: run of 7 ",
        "Phase 5: run of 8",
        "Phase 6: run of 9 ",
        "Phase 7: 2 sets of 4",
        "Phase 8: 7 card of one color ",
        "Phase 9: 1 set of 5 + 1 set of 2",
        "Phase 10: 1 set of 5 + 1 set of 3"
    ];

    const closeInfoBoard = () => {
        dispatch(infoBoard(false))
    };

    return (
        <InfoContainer
            open={infoIsOpen}
            onClose={closeInfoBoard}
            hideBackdrop
            disableAutoFocus
        >
            <InfoBox>
                <InfoBoard>
                    {phases.map((item) => <> {item} <Divider light={true} sx={{marginTop: "5px"}} flexItem/> </>)}
                </InfoBoard>
                <CloseInfoBoardButton onClick={closeInfoBoard}>
                    Close
                </CloseInfoBoardButton>
            </InfoBox>
        </InfoContainer>
    )
}