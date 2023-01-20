import styled from "@emotion/styled";
import { Button} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from ".";

export const NextRoundButtonContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center"
}));

export const NextRoundButton = styled(Button)(() => ({
    width: 200,
    height: 50,
    background: Colors.secondary,
    color: "white",
    borderRadius: "15px",
    "&:hover": {
        backgroundColor: Colors.dark
    }
}));

export const FinishButton = styled(Button)(({ theme }) => ({
    width: 200,
    height: 50,
    background: Colors.secondary,
    color: "white",
    borderRadius: "15px",
    "&:hover": {
        backgroundColor: Colors.dark
    }
}));

