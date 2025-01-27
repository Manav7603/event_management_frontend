import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import FeedbackIcon from "@mui/icons-material/Feedback";
import EventIcon from "@mui/icons-material/Event";
import AddIcon from "@mui/icons-material/Add";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import OrganizerEventCard from "../cards/OrganizerEventCard";
import events from "./events"; // Assuming you already have a list of events imported
import InfiniteScroll from "react-infinite-scroll-component";
import NewEventForm from "../forms/NewEventForm";
import Modal from "@mui/material/Modal";

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

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "events",
    title: "Events",
    icon: <EventIcon />,
    children: [
      {
        segment: "all-events",
        title: "All Events",
      },
      {
        segment: "past-events",
        title: "Past Events",
      },
      {
        segment: "upcoming-events",
        title: "Up-coming Events",
      },
      {
        segment: "ongoing-events",
        title: "On-going Events",
      },
    ],
  },
  {
    segment: "order",
    title: "Orders",
    icon: <ShoppingCartIcon />,
    children: [
      {
        segment: "ticket-sales",
        title: "Ticket Sales",
      },
      {
        segment: "refunds",
        title: "Refunds",
      },
      {
        segment: "invoices",
        title: "Invoices",
      },
    ],
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Event Managment",
  },
  {
    segment: "create-event",
    title: "Create Event",
    icon: <AddIcon />,
  },
  {
    segment: "feedback-&-surveys",
    title: "Feedback & Surveys",
    icon: <FeedbackIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  const [visibleEvents, setVisibleEvents] = React.useState(events.slice(0, 9)); // Load the first 9 events initially
  const [hasMore, setHasMore] = React.useState(true);
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const loadMoreEvents = () => {
    // Check if we've reached the end of the events list
    if (visibleEvents.length >= events.length) {
      setHasMore(false);
      return;
    }

    // Simulate an async operation like fetching more events
    setTimeout(() => {
      setVisibleEvents((prev) => [
        ...prev,
        ...events.slice(prev.length, prev.length + 9),
      ]);
    }, 1500); // Delay to simulate async fetching
  };

  const renderContent = () => {
    switch (pathname) {
      case "/dashboard":
        return <Typography variant="h4">Welcome to the Dashboard</Typography>;
      case "/events/all-events":
        return (
          <InfiniteScroll
            dataLength={visibleEvents.length}
            next={loadMoreEvents}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more events to display</p>}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(3, 1fr)",
                },
                gap: 2,
                p: 2,
              }}
            >
              {visibleEvents.map((event) => (
                <OrganizerEventCard key={event.id} event={event} />
              ))}
            </Box>
          </InfiniteScroll>
        );
      case "/events/past-events":
        return <Typography variant="h4">Past Events</Typography>;
      case "/events/upcoming-events":
        return <Typography variant="h4">Upcoming Events</Typography>;
      case "/events/ongoing-events":
        return <Typography variant="h4">Ongoing Events</Typography>;
      case "/order/ticket-sales":
        return <Typography variant="h4">Ticket Sales</Typography>;
      case "/order/refunds":
        return <Typography variant="h4">Refunds</Typography>;
      case "/order/invoices":
        return <Typography variant="h4">Invoices</Typography>;
      case "/create-event":
        return (
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>/
              <NewEventForm />
            </Box>
            </Modal>
          </div>
        );
      case "/feedback-&-surveys":
        return <Typography variant="h4">Feedback & Surveys</Typography>;
      default:
        return <Typography variant="h4">Page Not Found</Typography>;
    }
  };

  return <Box sx={{ p: 2 }}>{renderContent()}</Box>;
}

export default function OrganizerDashboard() {
  const router = useDemoRouter("/dashboard");

  return (
    <>
      <CssBaseline />
      <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
        <DashboardLayout>
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </>
  );
}
