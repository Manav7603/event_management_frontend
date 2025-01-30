import React from "react";
import { useSelector } from "react-redux";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Card, CardContent, Typography, Stack, Chip, Divider } from "@mui/material";

const EventCard = ({ control }) => {
    const eventData = useSelector(state => state.form.basicEventInfo);
    const ticketData = useSelector(state => state.form.ticketInfo);
    const event = { ...eventData, ...ticketData };

    return (
        <Card sx={{ maxWidth: 500, m: 2, boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {event.firstName} - {event.eventType}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    "{event.tagline}"
                </Typography>
                <Divider sx={{ my: 1 }} />

                <Typography variant="body1" sx={{ mb: 2 }}>
                    {event.description}
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                    <LocationOnIcon color="primary" />
                    <Typography>
                        {event.city}, {event.state}, {event.zip}, {event.country}
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <EventIcon color="secondary" />
                    <Typography>
                        {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <Chip label={event.eventMode} color="success" variant="outlined" />
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <MonetizationOnIcon color="action" />
                    <Typography>
                        {event.ticketType} - {event.ticketPrice} ({event.numberOfTickets} tickets available)
                    </Typography>
                </Stack>

                <Divider sx={{ my: 2 }} />
                <Stack direction="row" spacing={1} alignItems="center">
                    <PersonIcon color="primary" />
                    <Typography>
                        Organized by: {event.organizerName} ({event.organizerContactInfo})
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default EventCard;
