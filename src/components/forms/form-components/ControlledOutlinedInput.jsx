import React from "react";
import { Controller } from "react-hook-form";
import validationRules from "../utils/validationRules";
import OutlinedInput from "@mui/material/OutlinedInput";

const ControlledOutlinedInput = ({ name, control, placeholder }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={validationRules[name]}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
        formState,
      }) => (
        <>
          <OutlinedInput
            placeholder={placeholder}
            error={!!error}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            size="small"
          />
        </>
      )}
    />
  );
};

export default ControlledOutlinedInput;
