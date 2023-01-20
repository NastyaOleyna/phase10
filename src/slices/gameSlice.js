const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    round: 1, 
    roundWinner: null, 
    finishGame : false, 
    modalWindow: false, 
    winner: {}, 
    info: false
};

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: { 
        roundWinner(state, action) {
            return {...state, roundWinner: action.payload}
        },
        nextRound(state) {
            return {...state, round: state.round + 1}
        },
        finishGame(state) {
            return {...state, finishGame: true}
        },
        modalWindowIsOpen(state, {payload}) {
            return {...state, modalWindow: payload}
        },
        winnerUser(state, {payload}) {
            return {...state, winner: payload}
        },
        infoBoard(state, {payload}) {
            return {...state, info: payload}
        }
    }
});

export default gameSlice.reducer;
export const { infoBoard, modalWindowIsOpen, roundWinner, nextRound, finishGame, winnerUser } = gameSlice.actions