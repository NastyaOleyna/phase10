const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
    {
        id: 1,
        name: "",
        score: 0,
        phase: 1,
        finishedPhase: false,
    },
    {
        id: 2,
        name: "",
        score: 0,
        phase: 1,
        finishedPhase: false,
    }
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser(state) {
            const newUser = { id: state.length + 1, score: 0, phase: 1 };
            return [...state, newUser]
        },
        addUserName(state, { payload: { id, name } }) {
            return state.map((item) => item.id === id ? { ...item, name } : item)
        },
        finishPhaseForUser(state, { payload }) {
            return state.map((item) => item.id === payload ? { ...item, finishedPhase: true } : item)
        },
        updatePhaseForNewRound(state) {
            return state.map((item) => item.finishedPhase ? { ...item, finishedPhase: false, phase: item.phase + 1 } : item)
        },
        updateScore(state, { payload: { id, score } }) {
            return state.map((item) => item.id === id ? { ...item, score: item.score + score } : item);
        },
        deleteUserCard(state, {payload}) {
            return state.filter((item) => item.id !== payload)
        }
    }
});

export default usersSlice.reducer;
export const { addUser, addUserName, finishPhaseForUser, updatePhaseForNewRound, updateScore, deleteUserCard } = usersSlice.actions