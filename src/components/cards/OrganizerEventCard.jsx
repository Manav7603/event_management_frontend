import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Paper
} from "@mui/material";
import Modal from '@mui/material/Modal';
import EventCard from "./EventCard";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function OrganizerEventCard({ event }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          width: { xs: "100%", sm: "100%", md: "100%" },
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
          <Button onClick={handleOpen} variant="outlined" color="inherit" fullWidth>
            View Details
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <EventCard />
            </Box>
          </Modal>
          <Button variant="contained" color="primary" fullWidth>
            {event.status === "completed" ? "Track Attendance" : "Manage Event"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
