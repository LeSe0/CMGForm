// React
import React, { useEffect, useState } from "react";

// Hooks/HOCS
import { usePropagateRef } from "providers/hooks";
import { useField } from "formik";

// types
import { PerformantTextFieldProps } from "providers/types";

// Components
import { Box, TextField } from "@mui/material";
import { ErrorMessage } from "./CustomTypography";

export const CustomInput: React.FC<PerformantTextFieldProps> = props => {
  const [field, meta] = useField(props.name);
  const error = !!meta.error && meta.touched;
  const [fieldValue, setFieldValue] = useState<string | number>(field.value);

  usePropagateRef({
    setFieldValue,
    name: props.name,
    value: field.value
  });

  useEffect(() => {
    if (meta.touched) {
      return;
    }
    if (field.value !== fieldValue) {
      setFieldValue(field.value);
    }
  }, [field.value]);

  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(evt.target.value);
  };

  const onBlur = (evt: React.FocusEvent<HTMLInputElement>) => {
    const val = evt.target.value || "";
    window.setTimeout(() => {
      field.onChange({
        target: {
          name: props.name,
          value: props.type === "number" ? parseInt(val, 10) : val
        }
      });
    }, 0);
  };

  return (
    <Box>
      <TextField
        variant="standard"
        fullWidth
        error={error}
        sx={{
          "& input": {
            minHeight: "25px"
          }
        }}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <ErrorMessage meta={meta} />
    </Box>
  );
};
