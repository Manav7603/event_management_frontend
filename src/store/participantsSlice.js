import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    participants: []
}

const participantsSlice = createSlice({
    name: 'participants',
    initialState,
    reducers: {
        setParticipants: (state, action) => {
            state.participants = action.payload.participants;
            console.log("Events state updated in redux");
        }
    }
})

export const { setParticipants } = participantsSlice.actions;
export default participantsSlice.reducer;
