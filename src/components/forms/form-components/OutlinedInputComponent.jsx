import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Controller, useForm, useFormContext } from "react-hook-form";

const OutlinedInputComponent = ({ name, control, placeholder }) => {

    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            rules={{ required: `${name} field is required` }}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState
            }) => (
                <>
                    <OutlinedInput
                        placeholder={placeholder}
                        error={!!error}
                        onChange={onChange}
                        value={value}
                        size="small"
                    />
                    {error && <span style={{ color: "red", fontSize: "12px" }}>{error.message}</span>}
                </>
            )}
        />
    )
};

export default OutlinedInputComponent;
