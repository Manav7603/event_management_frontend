import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from '@mui/material/styles';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function TicketInfo() {

    const [eventType, setEventType] = React.useState("");
    const [ticketType, setTicketType] = useState("");

    const handleChange = (event) => {
        setEventType(event.target.value);
    };

    return (
        <Grid container spacing={3}>
            <FormGrid size={{ xs: 12, md: 6 }}>
                <FormLabel htmlFor="event-mode">Event Mode</FormLabel>
                <Select
                    labelId="event-mode"
                    id="event-mode"
                    value={eventType}
                    onChange={handleChange}
                    displayEmpty
                    placeholder="Select Event Mode"
                    size="small"
                >
                    <MenuItem value="online">Online</MenuItem>
                    <MenuItem value="offline">Offline</MenuItem>
                    <MenuItem value="hybrid">Hybrid</MenuItem>
                </Select>
            </FormGrid>

            {/* Ticketing Options Section */}
            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="ticket-type" required>
                    Event Type
                </FormLabel>
                <Select
                    labelId="ticket-type"
                    id="ticket-type"
                    value={ticketType}
                    onChange={(e) => { setTicketType(e.target.value) }}
                    displayEmpty
                    size="small"
                >
                    <MenuItem value="free">Free</MenuItem>
                    <MenuItem value="paid">Paid</MenuItem>
                </Select>
            </FormGrid>

            {ticketType === "paid" && (
                <FormGrid size={{ xs: 6 }}>
                    <FormLabel htmlFor="ticket-price" required>
                        Ticket Price
                    </FormLabel>
                    <OutlinedInput
                        id="ticket-price"
                        name="ticket-price"
                        type="number"
                        placeholder="Price"
                        required
                        size="small"
                    />
                </FormGrid>
            )}

            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="number-of-tickets" required>
                    Number of Tickets
                </FormLabel>
                <OutlinedInput
                    id="number-of-tickets"
                    name="number-of-tickets"
                    type="number"
                    placeholder="Max tickets"
                    required
                    size="small"
                />
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="organizer-name" required>
                    Organizer Name
                </FormLabel>
                <OutlinedInput
                    id="organizer-name"
                    name="organizer-name"
                    type="text"
                    placeholder="Organizer Name"
                    required
                    size="small"
                />
            </FormGrid>

            <FormGrid size={{ xs: 6 }}>
                <FormLabel htmlFor="organizer-contact-info" required>
                    Organizer Contact Info
                </FormLabel>
                <OutlinedInput
                    id="organizer-contact-info"
                    name="organizer-contact-info"
                    type="text"
                    placeholder="Phone & Email"
                    required
                    size="small"
                />
            </FormGrid>
        </Grid>

    );
}