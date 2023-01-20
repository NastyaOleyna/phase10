import styled from "@emotion/styled";
import { Button, Box, Typography, Modal } from "@mui/material";
import theme, { Colors } from ".";
import InfoIcon from "../images/info.svg"

export const HeaderContainer = styled(Box)(()=> ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    [theme.breakpoints.down("md")]: {
        justifyContent: "space-around",
        position: "sticky"
    }
}));

export const AddPlayerButtonContainer = styled(Box)(() => ({
    position: "absolute",
    right: 0,
    marginRight: "100px",
    [theme.breakpoints.down("md")]: {
        position: "sticky",
        marginRight: 0
    }
}));

export const AddPlayerButton = styled(Button)(() => ({
    color: Colors.primary,
    backgroundColor: Colors.secondary,
    borderRadius: "15px",
    "&:hover": {
        background: Colors.dark
    }
}));

export const Logo = styled(Typography)(() => ({
    color: "#152146",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
        fontSize: "40px"
    }
}));

export const InfoButton = styled(Box)(({theme}) => ({
    height: "30px",
    width: "30px",
    backgroundSize: "cover",
    backgroundImage: `url(${InfoIcon})`,
    marginTop: "20px",
    [theme.breakpoints.down("md")]: {
        marginTop: 0
    }
}));

export const InfoContainer = styled(Modal)(() => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "400px",
    height: "fit-content",
    backgroundColor: Colors.primary,
    opacity: "90%",
    border: '2px solid gray',
    borderRadius: "15px",
    boxShadow: 100
}));
export const InfoBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
}));

export const InfoBoard = styled(Box)(() => ({
        height: "300px",
        width: "100%",
        margin: "20px 10px 0px 10px",
        padding: "10px 0px",
        background: Colors.dark,
        color: Colors.primary,
        fontSize: "20px",
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        position: "relative"
}));

export const CloseInfoBoardButton = styled(Button)(() => ({
    background: "#7A79B3",
    border: "0.5px solid #9093C4",
    borderRadius: "15px",
    width: "100px",
    backgroundColor: Colors.dark,
    margin: "20px 0px 20px 0px",
    "&:hover": {
        backgroundColor: Colors.secondary
    }
}));