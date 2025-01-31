import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import ControlledSelect from './form-components/ControlledSelect';
import ControlledOutlinedInput from './form-components/ControlledOutlinedInput';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function TicketInfo({ control, errors }) {

    const [ticketType, setTicketType] = useState("");

    return (
        <Grid container spacing={3}>
            <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="eventMode">Event Mode</FormLabel>
                <ControlledSelect
                    name="eventMode"
                    control={control}
                    placeholder="Select Event Mode"
                    options={[
                        { value: "online", label: "Online" },
                        { value: "offline", label: "Offline" },
                        { value: "hybrid", label: "Hybrid" }
                    ]}
                />
                {errors.eventMode && <span style={{ color: "red", fontSize: "12px" }}>{errors.eventMode.message}</span>}
            </FormGrid>

            {/* Ticketing Options Section */}
            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="ticketType" required>
                    Event Type
                </FormLabel>
                <ControlledSelect
                    name="ticketType"
                    control={control}
                    placeholder="Select Entry Type"
                    onChange={(value) => { console.log(value); setTicketType(value) }}
                    options={[
                        { value: "free", label: "Free" },
                        { value: "paid", label: "Paid" }
                    ]}
                />
                {errors.ticketType && <span style={{ color: "red", fontSize: "12px" }}>{errors.ticketType.message}</span>}
            </FormGrid>

            {ticketType === "paid" && (
                <FormGrid size={{ xs: 6 }}>
                    <FormLabel htmlFor="ticketPrice" required>
                        Ticket Price
                    </FormLabel>
                    <ControlledOutlinedInput
                        name="ticketPrice"
                        control={control}
                        placeholder="Price"
                    />
                    {errors.ticketPrice && <span style={{ color: "red", fontSize: "12px" }}>{errors.ticketPrice.message}</span>}
                </FormGrid>
            )}

            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="numberOfTickets" required>
                    Number of Tickets
                </FormLabel>
                <ControlledOutlinedInput
                    name="numberOfTickets"
                    control={control}
                    placeholder="Max tickets"
                />
                {errors.numberOfTickets && <span style={{ color: "red", fontSize: "12px" }}>{errors.numberOfTickets.message}</span>}
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="organizerName" required>
                    Organizer Name
                </FormLabel>
                <ControlledOutlinedInput
                    name="organizerName"
                    control={control}
                    placeholder="Organizer Name"
                />
                {errors.organizerName && <span style={{ color: "red", fontSize: "12px" }}>{errors.organizerName.message}</span>}
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="organizerContactInfo" required>
                    Organizer Contact Info
                </FormLabel>
                <ControlledOutlinedInput
                    name="organizerContactInfo"
                    control={control}
                    placeholder="Phone & Email"
                />
                {errors.organizerContactInfo && <span style={{ color: "red", fontSize: "12px" }}>{errors.organizerContactInfo.message}</span>}
            </FormGrid>
        </Grid>
    );
}
