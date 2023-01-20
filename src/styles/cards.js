import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from ".";
import CheckMarkImage from "../images/checkmark.svg";
import EditImage from "../images/edit.svg";
import DeleteImage from "../images/delete.svg";

export const CardsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: Colors.primary,
    height: "100%",
    margin: "30px 0px",
    [theme.breakpoints.down("lg")]: {
        display: "flex",
        flexWrap: "wrap"
    },

    [theme.breakpoints.down("md")]: {
        display: "flex",
        flexWrap: "wrap"
    },
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexWrap: "wrap"
    }
}));

export const PlayerContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    background: Colors.body_bg,
    border: "1px solid #9093C4",
    borderRadius: "15px",
    height: "500px",
    width: "400px",
    color: Colors.primary,
    margin: "0px 5px",
    [theme.breakpoints.down("lg")]: {
        height: "400px",
        width: "350px"
    },
    [theme.breakpoints.down("md")]: {
        height: "300px",
        width: "250px",
        justifyContent: "center"
    },
    [theme.breakpoints.down("sm")]: {
        height: "185px",
        width: "190px",
        justifyContent: "center",
        marginTop: "5px"
    }
}));

export const NameContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    marginLeft: "60px"
}));

export const DeleteIcon = styled(Box)(({ theme }) => ({
    height: "20px",
    width: "20px",
    backgroundSize: "cover",
    backgroundImage: `url(${DeleteImage})`
}));

export const Name = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    [theme.breakpoints.down("md")]: {
        fontSize: "30px"
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "23px"
    }
}));

export const EditNameContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        size: "small"
    }
}));


export const CardsButtons = styled(Button)(({ theme }) => ({
    background: "#7A79B3",
    border: "0.5px solid #9093C4",
    borderRadius: "15px",
    width: "fit-content",
    color: Colors.primary,
    backgroundColor: Colors.dark,
    "&:hover": {
        background: Colors.secondary
    },
    [theme.breakpoints.down("md")]: {
        height: "40px",
        marginTop: "3px"

    },
    [theme.breakpoints.down("sm")]: {
        height: "20px",
        marginTop: "3px"
    }
}));

export const InputEdit = styled(TextField)(({ theme }) => ({
    background: "rgb(250, 244, 233)",
    borderRadius: "15px",
    padding: "10px 5px",
    height: "25px",
    [theme.breakpoints.down("sm")]: {
        padding: "0px 0px 0px 10px",
        width: "90px"
    }
}));

export const CheckMarkContainer = styled(Box)(({ theme }) => ({
    height: "30px",
    width: "30px",
    backgroundSize: "cover",
    backgroundImage: `url(${CheckMarkImage})`,
    [theme.breakpoints.down("sm")]: {
        width: "20px",
        height: "20px"
    }
}));

export const EditIconContainer = styled(Box)(({ theme }) => ({
    height: "20px",
    width: "20px",
    backgroundSize: "cover",
    backgroundImage: `url(${EditImage})`
}));

export const ScoreValue = styled(Typography)(({ theme }) => ({
    fontSize: "60px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        margin: 0
    }
}));



