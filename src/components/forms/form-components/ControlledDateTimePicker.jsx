import React from "react";
import { Controller } from "react-hook-form";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const ControlledDateTimePicker = ({ name, label, control }) => {

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={null}
            rules={{ required: `${name} field is required` }}
            render={({
                field: { onChange, value },
                fieldState: { error },
                formState
            }) => (
                <>
                    <DateTimePicker
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

export default ControlledDateTimePicker;
