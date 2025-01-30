import React from "react";
import { Controller } from "react-hook-form";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const ControlledDateTimePicker = ({ name, label, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      rules={{
        required: "Start time is required",
        validate: (value) => {
            console.log("hellow otld")
          if (!value) return "Start time is required";
          return (
            dayjs(value).isAfter(dayjs()) || "Start time must be in the future"
          );
        },
      }}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
        formState,
      }) => (
        <>
          <DateTimePicker
            label={label}
            value={value}
            error={!!error}
            onChange={onChange}
            onBlur={onBlur}
            size="small"
          />
        </>
      )}
    />
  );
};

export default ControlledDateTimePicker;
