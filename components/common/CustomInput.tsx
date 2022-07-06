// React
import React, { memo, useEffect, useState } from "react";

// Hooks/HOCS
import { usePropagateRef } from "./usePropogateRef";
import { useField } from "formik";

// Components
import { TextFieldProps, TextField } from "@mui/material";

export type PerformantTextFieldProps = Omit<TextFieldProps, "name"> & {
  name: string;
  placeholder: string;
};

export const CustomInput: React.FC<PerformantTextFieldProps> = memo(props => {
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
    <TextField
      variant="standard"
      fullWidth
      error={error}
      helperText={meta.touched && meta.error}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
      sx={{
        height: "80px"
      }}
    />
  );
});
