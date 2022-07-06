// React
import React, { useEffect, useState } from "react";

// hooks/hocs
import { usePropagateRef } from "providers/hooks";
import { useField } from "formik";

// types
import { PerformantTextFieldProps } from "providers/types";

// Components
import PhoneInput from "react-phone-input-2";
import { Box } from "@mui/material";
import { ErrorMessage } from "components/common/CustomTypography";

export default function CustomPhoneSelector(props: PerformantTextFieldProps) {
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

  const onChange = (value: string) => {
    setFieldValue(value);
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
    <Box
      sx={{
        "& .react-tel-input div:before , .form-control": {
          background: "none !important",
          border: "none !important"
        },
        "& .react-tel-input .form-control": {
          borderRadius: "unset",
          borderBottom: error ? "2px solid #d32f2f !important" : "1px solid !important",
          width: "100%",
          "&:focus": {
            boxShadow: "none"
          }
        }
      }}
    >
      <PhoneInput
        country={props?.country?.toLowerCase()}
        enableSearch={true}
        value={fieldValue}
        onChange={onChange}
        onBlur={onBlur}
        inputProps={{
          name: props.name
        }}
        specialLabel=""
      />
      <ErrorMessage meta={meta} />
    </Box>
  );
}
