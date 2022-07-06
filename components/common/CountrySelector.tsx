// React
import React, { useState, useMemo, useEffect } from "react";

// Data
import { countries } from "providers/ConstantData";

// hooks/hocs
import { usePropagateRef } from "providers/hooks";
import { useField } from "formik";

// types
import { PerformantTextFieldProps } from "providers/types";

// Components
import { Select, SelectChangeEvent } from "@mui/material";

function CountrySelector(props: PerformantTextFieldProps) {
  const [field, meta] = useField(props.name);
  const error = !!meta.error && meta.touched;
  const [fieldValue, setFieldValue] = useState<string>(field.value);

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

  const onChange = (evt: SelectChangeEvent<string>) => {
    setFieldValue(evt.target.value);
    props?.setFieldValue ? props?.setFieldValue(evt.target.value) : "";
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
    <Select
      native
      fullWidth
      error={error}
      variant="standard"
      onChange={onChange}
      onBlur={onBlur}
      ref={props.ref}
      sx={{
        fontSize: { xs: "13px", sm: "15px", md: "18px" }
      }}
    >
      {countries.map(el => {
        return <option value={el.value}>{el.label}</option>;
      })}
    </Select>
  );
}

export default CountrySelector;
