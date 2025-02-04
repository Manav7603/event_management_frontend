import Events from "./Events";
import * as React from "react";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NewEventForm from "../forms/EventForm";
import Typography from "@mui/material/Typography";
import EventIcon from "@mui/icons-material/Event";
import { createTheme } from "@mui/material/styles";
import { useDemoRouter } from "@toolpad/core/internal";
import FeedbackIcon from "@mui/icons-material/Feedback";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import OrganizerParticipantsList from "./OrganizerParticipantsList";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import SignupPage from "../authentication/SignupPage";
import { useSelector } from "react-redux";
import LoginPage from "../authentication/LoginPage";

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

function DemoPageContent({ pathname, authType, router, isAuthenticated }: { pathname: string, authType: any, router: any, isAuthenticated: any }) {
  const protectedRoutes = [
    "/dashboard",
    "/events/all-events",
    "/events/past-events",
    "/events/upcoming-events",
    "/events/ongoing-events",
    "/participants",
    "/order/ticket-sales",
    "/order/refunds",
    "/order/invoices",
    "/create-event",
    "/feedback-&-surveys"
  ];

  if (!isAuthenticated && protectedRoutes.includes(pathname)) {
    router.navigate("/authentication");
    return null;  // Prevents rendering any protected content until authenticated
  }

  const renderContent = () => {
    switch (pathname) {
      case "/authentication":
        return authType === "signup" ? <SignupPage router={router} /> : <LoginPage router={router} />;
      case "/dashboard":
        return <Typography variant="h4">Welcome to Dashboard</Typography>;
      case "/events/all-events":
        return <Events type="all-events" />;
      case "/events/past-events":
        return <Events type="completed" />;
      case "/events/upcoming-events":
        return <Events type="upcoming" />;
      case "/events/ongoing-events":
        return <Events type="ongoing" />;
      case "/participants":
        return <Box sx={{ margin: '4rem' }}><OrganizerParticipantsList /></Box>;
      case "/order/ticket-sales":
        return <Typography variant="h4">Ticket Sales</Typography>;
      case "/order/refunds":
        return <Typography variant="h4">Refunds</Typography>;
      case "/order/invoices":
        return <Typography variant="h4">Invoices</Typography>;
      case "/create-event":
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><NewEventForm /></Box>;
      case "/feedback-&-surveys":
        return <Typography variant="h4">Feedback & Surveys</Typography>;
      default:
        return <Typography variant="h4">Page Not Found</Typography>;
    }
  };

  return <Box sx={{ p: 2 }}>{renderContent()}</Box>;
}


export default function OrganizerDashboard() {

  const router = useDemoRouter("/authentication");
  const authType = useSelector((state: any) => state.auth.authType)
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)
  // router.navigate("/events/ongoing-events")

  React.useEffect(() => {
    window.history.pushState({}, "", router.pathname);
  }, [router.pathname]);
  return (
    <>
      <CssBaseline />
      <AppProvider
        branding={{ title: "", homeUrl: "https://event-management-frontend-lemon.vercel.app/authentication", logo: <img src='assets/logo-name.png' /> }}
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
      >
        <DashboardLayout>
          <DemoPageContent isAuthenticated={isAuthenticated} router={router} authType={authType} pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider >
    </>
  );
}