import React, { useContext } from "react";
import { FormikContext } from "formik";

//components
import { TextField } from "@mui/material";

interface Props {
  fieldName: string;
  placeholder: string;
}

const CustomInput = ({ fieldName, placeholder }: Props) => {
  const { getFieldProps, errors, touched } = useContext(FormikContext);

  const isError = Boolean(touched[fieldName] && errors[fieldName]);

  return (
    <TextField
      {...getFieldProps(fieldName)}
      variant="standard"
      fullWidth
      placeholder={placeholder}
      error={isError}
      helperText={(isError && errors[fieldName]) as string}
      sx={{
        width: { xs: "100%", sm: "250px", md: "312px" },
        height: "80px",
      }}
    />
  );
};

export default CustomInput;
