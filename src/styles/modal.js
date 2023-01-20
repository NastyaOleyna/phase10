import styled from "@emotion/styled";
import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from ".";

export const ModalWindowContainer = styled(Modal)(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: "fit-content",
    backgroundColor: Colors.primary,
    opacity: "70%",
    border: '2px solid gray',
    borderRadius: "15px",
    boxShadow: 100,
}));

export const ModalWindowBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
}))

export const WinnerBox = styled(Box)(() => ({
    height: "70px",
    width: "100%",
    background: Colors.light,
    color: Colors.primary,
    textAlign: "center",
    fontSize: "30px",
    margin: "20px 10px 0px 10px",

}));

export const ScoreBoard = styled(Box)(() => ({
    height: "200px",
    width: "100%",
    margin: "20px 10px 0px 10px",
    background: Colors.secondary,
    color: Colors.primary,
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative"
}));

export const CloseScoreBoardButton = styled(Button)(({ theme }) => ({
    background: "#7A79B3",
    border: "0.5px solid #9093C4",
    borderRadius: "15px",
    width: "100px",
    backgroundColor: Colors.secondary,
    margin: "20px 0px 20px 0px",
    "&:hover": {
        backgroundColor: Colors.dark
    }
}));

export const Losers = styled(Typography)(() => ({

   position: "absolute",
   top: 0
}))