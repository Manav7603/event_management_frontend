import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basicEventInfo: {
        firstName: "",
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
            console.log("Basic event info updated in redux -> ", state.basicEventInfo);
        },
        setTicketInfo: (state, action) => {
            state.ticketInfo = action.payload.ticketInfo;
            console.log("Ticket info updated in redux -> ",state.ticketInfo);
        }
    }
});

export const { setBasicFormInfo, setTicketInfo } = formSlice.actions;
export default formSlice.reducer;
