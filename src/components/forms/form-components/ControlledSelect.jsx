import React from "react";
import { Controller, useController } from "react-hook-form";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

const ControlledSelect = ({ name, control, options, onChange, placeholder, size = "small" }) => {

    const {
        field: { value, onChange: fieldOnChange },
      } = useController({ name, control });

    const handleChange = (e) => {
        fieldOnChange(e);
        if (onChange) {
          onChange(e.target.value);
        }
      };

    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            rules={{ required: `${name} field is required` }}
            render={({
                field: { onChange, value },
                fieldState: { error }
            }) => (
                <FormControl
                    size={size}
                    error={!!error}
                    fullWidth
                >
                    <Select
                        value={value}
                        onChange={onChange}
                        displayEmpty
                    >
                        <MenuItem value="" disabled>
                            {placeholder}
                        </MenuItem>
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                    {error && <FormHelperText>{error.message}</FormHelperText>}
                </FormControl>
            )}
        />
    );
};

export default ControlledSelect;
