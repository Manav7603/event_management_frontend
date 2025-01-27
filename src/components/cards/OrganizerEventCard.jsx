import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";

export default function OrganizerEventCard({ event }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        flexWrap: "wrap",
        width: "100%",
        overflow: "auto",
        resize: "horizontal",
        height: "100%",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 182 },
          height: 200,
          width: "100%",
          objectFit: "cover",
          flexShrink: 0,
        }}
        image={event.image}
        alt="Profile"
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: "600" }}>
          {event.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: "600" }}
        >
          {event.description}
        </Typography>
        <Paper
          elevation={0}
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            padding: 1.5,
            my: 1.5,
            display: "flex",
            gap: 2,
            "& > div": { flex: 1 },
          }}
        >
          <div>
            <Typography variant="caption" sx={{ fontWeight: "600" }}>
              Location
            </Typography>
            <Typography sx={{ fontWeight: "600" }}>{event.location}</Typography>
          </div>
          <div>
            <Typography variant="caption" sx={{ fontWeight: "600" }}>
              Participants
            </Typography>
            <Typography sx={{ fontWeight: "600" }}>
              {event.numberOfParticipants}
            </Typography>
          </div>
          <div>
            <Typography variant="caption" sx={{ fontWeight: "600" }}>
              Date
            </Typography>
            <Typography sx={{ fontWeight: "600" }}>{event.date}</Typography>
          </div>
        </Paper>
        <Box sx={{ display: "flex", gap: 1.5 }}>
          <Button variant="outlined" color="inherit" fullWidth>
            View Details
          </Button>
          <Button variant="contained" color="primary" fullWidth>
            {event.status === "completed" ? "Track Attendance" : "Manage Event"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
