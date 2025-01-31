import dayjs from "dayjs";

const validationRules = {
  eventName: {
    required: "Event name field is required",
    minLength: {
      value: 3,
      message: "Event name must be at least 3 characters long",
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Event name must contain only alphabets",
    },
  },
  tagline: {
    required: "Tagline field is required",
    minLength: {
      value: 5,
      message: "Tagline must be at least 5 characters long",
    },
    maxLength: {
      value: 100,
      message: "Tagline must not exceed 100 characters",
    },
  },
  description: {
    required: "Description field is required",
    minLength: {
      value: 10,
      message: "Description must be at least 10 characters long",
    },
  },
  eventType: {
    required: "Event type is required",
  },
  city: {
    required: "City field is required",
    minLength: {
      value: 2,
      message: "City must be at least 2 characters long",
    },
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "City must contain only alphabets",
    },
  },
  state: {
    required: "State field is required",
    minLength: {
      value: 2,
      message: "State must be at least 2 characters long",
    },
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "State must contain only alphabets",
    },
  },
  zip: {
    required: "Postal Code field is required",
    pattern: {
      value: /^[0-9]{5,6}$/,
      message: "Postal Code must be a valid 5 or 6-digit number",
    },
  },
  country: {
    required: "Country field is required",
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "Country must contain only alphabets",
    },
  },
  startDate: {
    required: "Start time is required",
    validate: (value) => {
      if (!value) return "Start time is required";
      return dayjs(value).isAfter(dayjs()) || "Start time must be in the future";
    },
  },

  endDate: {
    required: "End time is required",
    validate: (value, formValues) =>
      new Date(value) > new Date(formValues.startTime) ||
      "End time must be after start time",
  },

  ticketPrice: {
    required: "Ticket price is required",
    pattern: {
      value: /^\d+(\.\d{1,2})?$/,
      message: "Ticket price must be a valid number with up to two decimal places",
    },
    validate: (value) =>
      value > 0 || "Ticket price must be greater than zero",
  },

  numberOfTickets: {
    required: "Number of tickets is required",
    pattern: {
      value: /^[0-9]+$/,
      message: "Number of tickets must be a valid number",
    },
    validate: (value) =>
      value > 0 || "Number of tickets must be greater than zero",
  },

  organizerName: {
    required: "Organizer name is required",
    minLength: {
      value: 3,
      message: "Organizer name must be at least 3 characters long",
    },
    pattern: {
      value: /^[A-Za-z\s]+$/,
      message: "Organizer name must contain only alphabets and spaces",
    },
  },

  organizerContactInfo: {
    required: "Organizer contact info is required",
    pattern: {
      value: /^[0-9]{10}$/,
      message: "Organizer contact info must be a valid 10-digit phone number",
    },
  },
};

export default validationRules;
