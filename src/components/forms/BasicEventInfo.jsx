import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Select from "@mui/material/Select";
import { styled } from '@mui/material/styles';
import MenuItem from "@mui/material/MenuItem";
import { useForm, FormProvider } from 'react-hook-form';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import OutlinedInputComponent from './form-components/OutlinedInputComponent';
import { DevTool } from '@hookform/devtools';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function BasicEventInfo() {

  const [eventType, setEventType] = React.useState("");
  const {methods, control} = useForm();

  const handleChange = (event) => {
    setEventType(event.target.value);
  };

  return (
    <FormProvider {...methods} >
      <Grid container spacing={3}>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="first-name" required>
            Event name
          </FormLabel>
          <OutlinedInputComponent
            name="first-name"
            placeholder="John"
            control={control}
          />
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="event-type">Event Type</FormLabel>
          <Select
            labelId="event-type"
            value={eventType}
            onChange={handleChange}
            displayEmpty
            placeholder="Select Event Type"
            size='small'
          >
            <MenuItem value="conference">Conference</MenuItem>
            <MenuItem value="wedding">Wedding</MenuItem>
            <MenuItem value="party">Party</MenuItem>
            <MenuItem value="meetup">Meetup</MenuItem>
          </Select>
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="tagline" required>
            Tagline
          </FormLabel>
          <OutlinedInputComponent
            name="tagline"
            placeholder="tagline"
            control={control}
          />
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <OutlinedInputComponent
            name="description"
            placeholder="description"
            control={control}
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="city" required>
            City
          </FormLabel>
          <OutlinedInputComponent
            name="city"
            placeholder="New York"
            control={control}
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="state" required>
            State
          </FormLabel>
          <OutlinedInputComponent
            name="state"
            placeholder="NY"
            control={control}
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="zip" required>
            Zip / Postal code
          </FormLabel>
          <OutlinedInputComponent
            name="zip"
            placeholder="12345"
            control={control}
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="country" required>
            Country
          </FormLabel>
          <OutlinedInputComponent
            name="country"
            placeholder="United States"
            control={control}
          />
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="country" required>
            Start time
          </FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
              <DateTimePicker label="start time" />
            </DemoContainer>
          </LocalizationProvider>
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="country" required>
            End time
          </FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
              <DateTimePicker label="end time" />
            </DemoContainer>
          </LocalizationProvider>
        </FormGrid>
      </Grid>
      <DevTool control={control} />
    </FormProvider>
  );
}