import * as React from 'react';
import Grid from '@mui/material/Grid2';
import { DevTool } from '@hookform/devtools';
import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ControlledSelect from './form-components/ControlledSelect';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ControlledOutlinedInput from './form-components/ControlledOutlinedInput';
import ControlledDateTimePicker from './form-components/ControlledDateTimePicker';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function BasicEventInfo({ control, errors }) {
  console.log("errors -> ", errors)
  return (
    <>
      <Grid container spacing={3}>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="first-name" required>
            Event name
          </FormLabel>
          <ControlledOutlinedInput
            name="eventName"
            placeholder="John"
            control={control}
          />
        {errors.eventName && <span style={{ color: "red", fontSize: "12px" }}>{errors.eventName.message}</span>}
        </FormGrid>
        <FormGrid size={{ xs: 12, md: 6 }}>
          <FormLabel htmlFor="event-type">Event Type</FormLabel>
          <ControlledSelect
            name="eventType"
            control={control}
            placeholder="Select Event Type"
            options={[
              { value: "conference", label: "Conference" },
              { value: "wedding", label: "Wedding" },
              { value: "party", label: "Party" },
              { value: "meetup", label: "Meetup" },
            ]}
          />
          {errors.eventType && <span style={{ color: "red", fontSize: "12px" }}>{errors.eventType.message}</span>}
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="tagline" required>
            Tagline
          </FormLabel>
          <ControlledOutlinedInput
            name="tagline"
            placeholder="tagline"
            control={control}
          />
          {errors.tagline && <span style={{ color: "red", fontSize: "12px" }}>{errors.tagline.message}</span>}
        </FormGrid>
        <FormGrid size={{ xs: 12 }}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <ControlledOutlinedInput
            name="description"
            placeholder="description"
            control={control}
          />
          {errors.description && <span style={{ color: "red", fontSize: "12px" }}>{errors.description.message}</span>}
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="city" required>
            City
          </FormLabel>
          <ControlledOutlinedInput
            name="city"
            placeholder="New York"
            control={control}
          />
          {errors.city && <span style={{ color: "red", fontSize: "12px" }}>{errors.city.message}</span>}
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="state" required>
            State
          </FormLabel>
          <ControlledOutlinedInput
            name="state"
            placeholder="NY"
            control={control}
          />
          {errors.state && <span style={{ color: "red", fontSize: "12px" }}>{errors.state.message}</span>}
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="zip" required>
            Zip / Postal code
          </FormLabel>
          <ControlledOutlinedInput
            name="zip"
            placeholder="12345"
            control={control}
          />
          {errors.zip && <span style={{ color: "red", fontSize: "12px" }}>{errors.zip.message}</span>}
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="country" required>
            Country
          </FormLabel>
          <ControlledOutlinedInput
            name="country"
            placeholder="United States"
            control={control}
          />
          {errors.country && <span style={{ color: "red", fontSize: "12px" }}>{errors.country.message}</span>}
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="country" required>
            Start time
          </FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
              <ControlledDateTimePicker control={control} name="startDate" label="start time" />
            </DemoContainer>
          </LocalizationProvider>
          {console.log(errors.startDate)}
          {errors.startDate && <span style={{ color: "red", fontSize: "12px" }}>{errors.startDate.message}</span>}
        </FormGrid>
        <FormGrid size={{ xs: 6 }}>
          <FormLabel htmlFor="country" required>
            End time
          </FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
              <ControlledDateTimePicker control={control} name="endDate" label="end time" />
            </DemoContainer>
          </LocalizationProvider>
          
          {errors.endDate && <span style={{ color: "red", fontSize: "12px" }}>{errors.endDate.message}</span>}
        </FormGrid>
      </Grid>
      <DevTool control={control} />
    </>
  );
}