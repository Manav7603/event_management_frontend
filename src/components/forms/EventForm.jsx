import * as React from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TicketInfo from './TicketInfoForm';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import EventCard from '../cards/EventCard';
import Stepper from '@mui/material/Stepper';
import BasicEventInfo from './EventInfoForm';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import CardContent from '@mui/material/CardContent';
import { useForm, FormProvider } from 'react-hook-form';
import { setBasicFormInfo, setTicketInfo } from '../../store/slices/formSlice';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const steps = ['Event Information', 'Ticket Information', 'Review Event'];
function getStepContent(step, control) {
  switch (step) {
    case 0:
      return <BasicEventInfo control={control} />;
    case 1:
      return <TicketInfo control={control} />;
    case 2:
      return <EventCard control={control} />;
    default:
      throw new Error('Unknown step');
  }
}
export default function NewEventForm(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const { methods, control, getValues } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNext = () => {
    if (activeStep === 0) {
      const data = getValues();
      data.startDate = data.startDate.$d.toString();;
      data.endDate = data.endDate.$d.toString();;
      console.log(data)
      dispatch(
        setBasicFormInfo(
          { basicEventInfo: data }
        )
      )
    } else if (activeStep === 1) {
      const { eventMode, numberOfTickets, organizerContactInfo, organizerName, ticketType, ticketPrice } = getValues();
      const data = { eventMode, ticketType, numberOfTickets, organizerContactInfo, organizerName, ticketPrice };
      console.log("second", data)
      dispatch(
        setTicketInfo(
          { ticketInfo: data }
        )
      )
    }
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <>
      <CssBaseline enableColorScheme />
      <FormProvider {...methods} >
        <Grid
          container
          size={{ sm: 12, md: 7, lg: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            position: 'relative',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'start',
            pt: { xs: 0, sm: 16 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
            height: '100%',
            maxHeight: '100%',
            overflow: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { sm: 'space-between', md: 'flex-end' },
              alignItems: 'center',
              width: '100%',
              maxWidth: { sm: '100%', md: 600 }
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexGrow: 1,
              }}
            >
              <Stepper
                id="desktop-stepper"
                activeStep={activeStep}
                sx={{ width: '100%', height: 40 }}
              >
                {steps.map((label) => (
                  <Step
                    sx={{ ':first-child': { pl: 0 }, ':last-child': { pr: 0 } }}
                    key={label}
                  >
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
          <Card sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
            <CardContent
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Typography variant="subtitle2" gutterBottom>
                  Selected products
                </Typography>
                <Typography variant="body1">
                  {activeStep >= 2 ? '$144.97' : '$134.98'}
                </Typography>
              </div>

            </CardContent>
          </Card>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: { sm: '100%', md: 600 },
              maxHeight: '720px',
              gap: { xs: 5, md: 'none' },
            }}
          >
            <Stepper
              id="mobile-stepper"
              activeStep={activeStep}
              alternativeLabel
              sx={{ display: { sm: 'flex', md: 'none' } }}
            >
              {steps.map((label) => (
                <Step
                  sx={{
                    ':first-child': { pl: 0 },
                    ':last-child': { pr: 0 },
                    '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                  }}
                  key={label}
                >
                  <StepLabel
                    sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Stack spacing={2} useFlexGap>
                <Typography variant="h1">
                  <img src="src/assets/success-animation.gif" alt="Success Animation" />
                </Typography>

                <Typography variant="h5">Event Created Successfully!</Typography>
                <Button
                  variant="contained"
                  sx={{ alignSelf: 'start', width: { xs: '100%', sm: 'auto' } }}
                  onClick={() => navigate('/organizer-dashboard')}
                >
                  Go to Dashboard
                </Button>
              </Stack>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, control)}
                <Box
                  sx={[
                    {
                      display: 'flex',
                      flexDirection: { xs: 'column-reverse', sm: 'row' },
                      alignItems: 'end',
                      flexGrow: 1,
                      gap: 1,
                      pb: { xs: 12, sm: 0 },
                      mt: { xs: 2, sm: 0 },
                      mb: '60px',
                    },
                    activeStep !== 0
                      ? { justifyContent: 'space-between' }
                      : { justifyContent: 'flex-end' },
                  ]}
                >
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="text"
                      sx={{ display: { xs: 'none', sm: 'flex' } }}
                    >
                      Previous
                    </Button>
                  )}
                  {activeStep !== 0 && (
                    <Button
                      startIcon={<ChevronLeftRoundedIcon />}
                      onClick={handleBack}
                      variant="outlined"
                      fullWidth
                      sx={{ display: { xs: 'flex', sm: 'none' } }}
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    endIcon={<ChevronRightRoundedIcon />}
                    onClick={handleNext}
                    sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </FormProvider>
    </>
  );
}