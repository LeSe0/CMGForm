import React from "react";
import { useFormikContext } from "formik";

//components
import { TextField } from "@mui/material";

interface Props {
  fieldName: string;
  placeholder: string;
}

const CustomInput = ({ fieldName, placeholder }: Props) => {
  const { getFieldProps } = useFormikContext();

  return (
    <TextField
      {...getFieldProps(fieldName)}
      variant="standard"
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
