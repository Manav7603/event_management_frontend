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
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import OrganizerEventCard from "../cards/OrganizerEventCard";
import Events from "./Events";
import NewEventForm from "../forms/NewEventForm";
import Modal from "@mui/material/Modal";
import OrganizerParticipantsList from "./OrganizerParticipantsList";
import SignupForm from "../SignUp/SignupForm";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
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
    segment: "participants",
    title: "Participants",
    icon: <PeopleAltIcon />,
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
  const renderContent = () => {
    console.log("Pathname -> ", pathname)
    switch (pathname) {
      case "/dashboard":
        return <Typography variant="h4">Welcome to the Dashboard</Typography>;
      case "/events/all-events":
        return <Events type="all-events" />;
      case "/events/past-events":
        console.log("changed to past")
        return <Events type="completed" />;
      case "/events/upcoming-events":
        return <Events type="upcoming" />;
      case "/events/ongoing-events":
        return <Events type="ongoing" />;
      case "/participants":
        return <Box sx={{ margin: '4rem' }} ><OrganizerParticipantsList /></Box>
      case "/order/ticket-sales":
        return <Typography variant="h4">Ticket Sales</Typography>;
      case "/order/refunds":
        return <Typography variant="h4">Refunds</Typography>;
      case "/order/invoices":
        return <Typography variant="h4">Invoices</Typography>;
      case "/create-event":
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} ><NewEventForm /></Box>;
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
