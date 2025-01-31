import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basicEventInfo: {
        eventName: "",
        eventType: "",
        tagline: "",
        description: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        startDate: "",
        endDate: "",
    },
    ticketInfo: {
        eventMode: "",
        ticketType: "",
        ticketPrice: "",
        numberOfTickets: "",
        organizerName: "",
        organizerContactInfo: ""
    }
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setBasicFormInfo: (state, action) => {
            state.basicEventInfo = action.payload.basicEventInfo;
        },
        setTicketInfo: (state, action) => {
            state.ticketInfo = action.payload.ticketInfo;
        }
    }
});

export const { setBasicFormInfo, setTicketInfo } = formSlice.actions;
export default formSlice.reducer;
