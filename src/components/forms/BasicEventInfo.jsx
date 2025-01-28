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

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function BasicEventInfo() {

  const [eventType, setEventType] = React.useState("");

  const handleChange = (event) => {
    setEventType(event.target.value);
  };

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="first-name" required>
          Event name
        </FormLabel>
        <OutlinedInput
          id="first-name"
          name="first-name"
          type="name"
          placeholder="John"
          autoComplete="first name"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="event-type">Event Type</FormLabel>
        <Select
          labelId="event-type"
          id="event-type"
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
        <OutlinedInput
          id="tagline"
          name="tagline"
          type="tagline"
          placeholder="tagline"
          autoComplete="tagline"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="description">Description</FormLabel>
        <OutlinedInput
          id="description"
          name="description"
          type="description"
          placeholder="description"
          autoComplete="description"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="city"
          placeholder="New York"
          autoComplete="City"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="state" required>
          State
        </FormLabel>
        <OutlinedInput
          id="state"
          name="state"
          type="state"
          placeholder="NY"
          autoComplete="State"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="zip" required>
          Zip / Postal code
        </FormLabel>
        <OutlinedInput
          id="zip"
          name="zip"
          type="zip"
          placeholder="12345"
          autoComplete="shipping postal-code"
          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 6 }}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          type="country"
          placeholder="United States"
          autoComplete="shipping country"
          required
          size="small"
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
  );
}