import React from "react";
import { Card, CardContent, Typography, Grid, Chip, Divider } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";

const EventCard = ({control}) => {

    const eventData = useSelector(state => state.form.basicEventInfo);
    const ticketData = useSelector(state => state.form.ticketInfo)

    
    const event = {...eventData, ...ticketData};
   

    // const event = {
    //     firstName: "Tech Conference 2025",
    //     eventType: "Technology",
    //     tagline: "Innovate, Create, Elevate",
    //     description: "Join us for an exciting tech conference featuring industry leaders, workshops, and networking opportunities.",
    //     city: "San Francisco",
    //     state: "California",
    //     zip: "94103",
    //     country: "USA",
    //     startDate: "2025-06-15",
    //     endDate: "2025-06-17",
    //     eventMode: "Hybrid",
    //     ticketType: "Paid",
    //     ticketPrice: "$99",
    //     numberOfTickets: "500",
    //     organizerName: "TechWorld Inc.",
    //     organizerContactInfo: "contact@techworld.com",
    // }


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

                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <LocationOnIcon color="primary" />
                    </Grid>
                    <Grid item>
                        <Typography>
                            {event.city}, {event.state}, {event.zip}, {event.country}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <Grid item>
                        <EventIcon color="secondary" />
                    </Grid>
                    <Grid item>
                        <Typography>
                            {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <Grid item>
                        <Chip label={event.eventMode} color="success" variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={1} alignItems="center" sx={{ mt: 1 }}>
                    <Grid item>
                        <MonetizationOnIcon color="action" />
                    </Grid>
                    <Grid item>
                        <Typography>
                            {event.ticketType} - {event.ticketPrice} ({event.numberOfTickets} tickets available)
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <PersonIcon color="primary" />
                    </Grid>
                    <Grid item>
                        <Typography>
                            Organized by: {event.organizerName} ({event.organizerContactInfo})
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default EventCard;
